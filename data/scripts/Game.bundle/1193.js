Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = require("./1.js");
var a = function () {
  function CastleTouchZoomController(e, t) {
    this.twoTouchDistance = -1;
    this.hasMoved = false;
    this.zoomIn = e;
    this.zoomOut = t;
    this.touchDownPoint = new n();
  }
  CastleTouchZoomController.prototype.simpleDistance = function (e, t, i, n) {
    return Math.abs(e - i) + Math.abs(t - n);
  };
  CastleTouchZoomController.prototype.handleTouchZoom = function (e) {
    var t = e.nativeEvent;
    if (window.TouchEvent && t instanceof TouchEvent) {
      if (t.touches.length >= 2) {
        var i = this.twoTouchDistance;
        var n = t.touches[0];
        var o = t.touches[1];
        var a = this.simpleDistance(n.pageX, n.pageY, o.pageX, o.pageY);
        var s = a - i;
        if (Math.abs(s) > 30) {
          this.twoTouchDistance = a;
        }
        if (i > 0 && Math.abs(s) > 30) {
          if (s < 0) {
            Function.prototype.call.apply(this.zoomOut);
          } else {
            Function.prototype.call.apply(this.zoomIn);
          }
        }
        return;
      }
      this.twoTouchDistance = -1;
    } else {
      this.twoTouchDistance = -1;
    }
  };
  CastleTouchZoomController.prototype.markTouchDownPoint = function (e, t = false) {
    if (o.currentBrowserInfo.isTouchEvent(e)) {
      this.touchDownPoint.x = t ? 0 : e.stageX;
      this.touchDownPoint.y = t ? 0 : e.stageY;
      this.hasMoved = !t;
    }
  };
  CastleTouchZoomController.prototype.shouldTouchMoveIgnored = function (e) {
    if (o.currentBrowserInfo.isTouchEvent(e)) {
      var t = this.simpleDistance(e.stageX, e.stageY, this.touchDownPoint.x, this.touchDownPoint.y);
      return !this.hasMoved || t < 5;
    }
    return false;
  };
  CastleTouchZoomController.prototype.isMultiTouch = function (e) {
    var t = o.currentBrowserInfo.getTouchEvent(e);
    return !!t && t.touches.length > 1;
  };
  return CastleTouchZoomController;
}();
exports.CastleTouchZoomController = a;