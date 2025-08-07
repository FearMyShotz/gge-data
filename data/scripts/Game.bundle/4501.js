Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./51.js");
var p = require("./159.js");
var h = require("./37.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = require("./263.js");
var m = function (e) {
  function CastlePrimeSaleReviveAllDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastlePrimeSaleReviveAllDialog, e);
  CastlePrimeSaleReviveAllDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_medikus.visible = true;
    this.setButtonCentered(true);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("dialog_primeday_primesale_healAll_description"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_offer, new l.LocalizedTextVO("dialog_specialOfferDeco_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_buy, new l.LocalizedTextVO("dialog_questInfo_showMe"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_medikus.txt_name, new l.LocalizedTextVO("dialog_hospital_reviveAllButton"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_limited_offer.txt_limited_offer, new l.LocalizedTextVO("dialog_primeday_primesale_saveCosts", [this.dialogProperties.eventVO.discount]));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_percentOff.txt_percentOff, new l.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.dialogProperties.eventVO.discount]));
  };
  CastlePrimeSaleReviveAllDialog.prototype.onOkButton = function () {
    this.showHowTo();
    this.hide();
  };
  CastlePrimeSaleReviveAllDialog.prototype.isEvent = function () {
    return true;
  };
  CastlePrimeSaleReviveAllDialog.prototype.showHowTo = function () {
    if (this.layoutManager.isInMyProperCastle) {
      this.showHospitalDialog();
    } else {
      var e = c.int(g.CastleModel.kingdomData.activeKingdomID);
      var t = g.CastleModel.userData.castleList.getMainCastleByKingdomID(e);
      t ||= g.CastleModel.userData.castleList.getHomeCastle();
      if (g.CastleModel.worldmapData) {
        g.CastleModel.worldmapData.allowGAARequests = false;
      }
      this.controller.addEventListener(h.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinedCastle));
      g.CastleModel.smartfoxClient.sendCommandVO(new p.C2SJoinCastleVO(t.objectId, t.kingdomID));
    }
  };
  CastlePrimeSaleReviveAllDialog.prototype.onJoinedCastle = function (e = null) {
    this.controller.removeEventListener(h.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinedCastle));
    this.showHospitalDialog();
  };
  CastlePrimeSaleReviveAllDialog.prototype.showHospitalDialog = function () {
    if (O.Iso.data.objects.provider.hasFunctionalBuildingByType(f.IsoObjectEnum.HOSPITAL) || O.Iso.data.objects.provider.hasFunctionalBuildingByType(f.IsoObjectEnum.FACTION_HOSPITAL)) {
      E.CastleExternalDialog.dialogHandler.registerDefaultDialogs(b.CastleRecruitDialog, new _.CastleRecruitDialogProperties(u.ClientConstCastle.CATEGORY_HOSPITAL));
    } else {
      E.CastleExternalDialog.dialogHandler.registerDefaultDialogs(y.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("dialog_primeday_primesale_healAll_alert")));
    }
  };
  CastlePrimeSaleReviveAllDialog.prototype.getRemainingTime = function () {
    return c.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds);
  };
  CastlePrimeSaleReviveAllDialog.prototype.timeToString = function (e) {
    return new l.LocalizedTextVO("dialog_primeday_specialoffer_endTimer", [C.CastleTimeStringHelper.getEventTimeString(e)]);
  };
  CastlePrimeSaleReviveAllDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (this.dialogProperties && this.dialogProperties.eventVO && e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  CastlePrimeSaleReviveAllDialog.prototype.getCharacterName = function () {
    return d.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MEDICUS;
  };
  Object.defineProperty(CastlePrimeSaleReviveAllDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastlePrimeSaleReviveAllDialog.__initialize_static_members = function () {
    CastlePrimeSaleReviveAllDialog.NAME = "CastlePrimeSalesReviveAll";
  };
  return CastlePrimeSaleReviveAllDialog;
}(require("./372.js").CastleAbstractPrimeSaleDialog);
exports.CastlePrimeSaleReviveAllDialog = m;
var f = require("./80.js");
var O = require("./34.js");
var E = require("./11.js");
var y = require("./38.js");
var b = require("./225.js");
s.classImplementsInterfaces(m, "ICollectableRendererList");
m.__initialize_static_members();