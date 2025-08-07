Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./293.js");
var s = require("./122.js");
var r = require("./457.js");
var l = createjs.Rectangle;
var c = function (e) {
  function MillBuildingVE() {
    var t = this;
    t._dispBoundsInitial = new l();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MillBuildingVE, e);
  MillBuildingVE.prototype.addBuildingClip = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName, this.assetFileName, this.getDispClipColor(), 6, p.CastleModel.gfxData.animationActive, u.IsoHelper.view.getBuildingPlaceHolderClass(this.vo.width, this.vo.height), false, 1, true));
  };
  Object.defineProperty(MillBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_BoostPerHourFood;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MillBuildingVE.prototype.getFlagStrings = function () {
    return ["flag", "flag0", "flag1", "flag2", "flag3", "flag4", "flag5"];
  };
  MillBuildingVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this._dispBoundsInitial = this._dispLayerBounds.clone();
    this.setFlagsFiltersCacheScale();
  };
  MillBuildingVE.prototype.setFlagsFiltersCacheScale = function () {
    if (this._buildingClip && this._buildingClip.clipColor && this._buildingClip.clipColor.length > 0) {
      for (var e = 0; e < this._buildingClip.clipColor.length; e++) {
        this._buildingClip.clipColor[e].filterCache = 2;
      }
    }
  };
  MillBuildingVE.prototype.onAnimationOptionChanged = function (t) {
    e.prototype.onAnimationOptionChanged.call(this, t);
    if (this.buildingClip) {
      if (u.IsoHelper.view.areAnimationsActive) {
        this.buildingClip.play();
      } else {
        this.buildingClip.stop();
      }
    }
  };
  Object.defineProperty(MillBuildingVE.prototype, "dispLayerBounds", {
    get: function () {
      if (this.isoRenderer.strategies.currentStrategy.isActive(s.IsoRenderStrategyEnum.BUILDING_GROUND_VIEW) && !this.layers.getLayer(a.IsoObjectLayerEnum.DISP).visible) {
        return Object.getOwnPropertyDescriptor(d.AIsoObjectVE.prototype, "dispLayerBounds").get.call(this);
      } else {
        return this._dispBoundsInitial;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AProductionBuildingVE.prototype, "dispLayerBounds").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MillBuildingVE;
}(r.AProductionBuildingVE);
exports.MillBuildingVE = c;
var u = require("./46.js");
var d = require("./313.js");
var p = require("./4.js");
o.classImplementsInterfaces(c, "ICollectableRendererList", "IIngameUICapable");