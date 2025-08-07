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
var g = require("./830.js");
var C = function (e) {
  function AllianceBattleGroundTowerCollectorEventBoosterSelectDialog() {
    return e.call(this, AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.NAME) || this;
  }
  n.__extends(AllianceBattleGroundTowerCollectorEventBoosterSelectDialog, e);
  AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_selectBooster_title"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_charmBoosterTitle, new r.LocalizedTextVO("statuetteBooster_colon")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_selectBooster_statuette_desc")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("lootedStatuette_colon")));
    this.itxt_outcome_value = this.textFieldManager.registerTextField(this.dialogDisp.txt_outcome_value, new l.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys, new s.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("enemyStatuette_colon")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_enemy_currencys_value, new l.LocalizedNumberVO(this.targetCurrencyAmount));
    this.updateSelectedBoosterTexts();
  };
  AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype.updateSelectedBoosterTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_amount, new r.LocalizedTextVO("value_proportional_value", [this.scrollComponentValue, u.ABGHelper.abgEvent.settingVO.boosterCurrencyLimit])).autoFitToBounds = true;
    var e = u.ABGHelper.abgEvent.settingVO.boosterCurrencyValue;
    var t = Math.ceil(this.targetCurrencyAmount * (1 + this.scrollComponentValue * e / 100));
    if (this.itxt_outcome_value) {
      this.itxt_outcome_value.textContentVO.numberValue = t;
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txx_percent, new r.LocalizedTextVO("value_percentage_add", [this.scrollComponentValue * e + u.ABGHelper.abgEvent.settingVO.currencyLootFactorMin])).autoFitToBounds = true;
  };
  Object.defineProperty(AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype, "discount", {
    get: function () {
      return O.EventPackagePrimeSaleEventVO.getPackageDiscountC2(u.ABGHelper.abgEvent.eventPackages[0].packageID);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "discount").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype.getCurrentTrueMaxSpendableBooster = function () {
    return c.int(Math.min(this.eventCurrencyBoosterAmount, u.ABGHelper.abgEvent.settingVO.boosterCurrencyLimit));
  };
  Object.defineProperty(AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype, "boosterKey", {
    get: function () {
      return u.ABGHelper.abgEvent.settingVO.boosterCurrencyID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "boosterKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype, "boostedKey", {
    get: function () {
      return u.ABGHelper.abgEvent.settingVO.currencyID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.APostAttackSelectBoosterDialog.prototype, "boostedKey").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype, "targetCurrencyAmount", {
    get: function () {
      return this.fightScreenVO.targetArea.currentTowerPoints;
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype.onBuyButton = function () {
    E.CastleExternalDialog.dialogHandler.registerDefaultDialogs(y.ModernPackageShopBuyDialog, u.ABGHelper.abgEvent.getMerchantProperties());
  };
  AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype.onOkButton = function () {
    var e = this.dialogProperties.attackInfoVO;
    e.isCollectorAttack = false;
    e.addCollectorBooster(this.boosterKey, this.scrollComponentValue);
    e.openSelectBoosterDialog = false;
    this.hide();
    o.CommandController.instance.executeCommand(f.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.dialogProperties.targetActionType, this.dialogProperties.hideFunction, this.dialogProperties.attackInfoVO, this.dialogProperties.selectedLord]);
  };
  Object.defineProperty(AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.prototype, "eventCurrencyBoosterAmount", {
    get: function () {
      return p.CastleModel.currencyData.getAmountByType(new m.CollectableTypeVO(_.CollectableEnum.GENERIC_CURRENCY, h.ClientConstCurrency.ID_ABG_TOWER_BOOSTER));
    },
    enumerable: true,
    configurable: true
  });
  AllianceBattleGroundTowerCollectorEventBoosterSelectDialog.NAME = "CollectorEventBoosterSelect";
  return AllianceBattleGroundTowerCollectorEventBoosterSelectDialog;
}(g.APostAttackSelectBoosterDialog);
exports.AllianceBattleGroundTowerCollectorEventBoosterSelectDialog = C;
var _ = require("./12.js");
var m = require("./74.js");
var f = require("./29.js");
var O = require("./190.js");
var E = require("./11.js");
var y = require("./206.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");