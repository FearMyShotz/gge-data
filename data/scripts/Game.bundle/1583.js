Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./87.js");
var c = require("./4.js");
var u = require("./263.js");
var d = function (e) {
  function RingMenuButtonRecruit() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonRecruit, e);
  RingMenuButtonRecruit.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_recruit;
    if (s.instanceOfClass(n, "AUnitProductionBuildingVE")) {
      var a = o.castAs(n, "AUnitProductionBuildingVE");
      this._disp.visible = a && s.instanceOfClass(a, "BarracksBuildingVE") && a.unitProductionBuildingVO.areValuesActive;
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
  RingMenuButtonRecruit.prototype.onClick = function (e, t) {
    if (!c.CastleModel.questData.isQuestActive(17)) {
      var i = this.targetBuilding;
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleRecruitDialog, new u.CastleRecruitDialogProperties(i.unitProductionBuildingVO.recruitCategory, i.unitProductionBuildingVO.recruitFilter));
      this.parent.hide();
    }
  };
  RingMenuButtonRecruit.prototype.getInfoText = function () {
    return r.Localize.text("ringmenu_building_recruit");
  };
  return RingMenuButtonRecruit;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonRecruit = d;
var p = require("./9.js");
var h = require("./224.js");
a.classImplementsInterfaces(d, "IRingMenuButton");