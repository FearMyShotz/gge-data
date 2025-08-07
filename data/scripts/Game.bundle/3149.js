Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./39.js");
var l = function (e) {
  function RingMenuButtonWishingWell() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonWishingWell, e);
  RingMenuButtonWishingWell.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_wishingWell;
    this._disp.visible = a.instanceOfClass(n, "RubyWishingWellFixedPositionBuildingVE");
    this._disp.enableButton = n.buildingVO.level > 0;
    this._disp.toolTipText = n.buildingVO.level > 0 ? "" : r.ClientConstTextIds.NOT_AVAILABLE;
  };
  RingMenuButtonWishingWell.prototype.onClick = function (e, t) {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.RubyWishingWellDialog);
    this.parent.hide();
  };
  RingMenuButtonWishingWell.prototype.getInfoText = function () {
    return s.Localize.text("ringmenu_building_rubyWishingWell");
  };
  return RingMenuButtonWishingWell;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonWishingWell = l;
var c = require("./9.js");
var u = require("./1607.js");
o.classImplementsInterfaces(l, "IRingMenuButton");