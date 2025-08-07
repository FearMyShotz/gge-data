Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = function (e) {
  function RingMenuButtonOverview() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonOverview, e);
  RingMenuButtonOverview.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_overview;
    this._disp.visible = a.instanceOfClass(n, "StorehouseBuildingVE");
    this._disp.enableButton = this.isOutOfTutorial();
  };
  RingMenuButtonOverview.prototype.onClick = function (e, t) {
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.CastleListDetailOverviewDialog);
  };
  RingMenuButtonOverview.prototype.getInfoText = function () {
    return s.Localize.text("panel_action_overview");
  };
  return RingMenuButtonOverview;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonOverview = r;
var l = require("./9.js");
var c = require("./1040.js");
o.classImplementsInterfaces(r, "IRingMenuButton");