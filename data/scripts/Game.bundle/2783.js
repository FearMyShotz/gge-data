Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./98.js");
var l = function (e) {
  function RingMenuButtonMove() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonMove, e);
  RingMenuButtonMove.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_move;
    this._disp.visible = n.vo.isMovable;
    if (this._disp.visible) {
      var o = 1;
      if (n.vo.isInBuildingDistrict) {
        o = s.int(n.buildingVO.districtTypeID) + 1;
      }
      this._disp.gotoAndStop(o);
    }
  };
  RingMenuButtonMove.prototype.onClick = function (e, t) {
    var i = this.targetBuilding;
    c.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    c.Iso.renderer.mouse.startDraggingTarget(i, false);
    if (i.vo.isInBuildingDistrict) {
      r.ARingMenuButton.layoutManager.hideAllDialogs();
    }
  };
  RingMenuButtonMove.prototype.getInfoText = function () {
    if (this.targetBuilding.vo.isInBuildingDistrict) {
      return a.Localize.text("ringmenu_removeFromDistrict");
    } else {
      return a.Localize.text("ringmenu_move");
    }
  };
  return RingMenuButtonMove;
}(r.ARingMenuButton);
exports.RingMenuButtonMove = l;
var c = require("./33.js");
o.classImplementsInterfaces(l, "IRingMenuButton");