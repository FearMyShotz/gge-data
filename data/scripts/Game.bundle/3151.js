Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./778.js");
var s = function (e) {
  function PalisadegateGateVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PalisadegateGateVE, e);
  Object.defineProperty(PalisadegateGateVE.prototype, "isTransparent", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicGateVE.prototype, "isTransparent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PalisadegateGateVE;
}(a.BasicGateVE);
exports.PalisadegateGateVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");