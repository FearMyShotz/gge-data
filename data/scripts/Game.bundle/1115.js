Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SsoUserMoveTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(SsoUserMoveTrackingEvent, e);
  SsoUserMoveTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this._playerId,
      date: this._date,
      actionType: this._actionType,
      login_method: this._login_method
    };
    return e;
  };
  Object.defineProperty(SsoUserMoveTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SsoUserMoveTrackingEvent.prototype, "date", {
    set: function (e) {
      this._date = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SsoUserMoveTrackingEvent.prototype, "actionType", {
    set: function (e) {
      this._actionType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SsoUserMoveTrackingEvent.prototype, "login_method", {
    set: function (e) {
      this._login_method = e;
    },
    enumerable: true,
    configurable: true
  });
  SsoUserMoveTrackingEvent.__initialize_static_members = function () {
    SsoUserMoveTrackingEvent.POPUP_SHOWN = "popup_shown";
    SsoUserMoveTrackingEvent.POPUP_CONFIRMED = "popup_confirmed";
    SsoUserMoveTrackingEvent.LOGIN_WITH_PASSWORD = "login_with_password";
    SsoUserMoveTrackingEvent.LOGIN_WITH_SSO = "login_with_sso";
  };
  return SsoUserMoveTrackingEvent;
}(require("./2.js").BasicTrackingEvent);
exports.SsoUserMoveTrackingEvent = o;
o.__initialize_static_members();