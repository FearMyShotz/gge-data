Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./539.js");
var s = function (e) {
  function DworkshopBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DworkshopBuildingVE, e);
  DworkshopBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (!this.statusIcons.isUpgradeIconActive) {
      if (this.unitProductionBuildingVO.isProductive) {
        this.statusIcons.addIcon(r.IsoStatusIconEnum.PRODUCTIVE);
      } else if (!this.buildingVO.buildingState.isUnderConstruction) {
        this.statusIcons.addIcon(r.IsoStatusIconEnum.UNPRODUCTIVE);
      }
    }
  };
  Object.defineProperty(DworkshopBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_DWorkshop;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AUnitProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return DworkshopBuildingVE;
}(a.AUnitProductionBuildingVE);
exports.DworkshopBuildingVE = s;
var r = require("./177.js");
o.classImplementsInterfaces(s, "ICollectableRendererList", "IIngameUICapable");