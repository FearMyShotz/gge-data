Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = function (e) {
  function RingMenuButtonRelicus() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonRelicus, e);
  RingMenuButtonRelicus.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_relicus;
    this._disp.visible = u.instanceOfClass(n, "RelicEnchanterBuildingVE") && n.buildingVO.buildingState.isFunctionally && n.buildingVO.requiredLevel <= s.CastleModel.userData.level;
  };
  RingMenuButtonRelicus.prototype.onClick = function (e, t) {
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(c.RelicUpgradeDialog);
  };
  RingMenuButtonRelicus.prototype.getInfoText = function () {
    return a.Localize.text("hud_button_relicEnchanter_relicEnchanterUpgrade_tooltip");
  };
  return RingMenuButtonRelicus;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonRelicus = r;
var l = require("./9.js");
var c = require("./799.js");
o.classImplementsInterfaces(r, "IRingMenuButton");
var u = require("./1.js");