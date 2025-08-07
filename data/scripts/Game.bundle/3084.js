Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function OilboostBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OilboostBuildingVE, e);
  Object.defineProperty(OilboostBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourOliveoil;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return OilboostBuildingVE;
}(a.ABasicBuildingVE);
exports.OilboostBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");