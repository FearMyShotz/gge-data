Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function MayaEmporiumBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MayaEmporiumBuildingVE, e);
  Object.defineProperty(MayaEmporiumBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Emporium;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MayaEmporiumBuildingVE;
}(a.ABasicBuildingVE);
exports.MayaEmporiumBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");