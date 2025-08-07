Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./122.js");
var r = require("./62.js");
var l = function (e) {
  function ADefenceBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ADefenceBuildingVE, e);
  ADefenceBuildingVE.prototype.updateDisp = function () {
    e.prototype.updateDisp.call(this);
    this.elementContainer.mouseEnabled = !this.isTransparent;
    this.updateDefenceDecor();
  };
  ADefenceBuildingVE.prototype.addScaffoldClip = function () {
    if (!this.renderStrategy.currentStrategy.isActive(s.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW)) {
      e.prototype.addScaffoldClip.call(this);
    }
  };
  ADefenceBuildingVE.prototype.createAdditionalClips = function () {
    if (!this.isTransparent) {
      e.prototype.createAdditionalClips.call(this);
    }
  };
  ADefenceBuildingVE.prototype.updateDefenceDecor = function () {
    if (this.buildingClip && this.buildingClip.currentshownDisplayObject && !this.isoRenderer.isoData.areaData.isSeasonCamp) {
      var e = c.castAs(this.buildingClip.currentshownDisplayObject.getChildByName("art"), "MovieClip");
      if (e) {
        e.gotoAndStop(this.isoRenderer.isoData.areaData.areaInfo.kingdomID + 1);
      }
    }
  };
  ADefenceBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    this.statusIcons.setVisibility(!this.isoRenderer.strategies.currentStrategy.isActive(s.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW));
  };
  ADefenceBuildingVE.prototype.showUpgradeableIconInBuildingGroundView = function () {
    return true;
  };
  Object.defineProperty(ADefenceBuildingVE.prototype, "isTransparent", {
    get: function () {
      return this.renderStrategy.currentStrategy.isActive(s.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
    },
    enumerable: true,
    configurable: true
  });
  ADefenceBuildingVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this.updateDefenceDecor();
  };
  ADefenceBuildingVE.prototype.getIsoEventSkinSkinSuffix = function (e = -1) {
    if (a.int(e != -1 ? e : this.vo.level) == 1 && u.IsoHelper.view.canUseIsoEventSkin() && u.IsoHelper.view.doesAssetFileExist("Castlewall_" + u.IsoHelper.view.getIsoEventSkinSuffix())) {
      return "_" + u.IsoHelper.view.getIsoEventSkinSuffix();
    } else {
      return "";
    }
  };
  Object.defineProperty(ADefenceBuildingVE.prototype, "buildingGroundIconClass", {
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return ADefenceBuildingVE;
}(r.ABasicBuildingVE);
exports.ADefenceBuildingVE = l;
var c = require("./1.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");
var u = require("./46.js");