Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./62.js");
var s = require("./538.js");
var r = function (e) {
  function ReinforcedVaultBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ReinforcedVaultBuildingVE, e);
  Object.defineProperty(ReinforcedVaultBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Btn_ReinforcedVault;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AUnitProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ReinforcedVaultBuildingVE;
}(a.ABasicBuildingVE);
exports.ReinforcedVaultBuildingVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");