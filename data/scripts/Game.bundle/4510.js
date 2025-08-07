Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./51.js");
var u = require("./26.js");
var d = require("./80.js");
var p = require("./29.js");
var h = require("./4.js");
var g = require("./11.js");
var C = require("./799.js");
var _ = function (e) {
  function CastleRelicEnchanterPrimeSaleDialog() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleRelicEnchanterPrimeSaleDialog, e);
  CastleRelicEnchanterPrimeSaleDialog.prototype.getCharacterName = function () {
    return c.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_RELIC_ENCHANTER_PRIME_SALE;
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    h.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.setupView();
    this.setTexts();
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.onRemoveEvent = function (e) {
    if (m.instanceOfClass(e.specialEventVO, "EquipmentEnhancerEventVO") || m.instanceOfClass(e.specialEventVO, "EquipmentEnhancerPrimeSaleEventVO")) {
      this.hide();
    }
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.setTexts = function () {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_primeday_primesale_relicEnchanter_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new s.LocalizedTextVO("dialog_primeday_primesale_relicEnchanter_premiumUpgrade")).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new s.LocalizedTextVO("showMe"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_booster_container.txt_title, new s.LocalizedTextVO("dialog_specialOfferDeco_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_stamp_offer.txt_discount, new r.LocalizedNumberVO(this.eventVO.discount * -1));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new s.LocalizedTextVO("dialog_primeday_primesale_relicEnchanter_upgradeInfo"));
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.setupView = function () {
    this.dialogDisp.mc_booster_container.visible = true;
    this.dialogDisp.mc_booster_container.relicus_icon.visible = true;
    this.dialogDisp.mc_stamp_offer.visible = true;
    this.dialogDisp.mc_booster_container.mc_bottom_rewards.visible = false;
    this.dialogDisp.mc_booster_container.oval_gold_detail.visible = false;
    this.dialogDisp.mc_percentOff.visible = false;
    this.dialogDisp.mc_limited_offer.gotoAndStop(2);
    this.setButtonCentered(true);
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.getRemainingTime = function () {
    return l.int(this.eventVO.remainingEventTimeInSeconds);
  };
  Object.defineProperty(CastleRelicEnchanterPrimeSaleDialog.prototype, "eventVO", {
    get: function () {
      return this.properties.eventVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleRelicEnchanterPrimeSaleDialog.prototype.onOkButton = function () {
    if (h.CastleModel.equipData.hasRelicEnchanter) {
      g.CastleExternalDialog.dialogHandler.registerDefaultDialogs(C.RelicUpgradeDialog);
    } else {
      o.CommandController.instance.executeCommand(p.IngameClientCommands.GOTO_MAIN_CASTLE_UNIQUE_BUILDING, [d.IsoObjectEnum.RELIC_ENCHANTER]);
    }
    this.hide();
  };
  CastleRelicEnchanterPrimeSaleDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    h.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleRelicEnchanterPrimeSaleDialog.NAME = "CastleEquipmentEnhancerPrimeSaleDialog";
  return CastleRelicEnchanterPrimeSaleDialog;
}(require("./372.js").CastleAbstractPrimeSaleDialog);
exports.CastleRelicEnchanterPrimeSaleDialog = _;
a.classImplementsInterfaces(_, "ICollectableRendererList");
var m = require("./1.js");