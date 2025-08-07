Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AttackScreenGeneralsTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AttackScreenGeneralsTrackingEvent, e);
  AttackScreenGeneralsTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this._playerId,
      details: this._details,
      sessionStart: this._sessionStart,
      sessionEnd: this._sessionEnd,
      attackLaunched: this._attackLaunched ? "TRUE" : "FALSE"
    };
    return e;
  };
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "details", {
    set: function (e) {
      this._details = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "sessionStart", {
    set: function (e) {
      this._sessionStart = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "sessionEnd", {
    set: function (e) {
      this._sessionEnd = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenGeneralsTrackingEvent.prototype, "attackLaunched", {
    set: function (e) {
      this._attackLaunched = e;
    },
    enumerable: true,
    configurable: true
  });
  AttackScreenGeneralsTrackingEvent.__initialize_static_members = function () {};
  return AttackScreenGeneralsTrackingEvent;
}(require("./2.js").BasicTrackingEvent);
exports.AttackScreenGeneralsTrackingEvent = o;
o.__initialize_static_members();