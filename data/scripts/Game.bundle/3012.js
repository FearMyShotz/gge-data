Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function EmporiumBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EmporiumBuildingVE, e);
  Object.defineProperty(EmporiumBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Emporium;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return EmporiumBuildingVE;
}(a.ABasicBuildingVE);
exports.EmporiumBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");