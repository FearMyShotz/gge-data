Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./303.js");
var s = function (e) {
  function FactionStableBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionStableBuildingVE, e);
  Object.defineProperty(FactionStableBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Horse;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AFactionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionStableBuildingVE;
}(a.AFactionBuildingVE);
exports.FactionStableBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");