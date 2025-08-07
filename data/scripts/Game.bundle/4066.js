Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleInboxMessageCountDisplay(e, t, i, n) {
    this._iconFrame = 0;
    this._toolTipText = "";
    this._toolTipTextFull = "";
    this._disp = e;
    this._iconFrame = l.int(t);
    this._toolTipText = i;
    this._toolTipTextFull = n;
  }
  CastleInboxMessageCountDisplay.prototype.update = function (e, t) {
    this._disp.visible = true;
    this._disp.mouseChildren = false;
    this._disp.status_icon.gotoAndStop(this._iconFrame);
    a.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_progress, new r.LocalizedTextVO(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [new s.LocalizedNumberVO(e), new s.LocalizedNumberVO(t)]));
    this._disp.progress_bar.scaleX = Math.min(e / t, 1);
    if (e >= t) {
      this._disp.progress_bar.gotoAndStop(2);
      this._disp.toolTipText = this._toolTipTextFull;
    } else {
      this._disp.progress_bar.gotoAndStop(1);
      this._disp.toolTipText = this._toolTipText;
    }
  };
  return CastleInboxMessageCountDisplay;
}();
exports.CastleInboxMessageCountDisplay = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");