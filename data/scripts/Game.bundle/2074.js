Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./84.js");
var l = require("./14.js");
var c = require("./92.js");
var u = function (e) {
  function IsoViewRenderer() {
    var t;
    var i;
    var n = this;
    n._components = new Map();
    n._isReady = false;
    CONSTRUCTOR_HACK;
    n = e.call(this) || this;
    for (var o = 0, s = IsoViewRenderer.componentTypeList; o < s.length; o++) {
      t = s[o];
      if (a.instanceOfClass(t, "IsoRenderComponentEnum")) {
        i = t;
        n._components.set(i, new i.componentClass());
      }
    }
    for (var r = 0, l = IsoViewRenderer.componentTypeList; r < l.length; r++) {
      t = l[r];
      if (a.instanceOfClass(t, "IsoRenderComponentEnum")) {
        i = t;
        n.getComponentByType(i).init(n);
      }
    }
    return n;
  }
  n.__extends(IsoViewRenderer, e);
  IsoViewRenderer.prototype.build = function (e, t) {
    var i;
    var n;
    this._isReady = false;
    this._isoData = e;
    this.objects.init(this);
    for (var o = 0, s = IsoViewRenderer.componentTypeList; o < s.length; o++) {
      i = s[o];
      if (a.instanceOfClass(i, "IsoRenderComponentEnum")) {
        n = i;
        this.getComponentByType(n).reset();
      }
    }
    this.layers.setNewRenderTarget(t);
    if (!h.Iso.controller.viewUpdater) {
      h.Iso.controller.registerViewUpdater();
    }
    for (var r = 0, u = IsoViewRenderer.componentTypeList; r < u.length; r++) {
      i = u[r];
      if (a.instanceOfClass(i, "IsoRenderComponentEnum")) {
        n = i;
        this.getComponentByType(n).setup();
      }
    }
    this.objects.render();
    h.Iso.controller.processor.executeCommand(new d.IsoCommandZSortAll());
    h.Iso.controller.processor.executeCommand(new d.IsoCommandZSortAll());
    this._isReady = true;
    l.CastleComponent.controller.dispatchEvent(new c.IsoEvent(c.IsoEvent.ON_RENDERER_READY));
  };
  IsoViewRenderer.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._isReady = false;
    h.Iso.controller.unregisterViewUpdater();
    for (var t = s.int(IsoViewRenderer.componentTypeList.length - 1); t >= 0; --t) {
      var i = IsoViewRenderer.componentTypeList[t];
      this.getComponentByType(i).destroy();
    }
  };
  IsoViewRenderer.prototype.getComponentByType = function (e) {
    return this.components.get(e);
  };
  Object.defineProperty(IsoViewRenderer.prototype, "layers", {
    get: function () {
      return this.getComponentByType(p.IsoRenderComponentEnum.LAYERS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "settings", {
    get: function () {
      return this.getComponentByType(p.IsoRenderComponentEnum.SETTINGS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "objects", {
    get: function () {
      return this.getComponentByType(p.IsoRenderComponentEnum.OBJECTS);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "camera", {
    get: function () {
      return this.getComponentByType(p.IsoRenderComponentEnum.CAMERA);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "mouse", {
    get: function () {
      return this.getComponentByType(p.IsoRenderComponentEnum.MOUSE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "strategies", {
    get: function () {
      return this.getComponentByType(p.IsoRenderComponentEnum.STRATEGY);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "components", {
    get: function () {
      return this._components;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewRenderer.prototype, "isReady", {
    get: function () {
      return this._isReady;
    },
    enumerable: true,
    configurable: true
  });
  IsoViewRenderer.__initialize_static_members = function () {
    IsoViewRenderer.componentTypeList = r.CastleEnum.getEnumListByClass(p.IsoRenderComponentEnum);
  };
  return IsoViewRenderer;
}(l.CastleComponent);
exports.IsoViewRenderer = u;
var d = require("./689.js");
var p = require("./2075.js");
var h = require("./33.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();