Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function ASlumBuildingPartVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ASlumBuildingPartVE, e);
  Object.defineProperty(ASlumBuildingPartVE.prototype, "parentVE", {
    get: function () {
      return this._parentVE;
    },
    set: function (e) {
      this._parentVE = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ASlumBuildingPartVE.prototype, "partVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  ASlumBuildingPartVE.prototype.preCacheGlow = function () {
    if (this.dispComponent.isLoaded) {
      this.addGlow();
      this.removeGlow();
    } else {
      this.dispComponent.onLoadedSignal.addOnce(this.bindFunction(this.preCacheGlow));
    }
  };
  return ASlumBuildingPartVE;
}(require("./194.js").ASurroundingBuildingVE);
exports.ASlumBuildingPartVE = a;
o.classImplementsInterfaces(a, "ICollectableRendererList", "IIngameUICapable");