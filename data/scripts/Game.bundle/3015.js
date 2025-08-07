Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1032.js");
var s = require("./303.js");
var r = function (e) {
  function FactionBarracksBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionBarracksBuildingVE, e);
  FactionBarracksBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    l.CastleComponent.controller.addEventListener(a.UnitPackageListEvent.PACKAGE_UPDATE, this.bindFunction(this.onPackageUpdate));
  };
  FactionBarracksBuildingVE.prototype.removeEventListener = function () {
    l.CastleComponent.controller.removeEventListener(a.UnitPackageListEvent.PACKAGE_UPDATE, this.bindFunction(this.onPackageUpdate));
    e.prototype.removeEventListener.call(this);
  };
  FactionBarracksBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (!this.statusIcons.isUpgradeIconActive) {
      if (this.unitProductionBuildingVO.isProductive) {
        this.statusIcons.addIcon(this.unitProductionBuildingVO.isFestivalActive ? u.IsoStatusIconEnum.PRODUCTIVE_FESTIVAL : u.IsoStatusIconEnum.PRODUCTIVE);
      } else if (!this.buildingVO.buildingState.isUnderConstruction) {
        this.statusIcons.addIcon(this.unitProductionBuildingVO.isFestivalActive ? u.IsoStatusIconEnum.UNPRODUCTIVE_FESTIVAL : u.IsoStatusIconEnum.UNPRODUCTIVE);
      }
    }
  };
  FactionBarracksBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new c.RingMenuButtonFactionBarracks());
    return t;
  };
  Object.defineProperty(FactionBarracksBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Recruit;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AFactionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionBarracksBuildingVE.prototype.onPackageUpdate = function (e) {
    this.updateStatusIcon();
  };
  Object.defineProperty(FactionBarracksBuildingVE.prototype, "unitProductionBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return FactionBarracksBuildingVE;
}(s.AFactionBuildingVE);
exports.FactionBarracksBuildingVE = r;
var l = require("./14.js");
var c = require("./3016.js");
var u = require("./177.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");