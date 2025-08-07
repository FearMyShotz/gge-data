Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./20.js");
var s = createjs.MouseEvent;
var r = function (e) {
  function ClickFeedbackButtonHoverTabButton(t = null, i = false) {
    var n = e.call(this, t, i) || this;
    n.select = false;
    return n;
  }
  n.__extends(ClickFeedbackButtonHoverTabButton, e);
  ClickFeedbackButtonHoverTabButton.prototype.onMouseDown = function (e) {
    if (this.enabled && !this.select) {
      this._disp.gotoAndStop(a.ClickFeedbackButtonHover.FRAME_CLICKED);
      if (o.currentBrowserInfo.isMobile && o.currentBrowserInfo.isTouchEvent(e)) {
        this._disp.stage.addEventListener(s.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButtonHoverTabButton.prototype.onRollOver = function (t) {
    if (this.enabled && !this.select) {
      this._disp.gotoAndStop(a.ClickFeedbackButtonHover.FRAME_HOVERED);
      e.prototype.onRollOver.call(this, t);
      if (this._disp.cacheCanvas) {
        this._disp.updateCache();
      }
    }
  };
  ClickFeedbackButtonHoverTabButton.prototype.onMouseUp = function (t) {
    if (!this.select) {
      e.prototype.onMouseUp.call(this, t);
    }
  };
  ClickFeedbackButtonHoverTabButton.prototype.onRollOut = function (t) {
    if (!this.select) {
      e.prototype.onRollOut.call(this, t);
    }
  };
  ClickFeedbackButtonHoverTabButton.prototype.selected = function () {
    this.select = true;
    this._disp.gotoAndStop(ClickFeedbackButtonHoverTabButton.FRAME_SELECTED);
  };
  ClickFeedbackButtonHoverTabButton.prototype.deselected = function () {
    this.select = false;
    this._disp.gotoAndStop(ClickFeedbackButtonHoverTabButton.FRAME_DEFAULT);
  };
  ClickFeedbackButtonHoverTabButton.FRAME_SELECTED = 4;
  return ClickFeedbackButtonHoverTabButton;
}(a.ClickFeedbackButtonHover);
exports.ClickFeedbackButtonHoverTabButton = r;