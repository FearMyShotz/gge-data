Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = createjs.MouseEvent;
var a = require("./1.js");
var s = function () {
  function TouchScrollHelper() {
    this._valid = false;
    this.touchStageRefPoint = new n();
  }
  TouchScrollHelper.prototype.setup = function (e, t = null, i = null) {
    if (this.disp) {
      this.dispose();
    }
    if (a.currentBrowserInfo.isMobile) {
      this.disp = e;
      this.disp.addEventListener(o.MOUSE_DOWN, this.bindFunction(this.onTouchDown));
      this.disp.addEventListener(o.MOUSE_UP, this.bindFunction(this.onTouchUp));
      this.onTouchDownCallback = t;
      this.onTouchUpCallback = i;
    }
  };
  TouchScrollHelper.prototype.dispose = function () {
    if (this.disp) {
      this.disp.removeEventListener(o.MOUSE_DOWN, this.bindFunction(this.onTouchDown));
      this.disp.removeEventListener(o.MOUSE_UP, this.bindFunction(this.onTouchUp));
      this.onTouchDownCallback = null;
      this.onTouchUpCallback = null;
    }
  };
  Object.defineProperty(TouchScrollHelper.prototype, "valid", {
    get: function () {
      return this._valid;
    },
    enumerable: true,
    configurable: true
  });
  TouchScrollHelper.prototype.onTouchDown = function (e) {
    if (a.currentBrowserInfo.isTouchEvent(e)) {
      this.touchStageRefPoint.x = e.stageX;
      this.touchStageRefPoint.y = e.stageY;
      this._valid = true;
      if (this.onTouchDownCallback) {
        this.onTouchDownCallback();
      }
    }
  };
  TouchScrollHelper.prototype.onTouchUp = function (e) {
    if (a.currentBrowserInfo.isTouchEvent(e)) {
      this.touchStageRefPoint.x = 0;
      this.touchStageRefPoint.y = 0;
      this._valid = false;
      if (this.onTouchUpCallback) {
        this.onTouchUpCallback();
      }
    }
  };
  return TouchScrollHelper;
}();
exports.TouchScrollHelper = s;