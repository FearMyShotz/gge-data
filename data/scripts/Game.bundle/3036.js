Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = function (e) {
  function GuardpostBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GuardpostBuildingVE, e);
  Object.defineProperty(GuardpostBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Guards;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return GuardpostBuildingVE;
}(a.ABasicBuildingVE);
exports.GuardpostBuildingVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");