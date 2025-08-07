Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./16.js");
var d = require("./1376.js");
var p = require("./21.js");
var h = require("./31.js");
var g = require("./19.js");
var C = require("./13.js");
var _ = require("./4.js");
var m = require("./27.js");
var f = require("./8.js");
var O = require("./1375.js");
var E = createjs.Point;
var y = function (e) {
  function CastleAllianceDialogForgeHigh(t) {
    var i = this;
    i.costIndex = 0;
    i.costsArray = [b.CollectableEnum.C1, b.CollectableEnum.C2];
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).itxt_timer = i.textFieldManager.registerTextField(i.subLayerDisp.txt_info2, new a.TextVO(""));
    i.itxt_costInfo = i.textFieldManager.registerTextField(i.subLayerDisp.txt_info1, new r.LocalizedNumberVO(0));
    f.ButtonHelper.initBasicButtons([i.subLayerDisp.btn_arrow_left, i.subLayerDisp.btn_arrow_right, i.subLayerDisp.btn_sell]);
    i.subLayerDisp.btn_info.mouseChildren = false;
    i.initInfoToolTip();
    return i;
  }
  n.__extends(CastleAllianceDialogForgeHigh, e);
  CastleAllianceDialogForgeHigh.prototype.initInfoToolTip = function () {
    var e = this.subLayerDisp.mc_info_tooltip;
    this.textFieldManager.registerTextField(e.txt_text, new s.LocalizedTextVO("relicAllianceSmithy_ratingGuide_desc"));
    this.textFieldManager.registerTextField(e.txt_title_left, new a.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("relicAllianceSmithy_ratingGuide_standardRating")));
    this.textFieldManager.registerTextField(e.txt_title_right, new a.TextVO(C.TextHelper.toUpperCaseLocaSafeTextId("relicAllianceSmithy_ratingGuide_premiumRating")));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_from_to, new s.LocalizedTextVO("to_2"));
    for (var t = 0; t < 7; t++) {
      this.textFieldManager.registerTextField(e["txt_rating_" + t], new s.LocalizedTextVO("relicAllianceSmithy_ratingGuide_ratingLvl" + (t + 1)));
    }
  };
  CastleAllianceDialogForgeHigh.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.setCosts();
    this.updateTimer();
    _.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    M.CastleBasicController.getInstance().addEventListener(R.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
    this.subLayerDisp.mc_info_tooltip.visible = false;
    f.ButtonHelper.enableButton(this.subLayerDisp.btn_sell, this.isEquipmentOnScreen);
    this.updateSellButtonTooltip();
  };
  CastleAllianceDialogForgeHigh.prototype.updateSellButtonTooltip = function () {
    this.subLayerDisp.btn_sell.toolTipText = this.isEquipmentOnScreen ? "allyforge_tooltip_sell" : "allyforge_tooltip_sell_noEquipment";
  };
  CastleAllianceDialogForgeHigh.prototype.hide = function () {
    e.prototype.hide.call(this);
    _.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    M.CastleBasicController.getInstance().removeEventListener(R.CastleUserDataEvent.CHANGE_USER_CURRENCY, this.bindFunction(this.onUserCurrencyChange));
  };
  CastleAllianceDialogForgeHigh.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.subLayerDisp.btn_arrow_left:
          this.changeCostCurrency(-1);
          break;
        case this.subLayerDisp.btn_arrow_right:
          this.changeCostCurrency(1);
          break;
        case this.subLayerDisp.btn_sell:
          T.CastleDialogHandler.getInstance().registerDialogs(A.CastleEquipmentSellDialog, new L.CastleEquipmentSellDialogProperties(this.subLayerDisp.mc_equip.equipVO, this.bindFunction(this.confirmSellCallback), null));
          break;
        case this.subLayerDisp.btn_info:
          if (o.currentBrowserInfo.isTouchEvent(t)) {
            this.subLayerDisp.mc_info_tooltip.visible = !this.subLayerDisp.mc_info_tooltip.visible;
          }
      }
    }
  };
  CastleAllianceDialogForgeHigh.prototype.confirmSellCallback = function () {
    if (this.subLayerDisp.mc_equip.equipVO instanceof P.RelicGemVO) {
      _.CastleModel.gemData.sell(this.subLayerDisp.mc_equip.equipVO);
    } else {
      _.CastleModel.equipData.sell(this.subLayerDisp.mc_equip.equipVO, -1, -1);
    }
    this.throwEquipInInventory();
  };
  CastleAllianceDialogForgeHigh.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_info:
        this.subLayerDisp.mc_info_tooltip.visible = true;
    }
  };
  CastleAllianceDialogForgeHigh.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    switch (t.target) {
      case this.subLayerDisp.btn_info:
        this.subLayerDisp.mc_info_tooltip.visible = false;
    }
  };
  CastleAllianceDialogForgeHigh.prototype.changeCostCurrency = function (e) {
    var t = this.costIndex + e;
    if (t < 0) {
      t = c.int(this.costsArray.length - 1);
    }
    if (t > this.costsArray.length - 1) {
      t = 0;
    }
    this.costIndex = t;
    this.setTextsAndValues();
  };
  CastleAllianceDialogForgeHigh.prototype.setCosts = function () {
    this.setCostMC(this.currentCostCollectableVO, this.subLayerDisp.mc_cost, new E(30, 30));
    this.setCostMC(this.currentCostCollectableVO, this.subLayerDisp.mc_info_cost, new E(20, 20));
    this.subLayerDisp.info_info1_tooltip.toolTipText = l.Localize.text("relicequip_dialog_relicAllianceSmithy_smithyUseCounter_tooltip", [this.currentCostCollectableVO.getNameTextId()]);
    this.subLayerDisp.info_info2_tooltip.toolTipText = l.Localize.text("relicequip_dialog_relicAllianceSmithy_smithyResetTimer_tooltip");
    this.itxt_cost.textContentVO = new r.LocalizedNumberVO(this.costAmount);
    this.itxt_cost.color = this.canEffort ? u.ClientConstColor.FONT_DEFAULT_COLOR : u.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    this.subLayerDisp.info_info1_tooltip.alpha = 1;
    this.subLayerDisp.info_info2_tooltip.alpha = 1;
  };
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "currentCostCollectableVO", {
    get: function () {
      var e = this.costsArray[this.costIndex];
      if (typeof e == "number") {
        return D.CollectableHelper.createVO(new I.CollectableTypeVO(b.CollectableEnum.GENERIC_CURRENCY, e).type);
      } else {
        return D.CollectableHelper.createVO(e);
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogForgeHigh.prototype.onCraftButtonPressed = function () {
    if (this.isAllowedToCraft && !this.isEquipmentOnScreen) {
      _.CastleModel.smartfoxClient.sendCommandVO(new d.C2SRequestForgeCraftVO(this.costsArray[this.costIndex] == b.CollectableEnum.C2 ? 1 : 0));
    } else if (this.isEquipmentOnScreen) {
      this.throwEquipInInventory();
    }
    this.updateSellButtonTooltip();
  };
  CastleAllianceDialogForgeHigh.prototype.throwEquipInInventory = function () {
    e.prototype.throwEquipInInventory.call(this);
    f.ButtonHelper.enableButton(this.subLayerDisp.btn_sell, false);
    this.subLayerDisp.btn_sell.toolTipText = "allyforge_tooltip_sell_noEquipment";
  };
  CastleAllianceDialogForgeHigh.prototype.onForgeItem = function (t) {
    e.prototype.onForgeItem.call(this, t);
    this.updateSellButtonTooltip();
    f.ButtonHelper.enableButton(this.subLayerDisp.btn_sell, this.isEquipmentOnScreen);
  };
  CastleAllianceDialogForgeHigh.prototype.onForgeGem = function (t) {
    e.prototype.onForgeGem.call(this, t);
    this.updateSellButtonTooltip();
    f.ButtonHelper.enableButton(this.subLayerDisp.btn_sell, this.isEquipmentOnScreen);
  };
  CastleAllianceDialogForgeHigh.prototype.onTimer = function (e) {
    this.updateTimer();
  };
  CastleAllianceDialogForgeHigh.prototype.onUserCurrencyChange = function (e) {
    this.setCosts();
  };
  CastleAllianceDialogForgeHigh.prototype.updateTimer = function () {
    this.itxt_timer.textContentVO.stringValue = m.CastleTimeStringHelper.getShortTimeString(_.CastleModel.timerData.timeTillDailyResetInSec);
  };
  CastleAllianceDialogForgeHigh.prototype.setCostMC = function (e, t, i) {
    var n = new g.CollectableRenderOptions(g.CollectableRenderOptions.ICON, i);
    n.tooltip.useAmount = false;
    v.CollectableRenderHelper.displaySingleItem(new h.CollectableRenderClips(t).addIconMc(t), e, n);
  };
  CastleAllianceDialogForgeHigh.prototype.setRating = function () {
    if (this.costsArray[this.costIndex] == b.CollectableEnum.C2) {
      this.subLayerDisp.icon_relic_star_left_0.gotoAndStop(3);
      this.subLayerDisp.icon_relic_star_left_1.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_left_2.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_right_0.gotoAndStop(4);
      this.subLayerDisp.icon_relic_star_right_1.gotoAndStop(4);
      this.subLayerDisp.icon_relic_star_right_2.gotoAndStop(4);
    } else {
      this.subLayerDisp.icon_relic_star_left_0.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_left_1.gotoAndStop(2);
      this.subLayerDisp.icon_relic_star_left_2.gotoAndStop(2);
      this.subLayerDisp.icon_relic_star_right_0.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_right_1.gotoAndStop(1);
      this.subLayerDisp.icon_relic_star_right_2.gotoAndStop(1);
    }
  };
  CastleAllianceDialogForgeHigh.prototype.setTextsAndValues = function () {
    e.prototype.setTextsAndValues.call(this);
    this.itxt_costInfo.textContentVO.numberValue = this.forgedAmount;
    this.itxt_copy.textContentVO = new s.LocalizedTextVO("relicequip_dialog_relicAllianceSmithy_desc");
    this.subLayerDisp.info_costs_tooltip.toolTipText = l.Localize.text("relicequip_dialog_relicAllianceSmithy_currencySelection_tooltip", [this.currentCostCollectableVO.getNameTextId()]);
    this.setCosts();
    this.setRating();
  };
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "canEffort", {
    get: function () {
      if (this.costsArray[this.costIndex] == b.CollectableEnum.C2) {
        return _.CastleModel.currencyData.c2Amount >= this.c2Cost;
      } else {
        return _.CastleModel.currencyData.c1Amount >= this.c1Cost;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "costAmount", {
    get: function () {
      if (this.costsArray[this.costIndex] == b.CollectableEnum.C2) {
        return this.c2Cost;
      } else {
        return this.c1Cost;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "c1Cost", {
    get: function () {
      return S.AllianceForgeConst.calculateC1CostForSoftCurrencyRelicAllianceForge(this.forgedAmount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "c2Cost", {
    get: function () {
      return S.AllianceForgeConst.calculateC2CostForHardCurrencyRelicAllianceForge(this.forgedAmount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "forgedAmount", {
    get: function () {
      if (this.costsArray[this.costIndex] == b.CollectableEnum.C2) {
        return _.CastleModel.allianceData.myAllianceVO.allianceForgeRelicUsagesHard;
      } else {
        return _.CastleModel.allianceData.myAllianceVO.allianceForgeRelicUsagesSoft;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceDialogForgeHigh.prototype, "isAllowedToCraft", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(O.CastleAllianceDialogForge.prototype, "isAllowedToCraft").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceDialogForgeHigh.prototype.showHelp = function () {
    T.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_relicAllianceSmithy"));
  };
  return CastleAllianceDialogForgeHigh;
}(O.CastleAllianceDialogForge);
exports.CastleAllianceDialogForgeHigh = y;
o.classImplementsInterfaces(y, "ICollectableRendererList", "ISublayer");
var b = require("./12.js");
var D = require("./45.js");
var I = require("./74.js");
var T = require("./9.js");
var v = require("./25.js");
var S = require("./5.js");
var A = require("./594.js");
var L = require("./722.js");
var P = require("./610.js");
var M = require("./15.js");
var R = require("./32.js");