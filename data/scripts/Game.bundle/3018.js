Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./303.js");
var s = function (e) {
  function FactionGuardpostBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionGuardpostBuildingVE, e);
  Object.defineProperty(FactionGuardpostBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Guards;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AFactionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionGuardpostBuildingVE;
}(a.AFactionBuildingVE);
exports.FactionGuardpostBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");