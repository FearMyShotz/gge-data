Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function () {
  function EffectValueLongbows() {
    this._value = 0;
  }
  EffectValueLongbows.prototype.parseFromValueString = function (e) {
    this._value = parseFloat(e);
    return this;
  };
  EffectValueLongbows.prototype.parseFromValueArray = function (e) {
    this._value = parseFloat(e[0]);
    return this;
  };
  EffectValueLongbows.prototype.add = function (e, t) {
    this._value = t ? Math.min(t[0], this._value + e.rawValues[0]) : this._value + e.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueLongbows.prototype, "textReplacements", {
    get: function () {
      return [new a.LocalizedNumberVO(n.MathBase.round(Math.abs(this._value), 1), true, 1), new a.LocalizedNumberVO(n.MathBase.round(Math.abs(this._value * 0.1), 1), true, 1)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueLongbows.prototype, "rawValues", {
    get: function () {
      return [this._value];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueLongbows.prototype, "strength", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueLongbows.prototype.clone = function () {
    return new EffectValueLongbows().parseFromValueArray(this.rawValues);
  };
  EffectValueLongbows.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  return EffectValueLongbows;
}();
exports.EffectValueLongbows = s;
o.classImplementsInterfaces(s, "IEffectValue");