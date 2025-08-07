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
var s = require("./54.js");
var r = require("./3.js");
var o = createjs.MouseEvent;
var l = function (e) {
  function ClickFeedbackButton(t = null, n = false) {
    var i = e.call(this, t, n) || this;
    i._disp.gotoAndStop(ClickFeedbackButton.FRAME_DEFAULT);
    return i;
  }
  a(ClickFeedbackButton, e);
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
      if (r.currentBrowserInfo.isMobile && r.currentBrowserInfo.isTouchEvent(e)) {
        this._disp.stage.addEventListener(o.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
      }
    }
  };
  ClickFeedbackButton.prototype.onMobileStageMouseUp = function (e) {
    if (this._disp.stage) {
      this._disp.stage.removeEventListener(o.STAGE_MOUSE_UP, this.bindFunction(this.onMobileStageMouseUp));
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
  };
  ClickFeedbackButton.FRAME_DEFAULT = 1;
  ClickFeedbackButton.FRAME_CLICKED = 2;
  return ClickFeedbackButton;
}(s.BasicButton);
exports.ClickFeedbackButton = l;