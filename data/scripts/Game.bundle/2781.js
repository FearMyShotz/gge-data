Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function RingMenuButtonMinuteSkip() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonMinuteSkip, e);
  RingMenuButtonMinuteSkip.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_minuteSkip;
    var o = this._disp.visible;
    this._disp.visible = this.isBuildingInProgress() && this.isOutOfTutorial();
    if (this._disp.visible && !o) {
      this._disp.delayEnableButton(true, 1000);
    }
  };
  RingMenuButtonMinuteSkip.prototype.onClick = function (e, t) {
    r.CastleDialogHandler.getInstance().registerDefaultDialogs(l.CastleMinuteSkipDialog, new c.BuildingMinuteSkipProperties(this.targetBuilding.vo.objectId));
  };
  RingMenuButtonMinuteSkip.prototype.getInfoText = function () {
    return a.Localize.text("timeSkipButton_tooltip");
  };
  return RingMenuButtonMinuteSkip;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonMinuteSkip = s;
var r = require("./9.js");
var l = require("./208.js");
var c = require("./1520.js");
o.classImplementsInterfaces(s, "IRingMenuButton");