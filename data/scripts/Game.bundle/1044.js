Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./145.js");
var r = require("./781.js");
var l = function (e) {
  function CastlewallDefenceVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastlewallDefenceVE, e);
  CastlewallDefenceVE.prototype.onRenderStrategyChanged = function (e) {
    if (this.buildingClip) {
      this.buildingClip.cacheAsBitmap = false;
      this.updateRotation();
      this.updateColorChange();
      this.buildingClip.cacheAsBitmap = true;
    }
  };
  CastlewallDefenceVE.prototype.updateDisp = function () {
    if (this.elementContainer) {
      e.prototype.updateDisp.call(this);
      this.elementContainer.mouseEnabled = false;
    }
  };
  CastlewallDefenceVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName));
  };
  CastlewallDefenceVE.prototype.createAdditionalClips = function () {
    this.additionalClips.addClips(s.IsoAdditionalClipEnum.FLAG, 24, 1, true);
  };
  CastlewallDefenceVE.prototype.updateFlagVisibility = function () {
    if (this.dispComponent.isLoaded && (this.vo.rotation == 0 || this.vo.rotation == 1)) {
      var e = this.buildingClip.currentshownDisplayObject.getChildByName("flag");
      if (e) {
        if (this.vo.rotation == 0) {
          e.visible = this.vo.y % 2 == 0;
        } else if (this.vo.rotation == 1) {
          e.visible = this.vo.x % 2 == 0;
        }
      }
    }
  };
  CastlewallDefenceVE.prototype.updateRotation = function () {
    this.changeDispRotation(this.buildingClip, this.vo.rotation);
    this.updateFlagVisibility();
    this.updateDefenceDecor();
    this.dispComponent.updateCache();
  };
  CastlewallDefenceVE.prototype.switchDispFrame = function (t, i) {
    e.prototype.switchDispFrame.call(this, t, this.isTransparent ? i + 2 : i);
  };
  Object.defineProperty(CastlewallDefenceVE.prototype, "assetFileName", {
    get: function () {
      return "Castlewall" + this.getIsoEventSkinSkinSuffix(this.vo.isoData.objects.defences.currentWallLevel);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ADefenceBuildingVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlewallDefenceVE.prototype, "assetClipName", {
    get: function () {
      var e = a.int(this.vo.isoData.objects.defences.currentWallLevel);
      return "Basic_Castlewall_Level" + e + this.getIsoEventSkinSkinSuffix(e);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ADefenceBuildingVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastlewallDefenceVE.prototype.onAllDispClipsLoaded = function () {
    this.updateFlagVisibility();
    e.prototype.onAllDispClipsLoaded.call(this);
  };
  Object.defineProperty(CastlewallDefenceVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Wall;
    },
    enumerable: true,
    configurable: true
  });
  return CastlewallDefenceVE;
}(r.ADefenceBuildingVE);
exports.CastlewallDefenceVE = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");