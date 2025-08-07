Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./35.js");
var g = require("./830.js");
var C = function (e) {
  function CollectorEventBoosterSelectDialog() {
    return e.call(this, CollectorEventBoosterSelectDialog.NAME) || this;
  }
  n.__extends(CollectorEventBoosterSelectDialog, e);
  CollectorEventBoosterSelectDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_collector_booster_header_" + this.eventSuffix))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_charmBoosterTitle, new l.LocalizedTextVO("dialog_collector_booster_" + this.eventSuffix)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new l.LocalizedTextVO("dialog_collector_booster_desc_" + this.eventSuffix)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome, new r.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_collector_booster_outcome_" + this.eventSuffix)));
    this.itxt_outcome_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome_value, new c.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys, new r.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_collector_booster_enemy_" + this.eventSuffix)));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys_value, new c.LocalizedNumberVO(this.targetCurrencyAmount));
    this.dialogDisp.btn_buy.toolTipText = "dialog_collector_Buy_booster_header_" + this.eventSuffix;
    this.updateSelectedBoosterTexts();
  };
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "eventSuffix", {
    get: function () {
      return this.eventVO.collectInfoVO.collectorEventSkinName;
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventBoosterSelectDialog.prototype.updateSelectedBoosterTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new l.LocalizedTextVO("value_proportional_value", [this.scrollComponentValue, this.eventVO.collectInfoVO.collectorKeyLimit])).autoFitToBounds = true;
    var e = this.eventVO.collectInfoVO.collectorKeyBoost;
    var t = this.dialogProperties.selectedLord.getUniqueBoni(false, h.EffectTypeEnum.EFFECT_TYPE_COLLECTOR_BOOST);
    var i = 0;
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          i += u.int(a.effectValue.strength);
        }
      }
    }
    var s = u.int(this.targetCurrencyAmount * ((this.scrollComponentValue * e + this.eventVO.collectInfoVO.baseCollectorBoost + i) / 100));
    if (this.itxt_outcome_value) {
      this.itxt_outcome_value.textContentVO.numberValue = s;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txx_percent, new l.LocalizedTextVO("dialog_collector_booster_value_" + this.eventSuffix, [this.scrollComponentValue * e])).autoFitToBounds = true;
  };
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "discount", {
    get: function () {
      return m.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.eventVO.collectInfoVO.collectorKeyPackageID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "discount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventBoosterSelectDialog.prototype.getCurrentTrueMaxSpendableBooster = function () {
    return u.int(Math.min(this.eventCurrencyBoosterAmount, this.eventVO.collectInfoVO.collectorKeyLimit));
  };
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "boosterKey", {
    get: function () {
      return this.eventVO.collectInfoVO.collectorKeyCurrencyID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "boosterKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "boostedKey", {
    get: function () {
      return this.eventVO.collectInfoVO.collectorCurrencyID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "boostedKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "targetCurrencyAmount", {
    get: function () {
      return this.dialogProperties.attackInfoVO.targetCollectorCurrencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventBoosterSelectDialog.prototype.onBuyButton = function () {
    f.CastleExternalDialog.dialogHandler.registerDefaultDialogs(O.ModernPackageShopBuyDialog, this.eventVO.getMerchantProperties());
  };
  CollectorEventBoosterSelectDialog.prototype.onOkButton = function () {
    var e = this.dialogProperties.attackInfoVO;
    e.isCollectorAttack = true;
    e.addCollectorBooster(this.boosterKey, u.int(this.scrollComponentValue));
    e.openSelectBoosterDialog = false;
    this.hide();
    o.CommandController.instance.executeCommand(_.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.dialogProperties.targetActionType, this.dialogProperties.hideFunction, this.dialogProperties.attackInfoVO, this.dialogProperties.selectedLord]);
  };
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "eventVO", {
    get: function () {
      return p.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorEventBoosterSelectDialog.prototype, "eventCurrencyBoosterAmount", {
    get: function () {
      return p.CastleModel.currencyData.getAmountById(this.eventVO.collectInfoVO.collectorKeyCurrencyID);
    },
    enumerable: true,
    configurable: true
  });
  CollectorEventBoosterSelectDialog.NAME = "CollectorEventBoosterSelect";
  return CollectorEventBoosterSelectDialog;
}(g.APostAttackSelectBoosterDialog);
exports.CollectorEventBoosterSelectDialog = C;
var _ = require("./29.js");
var m = require("./190.js");
var f = require("./11.js");
var O = require("./206.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");