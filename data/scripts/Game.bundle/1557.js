Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ADecoBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ADecoBuildingVE, e);
  Object.defineProperty(ADecoBuildingVE.prototype, "decoBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ADecoBuildingVE;
}(require("./62.js").ABasicBuildingVE);
exports.ADecoBuildingVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");