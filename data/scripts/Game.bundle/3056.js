Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = function (e) {
  function RingMenuButtonLegendTemple() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonLegendTemple, e);
  RingMenuButtonLegendTemple.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_legendTemple;
    this._disp.visible = a.instanceOfClass(n, "LegendTempleBuildingVE") && n.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonLegendTemple.prototype.onClick = function (e, t) {
    r.CastleDialogHandler.getInstance().registerDefaultDialogs(l.CastleLegendSkillDialog);
    this.parent.hide();
  };
  RingMenuButtonLegendTemple.prototype.getInfoText = function () {
    return "legendTemple_setSkills";
  };
  return RingMenuButtonLegendTemple;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonLegendTemple = s;
var r = require("./9.js");
var l = require("./448.js");
o.classImplementsInterfaces(s, "IRingMenuButton");