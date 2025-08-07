Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./871.js");
var r = function (e) {
  function RingMenuButtonBuildingDistrict() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonBuildingDistrict, e);
  RingMenuButtonBuildingDistrict.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_buildingDistrict;
    this._disp.visible = u.instanceOfClass(n, "ADistrictBuildingVE") && n.buildingVO.buildingState.isFunctionally;
    this._disp.gotoAndStop(d.int(n.buildingVO.districtTypeID));
  };
  RingMenuButtonBuildingDistrict.prototype.onClick = function (e, t) {
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.BuildingDistrictDialog, new s.BuildingDistrictDialogProperties(this.targetBuilding.buildingVO));
    this.parent.hide();
  };
  RingMenuButtonBuildingDistrict.prototype.getInfoText = function () {
    return a.Localize.text("ringmenu_enterDistrict");
  };
  return RingMenuButtonBuildingDistrict;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonBuildingDistrict = r;
var l = require("./9.js");
var c = require("./695.js");
o.classImplementsInterfaces(r, "IRingMenuButton");
var u = require("./1.js");
var d = require("./6.js");