Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./51.js");
var d = require("./26.js");
var p = require("./4.js");
var h = function (e) {
  function CastleEquipmentEnhancerPrimeSaleDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleEquipmentEnhancerPrimeSaleDialog, e);
  CastleEquipmentEnhancerPrimeSaleDialog.prototype.getCharacterName = function () {
    return u.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_EQUIPMENT_ENHANCER_PRIME_SALE;
  };
  CastleEquipmentEnhancerPrimeSaleDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    p.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.setupView();
    this.setTexts();
  };
  CastleEquipmentEnhancerPrimeSaleDialog.prototype.onRemoveEvent = function (e) {
    if (a.instanceOfClass(e.specialEventVO, "EquipmentEnhancerEventVO") || a.instanceOfClass(e.specialEventVO, "EquipmentEnhancerPrimeSaleEventVO")) {
      this.hide();
    }
  };
  CastleEquipmentEnhancerPrimeSaleDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("dialog_primeday_primesale_enchanter_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new r.LocalizedTextVO("dialog_primeday_primesale_enchanter_premiumUpgrade")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new r.LocalizedTextVO("dialog_questInfo_showMe"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_booster_container.txt_title, new r.LocalizedTextVO("dialog_specialOfferDeco_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_stamp_offer.txt_discount, new s.LocalizedNumberVO(this.eventVO.discount * -1));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new r.LocalizedTextVO("dialog_primeday_primesale_enchanter_upgradeInfo", [new l.TextVO("123")]));
  };
  CastleEquipmentEnhancerPrimeSaleDialog.prototype.setupView = function () {
    this.dialogDisp.mc_booster_container.visible = true;
    this.dialogDisp.mc_booster_container.technicus_icon.visible = true;
    this.dialogDisp.mc_stamp_offer.visible = true;
    this.dialogDisp.mc_stamp_offer.txt_discount.rotation = -27;
    this.dialogDisp.mc_stamp_offer.txt_discount.x = -46;
    this.dialogDisp.mc_stamp_offer.txt_discount.y = 0;
    this.dialogDisp.mc_booster_container.mc_bottom_rewards.visible = false;
    this.dialogDisp.mc_booster_container.oval_gold_detail.visible = false;
    this.dialogDisp.mc_percentOff.visible = false;
    this.dialogDisp.mc_limited_offer.gotoAndStop(2);
    this.setButtonCentered(true);
  };
  CastleEquipmentEnhancerPrimeSaleDialog.prototype.getRemainingTime = function () {
    return c.int(this.eventVO.remainingEventTimeInSeconds);
  };
  Object.defineProperty(CastleEquipmentEnhancerPrimeSaleDialog.prototype, "eventVO", {
    get: function () {
      return this.properties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentEnhancerPrimeSaleDialog.prototype.onOkButton = function () {
    g.CastleExternalDialog.dialogHandler.registerDefaultDialogs(C.CastleEquipmentEnchanterDialog);
    this.hide();
  };
  CastleEquipmentEnhancerPrimeSaleDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    p.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleEquipmentEnhancerPrimeSaleDialog.__initialize_static_members = function () {
    CastleEquipmentEnhancerPrimeSaleDialog.NAME = "CastleEquipmentEnhancerPrimeSaleDialog";
  };
  return CastleEquipmentEnhancerPrimeSaleDialog;
}(require("./372.js").CastleAbstractPrimeSaleDialog);
exports.CastleEquipmentEnhancerPrimeSaleDialog = h;
var g = require("./11.js");
var C = require("./1904.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");
h.__initialize_static_members();