Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function StableBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StableBuildingVE, e);
  Object.defineProperty(StableBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Horse;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return StableBuildingVE;
}(a.ABasicBuildingVE);
exports.StableBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");