Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function () {
  function EffectValueAyalaFalcon() {
    this._value = 0;
  }
  EffectValueAyalaFalcon.prototype.parseFromValueString = function (e) {
    this._value = parseFloat(e);
    return this;
  };
  EffectValueAyalaFalcon.prototype.parseFromValueArray = function (e) {
    this._value = parseFloat(e[0]);
    return this;
  };
  EffectValueAyalaFalcon.prototype.add = function (e, t) {
    this._value = t ? Math.min(t[0], this._value + e.rawValues[0]) : this._value + e.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueAyalaFalcon.prototype, "textReplacements", {
    get: function () {
      var e = n.MathBase.round(Math.abs(this._value), 1);
      return [e > 0 ? " " + a.Localize.text("generals_abilities_desc_upgrade_placeholder_1021", [e]) : ""];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueAyalaFalcon.prototype, "rawValues", {
    get: function () {
      return [this._value];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueAyalaFalcon.prototype, "strength", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueAyalaFalcon.prototype.clone = function () {
    return new EffectValueAyalaFalcon().parseFromValueArray(this.rawValues);
  };
  EffectValueAyalaFalcon.prototype.getContextTextReplacements = function (e) {
    if (typeof e == "string" && e.includes("generals_abilities_desc_short_value_")) {
      var t = n.MathBase.round(this._value, 1);
      return [t > 0 ? a.Localize.text("waveX", [t]) : a.Localize.text("preCombat")];
    }
    return this.textReplacements;
  };
  return EffectValueAyalaFalcon;
}();
exports.EffectValueAyalaFalcon = s;
o.classImplementsInterfaces(s, "IEffectValue");