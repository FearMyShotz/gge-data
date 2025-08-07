Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./36.js");
var a = require("./1.js");
var s = createjs.MouseEvent;
var r = function (e) {
  function ClickFeedbackButtonBackground(t = null, i = false) {
    var n = e.call(this, t, i) || this;
    n._disp.mc_background.gotoAndStop(o.ClickFeedbackButton.FRAME_DEFAULT);
    return n;
  }
  n.__extends(ClickFeedbackButtonBackground, e);
  ClickFeedbackButtonBackground.prototype.onMouseDown = function (e) {
    if (this.enabled) {
      this._disp.mc_background.gotoAndStop(o.ClickFeedbackButton.FRAME_CLICKED);
      if (a.currentBrowserInfo.isMobile && a.currentBrowserInfo.isTouchEvent(e)) {
        this._disp.stage.addEventListener(s.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButtonBackground.prototype.onMobileStageMouseUp = function (e) {
    if (this._disp.stage) {
      this._disp.stage.removeEventListener(s.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
    }
    this.onMouseUp(e);
  };
  ClickFeedbackButtonBackground.prototype.onMouseUp = function (e) {
    if (this.enabled && this._disp.mc_background.currentFrame != o.ClickFeedbackButton.FRAME_DEFAULT - 1) {
      this._disp.mc_background.gotoAndStop(o.ClickFeedbackButton.FRAME_DEFAULT);
    }
  };
  ClickFeedbackButtonBackground.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    this._disp.mc_background.gotoAndStop(o.ClickFeedbackButton.FRAME_DEFAULT);
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  return ClickFeedbackButtonBackground;
}(o.ClickFeedbackButton);
exports.ClickFeedbackButtonBackground = r;