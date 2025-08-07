Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function () {
  function EffectValueSimple() {
    this._value = 0;
  }
  EffectValueSimple.prototype.parseFromValueString = function (e) {
    this._value = parseFloat(e);
    return this;
  };
  EffectValueSimple.prototype.parseFromValueArray = function (e) {
    this._value = parseFloat(e[0]);
    return this;
  };
  EffectValueSimple.prototype.add = function (e, t) {
    this._value = t ? Math.min(t[0], this._value + e.rawValues[0]) : this._value + e.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueSimple.prototype, "textReplacements", {
    get: function () {
      return [new a.LocalizedNumberVO(n.MathBase.round(Math.abs(this._value), 2), true, 2)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueSimple.prototype, "rawValues", {
    get: function () {
      return [this._value];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueSimple.prototype, "strength", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueSimple.prototype.clone = function () {
    return new EffectValueSimple().parseFromValueArray(this.rawValues);
  };
  EffectValueSimple.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  return EffectValueSimple;
}();
exports.EffectValueSimple = s;
o.classImplementsInterfaces(s, "IEffectValue");