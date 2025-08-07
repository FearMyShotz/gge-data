Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function () {
  function EffectValueDragonscaleArmor() {
    this._value = 0;
  }
  EffectValueDragonscaleArmor.prototype.parseFromValueString = function (e) {
    this._value = parseFloat(e);
    return this;
  };
  EffectValueDragonscaleArmor.prototype.parseFromValueArray = function (e) {
    this._value = parseFloat(e[0]);
    return this;
  };
  EffectValueDragonscaleArmor.prototype.add = function (e, t) {
    this._value = t ? Math.min(t[0], this._value + e.rawValues[0]) : this._value + e.rawValues[0];
    return this;
  };
  Object.defineProperty(EffectValueDragonscaleArmor.prototype, "textReplacements", {
    get: function () {
      return [new a.LocalizedNumberVO(n.MathBase.round(Math.abs(this._value), 1), true, 1), new a.LocalizedNumberVO(n.MathBase.round(Math.abs(this._value * 2), 1), true, 1)];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueDragonscaleArmor.prototype, "rawValues", {
    get: function () {
      return [this._value];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueDragonscaleArmor.prototype, "strength", {
    get: function () {
      return this._value;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueDragonscaleArmor.prototype.clone = function () {
    return new EffectValueDragonscaleArmor().parseFromValueArray(this.rawValues);
  };
  EffectValueDragonscaleArmor.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  return EffectValueDragonscaleArmor;
}();
exports.EffectValueDragonscaleArmor = s;
o.classImplementsInterfaces(s, "IEffectValue");