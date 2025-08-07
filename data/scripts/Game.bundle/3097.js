Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./57.js");
var u = require("./16.js");
var d = require("./118.js");
var p = require("./26.js");
var h = require("./67.js");
var g = require("./19.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./52.js");
var f = require("./40.js");
var O = require("./8.js");
var E = createjs.Point;
var y = function (e) {
  function RelicUpgradeDialogPayment(t) {
    var i = this;
    i._onBuyButtonClicked = new c.Signal(Boolean);
    i._isWaitingForServer = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(RelicUpgradeDialogPayment, e);
  RelicUpgradeDialogPayment.prototype.init = function () {
    O.ButtonHelper.initButtons([this.disp.mc_normal.btn_buy, this.disp.mc_premium.btn_buy], L.ClickFeedbackButtonBackground);
    v.CastleComponent.textFieldManager.registerTextField(this.disp.mc_normal.btn_buy.txt_text, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("standard"))).autoFitToBounds = true;
    v.CastleComponent.textFieldManager.registerTextField(this.disp.mc_premium.btn_buy.txt_text, new s.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("premium"))).autoFitToBounds = true;
    v.CastleComponent.textFieldManager.registerTextField(this.disp.mc_premium.mc_chance.txt_text, new r.LocalizedTextVO("value_percentage", [100])).autoFitToBounds = true;
    this.disp.mc_normal.mc_chance.toolTipText = "dialog_relicEnchanter_details_chanceCounter_standard_tooltip";
    this.disp.mc_premium.mc_chance.toolTipText = "dialog_relicEnchanter_details_chanceCounter_premium_tooltip";
    this.disp.mc_normal.mc_chance.mouseChildren = false;
    this.disp.mc_premium.mc_chance.mouseChildren = false;
  };
  RelicUpgradeDialogPayment.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    _.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onSpecialEventChanged));
    _.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChanged));
    v.CastleComponent.controller.addEventListener(d.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, this.bindFunction(this.onRelicUpgradeReceived));
  };
  RelicUpgradeDialogPayment.prototype.removeEventListener = function () {
    _.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onSpecialEventChanged));
    _.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventChanged));
    v.CastleComponent.controller.removeEventListener(d.CastleEquipmentEvent.RELIC_UPGRADE_RECEIVED, this.bindFunction(this.onRelicUpgradeReceived));
    this._isWaitingForServer = false;
    e.prototype.removeEventListener.call(this);
  };
  RelicUpgradeDialogPayment.prototype.updateWithNewVO = function (e, t) {
    this._relicVO = e;
    this._equipType = t;
    this.update();
  };
  RelicUpgradeDialogPayment.prototype.update = function () {
    var e = this.getCurrentEnchantmentLevel();
    var t = l.int(_.CastleModel.equipData.relicXml.maxRelicEnchanterLevel);
    this._canUpgrade = !!this.relicVO && e < t;
    this._canUpgradeWithPremium = !!this.relicVO && e > 0;
    this.destroyCollectableRenderList();
    if (this._canUpgrade) {
      var i = _.CastleModel.equipData.relicXml.getRelicEnchanter(e + 1);
      v.CastleComponent.textFieldManager.registerTextField(this.disp.mc_normal.mc_chance.txt_text, new r.LocalizedTextVO("value_percentage", [i.chance])).autoFitToBounds = true;
      this.setCurrencies(this.disp.mc_normal, this.getCosts(false, i));
      this.setCurrencies(this.disp.mc_premium, this.getCosts(true, this._canUpgradeWithPremium ? i : null));
    } else {
      v.CastleComponent.textFieldManager.registerTextField(this.disp.mc_normal.mc_chance.txt_text, new s.TextVO("-")).autoFitToBounds = true;
      this.setCurrencies(this.disp.mc_normal, this.getCosts(false));
      this.setCurrencies(this.disp.mc_premium, this.getCosts(true));
    }
    var n = "";
    if (this.relicVO) {
      if (e >= t) {
        n = "dialog_relicEnchanter_details_maxEquipment_tooltip";
      } else if (!this._canUpgradeWithPremium) {
        n = "dialog_relicEnchanter_details_firstEnchanted_norubin_tooltip";
      }
    } else {
      n = "dialog_relicEnchanter_details_selectEquipment_tooltip";
    }
    this.disp.mc_normal.btn_buy.toolTipText = n;
    this.disp.mc_premium.btn_buy.toolTipText = n;
    this.updateSale();
    this.enableBuyButtons();
  };
  RelicUpgradeDialogPayment.prototype.getCosts = function (e, t = null) {
    var i = new I.CollectableList();
    i.addItem(D.CollectableHelper.createVO(b.CollectableEnum.GENERIC_CURRENCY, t ? t.costRelicFragments : -1, m.ClientConstCurrency.ID_RELIC_FRAGMENTS));
    if (e) {
      var n = _.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_PRIME_SALES_RELIC_ENCHANTER);
      var o = l.int(n ? n.discount : 0);
      i.addItem(D.CollectableHelper.createVO(b.CollectableEnum.C2, t ? t.c2Cost * (1 - o / 100) : -1));
    } else {
      i.addItem(D.CollectableHelper.createVO(b.CollectableEnum.C1, t ? t.c1Cost : -1));
    }
    return i;
  };
  RelicUpgradeDialogPayment.prototype.setCurrencies = function (e, t) {
    var i = new g.CollectableRenderOptions(g.CollectableRenderOptions.SET_COST_LIST, new E(25, 20));
    i.tooltip.useAmount = false;
    S.CollectableRenderHelper.displayMultipleItemsAndAddToRenderList(this, new h.CollectableRenderClipsList(e, "mc_currency"), t, i, null, RelicUpgradeDialogPayment.afterRenderFuncCurrency);
  };
  RelicUpgradeDialogPayment.afterRenderFuncCurrency = function (e) {
    if (e.itemVO.amount < 0) {
      var t = e.getRenderer(g.CollectableRenderOptions.COST_TEXTFIELD);
      t.setText("-");
      t.setTextColor(u.ClientConstColor.FONT_DEFAULT_COLOR);
    }
  };
  RelicUpgradeDialogPayment.prototype.updateSale = function () {
    var e = _.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_PRIME_SALES_RELIC_ENCHANTER);
    var t = e != null;
    this.disp.mc_premium.mc_sale.visible = t;
    if (t) {
      v.CastleComponent.textFieldManager.registerTextField(this.disp.mc_premium.mc_sale.txt_text, new r.LocalizedTextVO("value_percentage_subtract", [e.discount])).autoFitToBounds = true;
    }
  };
  RelicUpgradeDialogPayment.prototype.getCurrentEnchantmentLevel = function () {
    if (this.relicVO) {
      if (this._equipType != A.RelicUpgradeDialogStatus.EQUIP_TYPE_GEM || this.relicVO.type != T.CollectableItemRelicVO.TYPE_EQUIPMENT) {
        return l.int(this.relicVO.getEnchantmentLevel());
      }
      var e = this.relicVO.vo;
      if (e && e.gemVO) {
        return l.int(e.gemVO.enchantmentLevel);
      }
    }
    return -1;
  };
  RelicUpgradeDialogPayment.prototype.onClick = function (t) {
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.mc_normal.btn_buy:
          this._onBuyButtonClicked.dispatch(false);
          this.handleButtonsEnabled();
          break;
        case this.disp.mc_premium.btn_buy:
          this._onBuyButtonClicked.dispatch(true);
          this.handleButtonsEnabled();
      }
    }
  };
  RelicUpgradeDialogPayment.prototype.handleButtonsEnabled = function () {
    O.ButtonHelper.enableButton(this.disp.mc_normal.btn_buy, false);
    O.ButtonHelper.enableButton(this.disp.mc_premium.btn_buy, false);
  };
  RelicUpgradeDialogPayment.prototype.enableBuyButtons = function () {
    if (!this._isWaitingForServer) {
      O.ButtonHelper.enableButton(this.disp.mc_normal.btn_buy, this._canUpgrade);
      O.ButtonHelper.enableButton(this.disp.mc_premium.btn_buy, this._canUpgrade && this._canUpgradeWithPremium);
    }
  };
  RelicUpgradeDialogPayment.prototype.onRelicUpgradeReceived = function (e) {
    this._isWaitingForServer = false;
    this.enableBuyButtons();
  };
  RelicUpgradeDialogPayment.prototype.onSpecialEventChanged = function (e) {
    this.updateSale();
  };
  RelicUpgradeDialogPayment.prototype.onEquipTypeChanged = function (e) {
    this._equipType = e;
    this.update();
  };
  Object.defineProperty(RelicUpgradeDialogPayment.prototype, "relicVO", {
    get: function () {
      return this._relicVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogPayment.prototype, "onBuyButtonClicked", {
    get: function () {
      return this._onBuyButtonClicked;
    },
    enumerable: true,
    configurable: true
  });
  return RelicUpgradeDialogPayment;
}(f.CastleItemRenderer);
exports.RelicUpgradeDialogPayment = y;
o.classImplementsInterfaces(y, "ICollectableRendererList");
var b = require("./12.js");
var D = require("./45.js");
var I = require("./48.js");
var T = require("./289.js");
var v = require("./14.js");
var S = require("./25.js");
var A = require("./1039.js");
var L = require("./121.js");