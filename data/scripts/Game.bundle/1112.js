Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SocialButtonTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(SocialButtonTrackingEvent, e);
  SocialButtonTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this._playerId,
      date: this._date,
      buttonName: this._buttonName
    };
    return e;
  };
  Object.defineProperty(SocialButtonTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SocialButtonTrackingEvent.prototype, "date", {
    set: function (e) {
      this._date = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SocialButtonTrackingEvent.prototype, "buttonName", {
    set: function (e) {
      this._buttonName = e;
    },
    enumerable: true,
    configurable: true
  });
  SocialButtonTrackingEvent.__initialize_static_members = function () {
    SocialButtonTrackingEvent.BUTTON_NAME_DISCORD = "Discord";
    SocialButtonTrackingEvent.BUTTON_NAME_DISCORD_MAINTENANCE = "Maintenance";
  };
  return SocialButtonTrackingEvent;
}(require("./2.js").BasicTrackingEvent);
exports.SocialButtonTrackingEvent = o;
o.__initialize_static_members();