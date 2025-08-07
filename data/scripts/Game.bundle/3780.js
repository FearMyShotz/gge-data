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
var u = require("./53.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./52.js");
var g = require("./832.js");
var C = function (e) {
  function AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog() {
    return e.call(this, AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.NAME) || this;
  }
  n.__extends(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog, e);
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_selectBooster_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_charmBoosterTitle, new r.LocalizedTextVO("influenceBooster_colon")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_selectBooster_influence_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("lootedInfluence_colon")));
    this.itxt_outcome_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome_value, new l.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("enemyInfluence_colon")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys_value, new l.LocalizedNumberVO(this.targetCurrencyAmount));
    this.updateSelectedBoosterTexts();
  };
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.updateSelectedBoosterTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new r.LocalizedTextVO("value_proportional_value", [this.scrollComponentValue, u.ABGHelper.abgEvent.settingVO.boosterCurrencyLimit])).autoFitToBounds = true;
    var e = u.ABGHelper.abgEvent.settingVO.boosterCurrencyValue;
    var t = c.int(this.targetCurrencyAmount * ((this.scrollComponentValue * e + u.ABGHelper.abgEvent.settingVO.currencyLootFactorMin) / 100));
    if (this.itxt_outcome_value) {
      this.itxt_outcome_value.textContentVO.numberValue = t;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txx_percent, new r.LocalizedTextVO("value_percentage_add", [this.scrollComponentValue * e + u.ABGHelper.abgEvent.settingVO.currencyLootFactorMin])).autoFitToBounds = true;
  };
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "discount", {
    get: function () {
      return O.EventPackagePrimeSaleEventVO.getPackageDiscountC2(u.ABGHelper.abgEvent.eventPackages[0].packageID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "discount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.getCurrentTrueMaxSpendableBooster = function () {
    return c.int(Math.min(this.eventCurrencyBoosterAmount, u.ABGHelper.abgEvent.settingVO.boosterCurrencyLimit));
  };
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "boosterKey", {
    get: function () {
      return u.ABGHelper.abgEvent.settingVO.boosterCurrencyID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "boosterKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "boostedKey", {
    get: function () {
      return u.ABGHelper.abgEvent.settingVO.currencyID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "boostedKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "targetCurrencyAmount", {
    get: function () {
      return this.dialogProperties.attackInfoVO.targetCollectorCurrencyAmount;
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.onBuyButton = function () {
    E.CastleExternalDialog.dialogHandler.registerDefaultDialogs(y.ModernPackageShopBuyDialog, u.ABGHelper.abgEvent.getMerchantProperties());
  };
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype.onOkButton = function () {
    var e = this.dialogProperties.attackInfoVO;
    e.isCollectorAttack = true;
    e.addCollectorBooster(this.boosterKey, c.int(this.scrollComponentValue));
    e.openSelectBoosterDialog = false;
    this.hide();
    o.CommandController.instance.executeCommand(f.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.dialogProperties.targetActionType, this.dialogProperties.hideFunction, this.dialogProperties.attackInfoVO, this.dialogProperties.selectedLord]);
  };
  Object.defineProperty(AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.prototype, "eventCurrencyBoosterAmount", {
    get: function () {
      return p.CastleModel.currencyData.getAmountByType(new m.CollectableTypeVO(_.CollectableEnum.GENERIC_CURRENCY, h.ClientConstCurrency.ID_INFLUENCE_BOOSTER));
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog.NAME = "CollectorEventBoosterSelect";
  return AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog;
}(g.APostAttackSelectBoosterDialog);
exports.AllianceBattleGroundPlayerCollectorEventBoosterSelectDialog = C;
var _ = require("./12.js");
var m = require("./74.js");
var f = require("./29.js");
var O = require("./190.js");
var E = require("./11.js");
var y = require("./206.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");