Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./49.js");
var s = createjs.MouseEvent;
var r = function (e) {
  function ClickFeedbackButton(t = null, i = false) {
    var n = e.call(this, t, i) || this;
    n._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    return n;
  }
  n.__extends(ClickFeedbackButton, e);
  ClickFeedbackButton.prototype.init = function () {
    e.prototype.init.call(this);
    this._disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.addEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.addMouseEventListener = function () {
    e.prototype.addMouseEventListener.call(this);
    this._disp.addEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.addEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.removeMouseEventListener = function () {
    e.prototype.removeMouseEventListener.call(this);
    this._disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.onRemoveToStage = function (t) {
    e.prototype.onRemoveToStage.call(this, t);
    this._disp.removeEventListener("mousedown", this.bindFunction(this.onMouseDown));
    this._disp.removeEventListener("click", this.bindFunction(this.onMouseUp));
  };
  ClickFeedbackButton.prototype.onMouseDown = function (e) {
    if (this.enabled) {
      this._disp.gotoAndStop(ClickFeedbackButton.FRAME_CLICKED);
      if (o.currentBrowserInfo.isMobile && o.currentBrowserInfo.isTouchEvent(e)) {
        this._disp.stage.addEventListener(s.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButton.prototype.onMobileStageMouseUp = function (e) {
    if (this._disp.stage) {
      this._disp.stage.removeEventListener(s.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
    }
    this.onMouseUp(e);
  };
  ClickFeedbackButton.prototype.onMouseUp = function (e) {
    if (this.enabled && this._disp.currentFrame != ClickFeedbackButton.FRAME_DEFAULT - 1) {
      this._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    }
  };
  ClickFeedbackButton.prototype.onRollOut = function (t) {
    this._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    e.prototype.onRollOut.call(this, t);
    if (this._disp.cacheCanvas) {
      this._disp.updateCache();
    }
  };
  ClickFeedbackButton.FRAME_DEFAULT = 1;
  ClickFeedbackButton.FRAME_CLICKED = 2;
  return ClickFeedbackButton;
}(a.BasicButton);
exports.ClickFeedbackButton = r;