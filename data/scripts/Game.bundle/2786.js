Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./98.js");
var l = function (e) {
  function RingMenuButtonRotate() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonRotate, e);
  RingMenuButtonRotate.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_rotate;
    this._disp.enableButton = true;
    this._disp.visible = n.vo.canBeRotated && !n.vo.isInBuildingDistrict;
  };
  RingMenuButtonRotate.prototype.onClick = function (e, t) {
    var i = this.targetBuilding;
    if (!i.vo.isInBuildingDistrict) {
      c.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    }
    var n = s.int(i.vo.rotation);
    i.vo.rotate();
    if (c.Iso.data.grid.isDimensionFreeForBuild(i.vo.pos, i.vo.dimension, i.vo.objectId) || i.vo.isInBuildingDistrict) {
      c.Iso.controller.dataUpdater.onIsoObjectMoved(i.vo, i.vo.pos, i.vo.rotation);
      i.updateRotation();
    } else {
      i.vo.rotation = n;
      c.Iso.renderer.mouse.startDraggingTarget(this.targetBuilding, false);
      i.vo.rotate();
      i.updateRotation();
      i.renewCollisionFloor();
      r.ARingMenuButton.layoutManager.isoScreen.isoRenderer.mouse.onDragTileMove();
    }
  };
  RingMenuButtonRotate.prototype.getInfoText = function () {
    return a.Localize.text("rotate");
  };
  return RingMenuButtonRotate;
}(r.ARingMenuButton);
exports.RingMenuButtonRotate = l;
var c = require("./33.js");
o.classImplementsInterfaces(l, "IRingMenuButton");