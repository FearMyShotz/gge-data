Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./780.js");
var s = function (e) {
  function FactionGateGateVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionGateGateVE, e);
  Object.defineProperty(FactionGateGateVE.prototype, "isTransparent", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicGateVE.prototype, "isTransparent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionGateGateVE;
}(a.BasicGateVE);
exports.FactionGateGateVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");