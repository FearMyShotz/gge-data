Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleLuckyWheelCheckboxWrapper(e, t = null, i = null, n = null) {
    this.sourceMCForTooltipName = null;
    this._isEnabled = false;
    this._disp = e;
    this.sourceMCForTooltipName = t;
    this.tooltipChecked = i || "";
    this.tooltipEmpty = n || "";
    this.setBox();
  }
  CastleLuckyWheelCheckboxWrapper.prototype.onRollOver = function (e) {
    this.getSourceMCForTooltip().toolTipText = null;
    this._disp.gotoAndStop(CastleLuckyWheelCheckboxWrapper.FRAME_HOVER);
    this.getSourceMCForTooltip().toolTipText = this._isEnabled ? this.tooltipChecked : this.tooltipEmpty;
    a.CastleLayoutManager.getInstance().nativeCursor.setCursorType(s.BasicCustomCursor.CURSOR_CLICK);
  };
  CastleLuckyWheelCheckboxWrapper.prototype.onRollOut = function (e) {
    a.CastleLayoutManager.getInstance().nativeCursor.setCursorType(s.BasicCustomCursor.CURSOR_ARROW);
    this.setBox();
  };
  CastleLuckyWheelCheckboxWrapper.prototype.onClick = function (e) {
    this._isEnabled = !this._isEnabled;
    this.setBox();
  };
  CastleLuckyWheelCheckboxWrapper.prototype.setBox = function () {
    this.getSourceMCForTooltip().toolTipText = null;
    this._disp.gotoAndStop(this._isEnabled ? CastleLuckyWheelCheckboxWrapper.FRAME_ON : CastleLuckyWheelCheckboxWrapper.FRAME_OFF);
    this.getSourceMCForTooltip().toolTipText = this._isEnabled ? this.tooltipChecked : this.tooltipEmpty;
  };
  Object.defineProperty(CastleLuckyWheelCheckboxWrapper.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    set: function (e) {
      this._isEnabled = e;
      this.setBox();
    },
    enumerable: true,
    configurable: true
  });
  CastleLuckyWheelCheckboxWrapper.prototype.getSourceMCForTooltip = function () {
    if (this.sourceMCForTooltipName) {
      return this._disp[this.sourceMCForTooltipName];
    } else {
      return this._disp;
    }
  };
  CastleLuckyWheelCheckboxWrapper.prototype.addEventListenerOnShow = function () {
    this._disp.addEventListener(n.MOUSE_OVER, this.bindFunction(this.onRollOver));
    this._disp.addEventListener(n.MOUSE_OUT, this.bindFunction(this.onRollOut));
    this._disp.addEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  CastleLuckyWheelCheckboxWrapper.prototype.removeEventListenersOnHide = function () {
    this._disp.removeEventListener(n.MOUSE_OVER, this.bindFunction(this.onRollOver));
    this._disp.removeEventListener(n.MOUSE_OUT, this.bindFunction(this.onRollOut));
    this._disp.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  CastleLuckyWheelCheckboxWrapper.__initialize_static_members = function () {
    CastleLuckyWheelCheckboxWrapper.FRAME_OFF = 3;
    CastleLuckyWheelCheckboxWrapper.FRAME_HOVER = 2;
    CastleLuckyWheelCheckboxWrapper.FRAME_ON = 1;
  };
  return CastleLuckyWheelCheckboxWrapper;
}();
exports.CastleLuckyWheelCheckboxWrapper = o;
var a = require("./17.js");
var s = require("./2.js");
o.__initialize_static_members();