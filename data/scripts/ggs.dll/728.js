Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function FacebookUserEmailTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  i.__extends(FacebookUserEmailTrackingEvent, e);
  FacebookUserEmailTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this._playerId,
      _date: this._date,
      facebook_id: this._facebookId
    };
    if (this._email) {
      e.email = this._email;
    }
    return e;
  };
  Object.defineProperty(FacebookUserEmailTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserEmailTrackingEvent.prototype, "facebookId", {
    set: function (e) {
      this._facebookId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserEmailTrackingEvent.prototype, "email", {
    set: function (e) {
      this._email = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FacebookUserEmailTrackingEvent.prototype, "date", {
    set: function (e) {
      this._date = e;
    },
    enumerable: true,
    configurable: true
  });
  return FacebookUserEmailTrackingEvent;
}(require("./13.js").BasicTrackingEvent);
exports.FacebookUserEmailTrackingEvent = a;