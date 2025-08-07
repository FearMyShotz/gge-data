Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./303.js");
var s = function (e) {
  function FactionHuntertentBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionHuntertentBuildingVE, e);
  Object.defineProperty(FactionHuntertentBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Food;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AFactionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionHuntertentBuildingVE;
}(a.AFactionBuildingVE);
exports.FactionHuntertentBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");