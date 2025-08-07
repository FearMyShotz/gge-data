Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./444.js");
var l = function (e) {
  function RingMenuButtonInfo() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonInfo, e);
  RingMenuButtonInfo.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_info;
    this._disp.visible = !a.instanceOfClass(n, "ATowerVE") || n.vo.type != "Placeholder" && n.vo.type != "Level0";
  };
  RingMenuButtonInfo.prototype.onClick = function (e, t) {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleBuildingInfoDialog, new r.CastleBuildingInfoDialogProperties(this.targetBuilding.buildingVO));
  };
  RingMenuButtonInfo.prototype.getInfoText = function () {
    return s.Localize.text("ringmenu_buildinginfo");
  };
  return RingMenuButtonInfo;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonInfo = l;
var c = require("./9.js");
var u = require("./445.js");
o.classImplementsInterfaces(l, "IRingMenuButton");