Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Event;
var a = createjs.Point;
var s = function () {
  function InteractiveBitmapClipComponent(e) {
    this._threshold = 0;
    this._transparentMode = false;
    this._bitmapHit = false;
    this._mousePoint = new a();
    this.MOUSE_UPDATE_INTERVAL = Number(1000 / 24);
    this.componentOwner = e;
    this.activateMouseTrap();
  }
  Object.defineProperty(InteractiveBitmapClipComponent.prototype, "alphaTolerance", {
    get: function () {
      return this._threshold;
    },
    set: function (e) {
      this._threshold = Math.min(255, e);
    },
    enumerable: true,
    configurable: true
  });
  InteractiveBitmapClipComponent.prototype.activateMouseTrap = function () {
    this.componentOwner.addEventListener("mouseover", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.addEventListener("mouseout", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.addEventListener("rollover", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.addEventListener("rollout", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.addEventListener("mousemove", this.bindFunction(this.captureMouseEvent));
  };
  InteractiveBitmapClipComponent.prototype.deactivateMouseTrap = function () {
    this.componentOwner.removeEventListener("mouseover", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.removeEventListener("mouseout", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.removeEventListener("rollover", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.removeEventListener("rollout", this.bindFunction(this.captureMouseEvent));
    this.componentOwner.removeEventListener("mousemove", this.bindFunction(this.captureMouseEvent));
  };
  InteractiveBitmapClipComponent.prototype.captureMouseEvent = function (e) {
    if (!this._transparentMode && (e.type == "mouseover" || e.type == "rollover")) {
      this._transparentMode = true;
      this.componentOwner.mouseEnabled = false;
      this.componentOwner.addEventListener(i.ENTER_FRAME, this.bindFunction(this.trackMouseWhileInBounds), false);
      this.trackMouseWhileInBounds();
    }
    if (!this._bitmapHit) {
      e.stopImmediatePropagation();
    }
  };
  InteractiveBitmapClipComponent.prototype.trackMouseWhileInBounds = function (e = null) {
    var t = Date.now();
    if (t > this._nextUpdateTimestamp) {
      if (this.bitmapHitTest() != this._bitmapHit) {
        this._bitmapHit = !this._bitmapHit;
        if (this._bitmapHit) {
          this.deactivateMouseTrap();
          this._transparentMode = false;
          this.componentOwner.mouseEnabled = true;
        } else if (!this._bitmapHit) {
          this._transparentMode = true;
          this.componentOwner.mouseEnabled = false;
        }
      }
      var n = this.componentOwner.bmpImage.localToGlobal(this._mousePoint.x, this._mousePoint.y);
      if (!this.componentOwner.hitTestPoint(n.x, n.y, true)) {
        this.componentOwner.removeEventListener(i.ENTER_FRAME, this.bindFunction(this.trackMouseWhileInBounds));
        this._transparentMode = false;
        this.componentOwner.mouseEnabled = true;
        this.activateMouseTrap();
      }
      this._nextUpdateTimestamp = t + this.MOUSE_UPDATE_INTERVAL;
    }
  };
  InteractiveBitmapClipComponent.prototype.bitmapHitTest = function () {
    return false;
  };
  InteractiveBitmapClipComponent.prototype.dispose = function () {
    this.deactivateMouseTrap();
  };
  InteractiveBitmapClipComponent.BASE_POINT = new a();
  return InteractiveBitmapClipComponent;
}();
exports.InteractiveBitmapClipComponent = s;