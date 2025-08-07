Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./488.js");
var s = function (e) {
  function StonecutterMovementVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StonecutterMovementVE, e);
  Object.defineProperty(StonecutterMovementVE.prototype, "workFrameRange", {
    get: function () {
      return [19, 35];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AIsoMovementVE.prototype, "workFrameRange").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return StonecutterMovementVE;
}(a.AIsoMovementVE);
exports.StonecutterMovementVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");