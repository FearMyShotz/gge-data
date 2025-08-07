Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./36.js");
var a = require("./1.js");
var s = createjs.MouseEvent;
var r = function (e) {
  function ClickFeedbackButtonHover(t = null, i = false) {
    return e.call(this, t, i) || this;
  }
  n.__extends(ClickFeedbackButtonHover, e);
  ClickFeedbackButtonHover.prototype.onMouseDown = function (e) {
    if (this.enabled) {
      this._disp.gotoAndStop(ClickFeedbackButtonHover.FRAME_CLICKED);
      if (a.currentBrowserInfo.isMobile && a.currentBrowserInfo.isTouchEvent(e)) {
        this._disp.stage.addEventListener(s.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButtonHover.prototype.onRollOver = function (t) {
    if (this.enabled) {
      this._disp.gotoAndStop(ClickFeedbackButtonHover.FRAME_HOVERED);
      e.prototype.onRollOver.call(this, t);
      if (this._disp.cacheCanvas) {
        this._disp.updateCache();
      }
    }
  };
  ClickFeedbackButtonHover.FRAME_DEFAULT = 1;
  ClickFeedbackButtonHover.FRAME_HOVERED = 2;
  ClickFeedbackButtonHover.FRAME_CLICKED = 3;
  return ClickFeedbackButtonHover;
}(o.ClickFeedbackButton);
exports.ClickFeedbackButtonHover = r;