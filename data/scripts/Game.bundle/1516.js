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
var u = require("./164.js");
var d = require("./8.js");
var p = function (e) {
  function RingMenuButtonGeneralsHub() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonGeneralsHub, e);
  RingMenuButtonGeneralsHub.prototype.init = function (t, i, n) {
    var o;
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_generalsHub;
    d.ButtonHelper.initBasicButton(this._disp);
    this._disp.visible = a.instanceOfClass(this.targetBuilding, "EstateBuildingVE") || a.instanceOfClass(this.targetBuilding, "MilitarycampBuildingVE") || a.instanceOfClass(this.targetBuilding, "TavernBuildingVE");
    this._disp.basicButton.enableButton = c.CastleModel.generalsIntroductionData.canAccessGenerals();
    o = d.ButtonHelper.isButtonEnabled(this._disp) ? null : c.CastleModel.userData.level < r.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS ? s.Localize.text(l.ClientConstTextIds.LEVEL_NEEDED, [r.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS]) : "panel_action_generals_notAvailable_quest";
    this._disp.toolTipText = o;
  };
  RingMenuButtonGeneralsHub.prototype.onClick = function (e, t) {
    u.GeneralsHelper.showGeneralsHubDialog();
    this.parent.hide();
  };
  RingMenuButtonGeneralsHub.prototype.getInfoText = function () {
    return s.Localize.text("ringmenu_building_generals_inn");
  };
  return RingMenuButtonGeneralsHub;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonGeneralsHub = p;
o.classImplementsInterfaces(p, "IRingMenuButton");