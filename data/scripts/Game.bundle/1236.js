Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./57.js");
var u = require("./18.js");
var d = require("./91.js");
var p = require("./90.js");
var h = require("./72.js");
var g = require("./276.js");
var C = require("./884.js");
var _ = createjs.Event;
var m = createjs.MouseEvent;
var f = createjs.TimerEvent;
var O = createjs.Point;
var E = createjs.Rectangle;
var y = function (e) {
  function CastleWorldmapCamera(t, i, n = 0, o = 0, a = 1) {
    var r = e.call(this) || this;
    r.isEnabled = false;
    r.wrapAroundX = true;
    r.wrapAroundY = false;
    r._viewPort = new O();
    r.viewPortWidth = 0;
    r.viewPortHeight = 0;
    r.viewPortZoom = 0;
    r.isWorldDragging = false;
    r.speedUpDown = 0;
    r.speedLeftRight = 0;
    r.isMouseDown = false;
    r.mouseOffset = new O();
    r.invalidateTimer = new s.Timer(D.CastleWorldmapData.AREA_INVALIDATION_TIME);
    r.lastTarget = new O();
    r._isLocked = false;
    r._wasMovedByKeys = false;
    r._pixelOffset = new O();
    r._relativeMousePos = new O();
    r.layer = t;
    r.bgLayer = i;
    r._viewPort.x = n;
    r._viewPort.y = o;
    r.viewPortZoom = a;
    r.viewPortWidth = r.layer.stage.stageWidth;
    r.viewPortHeight = r.layer.stage.stageHeight;
    r.update = new c.Signal();
    r.lastMouseStage = new O(0, 0);
    r.touchController = new v.CastleTouchZoomController(r.adjustZoom.bind(r, g.CastleWorldmapConst.ZOOM_STEP), r.adjustZoom.bind(r, -g.CastleWorldmapConst.ZOOM_STEP));
    return r;
  }
  n.__extends(CastleWorldmapCamera, e);
  CastleWorldmapCamera.prototype.activate = function () {
    this.layoutManager.addEventListener(d.CastleLayoutManagerEvent.LOCK_CAMERA, this.bindFunction(this.onLockCamera));
    this.layer.addEventListener(m.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.layer.stage.addEventListener(m.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.layer.addEventListener(m.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.layer.addEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.bgLayer.stage.addEventListener(m.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.bgLayer.stage.addEventListener(m.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.bgLayer.stage.addEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.bgLayer.stage.addEventListener(m.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.layoutManager.staticStage.addEventListener(m.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.layoutManager.staticStage.addEventListener(m.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.layoutManager.staticStage.addEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.layoutManager.staticStage.addEventListener(m.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.inputKey = o.Input.instance;
    this.layer.addEventListener(_.ENTER_FRAME, this.bindFunction(this.handleKeyInput));
    window.addEventListener(_.RESIZE, this.bindFunction(this.onResize), false, 1);
    this.isEnabled = true;
    this.isMouseDown = false;
    this.isWorldDragging = false;
    this.invalidateTimer.addEventListener(f.TIMER, this.bindFunction(this.onCheckInvalidate));
    this.invalidateTimer.start();
    window.focus();
  };
  CastleWorldmapCamera.prototype.deactivate = function () {
    this.layoutManager.removeEventListener(d.CastleLayoutManagerEvent.LOCK_CAMERA, this.bindFunction(this.onLockCamera));
    this.layer.removeEventListener(m.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.layer.stage.removeEventListener(m.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.layer.removeEventListener(m.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.layer.removeEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.layer.removeEventListener(_.ENTER_FRAME, this.bindFunction(this.handleKeyInput));
    window.removeEventListener(_.RESIZE, this.bindFunction(this.onResize));
    this.bgLayer.stage.removeEventListener(m.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.bgLayer.stage.removeEventListener(m.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.bgLayer.stage.removeEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.bgLayer.stage.removeEventListener(m.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.layoutManager.staticStage.removeEventListener(m.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.layoutManager.staticStage.stage.removeEventListener(m.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this.layoutManager.staticStage.stage.removeEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    this.layoutManager.staticStage.stage.removeEventListener(m.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    this.inputKey = null;
    this.isEnabled = false;
    this.isMouseDown = false;
    this.isWorldDragging = false;
    this.invalidateTimer.removeEventListener(f.TIMER, this.bindFunction(this.onCheckInvalidate));
    this.invalidateTimer.stop();
  };
  CastleWorldmapCamera.prototype.onCheckInvalidate = function (e) {
    this.validateAndUpdate();
  };
  CastleWorldmapCamera.prototype.onResize = function (e) {
    var t = this.viewPortWidth;
    var i = this.viewPortHeight;
    this.viewPortWidth = this.layer.width = this.layer.stage.stageWidth;
    this.viewPortHeight = this.layer.height = this.layer.stage.stageHeight;
    this.layer.scaleX = this.layer.scaleY = 1;
    t -= this.viewPortWidth;
    i -= this.viewPortHeight;
    var n = new O((this._viewPort.x + (this.viewPortWidth + t) / this.viewPortZoom / 2) / u.ClientConstCastle.MAPTILESIZE_X, (this._viewPort.y + (this.viewPortHeight + i) / this.viewPortZoom / 2) / u.ClientConstCastle.MAPTILESIZE_Y);
    this.layoutManager.worldmapScreen.camera.centerArea(n);
    this.applyPositionToBackgroundLayer();
  };
  CastleWorldmapCamera.prototype.applyPositionToBackgroundLayer = function () {
    this.bgLayer.x = this.layer.x;
    this.bgLayer.y = this.layer.y;
    this.bgLayer.scaleX = this.layer.scaleX;
    this.bgLayer.scaleY = this.layer.scaleY;
    I.CastleLayoutManager.getInstance().renderBGStage();
  };
  CastleWorldmapCamera.prototype.onLockCamera = function (e) {
    this._isLocked = e.params[0];
  };
  CastleWorldmapCamera.prototype.onMouseWheel = function (e) {
    if (!this._isLocked) {
      var t = e.delta;
      this.adjustZoom(t < 0 ? g.CastleWorldmapConst.ZOOM_STEP : -g.CastleWorldmapConst.ZOOM_STEP);
    }
  };
  CastleWorldmapCamera.prototype.onMouseUp = function (e) {
    this.lastMouseStage.x = e.stageX;
    this.lastMouseStage.y = e.stageY;
    if (this.isMouseDown && !this._isLocked) {
      this.isMouseDown = false;
      if (r.currentBrowserInfo.isTouchEvent(e) && e.target.name === "nonInteractiveLayer") {
        this.objectUnderMouse = null;
        this.layoutManager.worldmapScreen.renderer.renderNavForMobile();
      }
      if (!this.objectUnderMouse && !this.isWorldDragging) {
        this.dispatchEvent(new p.CastleWorldmapEvent(p.CastleWorldmapEvent.WORLDMAP_CLICK));
      }
      if (this.isWorldDragging) {
        this.layoutManager.worldmapScreen.renderer.dispatchEvent(new p.CastleWorldmapEvent(p.CastleWorldmapEvent.WORLDMAP_MOUSEUP));
        window.restrictedInteractiveArea = null;
        I.CastleLayoutManager.getInstance().stage.enableMouseOver(b.CastleGame.STAGE_MOUSEOVER_TIME);
        I.CastleLayoutManager.getInstance().uiStage.tickEnabled = true;
        T.renderScheduler.RENDER_SCHEDULER_ACTIVE = false;
      }
      this.isWorldDragging = false;
      this.updateDelta(this.mouseOffset.x - e.stageX, this.mouseOffset.y - e.stageY);
      this.viewPortOffset = null;
      this.invalidateTimer.start();
    }
  };
  CastleWorldmapCamera.prototype.onMouseMove = function (e) {
    var t = e.stageX;
    var i = e.stageY;
    this.lastMouseStage.x = t;
    this.lastMouseStage.y = i;
    var n = r.currentBrowserInfo.getTouchEvent(e);
    this.layoutManager.worldmapScreen.renderer.isNaviUsingMouse(!n);
    if (this.isMouseDown && !this._isLocked) {
      if (n && n.touches.length > 1) {
        this.touchController.handleTouchZoom(e);
      } else {
        this.updateDelta(this.mouseOffset.x - t, this.mouseOffset.y - i);
        if ((this.mouseOffset.x !== t || this.mouseOffset.y !== i) && !this.isWorldDragging) {
          this.isWorldDragging = true;
          T.renderScheduler.RENDER_SCHEDULER_ACTIVE = true;
          window.restrictedInteractiveArea = I.CastleLayoutManager.getInstance().bgStage.children[0];
          I.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
          var o = I.CastleLayoutManager.getInstance().hideWorldmapIngameUIComponents();
          I.CastleLayoutManager.getInstance().uiStage.tickEnabled = false;
          if (o) {
            I.CastleLayoutManager.getInstance().uiStage.update();
          }
        }
      }
    }
  };
  CastleWorldmapCamera.prototype.onMouseDown = function (e) {
    this.lastMouseStage.x = e.stageX;
    this.lastMouseStage.y = e.stageY;
    if (!this.isMouseDown && !this._isLocked) {
      this.isMouseDown = true;
      this.mouseOffset.x = e.stageX;
      this.mouseOffset.y = e.stageY;
      this.viewPortOffset = this._viewPort.clone();
      this.invalidateTimer.stop();
      if (r.currentBrowserInfo.isTouchEvent(e)) {
        this.layoutManager.worldmapScreen.renderer.renderNavForMobile(true);
      }
    }
  };
  CastleWorldmapCamera.prototype.updateDelta = function (e, t) {
    this._viewPort.x = this.viewPortOffset.x + e / this.viewPortZoom;
    this._viewPort.y = this.viewPortOffset.y + t / this.viewPortZoom;
    this.validateAndUpdate();
  };
  CastleWorldmapCamera.prototype.handleKeyInput = function (e) {
    if (!this._isLocked && !(this.layoutManager.numVisibleDialogs > 0) && !!this.inputKey && (!document.activeElement || document.activeElement.className != "ggsTextField")) {
      if (this.inputKey.isKeyDown(a.Keyboard.DOWN)) {
        this.speedUpDown = l.int(Math.max(this.speedUpDown - g.CastleWorldmapConst.KEY_STEP, -g.CastleWorldmapConst.KEY_STEP_MAX));
      } else if (this.inputKey.isKeyDown(a.Keyboard.UP)) {
        this.speedUpDown = l.int(Math.min(this.speedUpDown + g.CastleWorldmapConst.KEY_STEP, g.CastleWorldmapConst.KEY_STEP_MAX));
      } else {
        this.speedUpDown = l.int(this.speedUpDown > 0 ? Math.max(this.speedUpDown - g.CastleWorldmapConst.KEY_STEP, 0) : Math.min(this.speedUpDown + g.CastleWorldmapConst.KEY_STEP, 0));
      }
      if (this.inputKey.isKeyDown(a.Keyboard.RIGHT)) {
        this.speedLeftRight = l.int(Math.max(this.speedLeftRight - g.CastleWorldmapConst.KEY_STEP, -g.CastleWorldmapConst.KEY_STEP_MAX));
      } else if (this.inputKey.isKeyDown(a.Keyboard.LEFT)) {
        this.speedLeftRight = l.int(Math.min(this.speedLeftRight + g.CastleWorldmapConst.KEY_STEP, g.CastleWorldmapConst.KEY_STEP_MAX));
      } else {
        this.speedLeftRight = l.int(this.speedLeftRight > 0 ? Math.max(this.speedLeftRight - g.CastleWorldmapConst.KEY_STEP, 0) : Math.min(this.speedLeftRight + g.CastleWorldmapConst.KEY_STEP, 0));
      }
      if (this.speedUpDown != 0 || this.speedLeftRight != 0) {
        this._viewPort.y -= Math.min(g.CastleWorldmapConst.KEY_STEP_MAX, this.speedUpDown);
        this._viewPort.x -= Math.min(g.CastleWorldmapConst.KEY_STEP_MAX, this.speedLeftRight);
        window.restrictedInteractiveArea = I.CastleLayoutManager.getInstance().bgStage.children[0];
        I.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
        this._wasMovedByKeys = true;
        this.validateAndUpdate();
      } else if (this._wasMovedByKeys) {
        this._wasMovedByKeys = false;
        window.restrictedInteractiveArea = null;
        I.CastleLayoutManager.getInstance().stage.enableMouseOver(b.CastleGame.STAGE_MOUSEOVER_TIME);
      }
    }
  };
  CastleWorldmapCamera.prototype.getPixelOffset = function (e = u.ClientConstCastle.MAPTILESIZE_X, t = u.ClientConstCastle.MAPTILESIZE_Y) {
    this._pixelOffset.x = -this._viewPort.x % e;
    this._pixelOffset.y = -this._viewPort.y % t;
    this._pixelOffset.x = this._pixelOffset.x > 0 ? this._pixelOffset.x - e : this._pixelOffset.x;
    this._pixelOffset.y = this._pixelOffset.y > 0 ? this._pixelOffset.y - t : this._pixelOffset.y;
    this._pixelOffset.x = this._pixelOffset.x * this.viewPortZoom;
    this._pixelOffset.y = this._pixelOffset.y * this.viewPortZoom;
    return this._pixelOffset;
  };
  CastleWorldmapCamera.prototype.getAreaViewportRectangle = function () {
    for (var e = Math.ceil(this.viewPortWidth / this.viewPortZoom / u.ClientConstCastle.MAPTILESIZE_X), t = Math.ceil(this.viewPortHeight / this.viewPortZoom / u.ClientConstCastle.MAPTILESIZE_Y); this.getPixelOffset().x + e * u.ClientConstCastle.MAPTILESIZE_X * this.viewPortZoom < this.viewPortWidth;) {
      e++;
    }
    while (this.getPixelOffset().y + t * u.ClientConstCastle.MAPTILESIZE_Y * this.viewPortZoom < this.viewPortHeight) {
      t++;
    }
    var i = Math.floor(this._viewPort.x / u.ClientConstCastle.MAPTILESIZE_X);
    var n = Math.floor(this._viewPort.y / u.ClientConstCastle.MAPTILESIZE_Y);
    return new E(i, n, e, t);
  };
  CastleWorldmapCamera.prototype.getSectorViewportRectangle = function () {
    for (var e = this.getPixelOffset(u.ClientConstCastle.SECTORPIXELSIZE_X, u.ClientConstCastle.SECTORPIXELSIZE_Y), t = Math.ceil(this.viewPortWidth / this.viewPortZoom / u.ClientConstCastle.SECTORPIXELSIZE_X), i = Math.ceil(this.viewPortHeight / this.viewPortZoom / u.ClientConstCastle.SECTORPIXELSIZE_Y); e.x + t * u.ClientConstCastle.SECTORPIXELSIZE_X * this.viewPortZoom < this.viewPortWidth;) {
      t++;
    }
    while (e.y + i * u.ClientConstCastle.SECTORPIXELSIZE_Y * this.viewPortZoom < this.viewPortHeight) {
      i++;
    }
    var n = Math.floor(this._viewPort.x / u.ClientConstCastle.SECTORPIXELSIZE_X);
    var o = Math.floor(this._viewPort.y / u.ClientConstCastle.SECTORPIXELSIZE_Y);
    return new E(n, o, t, i);
  };
  Object.defineProperty(CastleWorldmapCamera.prototype, "relativeMousePos", {
    get: function () {
      this._relativeMousePos.x = this._viewPort.x + this.lastMouseStage.x / this.viewPortZoom;
      this._relativeMousePos.y = this._viewPort.y + this.lastMouseStage.y / this.viewPortZoom;
      return this._relativeMousePos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCamera.prototype, "layoutManager", {
    get: function () {
      return I.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapCamera.prototype.centerArea = function (e) {
    var t = C.SectorHelper.getLoopedAreaPosition(e);
    var i = l.int(u.ClientConstCastle.WORLDMAPSIZE_X * u.ClientConstCastle.SECTORPIXELSIZE_X);
    this.lastTarget = t;
    var n = l.int(t.x * u.ClientConstCastle.MAPTILESIZE_X + u.ClientConstCastle.MAPTILESIZE_X / 2 - this.viewPortWidth / this.viewPortZoom / 2);
    var o = l.int(t.y * u.ClientConstCastle.MAPTILESIZE_Y + u.ClientConstCastle.MAPTILESIZE_Y / 2 - this.viewPortHeight / this.viewPortZoom / 2);
    var a = new O(n, o);
    this.layoutManager.hideAllIngameUIComponents();
    if (a.x < 0) {
      a.x += i;
    }
    this._viewPort.x = a.x;
    this._viewPort.y = a.y;
    this.validateAndUpdate();
  };
  Object.defineProperty(CastleWorldmapCamera.prototype, "viewPortCenter", {
    get: function () {
      return C.SectorHelper.getLoopedAreaPosition(new O(Math.floor((this._viewPort.x + this.viewPortWidth / this.viewPortZoom / 2) / u.ClientConstCastle.MAPTILESIZE_X), Math.floor((this._viewPort.y + this.viewPortHeight / this.viewPortZoom / 2) / u.ClientConstCastle.MAPTILESIZE_Y)));
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapCamera.prototype.getPixelPosForArea = function (e, t = true, i = false) {
    if (!e) {
      return null;
    }
    var n = new O();
    var o = C.SectorHelper.getLoopedAreaPosition(e);
    o.x *= u.ClientConstCastle.MAPTILESIZE_X;
    o.y *= u.ClientConstCastle.MAPTILESIZE_Y;
    n.x = -this._viewPort.x + o.x + u.ClientConstCastle.MAPTILESIZE_X * 0.5;
    n.y = -this._viewPort.y + o.y + u.ClientConstCastle.MAPTILESIZE_Y * 0.5;
    if (t) {
      n.x = C.SectorHelper.getScreenLoopedXPixelPosition(n.x);
    }
    if (i) {
      n.y = C.SectorHelper.getLoopedPixelPosition(n).y;
    }
    n.x *= this.viewPortZoom;
    n.y *= this.viewPortZoom;
    return n;
  };
  CastleWorldmapCamera.prototype.validateAndUpdate = function () {
    if (!this.wrapAroundY) {
      if (this._viewPort.y < -g.CastleWorldmapConst.VIEWPORT_MARGIN) {
        this._viewPort.y = -g.CastleWorldmapConst.VIEWPORT_MARGIN;
      }
      if (this._viewPort.y + this.viewPortHeight / this.viewPortZoom > u.ClientConstCastle.WORLDMAPPIXELSIZE_Y + g.CastleWorldmapConst.VIEWPORT_MARGIN) {
        this._viewPort.y = u.ClientConstCastle.WORLDMAPPIXELSIZE_Y - this.viewPortHeight / this.viewPortZoom + g.CastleWorldmapConst.VIEWPORT_MARGIN;
      }
    }
    if (!this.wrapAroundX) {
      if (this._viewPort.x < 0) {
        this._viewPort.x = 0;
      }
      if (this._viewPort.x + this.viewPortWidth / this.viewPortZoom > u.ClientConstCastle.WORLDMAPPIXELSIZE_X) {
        this._viewPort.x = u.ClientConstCastle.WORLDMAPPIXELSIZE_X - this.viewPortWidth / this.viewPortZoom;
      }
    }
    if (this._viewPort.x > u.ClientConstCastle.WORLDMAPPIXELSIZE_X) {
      this._viewPort.x -= u.ClientConstCastle.WORLDMAPPIXELSIZE_X;
    }
    if (this._viewPort.x < 0) {
      this._viewPort.x += u.ClientConstCastle.WORLDMAPPIXELSIZE_X;
    }
    if (this._viewPort.y > u.ClientConstCastle.WORLDMAPPIXELSIZE_Y) {
      this._viewPort.y -= u.ClientConstCastle.WORLDMAPPIXELSIZE_Y;
    }
    if (this._viewPort.y < -u.ClientConstCastle.WORLDMAPPIXELSIZE_Y) {
      this._viewPort.y += u.ClientConstCastle.WORLDMAPPIXELSIZE_Y;
    }
    this.applyPositionToBackgroundLayer();
    this.update.dispatch();
  };
  CastleWorldmapCamera.prototype.stepZoomIn = function () {
    if (!this._isLocked) {
      this.adjustZoom(g.CastleWorldmapConst.ZOOM_STEP);
    }
  };
  CastleWorldmapCamera.prototype.stepZoomOut = function () {
    if (!this._isLocked) {
      this.adjustZoom(-g.CastleWorldmapConst.ZOOM_STEP);
    }
  };
  CastleWorldmapCamera.prototype.adjustZoom = function (e) {
    var t = this.adjustAndRestrictZoom(e);
    if (t != this.viewPortZoom) {
      this.adjustViewPort(t);
      this.validateAndUpdate();
    }
  };
  CastleWorldmapCamera.prototype.adjustViewPort = function (e) {
    this._viewPort.x -= (this.viewPortWidth / this.viewPortZoom - this.viewPortWidth / e) / 2;
    this._viewPort.y -= (this.viewPortHeight / this.viewPortZoom - this.viewPortHeight / e) / 2;
  };
  CastleWorldmapCamera.prototype.adjustAndRestrictZoom = function (e) {
    var t = this.viewPortZoom;
    this.viewPortZoom += e;
    if (this.viewPortZoom < g.CastleWorldmapConst.ZOOM_MIN) {
      this.viewPortZoom = g.CastleWorldmapConst.ZOOM_MIN;
    } else if (this.viewPortZoom > g.CastleWorldmapConst.ZOOM_MAX) {
      this.viewPortZoom = g.CastleWorldmapConst.ZOOM_MAX;
    }
    return t;
  };
  Object.defineProperty(CastleWorldmapCamera.prototype, "viewPort", {
    get: function () {
      return this._viewPort;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleWorldmapCamera.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldmapCamera.__initialize_static_members = function () {
    CastleWorldmapCamera.zoom_min = 0.8;
    if (r.currentBrowserInfo.isEdge || r.currentBrowserInfo.isIE) {
      CastleWorldmapCamera.zoom_min = 1;
    }
    CastleWorldmapCamera.ZOOM_MAX = 1.5;
    CastleWorldmapCamera.ZOOM_STEP = 0.05;
    CastleWorldmapCamera.VIEWPORT_MARGIN = 100;
    CastleWorldmapCamera.KEY_STEP = 3;
    CastleWorldmapCamera.KEY_STEP_MAX = 50;
  };
  return CastleWorldmapCamera;
}(h.CastleEventDispatcher);
exports.CastleWorldmapCamera = y;
var b = require("./365.js");
var D = require("./502.js");
var I = require("./17.js");
var T = require("./408.js");
var v = require("./1193.js");
y.__initialize_static_members();