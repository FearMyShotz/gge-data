Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function () {
  function EffectValueHiddenTreasures() {
    this._value = 0;
  }
  EffectValueHiddenTreasures.prototype.parseFromValueString = function (e) {
    this._value = parseFloat(e);
    return this;
  };
  EffectValueHiddenTreasures.prototype.parseFromValueArray = function (e) {
    this._value = parseFloat(e[0]);
    return this;
  };
  EffectValueHiddenTreasures.prototype.add = function (e, t) {
    this._value = t ? Math.min(t[0], this._value + e.rawValues[0]) : this._value + e.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueHiddenTreasures.prototype, "textReplacements", {
    get: function () {
      return [new a.LocalizedNumberVO(n.MathBase.round(Math.abs(this._value), 1), true, 1), new a.LocalizedNumberVO(n.MathBase.round(Math.abs(this._value), 1), true, 1)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueHiddenTreasures.prototype, "rawValues", {
    get: function () {
      return [this._value];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueHiddenTreasures.prototype, "strength", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueHiddenTreasures.prototype.clone = function () {
    return new EffectValueHiddenTreasures().parseFromValueArray(this.rawValues);
  };
  EffectValueHiddenTreasures.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  return EffectValueHiddenTreasures;
}();
exports.EffectValueHiddenTreasures = s;
o.classImplementsInterfaces(s, "IEffectValue");