Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = require("./2.js");
var a = require("./17.js");
var s = function () {
  function ClickFeedbackHoverBehaviour(e, t = null, i = null) {
    this._disp = e;
    this._hoverStateMC = t || this._disp.mc_mouseOver;
    this._downStateMC = i || this._disp.mc_downState;
    this._hoverStateMC.visible = false;
    this._downStateMC.visible = false;
    this._hoverStateMC.mouseEnabled = false;
    this._downStateMC.mouseEnabled = false;
  }
  ClickFeedbackHoverBehaviour.prototype.addEventListener = function () {
    if (this._disp) {
      this._disp.addEventListener(n.ROLL_OVER, this.bindFunction(this.onRollOver));
      this._disp.addEventListener(n.ROLL_OUT, this.bindFunction(this.onRollOut));
      this._disp.addEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this._disp.addEventListener(n.CLICK, this.bindFunction(this.onMouseUp));
    }
  };
  ClickFeedbackHoverBehaviour.prototype.removeEventListener = function () {
    if (this._disp) {
      this._disp.removeEventListener(n.ROLL_OVER, this.bindFunction(this.onRollOver));
      this._disp.removeEventListener(n.ROLL_OUT, this.bindFunction(this.onRollOut));
      this._disp.removeEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this._disp.removeEventListener(n.CLICK, this.bindFunction(this.onMouseUp));
    }
  };
  ClickFeedbackHoverBehaviour.prototype.onMouseDown = function (e) {
    this._hoverStateMC.visible = false;
    this._downStateMC.visible = true;
    if (this._disp.cacheCanvas && this._updateCacheOnChange) {
      this._disp.updateCache();
    }
  };
  ClickFeedbackHoverBehaviour.prototype.onMouseUp = function (e) {
    this._hoverStateMC.visible = false;
    this._downStateMC.visible = false;
    if (this._disp.cacheCanvas && this._updateCacheOnChange) {
      this._disp.updateCache();
    }
  };
  ClickFeedbackHoverBehaviour.prototype.onRollOver = function (e) {
    this._hoverStateMC.visible = true;
    this._downStateMC.visible = false;
    if (this._disp.cacheCanvas && this._updateCacheOnChange) {
      this._disp.updateCache();
    }
    a.CastleLayoutManager.getInstance().customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
  };
  ClickFeedbackHoverBehaviour.prototype.onRollOut = function (e) {
    this._hoverStateMC.visible = false;
    this._downStateMC.visible = false;
    if (this._disp.cacheCanvas && this._updateCacheOnChange) {
      this._disp.updateCache();
    }
    a.CastleLayoutManager.getInstance().customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(ClickFeedbackHoverBehaviour.prototype, "updateCacheOnChange", {
    set: function (e) {
      this._updateCacheOnChange = e;
    },
    enumerable: true,
    configurable: true
  });
  return ClickFeedbackHoverBehaviour;
}();
exports.ClickFeedbackHoverBehaviour = s;