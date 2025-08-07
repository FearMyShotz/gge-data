Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./113.js");
var c = require("./122.js");
var u = require("./313.js");
var d = createjs.Point;
var p = function (e) {
  function CastleGroundVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleGroundVE, e);
  CastleGroundVE.prototype.initElementContainer = function () {
    e.prototype.initElementContainer.call(this);
    this.elementContainer.mouseEnabled = true;
  };
  CastleGroundVE.prototype.onCameraZoomChanged = function () {};
  CastleGroundVE.prototype.onRenderStrategyChanged = function (e) {
    this.updateDisp();
  };
  Object.defineProperty(CastleGroundVE.prototype, "dispOffset", {
    get: function () {
      return new d();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AIsoObjectVE.prototype, "dispOffset").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleGroundVE.prototype.createDisp = function () {
    var e = this.groundVO.type;
    if (this.canUseIsoEventSkin()) {
      e += "_" + h.IsoHelper.view.getIsoEventSkinSuffix();
    }
    e += "_InnerBackground_" + this.groundVO.rotatedHeight + "x" + this.groundVO.rotatedWidth + this.getVariationSuffix();
    this.dispComponent.addClip(this._floorDisp = this.loadExternalClip(e));
    if (this.renderStrategy.currentStrategy.isActive(c.IsoRenderStrategyEnum.BUILD_MODE)) {
      var t = this.groundVO.type;
      if (this.canUseIsoEventSkin()) {
        t += "_" + h.IsoHelper.view.getIsoEventSkinSuffix();
      }
      t += "_Buildgrid_" + this.groundVO.rotatedWidth + "x" + this.groundVO.rotatedHeight;
      this.dispComponent.addClip(this.loadExternalClip(t));
    }
  };
  CastleGroundVE.prototype.destroyDisp = function () {
    this._floorDisp = null;
    e.prototype.destroyDisp.call(this);
  };
  CastleGroundVE.prototype.getVELayerType = function () {
    return l.IsoLayerEnum.GROUND;
  };
  Object.defineProperty(CastleGroundVE.prototype, "assetFileName", {
    get: function () {
      var e = "Backgrounds" + this.groundVO.type;
      if (this.canUseIsoEventSkin()) {
        e += "_" + h.IsoHelper.view.getIsoEventSkinSuffix();
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AIsoObjectVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleGroundVE.prototype.getVariationSuffix = function () {
    if (this.groundVO.rotatedWidth == 10 || this.groundVO.rotatedHeight == 10) {
      return "_" + r.int(new o.SimpleRandom(this.vo.isoData.areaData.areaInfo.objectId + this.groundVO.x + this.groundVO.y).nextInt(3) + 1);
    } else {
      return "";
    }
  };
  CastleGroundVE.prototype.canUseIsoEventSkin = function () {
    return h.IsoHelper.view.canUseIsoEventSkin() && h.IsoHelper.view.doesAssetFileExist("Backgrounds" + this.vo.type + "_" + h.IsoHelper.view.getIsoEventSkinSuffix());
  };
  CastleGroundVE.prototype.onAllDispClipsLoaded = function () {
    if (this._floorDisp) {
      this._floorDisp.scaleX = this._floorDisp.scaleY = 1.015;
    }
    e.prototype.onAllDispClipsLoaded.call(this);
  };
  CastleGroundVE.prototype.onSpecialEventUpdated = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_EVENT_SKIN) {
      this.updateDisp();
    }
  };
  Object.defineProperty(CastleGroundVE.prototype, "groundVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGroundVE;
}(u.AIsoObjectVE);
exports.CastleGroundVE = p;
var h = require("./46.js");
a.classImplementsInterfaces(p, "ICollectableRendererList", "IIngameUICapable");