Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./226.js");
var a = require("./136.js");
var s = require("./2.js");
var r = require("./16.js");
var o = s.getLogger(r.CREATEJS_UTILITIES_LOGGER + ".StageExtension");
Object.defineProperty(createjs.Stage.prototype, "frameRate", {
  get: function () {
    return createjs.Ticker.framerate;
  },
  set: function (e) {
    createjs.Ticker.framerate = e;
  },
  enumerable: true,
  configurable: true
});
createjs.Stage.prototype.invalidate = function () {};
createjs.Stage.prototype._testMouseOver = function (e, t, n) {
  if (!this._prevStage || t !== undefined) {
    var a = this._nextStage;
    var s = this._getPointerData(-1);
    if (s && (e || this.mouseX !== this._mouseOverX || this.mouseY !== this._mouseOverY || !this.mouseInBounds)) {
      var r = s.posEvtObj;
      var l = n || r && r.target === this.canvas;
      var u = null;
      var c = -1;
      if (!t && (e || this.mouseInBounds && l)) {
        var _ = window.restrictedInteractiveArea;
        if (_) {
          if (Array.isArray(_) && _.length) {
            for (var d = _.length - 1; d >= 0; d--) {
              var m = _[d];
              if (m) {
                var h = m instanceof createjs.Container ? m : m.parent;
                if (h && (u = this._getObjectsUnderPoint.call(h, this.mouseX, this.mouseY, null, true, null, 8))) {
                  break;
                }
              }
            }
          } else if (_ instanceof createjs.DisplayObject) {
            if (!(_ = _ instanceof createjs.Container ? _ : _.parent)) {
              return;
            }
            u = this._getObjectsUnderPoint.call(_, this.mouseX, this.mouseY, null, true, null, 8);
          }
        } else {
          u = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, true);
        }
        i.MouseEventDispatcher.setTarget(u);
        if (window.cursorDebug) {
          if (u) {
            o.info("found hit target: ", u);
          } else {
            o.warn("found nothing under cursor");
          }
        }
        this._mouseOverX = this.mouseX;
        this._mouseOverY = this.mouseY;
      }
      var p = this._mouseOverTarget || [];
      var g = p[p.length - 1];
      var E = this._mouseOverTarget = [];
      for (var C = u; C;) {
        E.unshift(C);
        C = C.parent;
      }
      for (var f = 0, T = E.length; f < T && E[f] === p[f]; f++) {
        c = f;
      }
      if (g !== u) {
        this._dispatchMouseEvent(g, "mouseout", true, -1, s, r, u);
      }
      for (f = p.length - 1; f > c; f--) {
        this._dispatchMouseEvent(p[f], "rollout", false, -1, s, r, u);
      }
      for (f = E.length - 1; f > c; f--) {
        this._dispatchMouseEvent(E[f], "rollover", false, -1, s, r, g);
      }
      if (g !== u) {
        this._dispatchMouseEvent(u, "mouseover", true, -1, s, r, g);
      }
      if (!u && !window.restrictedInteractiveArea && !!a) {
        a._testMouseOver(e, t || u && this, n || l && this);
      }
    }
  }
};
createjs.Stage.prototype._getObjectsUnderPoint = function (e, t, n, i, s, r) {
  return a.objectsUnderPoint(this, createjs.DisplayObject._hitTestContext, e, t, n, i, s, r);
};
createjs.Stage.prototype._updatePointerPosition = function (e, t, n, i) {
  var a = this._getElementRect(this.canvas);
  n -= a.left;
  i -= a.top;
  var s = this.canvas.width / this.scaleX;
  var r = this.canvas.height / this.scaleY;
  n /= (a.right - a.left) / s;
  i /= (a.bottom - a.top) / r;
  var o = this._getPointerData(e);
  if (o.inBounds = n >= 0 && i >= 0 && n <= s - 1 && i <= r - 1) {
    o.x = n;
    o.y = i;
  } else if (this.mouseMoveOutside) {
    o.x = n < 0 ? 0 : n > s - 1 ? s - 1 : n;
    o.y = i < 0 ? 0 : i > r - 1 ? r - 1 : i;
  }
  o.posEvtObj = t;
  o.rawX = n;
  o.rawY = i;
  if (e === this._primaryPointerID || e === -1) {
    this.mouseX = o.x;
    this.mouseY = o.y;
    this.mouseInBounds = o.inBounds;
  }
};