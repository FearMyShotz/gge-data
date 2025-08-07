Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./303.js");
var s = function (e) {
  function FactionUnittentBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionUnittentBuildingVE, e);
  Object.defineProperty(FactionUnittentBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Units;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AFactionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionUnittentBuildingVE;
}(a.AFactionBuildingVE);
exports.FactionUnittentBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");