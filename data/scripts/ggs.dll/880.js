Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./487.js");
var a = require("./20.js");
var s = createjs.MouseEvent;
var r = createjs.Point;
var o = createjs.Rectangle;
var l = function () {
  function AbstractCamera(e) {
    this.MIN_MAP_ZOOM = 0.7;
    this.MAX_MAP_ZOOM = 1.5;
    this.DEFAULT_START_ZOOM = 1;
    this.GFX_ZOOM_FACTOR = 1;
    this._dpiScaleFactor = 1;
    this.ZOOM_SPEED = 1;
    this.PAN_SLOPE = 50;
    this.isZooming = false;
    this.lastUpdate = -1;
    this._currentZoom = 1;
    this.leftBorder = Number.MAX_VALUE;
    this.rightBorder = -Number.MAX_VALUE;
    this.topBorder = Number.MAX_VALUE;
    this.bottomBorder = -Number.MAX_VALUE;
    this.unscaledLeftBorder = Number.MAX_VALUE;
    this.unscaledRightBorder = -Number.MAX_VALUE;
    this.unscaledTopBorder = Number.MAX_VALUE;
    this.unscaledBottomBorder = -Number.MAX_VALUE;
    this.isPanning = false;
    this.lastPanPosition = new r();
    this.panVelocity = new r();
    this.panDirectionVector = new r();
    this.enableSliding = true;
    this.slideDeceleration = 100;
    this.maxSlideSpeed = 1500;
    this.enableOverPan = true;
    this._overPanInPixels = 40;
    this.overPanSpeed = 150;
    this.deltaTargetPoint = new r();
    this._enableDoubleTap = true;
    this.currentPixelViewPort = new o();
    this.cameraMoveSignal = new a.Signal();
    this.cameraInteractionSignal = new a.Signal();
    this.notifyEndPanning = new a.Signal();
    this.notifyZoomEndSignal = new a.Signal();
    this.startPanningSignal = new a.Signal();
    this._enableUserInteractions = false;
    this.viewPortBorderLeft = 0;
    this.viewPortBorderRight = 0;
    this.viewPortBorderTop = 0;
    this.viewPortBorderBottom = 0;
    this.keepRectInSightSpeed = 500;
    this.keepRectInSighBorder = 30;
    this._worldLayer = e;
    this._worldStage = e.stage;
    this.activateControls();
    this.refreshBounds();
  }
  AbstractCamera.prototype.activateControls = function () {
    if (!this._enableUserInteractions) {
      this._enableUserInteractions = true;
      this.worldStage.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
      this.worldStage.addEventListener("pressup", this.bindFunction(this.onMouseUp));
      this.worldStage.addEventListener("mousewheel", this.bindFunction(this.onMouseWheel));
    }
  };
  AbstractCamera.prototype.deactivateControls = function () {
    this._enableUserInteractions = false;
    this.worldStage.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this.worldStage.removeEventListener("pressup", this.bindFunction(this.onMouseUp));
    this.worldStage.removeEventListener("mousemove", this.bindFunction(this.onMouseMove));
    this.worldStage.removeEventListener("mousewheel", this.bindFunction(this.onMouseWheel));
  };
  AbstractCamera.prototype.onMouseMove = function (e) {
    this.panVelocity.x = this.worldStage.mouseX - this.lastPanPosition.x;
    this.panVelocity.y = this.worldStage.mouseY - this.lastPanPosition.y;
    this.setLastPanPosition(this.worldStage.mouseX, this.worldStage.mouseY);
    var t = this.worldStage.mouseX - this.panPoint.x;
    var n = this.worldStage.mouseY - this.panPoint.y;
    this.setWorldLayerPos(t, n);
  };
  AbstractCamera.prototype.onMouseUp = function (e) {
    this.worldStage.removeEventListener(s.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    var t = (Date.now() - this.lastPanTimestamp) / 1000;
    this.slideSpeed = this.panVelocity.length / t;
    this.panDirectionVector = this.panVelocity.clone();
    this.panDirectionVector.normalize(1);
    this.panPoint = null;
    if (this.slideSpeed > this.maxSlideSpeed) {
      this.slideSpeed = this.maxSlideSpeed;
    }
    this.isPanning = false;
    this.onEndPanningFunction();
  };
  AbstractCamera.prototype.onMouseDown = function (e) {
    if (!this.isZooming) {
      this.stopSliding();
      this.stopAutoZoom();
      this.isPanning = true;
      this.panPoint = new r(this._worldLayer.mouseX, this._worldLayer.mouseY);
      this.setLastPanPosition(this.worldStage.mouseX, this.worldStage.mouseY);
      this.worldStage.addEventListener(s.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
    }
  };
  AbstractCamera.prototype.onMouseWheel = function (e) {
    this.cameraInteractionSignal.dispatch();
    if (!this.targetPoint) {
      var t = e.delta * 3 / 100;
      this.changeZoomByDelta(t);
      this._targetZoom = this._currentZoom;
      this.zoomEventFinish();
    }
  };
  AbstractCamera.prototype.zoomEventFinish = function () {};
  AbstractCamera.prototype.onWhilePanning = function () {};
  AbstractCamera.prototype.onTapGesture = function () {
    if (this._enableUserInteractions) {
      this.onEndPanningFunction();
      this.stopSliding();
    }
  };
  AbstractCamera.prototype.onDoubleTapGesture = function () {
    if (this._enableUserInteractions && this.enableOverPan && !this.isPanning && this._enableDoubleTap) {
      if (!this.isZooming) {
        this.autoZoomToTapPos();
      }
    }
  };
  AbstractCamera.prototype.autoZoomToTapPos = function () {
    if (this._currentZoom > this.DEFAULT_START_ZOOM) {
      this._targetZoom = this.MIN_MAP_ZOOM;
    } else {
      this._targetZoom = this.MAX_MAP_ZOOM;
    }
    var e = Math.abs(this._targetZoom - this._currentZoom) / this.ZOOM_SPEED;
    var t = new r(this._worldLayer.mouseX, this._worldLayer.mouseY);
    var n = this.getCurrentCenterPos();
    var a = t.subtract(n).length / e;
    a /= this.GFX_ZOOM_FACTOR;
    var s = new r(this.worldStage.stageWidth * 0.5, this.worldStage.stageHeight * 0.5);
    var o = new i.CameraTargetPoint(t, s, a, a, a);
    this.moveToTargetPoint(o);
  };
  AbstractCamera.prototype.initCustomBorder = function (e, t, n, i) {
    this.unscaledLeftBorder = e;
    this.unscaledRightBorder = t;
    this.unscaledTopBorder = n;
    this.unscaledBottomBorder = i;
    var a = this.unscaledRightBorder - this.unscaledLeftBorder - this._overPanInPixels * 3;
    var s = this.unscaledBottomBorder - this.unscaledTopBorder - this._overPanInPixels * 3;
    var r = this._worldLayer.stage.stageWidth / a;
    var o = this._worldLayer.stage.stageHeight / s;
    this.MIN_MAP_ZOOM = Math.max(this.MIN_MAP_ZOOM, r);
    this.MIN_MAP_ZOOM = Math.max(this.MIN_MAP_ZOOM, o);
    this.DEFAULT_START_ZOOM = this.MIN_MAP_ZOOM + (this.MAX_MAP_ZOOM - this.MIN_MAP_ZOOM) / 2;
    this.setZoomTo(this.DEFAULT_START_ZOOM);
    this.refreshBounds();
  };
  AbstractCamera.prototype.update = function (e) {
    if (this.lastUpdate < 0) {
      this.lastUpdate = e;
    }
    this.updateCamera(e);
    this.lastUpdate = e;
  };
  AbstractCamera.prototype.refreshBounds = function () {
    this.leftBorder = this.unscaledLeftBorder * this._currentZoom;
    this.rightBorder = this._worldLayer.stage.stageWidth - this.unscaledRightBorder * this._currentZoom;
    this.topBorder = this.unscaledTopBorder * this._currentZoom;
    this.bottomBorder = this._worldLayer.stage.stageHeight - this.unscaledBottomBorder * this._currentZoom;
  };
  AbstractCamera.prototype.updateCamera = function (e) {
    this.handleZooming(e);
    this.handleSliding(e);
    this.handleOverPanning(e);
    this.handleTargetPoint(e);
  };
  AbstractCamera.prototype.handleTargetPoint = function (e) {
    if (this.targetPoint) {
      var t = (e - this.lastUpdate) / 1000;
      var n = this.targetPoint.getCorrectedTargetPoint(this._currentZoom);
      this.deltaTargetPoint.x = this._worldLayer.x - n.x;
      this.deltaTargetPoint.y = this._worldLayer.y - n.y;
      if (this.deltaTargetPoint.length < t * this.targetPoint.targetFollowSpeed) {
        this.setWorldLayerPos(n.x, n.y);
        this.onEndPanningFunction();
        this.resetTargetPoint();
      } else {
        this.deltaTargetPoint.normalize(1);
        this.setWorldLayerPos(this._worldLayer.x - this.deltaTargetPoint.x * this.targetPoint.targetFollowSpeed * t, this._worldLayer.y - this.deltaTargetPoint.y * this.targetPoint.targetFollowSpeed * t);
        this.targetPoint.targetFollowSpeed += this.targetPoint.targetFollowAcceleration * t;
        if (this.targetPoint.targetFollowSpeed > this.targetPoint.targetFollowMaxSpeed) {
          this.targetPoint.targetFollowSpeed = this.targetPoint.targetFollowMaxSpeed;
        }
      }
    }
  };
  AbstractCamera.prototype.moveToTargetPoint = function (e) {
    this.targetPoint = e;
  };
  AbstractCamera.prototype.resetTargetPoint = function () {
    this.targetPoint = null;
  };
  AbstractCamera.prototype.handleSliding = function (e) {
    if (this.enableSliding) {
      var t = (e - this.lastUpdate) / 1000;
      if (this.slideSpeed > 0) {
        this.setWorldLayerPos(this._worldLayer.x + this.panDirectionVector.x * this.slideSpeed * t, this._worldLayer.y + this.panDirectionVector.y * this.slideSpeed * t);
        this.slideSpeed -= this.slideDeceleration;
        if (this.slideSpeed <= 0) {
          this.stopSliding();
          this.onEndPanningFunction();
        }
      }
    }
  };
  AbstractCamera.prototype.handleZooming = function (e) {
    if (isNaN(this._targetZoom)) {
      this._targetZoom = this._currentZoom;
    }
    if (this._targetZoom != this._currentZoom && this.enableOverPan && !this.isPanning && this._enableDoubleTap) {
      var t = (e - this.lastUpdate) / 1000;
      var n = this.ZOOM_SPEED * t;
      if (this._targetZoom > this._currentZoom) {
        this.changeZoomByDelta(n);
      } else if (this._targetZoom < this._currentZoom) {
        this.changeZoomByDelta(-n);
      }
    }
  };
  AbstractCamera.prototype.stopAutoZoom = function () {
    this._targetZoom = this._currentZoom;
  };
  AbstractCamera.prototype.handleOverPanning = function (e) {
    if (this.enableOverPan && !this.isPanning) {
      var t = (e - this.lastUpdate) / 1000 * this.overPanSpeed * this._currentZoom;
      if (this._worldLayer.x > this.leftBorder - this._overPanInPixels) {
        this._worldLayer.x -= t;
      } else if (this._worldLayer.x < this.rightBorder + this._overPanInPixels) {
        this._worldLayer.x += t;
      }
      if (this._worldLayer.y > this.topBorder - this._overPanInPixels) {
        this._worldLayer.y -= t;
      } else if (this._worldLayer.y < this.bottomBorder + this._overPanInPixels) {
        this._worldLayer.y += t;
      }
    }
  };
  AbstractCamera.prototype.onEndPanningFunction = function () {
    this.notifyEndPanning.dispatch();
  };
  AbstractCamera.prototype.onStartPanning = function () {
    this.startPanningSignal.dispatch();
  };
  AbstractCamera.prototype.centerCamera = function () {
    var e = (this.unscaledRightBorder - this.unscaledLeftBorder) / 2;
    var t = (this.unscaledBottomBorder - this.unscaledTopBorder) / 2;
    this.centerUnscaledPosition(e, t);
  };
  AbstractCamera.prototype.centerRectangle = function (e) {
    var t = e.left + e.width / 2;
    var n = e.top + e.height / 2;
    var a = new r(this.worldStage.stageWidth * 0.5, this.worldStage.stageHeight * 0.5);
    var s = new i.CameraTargetPoint(new r(t, n), a, this.GFX_ZOOM_FACTOR * 600, this.GFX_ZOOM_FACTOR * 1000, this.GFX_ZOOM_FACTOR * 1000);
    this.moveToTargetPoint(s);
  };
  AbstractCamera.prototype.keepObjectInSight = function (e) {
    var t = 0;
    var n = 0;
    if (e.right > (this.currentPixelViewPort.right - this.viewPortBorderRight) / this._currentZoom) {
      t = e.right - (this.currentPixelViewPort.right - this.viewPortBorderRight) / this._currentZoom + this.keepRectInSighBorder;
    } else if (e.left < (this.currentPixelViewPort.left - this.viewPortBorderLeft) / this._currentZoom) {
      t = e.left - (this.currentPixelViewPort.left - this.viewPortBorderLeft) / this._currentZoom - this.keepRectInSighBorder;
    }
    if (e.top < (this.currentPixelViewPort.top + this.viewPortBorderTop) / this._currentZoom) {
      n = e.top - (this.currentPixelViewPort.top + this.viewPortBorderTop) / this._currentZoom - this.keepRectInSighBorder;
    } else if (e.bottom > (this.currentPixelViewPort.bottom - this.viewPortBorderBottom) / this._currentZoom) {
      n = e.bottom - (this.currentPixelViewPort.bottom - this.viewPortBorderBottom) / this._currentZoom + this.keepRectInSighBorder;
    }
    if (t != 0 || n != 0) {
      var a = new r(this._worldLayer.x - t, this._worldLayer.y - n);
      var s = new r(this.worldStage.stageWidth * 0.5, this.worldStage.stageHeight * 0.5);
      var o = new i.CameraTargetPoint(a, s, this.GFX_ZOOM_FACTOR * 600, this.GFX_ZOOM_FACTOR * 1000, this.GFX_ZOOM_FACTOR * 1000, false);
      this.moveToTargetPoint(o);
    } else {
      this.resetTargetPoint();
    }
  };
  AbstractCamera.prototype.centerUnscaledPosition = function (e, t) {
    this.setWorldLayerPos(this.worldStage.stageWidth * 0.5 - e * this._currentZoom, this.worldStage.stageHeight * 0.5 - t * this._currentZoom);
    this.resetTargetPoint();
  };
  AbstractCamera.prototype.centerUnscaledRectangle = function (e) {
    var t = e.left + e.width / 2;
    var n = e.top + e.height / 2;
    this.setWorldLayerPos(this.worldStage.stageWidth * 0.5 - t * this._currentZoom, this.worldStage.stageHeight * 0.5 - n * this._currentZoom);
    this.resetTargetPoint();
  };
  AbstractCamera.prototype.setWorldLayerPos = function (e, t) {
    this._worldLayer.x = e;
    this._worldLayer.y = t;
    this.currentPixelViewPort.x = -e;
    this.currentPixelViewPort.y = -t;
    this.currentPixelViewPort.width = this.worldStage.stageWidth;
    this.currentPixelViewPort.height = this.worldStage.stageHeight;
    this.pushToBounds();
    this.updateViewport();
  };
  AbstractCamera.prototype.setWorldLayerScale = function (e) {
    this._worldLayer.scaleX = e;
    this._worldLayer.scaleY = e;
    this._currentZoom = e;
    this.refreshBounds();
  };
  AbstractCamera.prototype.pushToBounds = function () {
    if (this._worldLayer.x > this.leftBorder) {
      this._worldLayer.x = this.leftBorder;
      this.panDirectionVector.x = 0;
    }
    if (this._worldLayer.x < this.rightBorder) {
      this._worldLayer.x = this.rightBorder;
      this.panDirectionVector.x = 0;
    }
    if (this._worldLayer.y > this.topBorder) {
      this._worldLayer.y = this.topBorder;
      this.panDirectionVector.y = 0;
    }
    if (this._worldLayer.y < this.bottomBorder) {
      this._worldLayer.y = this.bottomBorder;
      this.panDirectionVector.y = 0;
    }
  };
  AbstractCamera.prototype.stopSliding = function () {
    this.slideSpeed = 0;
  };
  AbstractCamera.prototype.setLastPanPosition = function (e, t) {
    this.lastPanPosition.x = e;
    this.lastPanPosition.y = t;
    this.lastPanTimestamp = Date.now();
  };
  AbstractCamera.prototype.changeZoomByDelta = function (e) {
    if (this._enableUserInteractions && e != 0) {
      var t = this._currentZoom + e;
      if (t < this.MIN_MAP_ZOOM) {
        t = this.MIN_MAP_ZOOM;
      } else if (t > this.MAX_MAP_ZOOM) {
        t = this.MAX_MAP_ZOOM;
      }
      if (this._currentZoom != t) {
        var n = -(this._worldLayer.x / this._currentZoom - this.worldStage.stageWidth / 2 / this._currentZoom);
        var i = -(this._worldLayer.y / this._currentZoom - this.worldStage.stageHeight / 2 / this._currentZoom);
        this.setWorldLayerScale(t);
        this.setWorldLayerPos(this.worldStage.stageWidth * 0.5 - n * t, this.worldStage.stageHeight * 0.5 - i * t);
      }
    }
  };
  AbstractCamera.prototype.setZoomTo = function (e) {
    if (isNaN(e)) {
      e = this.DEFAULT_START_ZOOM;
    }
    this.changeZoomByDelta(e - this._currentZoom);
  };
  Object.defineProperty(AbstractCamera.prototype, "worldStage", {
    get: function () {
      return this._worldStage;
    },
    enumerable: true,
    configurable: true
  });
  AbstractCamera.prototype.updateViewport = function () {
    this.cameraMoveSignal.dispatch();
  };
  AbstractCamera.prototype.getCurrentCenterPos = function () {
    var e = -(this._worldLayer.x / this._currentZoom - this.worldStage.stageWidth / 2 / this._currentZoom);
    var t = -(this._worldLayer.y / this._currentZoom - this.worldStage.stageHeight / 2 / this._currentZoom);
    return new r(e, t);
  };
  AbstractCamera.prototype.destroy = function () {
    this.deactivateControls();
    this._worldLayer = null;
    this.cameraMoveSignal.removeAll();
    this.cameraInteractionSignal.removeAll();
    this.notifyEndPanning.removeAll();
    this.notifyZoomEndSignal.removeAll();
  };
  Object.defineProperty(AbstractCamera.prototype, "currentZoom", {
    get: function () {
      return this._currentZoom;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractCamera.prototype, "overPanInPixels", {
    set: function (e) {
      this._overPanInPixels = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractCamera.prototype, "enableDoubleTap", {
    get: function () {
      return this._enableDoubleTap;
    },
    set: function (e) {
      this._enableDoubleTap = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AbstractCamera.prototype, "dpiScaleFactor", {
    set: function (e) {
      this._dpiScaleFactor = e;
    },
    enumerable: true,
    configurable: true
  });
  return AbstractCamera;
}();
exports.AbstractCamera = l;