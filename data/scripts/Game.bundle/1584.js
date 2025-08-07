Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2991.js");
var s = require("./1535.js");
var r = require("./4.js");
var l = require("./87.js");
var c = function (e) {
  function AMineBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AMineBuildingVE, e);
  AMineBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    r.CastleModel.mineData.addEventListener(s.MineStateUpdateEvent.STATE_UPDATE, this.bindFunction(this.onMineStatusUpdated));
  };
  AMineBuildingVE.prototype.removeEventListener = function () {
    r.CastleModel.mineData.removeEventListener(s.MineStateUpdateEvent.STATE_UPDATE, this.bindFunction(this.onMineStatusUpdated));
    e.prototype.removeEventListener.call(this);
  };
  AMineBuildingVE.prototype.createStatusIcons = function () {
    if (this.buildingVO.buildingState.isUnderConstruction) {
      e.prototype.createStatusIcons.call(this);
    } else if (this.mineBuildingVO.isFull) {
      this.statusIcons.addIcon(this.statusIconFull);
    }
  };
  Object.defineProperty(AMineBuildingVE.prototype, "statusIconFull", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  AMineBuildingVE.prototype.onMouseClick = function () {
    if (this.mineBuildingVO.canBeCollected) {
      var e = {
        OID: this.vo.objectId
      };
      r.CastleModel.mineData.collectMine(this.vo.objectId);
      r.CastleModel.smartfoxClient.sendCommandVO(new a.C2SCollectMineResources(e));
    }
  };
  AMineBuildingVE.prototype.onMineStatusUpdated = function (e) {
    if (this.mineBuildingVO.mineStateChanged() && this.buildingVO.buildingState == l.IsoBuildingStateEnum.BUILD_COMPLETED) {
      this.updateDisp();
    }
    if (this.mineBuildingVO.canBeCollected && this.hasRingMenu) {
      this.isoRenderer.mouse.deselectTarget();
    }
  };
  AMineBuildingVE.prototype.onHoverTarget = function () {
    if (!!this.mineBuildingVO.isCharging && !this.buildingVO.buildingState.isInProgress && !this.buildingVO.buildingState.isUnderConstruction) {
      this.statusIcons.removeAllIcons();
      this.statusIcons.addIcon(u.IsoStatusIconEnum.PROGRESS_BAR_MINE);
    }
  };
  AMineBuildingVE.prototype.onUnHoverTarget = function () {
    this.updateStatusIcon();
  };
  Object.defineProperty(AMineBuildingVE.prototype, "mineBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return AMineBuildingVE;
}(require("./62.js").ABasicBuildingVE);
exports.AMineBuildingVE = c;
var u = require("./177.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "IIngameUICapable");