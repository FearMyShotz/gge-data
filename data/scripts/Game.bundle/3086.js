Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function PdwellingBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PdwellingBuildingVE, e);
  Object.defineProperty(PdwellingBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Population;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PdwellingBuildingVE;
}(a.ABasicBuildingVE);
exports.PdwellingBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");