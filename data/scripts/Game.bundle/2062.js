Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./87.js");
var r = function (e) {
  function IsoStatusIconProgressBarBuilding() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoStatusIconProgressBarBuilding, e);
  IsoStatusIconProgressBarBuilding.prototype.getDispFrame = function () {
    var e = 1;
    switch (this.buildingVE.buildingVO.buildingState) {
      case s.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        e = 1;
        break;
      case s.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        e = 2;
        break;
      case s.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
        e = 3;
        break;
      case s.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
        e = 4;
    }
    return e;
  };
  IsoStatusIconProgressBarBuilding.prototype.getBarText = function () {
    return o.TimeStringHelper.getShortTimeStringBySeconds(this.buildingVE.buildingVO.getTimeLeftForBuilding());
  };
  IsoStatusIconProgressBarBuilding.prototype.getBarFillFactor = function () {
    return this.buildingVE.buildingVO.getPercentCompletedForBuilding();
  };
  Object.defineProperty(IsoStatusIconProgressBarBuilding.prototype, "buildingVE", {
    get: function () {
      return this.ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoStatusIconProgressBarBuilding;
}(require("./696.js").AIsoStatusIconProgressBar);
exports.IsoStatusIconProgressBarBuilding = r;
a.classImplementsInterfaces(r, "ICollectableRendererList");