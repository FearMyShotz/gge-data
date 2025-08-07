Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function RingMenuButtonHunter() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonHunter, e);
  RingMenuButtonHunter.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_hunter;
    this._disp.visible = a.instanceOfClass(n, "AHunterBuildingVE") && r.CastleModel.hunterData.isHunterBuildingBuilt;
  };
  RingMenuButtonHunter.prototype.onClick = function (e, t) {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleHunterDialog);
    this.parent.hide();
  };
  RingMenuButtonHunter.prototype.getInfoText = function () {
    return s.Localize.text("dialog_hunter_title");
  };
  return RingMenuButtonHunter;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonHunter = l;
var c = require("./9.js");
var u = require("./1590.js");
o.classImplementsInterfaces(l, "IRingMenuButton");