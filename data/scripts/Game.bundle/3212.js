Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./639.js");
var s = function (e) {
  function FactionLookoutTowerVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionLookoutTowerVE, e);
  Object.defineProperty(FactionLookoutTowerVE.prototype, "isTransparent", {
    get: function () {
      return false;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ATowerVE.prototype, "isTransparent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionLookoutTowerVE;
}(a.ATowerVE);
exports.FactionLookoutTowerVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");