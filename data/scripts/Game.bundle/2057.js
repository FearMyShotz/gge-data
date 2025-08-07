Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./84.js");
var s = require("./14.js");
var r = require("./293.js");
var l = createjs.Container;
var c = createjs.Event;
var u = function (e) {
  function IsoObjectLayerManager() {
    var t = this;
    t._layerDic = new Map();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoObjectLayerManager, e);
  IsoObjectLayerManager.prototype.init = function (e) {
    this._ve = e;
    this.createLayers();
  };
  IsoObjectLayerManager.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this.destroyLayers();
  };
  IsoObjectLayerManager.prototype.createLayers = function () {
    for (var e = 0, t = a.CastleEnum.getEnumListByClass(r.IsoObjectLayerEnum); e < t.length; e++) {
      var i = t[e];
      var n = new l();
      if (i == r.IsoObjectLayerEnum.DISP) {
        this.ve.elementContainer.addChild(n);
      } else {
        n.addEventListener(c.ADDED, this.bindFunction(this.onAddedToLayer));
      }
      n.name = i.name + "Layer";
      this.layerDic.set(i, n);
    }
  };
  IsoObjectLayerManager.prototype.onAddedToLayer = function (e) {
    e.target.removeEventListener(c.ADDED, this.bindFunction(this.onAddedToLayer));
    this.ve.elementContainer.addChild(e.currentTarget);
    this.sortLayers();
  };
  IsoObjectLayerManager.prototype.sortLayers = function () {
    var e = 0;
    for (var t = 0, i = a.CastleEnum.getEnumListByClass(r.IsoObjectLayerEnum); t < i.length; t++) {
      var n = i[t];
      var o = this.layerDic.get(n);
      if (o.parent) {
        o.parent.setChildIndex(o, e++);
      }
    }
  };
  IsoObjectLayerManager.prototype.destroyLayers = function () {
    for (var e = 0, t = a.CastleEnum.getEnumListByClass(r.IsoObjectLayerEnum); e < t.length; e++) {
      var i = t[e];
      var n = this.getLayer(i);
      n.removeEventListener(c.ADDED, this.bindFunction(this.onAddedToLayer));
      this.ve.elementContainer.removeChild(n);
    }
    this._layerDic = new Map();
  };
  IsoObjectLayerManager.prototype.getLayer = function (e) {
    return this.layerDic.get(e);
  };
  Object.defineProperty(IsoObjectLayerManager.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoObjectLayerManager.prototype, "layerDic", {
    get: function () {
      return this._layerDic;
    },
    enumerable: true,
    configurable: true
  });
  return IsoObjectLayerManager;
}(s.CastleComponent);
exports.IsoObjectLayerManager = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");