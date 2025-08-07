Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./58.js");
var a = require("./255.js");
var s = require("./161.js");
var r = require("./4.js");
var l = require("./664.js");
var c = function (e) {
  function StatusIconTimelessSpecialOffer() {
    var t = e.call(this, "Btn_TimelessSpecialOffer", null, p.AOfferHubBaseStatusIcon.PRIORITY_GLOBAL_PRIME_TIME) || this;
    t.setTooltip("dialog_TimelessSpecialOffer_buttonTooltip");
    return t;
  }
  n.__extends(StatusIconTimelessSpecialOffer, e);
  StatusIconTimelessSpecialOffer.prototype.addEventListenerForVisibility = function () {
    r.CastleModel.globalOfferData.addEventListener(a.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    r.CastleModel.globalOfferData.addEventListener(a.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    this.controller.addEventListener(s.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onOfferEnded));
  };
  StatusIconTimelessSpecialOffer.prototype.removeEventListenerForVisibility = function () {
    r.CastleModel.globalOfferData.removeEventListener(a.CastleOfferDataEvent.OFFER_ENDED, this.bindFunction(this.onOfferEnded));
    r.CastleModel.globalOfferData.removeEventListener(a.CastleOfferDataEvent.OFFER_ADDED, this.bindFunction(this.onOfferAdded));
    this.controller.removeEventListener(s.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onOfferEnded));
  };
  StatusIconTimelessSpecialOffer.prototype.setVisibilityLoaded = function () {
    if (r.CastleModel.userData.userLevel < o.ClientConstLevelRestrictions.MIN_LEVEL_PRIMETIME) {
      this.hide();
    } else {
      this._currentOffer = r.CastleModel.globalOfferData.getActiveGlobalPrimeTimeOffer();
      if (this._currentOffer && this._currentOffer.isTimeless) {
        this.show();
      } else {
        this._currentOffer = r.CastleModel.globalOfferData.getActivePrivatePrimeTimeOffer();
        if (this._currentOffer && this._currentOffer.isTimeless) {
          this.show();
        } else {
          this.hide();
        }
      }
    }
  };
  StatusIconTimelessSpecialOffer.prototype.onClick = function () {
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleTimelessSpecialOfferDialog, new l.CastleOfferDialogProperties(this._currentOffer));
  };
  StatusIconTimelessSpecialOffer.prototype.onOfferEnded = function (e) {
    this.setVisibility();
  };
  StatusIconTimelessSpecialOffer.prototype.onOfferAdded = function (e) {
    this.setVisibility();
  };
  return StatusIconTimelessSpecialOffer;
}(require("./134.js").AOfferHubItemStatusIcon);
exports.StatusIconTimelessSpecialOffer = c;
var u = require("./9.js");
var d = require("./1733.js");
var p = require("./175.js");