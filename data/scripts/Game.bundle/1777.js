Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./971.js");
var d = require("./3777.js");
var p = require("./26.js");
var h = require("./32.js");
var g = require("./13.js");
var C = require("./4.js");
var _ = require("./52.js");
var m = require("./8.js");
var f = function (e) {
  function SamuraiDaimyoBoosterSelectDialog() {
    return e.call(this, SamuraiDaimyoBoosterSelectDialog.NAME) || this;
  }
  n.__extends(SamuraiDaimyoBoosterSelectDialog, e);
  SamuraiDaimyoBoosterSelectDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_shapeshifter_Booster_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new l.LocalizedTextVO("dialog_samuraiInvasionDaimyo_booster_desc")).autoFitToBounds = true;
    m.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], b.ClickFeedbackButton);
    this._samuraiMedalBoosterSelectComponent = new E.CastleBoosterSelectComponent(this.dialogDisp.buy0, _.ClientConstCurrency.ID_SAMURAI_MEDAL_BOOSTER, C.CastleModel.xmlPropertyData.getValueById(u.ClientConstXmlProperties.ID_SAMURAI_MEDAL_BOOSTER_BOOST), 1591, s.EventConst.EVENTTYPE_SAMURAI_INVASION);
    this._shogunPointBoosterSelectComponent = new E.CastleBoosterSelectComponent(this.dialogDisp.buy1, _.ClientConstCurrency.ID_SHOGUN_POINT_BOOSTER, C.CastleModel.xmlPropertyData.getValueById(u.ClientConstXmlProperties.ID_SHOGUN_POINT_BOOSTER_BOOST), 1592, s.EventConst.EVENTTYPE_SAMURAI_INVASION);
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._samuraiMedalBoosterSelectComponent.maxSelectable = this.getSamuraiMedalBooserMax();
    this._shogunPointBoosterSelectComponent.maxSelectable = this.getShogunPointBoosterMax();
    this._samuraiMedalBoosterSelectComponent.show();
    this._shogunPointBoosterSelectComponent.show();
    this.controller.addEventListener(h.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    C.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateDiscount));
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._samuraiMedalBoosterSelectComponent.hide();
    this._shogunPointBoosterSelectComponent.hide();
    this.controller.removeEventListener(h.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onSpecialUserCurrencyUpdate));
    C.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.updateDiscount));
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.getSamuraiMedalBooserMax = function () {
    return c.int(Math.min(C.CastleModel.currencyData.getAmountById(_.ClientConstCurrency.ID_SAMURAI_MEDAL_BOOSTER), C.CastleModel.xmlPropertyData.getValueById(u.ClientConstXmlProperties.ID_SAMURAI_MEDAL_BOOSTER_LIMIT)));
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.getShogunPointBoosterMax = function () {
    return c.int(Math.min(C.CastleModel.currencyData.getAmountById(_.ClientConstCurrency.ID_SHOGUN_POINT_BOOSTER), C.CastleModel.xmlPropertyData.getValueById(u.ClientConstXmlProperties.ID_SHOGUN_POINT_BOOSTER_LIMIT)));
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.onSpecialUserCurrencyUpdate = function (e) {
    this._samuraiMedalBoosterSelectComponent.updateWithNewMaxValue(this.getSamuraiMedalBooserMax());
    this._shogunPointBoosterSelectComponent.updateWithNewMaxValue(this.getShogunPointBoosterMax());
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.updateDiscount = function (e) {
    this._samuraiMedalBoosterSelectComponent.updateDiscount();
    this._shogunPointBoosterSelectComponent.updateDiscount();
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onOkButton();
      }
    }
  };
  SamuraiDaimyoBoosterSelectDialog.prototype.onOkButton = function () {
    if (this.daimyoCastleProperties) {
      var e = this.daimyoCastleProperties.attackInfoVO;
      e.addCollectorBooster(_.ClientConstCurrency.ID_SAMURAI_MEDAL_BOOSTER, this._samuraiMedalBoosterSelectComponent.getValue());
      e.addCollectorBooster(_.ClientConstCurrency.ID_SHOGUN_POINT_BOOSTER, this._shogunPointBoosterSelectComponent.getValue());
      e.openSelectBoosterDialog = false;
      a.CommandController.instance.executeCommand(O.IngameClientCommands.OPEN_POSTATTACK_DIALOG_COMMAND, [this.daimyoCastleProperties.targetActionType, this.daimyoCastleProperties.hideFunction, this.daimyoCastleProperties.attackInfoVO, this.daimyoCastleProperties.selectedLord]);
      this.hide();
    } else if (this.daimyoTownshipProperties) {
      C.CastleModel.smartfoxClient.sendCommandVO(new d.C2SLaunchDaimyoTauntAttackVO(this.daimyoTownshipProperties.townshipMapObjectVO.absAreaPosX, this.daimyoTownshipProperties.townshipMapObjectVO.absAreaPosY, this._samuraiMedalBoosterSelectComponent.getValue(), this._shogunPointBoosterSelectComponent.getValue()));
      this.hide();
    }
  };
  Object.defineProperty(SamuraiDaimyoBoosterSelectDialog.prototype, "daimyoCastleProperties", {
    get: function () {
      if (y.instanceOfClass(this.properties, "PostAttackSelectBoosterDialogProperties")) {
        return this.properties;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoBoosterSelectDialog.prototype, "daimyoTownshipProperties", {
    get: function () {
      if (y.instanceOfClass(this.properties, "SamuraiDaimyoTauntDialogProperties")) {
        return this.properties;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoBoosterSelectDialog.NAME = "SamuraiDaimyoBoosterSelect";
  return SamuraiDaimyoBoosterSelectDialog;
}(require("./11.js").CastleExternalDialog);
exports.SamuraiDaimyoBoosterSelectDialog = f;
var O = require("./29.js");
var E = require("./3778.js");
o.classImplementsInterfaces(f, "ICollectableRendererList");
var y = require("./1.js");
var b = require("./36.js");