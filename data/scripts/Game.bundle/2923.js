Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./145.js");
var s = require("./539.js");
var r = function (e) {
  function BarracksBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BarracksBuildingVE, e);
  BarracksBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (!this.statusIcons.isUpgradeIconActive) {
      if (this.unitProductionBuildingVO.isProductive) {
        this.statusIcons.addIcon(this.unitProductionBuildingVO.isFestivalActive ? l.IsoStatusIconEnum.PRODUCTIVE_FESTIVAL : l.IsoStatusIconEnum.PRODUCTIVE);
      } else if (!this.buildingVO.buildingState.isUnderConstruction) {
        this.statusIcons.addIcon(this.unitProductionBuildingVO.isFestivalActive ? l.IsoStatusIconEnum.UNPRODUCTIVE_FESTIVAL : l.IsoStatusIconEnum.UNPRODUCTIVE);
      }
    }
  };
  BarracksBuildingVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    if (this.buildingVO.level > 3) {
      this.additionalClips.addClips(a.IsoAdditionalClipEnum.BARRACK_FIRE, 12, 0.25);
    }
  };
  Object.defineProperty(BarracksBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Recruit;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AUnitProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return BarracksBuildingVE;
}(s.AUnitProductionBuildingVE);
exports.BarracksBuildingVE = r;
var l = require("./177.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");