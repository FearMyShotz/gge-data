Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./18.js");
var l = require("./263.js");
var c = function (e) {
  function RingMenuButtonFactionBarracks() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonFactionBarracks, e);
  RingMenuButtonFactionBarracks.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_berimond_unit;
    this._disp.visible = a.instanceOfClass(n, "FactionBarracksBuildingVE") && n.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonFactionBarracks.prototype.onClick = function (e, t) {
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleRecruitDialog, new l.CastleRecruitDialogProperties(r.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES));
    this.parent.hide();
  };
  RingMenuButtonFactionBarracks.prototype.getInfoText = function () {
    return s.Localize.text("hire");
  };
  return RingMenuButtonFactionBarracks;
}(require("./1583.js").RingMenuButtonRecruit);
exports.RingMenuButtonFactionBarracks = c;
var u = require("./9.js");
var d = require("./224.js");
o.classImplementsInterfaces(c, "IRingMenuButton");