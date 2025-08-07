Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./225.js");
var s = createjs.Rectangle;
var r = createjs.DisplayObject;
var o = createjs.Point;
var l = createjs.MovieClip;
var u = createjs.Stage;
var c = createjs.Container;
var _ = createjs.Shape;
var d = require("./16.js");
i.getLogger(d.CREATEJS_UTILITIES_LOGGER);
Object.defineProperty(r.prototype, "transform", {
  get: function () {
    this._transform ||= new a.Transform(this);
    return this._transform;
  },
  enumerable: true,
  configurable: true
});
r.prototype.transformRect = function (e, t) {
  var n = [];
  var i = [];
  n[0] = e.x;
  i[0] = e.y;
  n[1] = n[0] + e.width;
  i[1] = i[0];
  n[2] = n[1];
  i[2] = i[0] + e.height;
  n[3] = n[0];
  i[3] = i[2];
  var a = Number.POSITIVE_INFINITY;
  var r = Number.POSITIVE_INFINITY;
  var l = Number.NEGATIVE_INFINITY;
  var u = Number.NEGATIVE_INFINITY;
  var c = new o();
  for (var _ = 0; _ < 4; _++) {
    this.localToLocal(n[_], i[_], t, c);
    var d = c.x;
    var m = c.y;
    if (d < a) {
      a = d;
    }
    if (d > l) {
      l = d;
    }
    if (m < r) {
      r = m;
    }
    if (m > u) {
      u = m;
    }
  }
  return new s(a, r, l - a, u - r);
};
var m = r.prototype.getBounds;
r.prototype.getBounds = function (e) {
  var t = m.apply(this);
  if (t) {
    if (e && e !== this) {
      return this.transformRect(t, e);
    } else {
      return t;
    }
  } else {
    return null;
  }
};
Object.defineProperty(r.prototype, "filters", {
  get: function () {
    return this._filters;
  },
  set: function (e) {
    this._filters = e;
  },
  enumerable: true,
  configurable: true
});
r.prototype.showFilter = function () {
  if (this.parent && this._filters && this._filters.length > 0) {
    var e = this.getBounds();
    if (e && e.width && e.height) {
      if (this.cacheCanvas) {
        this.updateCache();
      } else {
        this.cache(e.x, e.y, e.width, e.height, this.getDoCacheScale());
      }
    }
  }
};
r.prototype.removeFilter = function () {
  if (this.parent) {
    this.uncache();
  }
};
r.prototype.useFilters = function (e, t, n) {
  var i = this;
  if (t === undefined) {
    t = false;
  }
  if (n === undefined) {
    n = NaN;
  }
  if (this.filters || e) {
    if (this.filters && e) {
      if (this.filters.length === 0 && e.length === 0) {
        return;
      }
      if (this.filters.length === e.length) {
        var a = true;
        var s = 0;
        for (s = 0; s < this.filters.length && (a = a && this.filters[s].equals(e[s])); s++);
        if (a && this.cacheCanvas && this.cacheCanvas.width) {
          return;
        }
      }
    }
    this.filters = e;
    var r = this.cacheCanvas != null;
    if (e && e.length > 0) {
      var o = this.getBounds();
      if (o && o.width && o.height && (r ? this.updateCache() : (isNaN(n) && (n = this.getDoCacheScale()), this.cache(Math.floor(o.x), Math.floor(o.y), Math.ceil(o.width), Math.ceil(o.height), n)), !this._refToOnAddedClosure)) {
        function l() {
          if (!i.filters || !i.filters.length) {
            i.removeEventListener(createjs.Event.ADDED, l);
            i.uncache();
            i._refToOnAddedClosure = null;
            return;
          }
          if (i.cacheCanvas) {
            i.updateCache();
          } else {
            if (isNaN(n)) {
              n = i.getDoCacheScale();
            }
            i.cache(Math.floor(o.x), Math.floor(o.y), Math.ceil(o.width), Math.ceil(o.height), n);
          }
        }
        this._refToOnAddedClosure = this.addEventListener(createjs.Event.ADDED, l);
      }
    } else {
      if (t && r) {
        this.updateCache();
      } else {
        this.uncache();
      }
      if (this._refToOnAddedClosure) {
        this.off(createjs.Event.ADDED, this._refToOnAddedClosure);
        this._refToOnAddedClosure = null;
      }
    }
  }
};
Object.defineProperty(createjs.Bitmap.prototype, "_refToOnAddedClosure", {
  value: "",
  enumerable: true,
  configurable: true,
  writable: true
});
createjs.DisplayObject.prototype.getDoCacheScale = function () {
  var e = 1;
  switch (createjs.DisplayObject.doCacheScalingMode) {
    case createjs.DisplayObject.DOCACHE_SCALING_MODE_BY_STAGE:
      var t = this.stage ? this.stage : window ? window.gamestage : null;
      if (t) {
        e = Math.ceil(t.scaleX);
      }
      break;
    case createjs.DisplayObject.DOCACHE_SCALING_MODE_BY_ALL_PARENTS:
      for (var n = this.parent && this.parent.scaleX != undefined ? this.parent : null; n != null;) {
        e *= n.scaleX;
        n = n.parent && n.parent.scaleX != undefined ? n.parent : null;
      }
      e = Math.ceil(e);
  }
  return e;
};
r.prototype.updateCacheIfCached = function (e = 1) {
  if (this.cacheCanvas) {
    this.doCache(0, e);
  }
};
createjs.DisplayObject.DOCACHE_SCALING_MODE_DEFAULT = 0;
createjs.DisplayObject.DOCACHE_SCALING_MODE_BY_STAGE = 1;
createjs.DisplayObject.DOCACHE_SCALING_MODE_BY_ALL_PARENTS = 2;
createjs.DisplayObject.doCacheScalingMode = 0;
createjs.DisplayObject.setDoCacheScalingMode = function (e = createjs.DisplayObject.DOCACHE_SCALING_MODE_DEFAULT) {
  createjs.DisplayObject.doCacheScalingMode = e;
};
r.prototype.doCache = function (e = 0, t = NaN) {
  if (this.cacheCanvas) {
    this.uncache();
  }
  var n = this.getBounds();
  if (isNaN(t)) {
    t = this.getDoCacheScale();
  }
  if (n && n.width && n.height) {
    if (e !== 0) {
      n.x -= e;
      n.y -= e;
      n.width += e * 2;
      n.height += e * 2;
    }
    this.cache(Math.floor(n.x), Math.floor(n.y), Math.ceil(n.width), Math.ceil(n.height), t);
  }
};
r.prototype.getRect = function (e) {
  return this.getBounds(e);
};
var h = r.prototype.globalToLocal;
r.prototype.globalToLocal = function (e, t, n) {
  if (e instanceof o) {
    return h.apply(this, [e.x, e.y]);
  } else {
    return h.apply(this, [e, t, n]);
  }
};
var p = r.prototype.localToGlobal;
r.prototype.localToGlobal = function (e, t, n) {
  if (e instanceof o) {
    return p.apply(this, [e.x, e.y]);
  } else {
    return p.apply(this, [e, t, n]);
  }
};
r.prototype.getScale9GridDiff = function () {
  var e = this.getBounds();
  var t = this.__scale9Grid.left + e.width - this.__scale9Grid.right;
  var n = this.__scale9Grid.top + e.height - this.__scale9Grid.bottom;
  var i = {};
  if (this.width < t) {
    i.left = e.left;
    i.right = e.right;
  }
  if (this.height < n) {
    i.top = e.top;
    i.bottom = e.bottom;
  }
  return i;
};
r.prototype.adjustScale9Grid = function () {
  this.__scale9Grid ||= this.scale9Grid.clone();
  var e = this.getScale9GridDiff();
  if (Object.keys(e).length) {
    this.scale9Grid = Object.assign(this.scale9Grid, e);
  } else {
    this.scale9Grid = this.__scale9Grid.clone();
  }
};
Object.defineProperty(r.prototype, "width", {
  get: function () {
    var e = this.getBounds();
    if (e) {
      return Math.abs(e.width * this.scaleX);
    } else {
      return 0;
    }
  },
  set: function (e) {
    if (!(e < 0)) {
      var t = this.getBounds();
      if (!t) {
        throw new Error("Trying to change width while bounds are not defined");
      }
      if (t.width) {
        this.scaleX = e / t.width;
      }
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(r.prototype, "sliceCompensation", {
  get: function () {
    return this._sliceCompensation;
  },
  set: function (e) {
    this._sliceCompensation = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(r.prototype, "height", {
  get: function () {
    var e = this.getBounds();
    if (e) {
      return Math.abs(e.height * this.scaleY);
    } else {
      return 0;
    }
  },
  set: function (e) {
    if (!(e < 0)) {
      var t = this.getBounds();
      if (!t) {
        throw new Error("Trying to change height while bounds are not defined");
      }
      if (t.height) {
        this.scaleY = e / t.height;
      }
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(r.prototype, "scaleX", {
  get: function () {
    return this._scaleX;
  },
  set: function (e) {
    this._scaleX = e;
    if (this.scale9Grid) {
      this.adjustScale9Grid();
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(r.prototype, "scaleY", {
  get: function () {
    return this._scaleY;
  },
  set: function (e) {
    this._scaleY = e;
    if (this.scale9Grid) {
      this.adjustScale9Grid();
    }
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(r.prototype, "usedAsMask", {
  get: function () {
    return this._usedAsMask !== undefined && this._usedAsMask;
  },
  set: function (e) {
    this._usedAsMask = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(r.prototype, "mask", {
  get: function () {
    return this._mask;
  },
  set: function (e) {
    if (e) {
      if (e !== this._mask) {
        e.visible = false;
        e._usedAsMask = true;
        if (this._mask) {
          this._mask._usedAsMask = false;
        }
        if (e instanceof _) {
          this._mask = e;
        } else if (e.graphics && e.graphics.instructions.length > 0) {
          this._mask = e;
        } else if (e instanceof l) {
          var t = e._createMaskShape();
          if (this === e.parent) {
            t.x = this.x;
            t.y = this.y;
          }
          this._mask = t;
        } else if (e.getBounds) {
          var n = function (e) {
            var t = e.getBounds();
            var n = new _();
            var i = isNaN(e.useAsMaskCornerRadius) ? 7 : e.useAsMaskCornerRadius;
            n.setBounds(t.x, t.y, e.width, e.height);
            n.graphics.f("#000000").drawRoundRect(t.x + e.x, t.y + e.y, e.width, e.height, i);
            n.visible = false;
            n.usedAsMask = true;
            n.name = "fakeMask";
            return n;
          }(e);
          if (this === e.parent) {
            n.x = this.x;
            n.y = this.y;
          }
          this._mask = n;
        }
      }
    } else {
      this._mask = e;
    }
  },
  enumerable: true,
  configurable: true
});
r.prototype.removed = function () {
  this.dispatchEvent(new createjs.Event("removed", false, false));
  this.parent = null;
  this.childrenRemovedStage();
};
r.prototype.childrenRemovedStage = function () {
  if (this.children) {
    var e = this.children;
    for (var t = 0, n = e.length; t < n; t++) {
      if (e[t] != null && e[t].added) {
        e[t].childrenRemovedStage();
      }
    }
  }
  if (this._stage) {
    this.dispatchEvent(new createjs.Event(createjs.Event.REMOVED_FROM_STAGE, false, false));
    this._stage = null;
  }
};
r.prototype.added = function () {
  this.dispatchEvent(new createjs.Event(createjs.Event.ADDED, true, true));
  this.checkAddedStage();
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
};
var g = r.prototype.addEventListener;
r.prototype.addEventListener = function (e, t, n) {
  return g.apply(this, [e, t, n]);
};
r.prototype.checkAddedStage = function () {
  var e = this;
  var t = this.stage;
  if (t) {
    this._stage = t;
    this.dispatchEvent(new createjs.Event(createjs.Event.ADDED_TO_STAGE, false, false));
  }
  if (!this._hasUncacheListener) {
    function n() {
      if (e.cacheCanvas) {
        e.uncache();
        if (e.filters && e.filters.length > 0) {
          e.filters = [];
        }
      }
      e.removeEventListener(createjs.Event.REMOVED_FROM_STAGE, n);
      e._hasUncacheListener = false;
    }
    this.addEventListener(createjs.Event.REMOVED_FROM_STAGE, n);
    this._hasUncacheListener = true;
  }
  if (this.children) {
    var i = this.children;
    for (var a = 0, s = i.length; a < s; a++) {
      if (i[a].added) {
        i[a].checkAddedStage();
      }
    }
  }
};
r.prototype.hitTestPoint = function (e, t, n = false) {
  var i = this.globalToLocal(new o(e, t));
  return this.hitTest(i.x, i.y);
};
r.prototype.hitTestObject = function (e) {
  var t = this.localToGlobal(0, 0);
  var n = new s(t.x, t.y, this.width, this.height);
  var i = e.localToGlobal(0, 0);
  var a = new s(i.x, i.y, e.width, e.height);
  return n.intersects(a);
};
r.prototype.getFilterBounds = function () {
  return this._getFilterBounds();
};
r.prototype.globalToLocal3D = function (e) {
  return null;
};
Object.defineProperty(r.prototype, "blendShader", {
  get: function () {
    throw new Error("blendShader has only setter");
  },
  set: function (e) {
    this._blendShader = e;
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(r.prototype, "root", {
  get: function () {
    return null;
  },
  set: function (e) {
    throw new Error("root has only getter");
  },
  enumerable: true,
  configurable: true
});
Object.defineProperty(r.prototype, "autoAlpha", {
  get: function () {
    return this.alpha;
  },
  set: function (e) {
    this.alpha = e;
    this.visible = !!e;
  },
  enumerable: true,
  configurable: true
});
r.prototype.countCachedCanvas = function (e = {
  total: 0,
  underCacheTotal: 0
}, t = false) {
  if (this.cacheCanvas) {
    e.total++;
    if ((!this.filters || this.filters.length === 0) && !!t) {
      e.underCacheTotal++;
    }
  }
  if (this instanceof c) {
    var n = t || !!this.cacheCanvas;
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].countCachedCanvas(e, n);
    }
  }
  return e;
};
r.prototype.clearCacheUnderCache = function (e = false) {
  var t = e || !!this.cacheCanvas;
  if (!!e && (!this.filters || this.filters.length === 0) && !!this.cacheCanvas) {
    this.uncache();
  }
  if (this instanceof c) {
    for (var n = 0; n < this.children.length; n++) {
      this.children[n].clearCacheUnderCache(t);
    }
  }
};
var E = r.prototype.uncache;
r.prototype.uncache = function () {
  if (this.cacheCanvas) {
    this.cacheCanvas.width = this.cacheCanvas.height = 0;
  }
  E.call(this);
};
r.prototype._applyFilters = function () {
  if (this.filters && this.filters.length !== 0 && this.cacheCanvas && !(this instanceof createjs.TextField)) {
    var e = this.filters.length;
    var t = this.getCanvasContext(this.cacheCanvas);
    var n = this.cacheCanvas.width;
    var i = this.cacheCanvas.height;
    t._filterOffsetX = this._filterOffsetX;
    t._filterOffsetY = this._filterOffsetY;
    t._cacheOffsetX = this._cacheOffsetX;
    t._cacheOffsetY = this._cacheOffsetY;
    try {
      if (this.allowFastGlow !== false) {
        t._doFastGlow = true;
        t._cacheScale = this._cacheScale;
      }
      for (var a = 0; a < e; a++) {
        this.filters[a].applyFilter(t, 0, 0, n, i);
      }
    } catch (e) {}
  }
};
Object.defineProperty(r.prototype, "showDebugBounds", {
  get: function () {
    return !!this._debugBoundsRectangle;
  },
  set: function (e) {
    if (e && !this._debugBoundsRectangle) {
      if (!this.parent) {
        throw new Error("Can't show debug rectangle since parent is undefined");
      }
      var t = this.getBounds();
      if (!t || !t.width || !t.height) {
        throw new Error("Can't show debug rectangle since bounds is 0");
      }
      this._debugBoundsRectangle = new _();
      this._debugBoundsRectangle.name = (this.name || this.id) + "_debugBoundsRectangle";
      this._debugBoundsRectangle.graphics.beginStroke("#FF0000").drawRect(0, 0, t.width, t.height).mt(0, 0).bf("#0000FF").dc(0, 0, 5).ef().endStroke();
      this._debugBoundsRectangle.x = this.x;
      this._debugBoundsRectangle.y = this.y;
      this.parent.addChild(this._debugBoundsRectangle);
    } else if (!e && this._debugBoundsRectangle) {
      this.parent.removeChild(this._debugBoundsRectangle);
      this._debugBoundsRectangle = null;
    }
  },
  enumerable: true,
  configurable: true
});
r.prototype.getConcatenatedMatrix = function (e) {
  var t = this;
  var n = this.getMatrix(e);
  for (this instanceof u && n.scale(1 / this.scaleX, 1 / this.scaleY); t = t.parent;) {
    if (!(t instanceof u)) {
      n.prependMatrix(t.getMatrix(t._props.matrix));
    }
  }
  return n;
};
r.prototype.isInContainer = function (e) {
  for (var t = this.parent; t;) {
    if (t === e) {
      return true;
    }
    t = t.parent;
  }
  return false;
};
createjs.DisplayObject.defaultCenterHittestArea = 0;