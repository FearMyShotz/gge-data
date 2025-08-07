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
  function RingMenuButtonStronghold() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonStronghold, e);
  RingMenuButtonStronghold.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_stronghold;
    this._disp.visible = a.instanceOfClass(n, "StrongholdBuildingVE") && n.buildingVO.buildingState.isFunctionally;
  };
  RingMenuButtonStronghold.prototype.onClick = function (e, t) {
    this.targetBuilding;
    u.CastleDialogHandler.getInstance().registerDefaultDialogs(d.CastleRecruitDialog, new l.CastleRecruitDialogProperties(r.ClientConstCastle.CATEGORY_STRONGHOLD));
    this.parent.hide();
  };
  RingMenuButtonStronghold.prototype.getInfoText = function () {
    return s.Localize.text("stronghold_name");
  };
  return RingMenuButtonStronghold;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonStronghold = c;
var u = require("./9.js");
var d = require("./224.js");
o.classImplementsInterfaces(c, "IRingMenuButton");