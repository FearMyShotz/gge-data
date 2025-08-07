Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./129.js");
var s = createjs.MovieClip;
var r = createjs.MouseEvent;
var o = createjs.Point;
var l = require("./3.js");
var u = function (e) {
  function ScrollItem(t) {
    var n = e.call(this) || this;
    n._isActive = false;
    n._touchDragStartPoint = new o();
    n._disp = t;
    n._disp.addEventListener(r.MOUSE_DOWN, n.bindFunction(n.onTouchDown));
    n._disp.addEventListener(r.MOUSE_UP, n.bindFunction(n.onTouchUp));
    n._disp.addEventListener(r.PRESS_MOVE, n.bindFunction(n.onTouchDrag));
    return n;
  }
  i.__extends(ScrollItem, e);
  ScrollItem.prototype.onMouseClick = function (e) {
    this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.CLICK, this, e.target, e));
  };
  ScrollItem.prototype.onRollOver = function (e) {
    this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.ROLL_OVER, this, e.target, e));
  };
  ScrollItem.prototype.onRollOut = function (e) {
    this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.ROLL_OUT, this, e.target, e));
  };
  ScrollItem.prototype.onTouchDown = function (e) {
    if (l.currentBrowserInfo.isTouchEvent(e)) {
      this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.TOUCH_DOWN, this, e.target, e));
      this._touchDragStartPoint.x = e.stageX;
      this._touchDragStartPoint.y = e.stageY;
    }
  };
  ScrollItem.prototype.onTouchUp = function (e) {
    if (l.currentBrowserInfo.isTouchEvent(e)) {
      if (this._disp._scrollItem_isDraggin) {
        this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.TOUCH_DRAG_END, this, e.target, e));
      }
      this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.TOUCH_UP, this, e.target, e));
      this._disp._scrollItem_isDraggin = false;
      this._touchDragStartPoint.x = 0;
      this._touchDragStartPoint.y = 0;
    }
  };
  ScrollItem.prototype.onTouchDrag = function (e) {
    if (l.currentBrowserInfo.isTouchEvent(e)) {
      if (!this._disp._scrollItem_isDraggin) {
        if (Math.abs(e.stageX - this._touchDragStartPoint.x) + Math.abs(e.stageY - this._touchDragStartPoint.y) > 5) {
          this._disp._scrollItem_isDraggin = true;
          this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.TOUCH_DRAG_START, this, e.target, e));
        }
      }
    }
  };
  ScrollItem.prototype.fillWithContent = function (e) {
    this._scrollItemVO = e;
    this.customFillItem();
  };
  ScrollItem.prototype.customFillItem = function () {};
  ScrollItem.prototype.show = function () {
    this._disp.visible = true;
    this._disp.addEventListener(r.CLICK, this.bindFunction(this.onMouseClick));
    this._disp.addEventListener(r.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.addEventListener(r.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  ScrollItem.prototype.hide = function () {
    this._disp.visible = false;
    this._disp.removeEventListener(r.CLICK, this.bindFunction(this.onMouseClick));
    this._disp.removeEventListener(r.ROLL_OVER, this.bindFunction(this.onRollOver));
    this._disp.removeEventListener(r.ROLL_OUT, this.bindFunction(this.onRollOut));
  };
  ScrollItem.prototype.reset = function () {
    console.info("scrollitem is resetting");
  };
  Object.defineProperty(ScrollItem.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    set: function (e) {
      this._isActive = e;
      this.onActiveStateChange();
    },
    enumerable: true,
    configurable: true
  });
  ScrollItem.prototype.onActiveStateChange = function () {};
  Object.defineProperty(ScrollItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  ScrollItem.prototype.remove = function () {
    this.hide();
    this._disp.removeEventListener(r.MOUSE_DOWN, this.bindFunction(this.onTouchDown));
    this._disp.removeEventListener(r.MOUSE_UP, this.bindFunction(this.onTouchUp));
    this._disp.removeEventListener(r.PRESS_MOVE, this.bindFunction(this.onTouchDrag));
  };
  Object.defineProperty(ScrollItem.prototype, "scrollItemVO", {
    get: function () {
      return this._scrollItemVO;
    },
    set: function (e) {
      this._scrollItemVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return ScrollItem;
}(s);
exports.ScrollItem = u;