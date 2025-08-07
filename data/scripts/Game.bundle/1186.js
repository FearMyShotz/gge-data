Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./6.js");
var l = require("./55.js");
var c = require("./105.js");
var u = require("./92.js");
var d = require("./488.js");
var p = require("./2055.js");
var h = createjs.Point;
var g = createjs.Rectangle;
var C = function (e) {
  function IsoViewCamera() {
    var t = this;
    t._isActive = true;
    t._currentZoomIndex = 0;
    t._scrollBounds = new g();
    t._cameraBounds = new g();
    t._currentScrollPos = new h();
    t._shakeFactor = 0;
    t._shakeOffset = new h();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoViewCamera, e);
  IsoViewCamera.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._isActive = true;
  };
  IsoViewCamera.prototype.setup = function () {
    e.prototype.setup.call(this);
    this._backgroundLayer = this.isoRenderer.layers.backgroundLayer;
    this._staticIsoObjectLayer = this.isoRenderer.layers.staticIsoObjectLayer;
    this._schedule = this._schedule || new p.IsoViewScaleScheduler(this);
    this._currentZoomIndex = 0;
    this._forceNextScroll = true;
    this.calcScreenDimension();
    this.calcScrollBounds();
    this.calcCameraBounds();
    this.zoomToDefault();
    this.scrollToCenter();
  };
  IsoViewCamera.prototype.calcScrollBounds = function () {
    var e = this.isoRenderer.isoData.grid.origins;
    var t = new g();
    t.top = this.getScreenPosByGridPos(e.getOriginPos(c.IsoGridOriginEnum.TOP_CORNER)).y;
    t.bottom = this.getScreenPosByGridPos(e.getOriginPos(c.IsoGridOriginEnum.BOTTOM_CORNER)).y;
    t.left = this.getScreenPosByGridPos(e.getOriginPos(c.IsoGridOriginEnum.LEFT_CORNER)).x;
    t.right = this.getScreenPosByGridPos(e.getOriginPos(c.IsoGridOriginEnum.RIGHT_CORNER)).x;
    var i = this.isoRenderer.settings.scrollBounds;
    var n = this.isoRenderer.settings.minScrollBounds;
    this.scrollBounds.top = o.MathBase.min(n.top, t.top + i.top);
    this.scrollBounds.bottom = o.MathBase.max(n.bottom, t.bottom + i.bottom);
    this.scrollBounds.left = o.MathBase.min(n.left, t.left + i.left);
    this.scrollBounds.right = o.MathBase.max(n.right, t.right + i.right);
  };
  IsoViewCamera.prototype.calcCameraBounds = function () {
    var e = Math.ceil(IsoViewCamera.screenDimension.x * 0.5 / this.getCurrentZoomValue());
    var t = Math.ceil(IsoViewCamera.screenDimension.y * 0.5 / this.getCurrentZoomValue());
    this.cameraBounds.left = this.scrollBounds.left + e;
    this.cameraBounds.right = this.scrollBounds.right - e;
    this.cameraBounds.top = this.scrollBounds.top + t;
    this.cameraBounds.bottom = this.scrollBounds.bottom - t;
  };
  IsoViewCamera.prototype.calcScreenDimension = function () {
    var e = E.IsoHelper.view.stage;
    IsoViewCamera._screenDimension.x = e.stageWidth;
    IsoViewCamera._screenDimension.y = e.stageHeight;
  };
  IsoViewCamera.prototype.zoomRel = function (e, t = false) {
    if (this.isActive || t) {
      var i = e > 0 ? 1 : -1;
      if (i == IsoViewCamera.ZOOM_OUT) {
        if (this.canZoomOut) {
          this._currentZoomIndex += IsoViewCamera.ZOOM_OUT;
          this.updateScale();
        } else {
          this.scrollToCenter();
        }
      } else if (i == IsoViewCamera.ZOOM_IN && this.canZoomIn) {
        this._currentZoomIndex += IsoViewCamera.ZOOM_IN;
        this.updateScale();
      }
    }
  };
  IsoViewCamera.prototype.zoomAbs = function (e) {
    if (this.isActive) {
      this._currentZoomIndex = r.int(o.MathBase.clamp(e, 0, this.getMaxZoomOutIndex()));
      this.updateScale();
    }
  };
  IsoViewCamera.prototype.zoomMaxIn = function () {
    this.zoomAbs(0);
  };
  IsoViewCamera.prototype.zoomMaxOut = function () {
    this.zoomAbs(this.getMaxPossibleZoomOutIndex());
  };
  IsoViewCamera.prototype.zoomToDefault = function () {
    var e = this.getMaxPossibleZoomOutIndex();
    var t = r.int(O.IsoConst.CAMERA_ZOOM_DEFAULT_INDEX > e ? e : O.IsoConst.CAMERA_ZOOM_DEFAULT_INDEX);
    if (this.isoRenderer.isoData.areaData.isKingdomCastle) {
      t += IsoViewCamera.ZOOM_IN;
    }
    this.zoomAbs(t);
  };
  Object.defineProperty(IsoViewCamera.prototype, "canZoomIn", {
    get: function () {
      return this._currentZoomIndex > 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "canZoomOut", {
    get: function () {
      return this._currentZoomIndex < this.getMaxZoomOutIndex() && this.doesWorldFitIntoScreen(this._currentZoomIndex + IsoViewCamera.ZOOM_OUT);
    },
    enumerable: true,
    configurable: true
  });
  IsoViewCamera.prototype.getMaxZoomOutIndex = function () {
    return r.int(O.IsoConst.CAMERA_ZOOM_STEPS.length - 1);
  };
  IsoViewCamera.prototype.getMaxPossibleZoomOutIndex = function () {
    for (var e = this.getMaxZoomOutIndex(), t = 0; t + IsoViewCamera.ZOOM_OUT <= e && this.doesWorldFitIntoScreen(t + IsoViewCamera.ZOOM_OUT);) {
      t += IsoViewCamera.ZOOM_OUT;
    }
    return t;
  };
  IsoViewCamera.prototype.doesWorldFitIntoScreen = function (e) {
    return this.scrollBounds.width * this.getZoomValue(e) >= IsoViewCamera.screenDimension.x && this.scrollBounds.height * this.getZoomValue(e) >= IsoViewCamera.screenDimension.y;
  };
  IsoViewCamera.prototype.updateScale = function () {
    var e = this.worldLayer.scaleX;
    var t = this.getCurrentZoomValue();
    this.worldLayer.scaleX = this.worldLayer.scaleY = t;
    this.calcScrollBounds();
    this.calcCameraBounds();
    if (!s.currentBrowserInfo.isEdge && !s.currentBrowserInfo.isIE && e < 0.5 && t >= 0.5 || e >= 0.5 && t < 0.5) {
      this.updateBuildingZoom();
    }
    f.CastleComponent.controller.dispatchEvent(new u.IsoEvent(u.IsoEvent.ON_CAMERA_ZOOM_CHANGED, [this.getCurrentZoomValue()]));
    this.scrollAbs(this._currentScrollPos);
  };
  IsoViewCamera.prototype.updateBuildingZoom = function () {
    if (!this._schedule.isRunning) {
      this._schedule.start();
    }
  };
  IsoViewCamera.prototype.getZoomValue = function (e) {
    return O.IsoConst.CAMERA_ZOOM_STEPS[e];
  };
  IsoViewCamera.prototype.getCurrentZoomValue = function () {
    return O.IsoConst.CAMERA_ZOOM_STEPS[this.currentZoomIndex];
  };
  IsoViewCamera.prototype.scrollRel = function (e, t = true) {
    if (this.isActive) {
      this.scrollAbs(new h(this.currentScrollPos.x - Math.floor(e.x), this.currentScrollPos.y - Math.floor(e.y)), t);
    }
  };
  IsoViewCamera.prototype.scrollToGridPos = function (e, t = true) {
    this.scrollAbs(this.getScreenPosByGridPos(e), t);
  };
  IsoViewCamera.prototype.scrollAbs = function (e, t = true, i = false) {
    if (this.isActive && !_.CastleDialogHandler.getInstance().isDisplayingAnyDialog || i || this._forceNextScroll) {
      this._forceNextScroll = false;
      if (t) {
        var n = this.getValidScrollPos(e);
        this._currentScrollPos = n;
      } else {
        this._currentScrollPos = e;
      }
      var o = new h(-this.currentScrollPos.x * this.getCurrentZoomValue() + Math.floor(IsoViewCamera.screenDimension.x * 0.5), -this.currentScrollPos.y * this.getCurrentZoomValue() + Math.floor(IsoViewCamera.screenDimension.y * 0.5));
      o.x += this._shakeOffset.x * this._shakeFactor;
      o.y += this._shakeOffset.y * this._shakeFactor;
      this.worldLayer.x = o.x;
      this.worldLayer.y = o.y;
      this.applyPositionToBackgroundLayer();
      f.CastleComponent.controller.dispatchEvent(new u.IsoEvent(u.IsoEvent.ON_CAMERA_POS_CHANGED, [new h(o.x, o.y)]));
    }
  };
  IsoViewCamera.prototype.getValidScrollPos = function (e) {
    var t = new h();
    t.x = Math.max(this.cameraBounds.left, Math.min(this.cameraBounds.right, e.x));
    t.y = Math.max(this.cameraBounds.top, Math.min(this.cameraBounds.bottom, e.y));
    return t;
  };
  IsoViewCamera.prototype.scrollToCenter = function () {
    if (this.isActive) {
      this.scrollToGridPos(O.IsoConst.CAMERA_CENTER_TILE);
    }
  };
  IsoViewCamera.prototype.updateShake = function () {
    if (this._shakeFactor > 0) {
      this._shakeFactor -= 0.2;
      if (this._shakeFactor < 0) {
        this._shakeFactor = 0;
      }
      this.scrollAbs(this.currentScrollPos, true);
    }
  };
  IsoViewCamera.prototype.shakeCamera = function () {
    this._shakeFactor = 1;
    this._shakeOffset.x = l.ClientConstUtils.getRandomInt(-30, 30);
    this._shakeOffset.y = l.ClientConstUtils.getRandomInt(-30, 30);
  };
  IsoViewCamera.prototype.applyPositionToBackgroundLayer = function () {
    this._backgroundLayer.x = this.worldLayer.x;
    this._backgroundLayer.y = this.worldLayer.y;
    this._backgroundLayer.scaleX = this.worldLayer.scaleX;
    this._backgroundLayer.scaleY = this.worldLayer.scaleY;
    this._staticIsoObjectLayer.x = this.worldLayer.x;
    this._staticIsoObjectLayer.y = this.worldLayer.y;
    this._staticIsoObjectLayer.scaleX = this.worldLayer.scaleX;
    this._staticIsoObjectLayer.scaleY = this.worldLayer.scaleY;
    m.CastleLayoutManager.getInstance().renderBGStage();
  };
  IsoViewCamera.prototype.getScreenPosByGridPos = function (e) {
    var t = new h(e.x, e.y);
    t.x -= O.IsoConst.CAMERA_CENTER_TILE.x;
    t.y -= O.IsoConst.CAMERA_CENTER_TILE.y;
    t.x *= O.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x * 0.5;
    t.y *= O.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.y;
    t.x = t.x - t.y;
    t.y = (t.x + t.y * 2) * 0.5;
    return t;
  };
  IsoViewCamera.prototype.getScreenPosByGridPosDelta = function (e) {
    return new h((e.x - e.y) * O.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x * 0.5, (e.x + e.y) * O.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.y * 0.5);
  };
  IsoViewCamera.prototype.getGridPosByScreenPos = function (e) {
    var t = new h();
    t.y = (e.y * 2 - e.x) * 0.5;
    t.x = e.x + t.y;
    t.x /= O.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x * 0.5;
    t.y /= O.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.y;
    t.x += O.IsoConst.CAMERA_CENTER_TILE.x;
    t.y += O.IsoConst.CAMERA_CENTER_TILE.y;
    t.x = Math.floor(t.x);
    t.y = Math.floor(t.y);
    return t;
  };
  IsoViewCamera.prototype.recheckCameraValues = function () {
    this.calcScreenDimension();
    this.calcScrollBounds();
    this.calcCameraBounds();
    if (!this.doesWorldFitIntoScreen(this._currentZoomIndex)) {
      this.zoomAbs(this.getMaxPossibleZoomOutIndex());
    }
    this.scrollAbs(this.currentScrollPos, true, true);
    m.CastleLayoutManager.getInstance().renderBGStage();
    m.CastleLayoutManager.getInstance().updateGameStage();
  };
  IsoViewCamera.prototype.onScreenResize = function () {
    this.recheckCameraValues();
  };
  IsoViewCamera.prototype.onExpansion = function () {
    this.recheckCameraValues();
  };
  Object.defineProperty(IsoViewCamera.prototype, "worldLayer", {
    get: function () {
      return this.isoRenderer.layers.transformLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "currentScrollPos", {
    get: function () {
      return this._currentScrollPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "scrollBounds", {
    get: function () {
      return this._scrollBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera, "screenDimension", {
    get: function () {
      return IsoViewCamera._screenDimension;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (e) {
      this._isActive = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "cameraBounds", {
    get: function () {
      return this._cameraBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoViewCamera.prototype, "currentZoomIndex", {
    get: function () {
      return this._currentZoomIndex;
    },
    enumerable: true,
    configurable: true
  });
  IsoViewCamera.__initialize_static_members = function () {
    IsoViewCamera.ZOOM_OUT = 1;
    IsoViewCamera._screenDimension = new h(-1, -1);
  };
  IsoViewCamera.ZOOM_IN = -1;
  return IsoViewCamera;
}(d.AIsoViewComponent);
exports.IsoViewCamera = C;
var _ = require("./9.js");
var m = require("./17.js");
var f = require("./14.js");
var O = require("./144.js");
var E = require("./46.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();