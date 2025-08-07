Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./409.js");
var a = function () {
  function EffectValueTools() {}
  EffectValueTools.prototype.parseFromValueString = function (e) {
    this._tools = e.split("#");
    return this;
  };
  EffectValueTools.prototype.parseFromValueArray = function (e) {
    this._tools = e;
    return this;
  };
  EffectValueTools.prototype.add = function (e, t) {
    this._tools = e.rawValues;
    return this;
  };
  Object.defineProperty(EffectValueTools.prototype, "textReplacements", {
    get: function () {
      return [""];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueTools.prototype, "rawValues", {
    get: function () {
      return this._tools;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EffectValueTools.prototype, "strength", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  EffectValueTools.prototype.clone = function () {
    return new o.EffectValueSimple().parseFromValueArray(this.rawValues);
  };
  EffectValueTools.prototype.getContextTextReplacements = function (e) {
    return this.textReplacements;
  };
  return EffectValueTools;
}();
exports.EffectValueTools = a;
n.classImplementsInterfaces(a, "IEffectValue");