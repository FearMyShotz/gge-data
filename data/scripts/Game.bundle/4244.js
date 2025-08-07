Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function AttackScreenWaveTrackingEvent(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AttackScreenWaveTrackingEvent, e);
  AttackScreenWaveTrackingEvent.prototype.getVars = function () {
    var e = {
      playerId: this._playerId,
      date: this._date,
      numberWaves: this._numberWaves,
      actionType: this._actionType
    };
    return e;
  };
  Object.defineProperty(AttackScreenWaveTrackingEvent.prototype, "playerId", {
    set: function (e) {
      this._playerId = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenWaveTrackingEvent.prototype, "date", {
    set: function (e) {
      this._date = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenWaveTrackingEvent.prototype, "numberWaves", {
    set: function (e) {
      this._numberWaves = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttackScreenWaveTrackingEvent.prototype, "actionType", {
    set: function (e) {
      this._actionType = e;
    },
    enumerable: true,
    configurable: true
  });
  AttackScreenWaveTrackingEvent.__initialize_static_members = function () {
    AttackScreenWaveTrackingEvent.ACTION_PRESET_ONE_WAVE = "preset_one_wave";
    AttackScreenWaveTrackingEvent.ACTION_PRESET_ALL_WAVES = "preset_all_wave";
    AttackScreenWaveTrackingEvent.ACTION_AUTOFILL_ONE_WAVE = "autofill_one_wave";
    AttackScreenWaveTrackingEvent.ACTION_AUTOFILL_ALL_WAVES = "autofill_all_wave";
  };
  return AttackScreenWaveTrackingEvent;
}(require("./2.js").BasicTrackingEvent);
exports.AttackScreenWaveTrackingEvent = o;
o.__initialize_static_members();