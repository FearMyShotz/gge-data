Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./87.js");
var c = require("./263.js");
var u = function (e) {
  function RingMenuButtonProduce() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonProduce, e);
  RingMenuButtonProduce.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_produce;
    if (s.instanceOfClass(n, "AUnitProductionBuildingVE")) {
      var a = o.castAs(n, "AUnitProductionBuildingVE");
      this._disp.visible = a && a.unitProductionBuildingVO.areValuesActive;
    } else {
      this._disp.visible = false;
    }
    switch (n.buildingVO.buildingState) {
      case l.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
      case l.IsoBuildingStateEnum.BUILD_STOPPED:
        this._disp.visible = false;
    }
    this._disp.enableButton = true;
  };
  RingMenuButtonProduce.prototype.onClick = function (e, t) {
    var i = this.targetBuilding;
    d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleRecruitDialog, new c.CastleRecruitDialogProperties(i.unitProductionBuildingVO.recruitCategory, i.unitProductionBuildingVO.recruitFilter));
    this.parent.hide();
  };
  RingMenuButtonProduce.prototype.getInfoText = function () {
    return r.Localize.text("produce");
  };
  return RingMenuButtonProduce;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonProduce = u;
var d = require("./9.js");
var p = require("./224.js");
a.classImplementsInterfaces(u, "IRingMenuButton");