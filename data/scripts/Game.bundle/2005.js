Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./856.js");
var s = function (e) {
  function EffectValueUnitSpeedBoost() {
    return e.call(this) || this;
  }
  n.__extends(EffectValueUnitSpeedBoost, e);
  Object.defineProperty(EffectValueUnitSpeedBoost.prototype, "textReplacements", {
    get: function () {
      return [EffectValueUnitSpeedBoost.SHOWN_BOOSTUNITSPEED_VALUE];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.EffectValueWodID.prototype, "textReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EffectValueUnitSpeedBoost.__initialize_static_members = function () {
    EffectValueUnitSpeedBoost.SHOWN_BOOSTUNITSPEED_VALUE = 20;
  };
  return EffectValueUnitSpeedBoost;
}(a.EffectValueWodID);
exports.EffectValueUnitSpeedBoost = s;
s.__initialize_static_members();
o.classImplementsInterfaces(s, "IEffectValue");