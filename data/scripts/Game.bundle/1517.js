Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./58.js");
var l = require("./39.js");
var c = require("./4.js");
var u = require("./430.js");
var d = require("./8.js");
var p = function (e) {
  function RingMenuButtonGeneralsOverview() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonGeneralsOverview, e);
  RingMenuButtonGeneralsOverview.prototype.init = function (t, i, n) {
    var o;
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_generalsOverview;
    d.ButtonHelper.initBasicButton(this._disp);
    this._disp.visible = a.instanceOfClass(this.targetBuilding, "EstateBuildingVE") || a.instanceOfClass(this.targetBuilding, "MilitarycampBuildingVE");
    this._disp.basicButton.enableButton = c.CastleModel.generalsIntroductionData.canAccessGenerals();
    o = d.ButtonHelper.isButtonEnabled(this._disp) ? null : c.CastleModel.userData.level < r.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS ? s.Localize.text(l.ClientConstTextIds.LEVEL_NEEDED, [r.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS]) : "panel_action_generals_notAvailable_quest";
    this._disp.toolTipText = o;
  };
  RingMenuButtonGeneralsOverview.prototype.onClick = function (e, t) {
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(u.GeneralsOverviewDialog);
    this.parent.hide();
  };
  RingMenuButtonGeneralsOverview.prototype.getInfoText = function () {
    return s.Localize.text("ringmenu_building_generals_overview");
  };
  return RingMenuButtonGeneralsOverview;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonGeneralsOverview = p;
var h = require("./9.js");
o.classImplementsInterfaces(p, "IRingMenuButton");