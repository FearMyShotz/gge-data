Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = function (e) {
  function RingMenuButtonOfficerSchool() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonOfficerSchool, e);
  RingMenuButtonOfficerSchool.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_officerSchool;
    this._disp.visible = c.instanceOfClass(n, "OfficersSchoolBuildingVE") && n.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonOfficerSchool.prototype.onClick = function (e, t) {
    r.CastleDialogHandler.getInstance().registerDefaultDialogs(l.OfficersSchoolDialog);
    this.parent.hide();
  };
  RingMenuButtonOfficerSchool.prototype.getInfoText = function () {
    return a.Localize.text("ringmenu_trainingProgram");
  };
  return RingMenuButtonOfficerSchool;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonOfficerSchool = s;
var r = require("./9.js");
var l = require("./1037.js");
o.classImplementsInterfaces(s, "IRingMenuButton");
var c = require("./1.js");