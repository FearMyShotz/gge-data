Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function () {
  function EffectValueMindClarity() {
    this._values = [];
  }
  EffectValueMindClarity.prototype.parseFromValueString = function (e) {
    this._values[0] = parseFloat(e);
    return this;
  };
  EffectValueMindClarity.prototype.parseFromValueArray = function (e) {
    this._values = e;
    return this;
  };
  EffectValueMindClarity.prototype.add = function (e, t) {
    this._values[0] = t ? Math.min(t[0], this._values[0] + e.rawValues[0]) : this._values[0] + e.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueMindClarity.prototype, "textReplacements", {
    get: function () {
      var e = n.MathBase.round(this._values[0], 1);
      var t = n.MathBase.round(this._values[1], 1);
      return [new a.LocalizedNumberVO(e, true, 1), new a.LocalizedNumberVO(n.MathBase.round(t, 1), true, 1)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueMindClarity.prototype, "rawValues", {
    get: function () {
      return this._values;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueMindClarity.prototype, "strength", {
    get: function () {
      return this._values[0];
    },
    enumerable: true,
    configurable: true
  });
  EffectValueMindClarity.prototype.clone = function () {
    return new EffectValueMindClarity().parseFromValueArray(this.rawValues);
  };
  EffectValueMindClarity.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  return EffectValueMindClarity;
}();
exports.EffectValueMindClarity = s;
o.classImplementsInterfaces(s, "IEffectValue");