Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./263.js");
var l = function (e) {
  function RingMenuButtonHospital() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonHospital, e);
  RingMenuButtonHospital.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_hospital;
    this._disp.visible = a.instanceOfClass(n, "HospitalBuildingVE") && n.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonHospital.prototype.onClick = function (e, t) {
    var i = this.targetBuilding;
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleRecruitDialog, new r.CastleRecruitDialogProperties(i.hospitalVO.healCategory));
    this.parent.hide();
  };
  RingMenuButtonHospital.prototype.getInfoText = function () {
    return s.Localize.text("dialog_hospital_title");
  };
  return RingMenuButtonHospital;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonHospital = l;
var c = require("./9.js");
var u = require("./224.js");
o.classImplementsInterfaces(l, "IRingMenuButton");