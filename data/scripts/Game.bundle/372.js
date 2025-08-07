Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./51.js");
var d = require("./21.js");
var p = require("./26.js");
var h = require("./4.js");
var g = require("./130.js");
var C = require("./27.js");
var _ = require("./24.js");
var m = require("./8.js");
var f = function (e) {
  function CastleAbstractPrimeSaleDialog() {
    var t = e.call(this, CastleAbstractPrimeSaleDialog.NAME) || this;
    CastleAbstractPrimeSaleDialog.initCharacterOffsets();
    return t;
  }
  n.__extends(CastleAbstractPrimeSaleDialog, e);
  CastleAbstractPrimeSaleDialog.initCharacterOffsets = function () {
    if (!CastleAbstractPrimeSaleDialog.characterOffsets) {
      CastleAbstractPrimeSaleDialog.characterOffsets = new Map();
      CastleAbstractPrimeSaleDialog.characterOffsets.set(u.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_GIFT_TRADER, new O(10, -40));
      CastleAbstractPrimeSaleDialog.characterOffsets.set(u.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MERCHANT, new O(0, -35, 0.9));
      CastleAbstractPrimeSaleDialog.characterOffsets.set(u.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_SEA_QUEEN, new O(40));
      CastleAbstractPrimeSaleDialog.characterOffsets.set(u.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_MEDICUS, new O(0, 20, 1.37));
      CastleAbstractPrimeSaleDialog.characterOffsets.set(u.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_RELIC_ENCHANTER_PRIME_SALE, new O(16, 40));
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.mc_package_container.btn_info, this.dialogDisp.btn_show_me]);
  };
  CastleAbstractPrimeSaleDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.mc_limited_offer.gotoAndStop(1);
    this.dialogDisp.mc_skip_discount.visible = false;
    this.dialogDisp.mc_buildingClip.visible = false;
    this.dialogDisp.mc_package_container.visible = false;
    this.dialogDisp.mc_medikus.visible = false;
    this.dialogDisp.mc_booster_container.visible = false;
    this.dialogDisp.mc_booster_container.technicus_icon.visible = false;
    this.dialogDisp.mc_booster_container.relicus_icon.visible = false;
    this.dialogDisp.mc_stamp_offer.visible = false;
    this.dialogDisp.prime_sale_list.visible = false;
    this.dialogDisp.btn_show_me.visible = false;
    this.updateCharacter();
    this.setRemainingTime();
  };
  CastleAbstractPrimeSaleDialog.prototype.addEventListenerOnShow = function () {
    h.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    if (this.isEvent()) {
      h.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    }
    if (this.isOffer()) {
      h.CastleModel.privateOfferData.addEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onRemoveOffer));
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.removeEventListenerOnHide = function () {
    h.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.setRemainingTime));
    if (this.isEvent()) {
      h.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    }
    if (this.isOffer()) {
      h.CastleModel.privateOfferData.removeEventListener(g.PrivateOfferDataEvent.PRIVATE_OFFER_REMOVED, this.bindFunction(this.onRemoveOffer));
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.setRemainingTime = function (e = null) {
    var t = this.getRemainingTime();
    if (t <= 0) {
      this.hide();
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_offer_timeleft, this.timeToString(t));
      C.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, t);
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.timeToString = function (e) {
    return new l.LocalizedTextVO("dialog_primeday_specialoffer_endTimer", [C.CastleTimeStringHelper.getEventTimeString(e)]);
  };
  CastleAbstractPrimeSaleDialog.prototype.onClick = function (e) {
    if (m.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_show_me:
        case this.dialogDisp.btn_ok:
          this.onOkButton();
          break;
        case this.dialogDisp.btn_close:
          this.onCloseButton();
          this.hide();
      }
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.setButtonCentered = function (e) {
    this.dialogDisp.btn_ok.x = e ? CastleAbstractPrimeSaleDialog.SHOW_ME_BTN_XPOS_CENTERED : CastleAbstractPrimeSaleDialog.SHOW_ME_BTN_XPOS_ORIGINAL;
    this.dialogDisp.mc_cross.visible = this.dialogDisp.mc_old_costs.visible = this.dialogDisp.mc_costs.visible = !e;
  };
  CastleAbstractPrimeSaleDialog.prototype.getCharacterName = function () {
    return u.ClientConstCharacter.CHARACTER_FULL_SIZE_ASSET_ARCHITECT;
  };
  CastleAbstractPrimeSaleDialog.prototype.updateCharacter = function () {
    var e = this.getCharacterName();
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_character);
    var t = new _.CastleGoodgameExternalClip(e, o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e), null, 0, false);
    var i = CastleAbstractPrimeSaleDialog.characterOffsets.get(e);
    if (i) {
      t.x = i.x;
      t.y = i.y;
      t.scaleX = i.scale;
      t.scaleY = i.scale;
    }
    var n = this.bindFunction(function () {
      this.dialogDisp.mc_character.addChild(t.asDisplayObject());
      if (CastleAbstractPrimeSaleDialog._initialBoundsLeft == -1) {
        CastleAbstractPrimeSaleDialog._initialBoundsLeft = c.int(this.dispBounds.left);
      }
      this.dispBounds.left = CastleAbstractPrimeSaleDialog._initialBoundsLeft - ((t.width * t.scaleX >> 1) - this.dialogDisp.mc_character.x);
      this.updatePosition();
      this.updateBackground();
    });
    if (t.isLoaded) {
      n();
    } else {
      t.clipLoaded.addOnce(n);
    }
  };
  CastleAbstractPrimeSaleDialog.prototype.onOkButton = function () {};
  CastleAbstractPrimeSaleDialog.prototype.onRemoveOffer = function (e) {};
  CastleAbstractPrimeSaleDialog.prototype.onRemoveSpecialEvent = function (e) {};
  CastleAbstractPrimeSaleDialog.prototype.getRemainingTime = function () {
    return 0;
  };
  Object.defineProperty(CastleAbstractPrimeSaleDialog.prototype, "isPrivateOffer", {
    get: function () {
      return r.instanceOfClass(this.properties, "CastlePrivateOfferDialogProperties");
    },
    enumerable: true,
    configurable: true
  });
  CastleAbstractPrimeSaleDialog.prototype.isOffer = function () {
    return false;
  };
  CastleAbstractPrimeSaleDialog.prototype.isEvent = function () {
    return false;
  };
  CastleAbstractPrimeSaleDialog.prototype.onCloseButton = function () {};
  CastleAbstractPrimeSaleDialog.NAME = "CastlePrimeSaleDialogExternal_H";
  CastleAbstractPrimeSaleDialog.SPECIAL_PRICE = "dialog_privateOffer_whaleChest_newPrice";
  CastleAbstractPrimeSaleDialog.SAVE_COSTS = "dialog_primeday_primesale_saveCosts";
  CastleAbstractPrimeSaleDialog.SHOW_ME_BTN_XPOS_ORIGINAL = 426;
  CastleAbstractPrimeSaleDialog.SHOW_ME_BTN_XPOS_CENTERED = 311;
  CastleAbstractPrimeSaleDialog._initialBoundsLeft = -1;
  return CastleAbstractPrimeSaleDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAbstractPrimeSaleDialog = f;
s.classImplementsInterfaces(f, "ICollectableRendererList");
var O = function () {
  return function CharacterOffset(e = 0, t = 0, i = 1) {
    this.x = 0;
    this.y = 0;
    this.scale = 0;
    this.x = e;
    this.y = t;
    this.scale = i;
  };
}();