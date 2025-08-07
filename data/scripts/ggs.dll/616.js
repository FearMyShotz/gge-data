var i;
var a = this && this.__extends || (i = Object.setPrototypeOf || {
  __proto__: []
} instanceof Array && function (e, t) {
  e.__proto__ = t;
} || function (e, t) {
  for (var n in t) {
    if (t.hasOwnProperty(n)) {
      e[n] = t[n];
    }
  }
}, function (e, t) {
  function __() {
    this.constructor = e;
  }
  i(e, t);
  e.prototype = t === null ? Object.create(t) : (__.prototype = t.prototype, new __());
});
Object.defineProperty(exports, "__esModule", {
  value: true
});
var s = require("./246.js");
var r = require("./3.js");
var o = createjs.MouseEvent;
var l = function (e) {
  function ClickFeedbackButtonHover(t = null, n = false) {
    return e.call(this, t, n) || this;
  }
  a(ClickFeedbackButtonHover, e);
  ClickFeedbackButtonHover.prototype.onMouseDown = function (e) {
    if (this.enabled) {
      this._disp.gotoAndStop(ClickFeedbackButtonHover.FRAME_CLICKED);
      if (r.currentBrowserInfo.isMobile && r.currentBrowserInfo.isTouchEvent(e)) {
        this._disp.stage.addEventListener(o.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButtonHover.prototype.onRollOver = function (t) {
    this._disp.gotoAndStop(ClickFeedbackButtonHover.FRAME_HOVERED);
    e.prototype.onRollOver.call(this, t);
  };
  ClickFeedbackButtonHover.FRAME_DEFAULT = 1;
  ClickFeedbackButtonHover.FRAME_HOVERED = 2;
  ClickFeedbackButtonHover.FRAME_CLICKED = 3;
  return ClickFeedbackButtonHover;
}(s.ClickFeedbackButton);
exports.ClickFeedbackButtonHover = l;