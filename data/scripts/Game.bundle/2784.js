Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./87.js");
var r = function (e) {
  function RingMenuButtonRepair() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonRepair, e);
  RingMenuButtonRepair.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_repair;
    this._disp.visible = n.buildingVO.needsReparation;
    switch (n.buildingVO.buildingState) {
      case s.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case s.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        this._disp.visible = false;
    }
  };
  RingMenuButtonRepair.prototype.onClick = function (e, t) {
    l.Iso.controller.server.repairBuilding(this.targetBuilding.vo.objectId);
  };
  RingMenuButtonRepair.prototype.getAction = function () {
    return a.int(c.RingMenuBuilding.ACTION_REPAIR);
  };
  return RingMenuButtonRepair;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonRepair = r;
var l = require("./33.js");
var c = require("./369.js");
o.classImplementsInterfaces(r, "IRingMenuButton");