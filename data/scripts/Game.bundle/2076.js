Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./84.js");
var s = require("./113.js");
var r = require("./487.js");
var l = createjs.Container;
var c = function (e) {
  function IsoViewLayers() {
    var t = this;
    t._isoLayers = new Map();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoViewLayers, e);
  IsoViewLayers.prototype.setNewRenderTarget = function (e) {
    this._renderTarget = e;
  };
  IsoViewLayers.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._transformLayer = this.destroyLayer(this._transformLayer);
    if (this._backgroundLayer) {
      this._backgroundLayer.removeAllChildren();
      if (this._backgroundLayer.parent) {
        this._backgroundLayer.parent.removeChild(this._backgroundLayer);
      }
    }
    u.CastleLayoutManager.getInstance().staticIsoObjectLayer.removeAllChildren();
    u.CastleLayoutManager.getInstance().renderBGStage();
    if (this._isoLayers != null) {
      for (var t = 0, i = Array.from(this._isoLayers.values()); t < i.length; t++) {
        var n = i[t];
        this.destroyLayer(n);
      }
    }
    this._isoLayers = new Map();
  };
  IsoViewLayers.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.reset();
    this._renderTarget = this.destroyLayer(this._renderTarget);
  };
  IsoViewLayers.prototype.setup = function () {
    e.prototype.setup.call(this);
    this.renderTarget.addChild(this._transformLayer = new l());
    this.transformLayer.name = "isoWorldTransformLayer";
    this._backgroundLayer = new l();
    u.CastleLayoutManager.getInstance().bgStage.addChild(this._backgroundLayer);
    this._backgroundLayer.name = "isoWorldBGLayer";
    this._staticIsoObjectLayer = u.CastleLayoutManager.getInstance().staticIsoObjectLayer;
    this._isoLayers = new Map();
    for (var t = 0, i = a.CastleEnum.getEnumListByClass(s.IsoLayerEnum); t < i.length; t++) {
      var n = i[t];
      var o = new l();
      if (this.isLayerForBackground(n)) {
        this._backgroundLayer.addChild(o);
      } else if (this.isLayerForStaticIsoObject(n)) {
        this._staticIsoObjectLayer.addChild(o);
      } else {
        this.transformLayer.addChild(o);
      }
      o.name = n.name + "Layer";
      this._isoLayers.set(n, o);
      switch (n.name) {
        case s.IsoLayerEnum.EXPAND_ARROWS.name:
        case s.IsoLayerEnum.EFFECT.name:
        case s.IsoLayerEnum.ISO_OBJECTS.name:
          break;
        default:
          o.tickChildren = o.tickEnabled = false;
      }
    }
    this.getIsoLayer(s.IsoLayerEnum.DEBUG).mouseEnabled = false;
    this.getIsoLayer(s.IsoLayerEnum.FOG).mouseEnabled = false;
  };
  IsoViewLayers.prototype.destroyLayer = function (e) {
    if (e) {
      e.removeChildren();
      e.updateCacheIfCached();
    }
    return null;
  };
  IsoViewLayers.prototype.toggleLayerVisibility = function (e) {
    var t = this.getIsoLayer(e);
    t.visible = !t.visible;
  };
  IsoViewLayers.prototype.getIsoLayer = function (e) {
    return this._isoLayers.get(e);
  };
  IsoViewLayers.prototype.isLayerForBackground = function (e) {
    switch (e) {
      case s.IsoLayerEnum.BACKGROUND:
      case s.IsoLayerEnum.GROUND:
      case s.IsoLayerEnum.GROUND_FILLER:
        return true;
    }
    return false;
  };
  IsoViewLayers.prototype.isLayerForStaticIsoObject = function (e) {
    switch (e) {
      case s.IsoLayerEnum.MOAT:
      case s.IsoLayerEnum.RESOURCE_FIELDS:
      case s.IsoLayerEnum.STATIC_SURROUNDINGS:
        return true;
    }
    return false;
  };
  IsoViewLayers.prototype.isUnderBuildingLayer = function (e) {
    if (e.parent) {
      switch (e.parent.name) {
        case s.IsoLayerEnum.BACKGROUND.name + "Layer":
        case s.IsoLayerEnum.GROUND.name + "Layer":
        case s.IsoLayerEnum.GROUND_FILLER.name + "Layer":
        case s.IsoLayerEnum.EXPAND_ARROWS.name + "Layer":
        case s.IsoLayerEnum.RESOURCE_FIELDS.name + "Layer":
        case s.IsoLayerEnum.STATIC_SURROUNDINGS.name + "Layer":
          return true;
      }
    }
    return e.stage == u.CastleLayoutManager.getInstance().bgStage;
  };
  Object.defineProperty(IsoViewLayers.prototype, "transformLayer", {
    get: function () {
      return this._transformLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewLayers.prototype, "backgroundLayer", {
    get: function () {
      return this._backgroundLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewLayers.prototype, "staticIsoObjectLayer", {
    get: function () {
      return this._staticIsoObjectLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewLayers.prototype, "renderTarget", {
    get: function () {
      return this._renderTarget;
    },
    enumerable: true,
    configurable: true
  });
  return IsoViewLayers;
}(r.AIsoViewComponent);
exports.IsoViewLayers = c;
var u = require("./17.js");
o.classImplementsInterfaces(c, "ICollectableRendererList");