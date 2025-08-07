Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./137.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./35.js");
var g = require("./830.js");
var C = function (e) {
  function CollectorTempServerEventBoosterSelectDialog() {
    return e.call(this, CollectorTempServerEventBoosterSelectDialog.NAME) || this;
  }
  n.__extends(CollectorTempServerEventBoosterSelectDialog, e);
  CollectorTempServerEventBoosterSelectDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_booster_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_charmBoosterTitle, new r.LocalizedTextVO("dialog_tempServer_booster")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_tempServer_booster_desc", [this.eventVO.settingVO.boosterCurrencyValue])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_booster_outcome")));
    this.itxt_outcome_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome_value, new l.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_booster_enemy")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys_value, new l.LocalizedNumberVO(this.targetCurrencyAmount));
    this.dialogDisp.btn_buy.toolTipText = "dialog_tempServer_Buy_booster_header";
    this.updateSelectedBoosterTexts();
  };
  CollectorTempServerEventBoosterSelectDialog.prototype.updateSelectedBoosterTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new r.LocalizedTextVO("value_proportional_value", [this.scrollComponentValue, this.eventVO.settingVO.boosterCurrencyLimit])).autoFitToBounds = true;
    var e = this.eventVO.settingVO.boosterCurrencyValue;
    var t = this.dialogProperties.selectedLord.getUniqueBoni(false, h.EffectTypeEnum.EFFECT_TYPE_TEMP_SERVER_COLLECTOR_BOOST);
    var i = 0;
    var n = c.int(p.CastleModel.globalEffectData.getBonusByEffectType(h.EffectTypeEnum.EFFECT_TYPE_TEMP_SERVER_COLLECTOR_BOOST));
    if (t != null) {
      for (var o = 0, a = t; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          i += c.int(s.effectValue.strength);
        }
      }
    }
    var l = c.int(Math.min(this.scrollComponentValue * e + this.eventVO.settingVO.currencyLootFactorMin + i + n, this.eventVO.settingVO.currencyLootFactorMax * 100));
    var u = this.targetCurrencyAmount * (l / 100);
    if (this.itxt_outcome_value) {
      this.itxt_outcome_value.textContentVO.numberValue = u;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txx_percent, new r.LocalizedTextVO("dialog_tempServer_booster_value", [l])).autoFitToBounds = true;
  };
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "discount", {
    get: function () {
      return m.EventPackagePrimeSaleEventVO.getPackageDiscountC2(this.eventVO.settingVO.boosterCurrencyPackageID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "discount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectorTempServerEventBoosterSelectDialog.prototype.getCurrentTrueMaxSpendableBooster = function () {
    return c.int(Math.min(this.eventCurrencyBoosterAmount, this.eventVO.settingVO.boosterCurrencyLimit));
  };
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "boosterKey", {
    get: function () {
      return this.eventVO.settingVO.boosterCurrencyID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "boosterKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "boostedKey", {
    get: function () {
      return this.eventVO.settingVO.currencyID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "boostedKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "targetCurrencyAmount", {
    get: function () {
      return p.CastleModel.collectEventData.lastGotAmountForTarget;
    },
    enumerable: true,
    configurable: true
  });
  CollectorTempServerEventBoosterSelectDialog.prototype.onBuyButton = function () {
    f.CastleExternalDialog.dialogHandler.registerDefaultDialogs(O.ModernPackageShopBuyDialog, this.eventVO.getMerchantProperties());
  };
  CollectorTempServerEventBoosterSelectDialog.prototype.onOkButton = function () {
    var e = this.dialogProperties.attackInfoVO;
    e.isCollectorAttack = true;
    e.addCollectorBooster(this.boosterKey, c.int(this.scrollComponentValue));
    e.openSelectBoosterDialog = false;
    this.hide();
    o.CommandController.instance.executeCommand(_.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.dialogProperties.targetActionType, this.dialogProperties.hideFunction, this.dialogProperties.attackInfoVO, this.dialogProperties.selectedLord]);
  };
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "eventVO", {
    get: function () {
      return u.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorTempServerEventBoosterSelectDialog.prototype, "eventCurrencyBoosterAmount", {
    get: function () {
      return p.CastleModel.currencyData.getAmountById(this.eventVO.settingVO.boosterCurrencyID);
    },
    enumerable: true,
    configurable: true
  });
  CollectorTempServerEventBoosterSelectDialog.NAME = "CollectorEventBoosterSelect";
  return CollectorTempServerEventBoosterSelectDialog;
}(g.APostAttackSelectBoosterDialog);
exports.CollectorTempServerEventBoosterSelectDialog = C;
var _ = require("./29.js");
var m = require("./190.js");
var f = require("./11.js");
var O = require("./206.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");