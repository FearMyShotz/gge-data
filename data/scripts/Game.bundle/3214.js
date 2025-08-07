Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1616.js");
var s = function (e) {
  function LookoutTowerVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LookoutTowerVE, e);
  Object.defineProperty(LookoutTowerVE.prototype, "isTransparent", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.GuardTowerVE.prototype, "isTransparent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return LookoutTowerVE;
}(a.GuardTowerVE);
exports.LookoutTowerVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");