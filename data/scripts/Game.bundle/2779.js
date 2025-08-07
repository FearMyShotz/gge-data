Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./58.js");
var c = require("./87.js");
var u = require("./4.js");
var d = require("./236.js");
var p = function (e) {
  function RingMenuButtonDisassemble() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonDisassemble, e);
  RingMenuButtonDisassemble.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_disassemble;
    this._disp.visible = n.buildingVO.canBeDisassembled;
    switch (n.buildingVO.buildingState) {
      case c.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case c.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
      case c.IsoBuildingStateEnum.REPAIR_IN_PROGRESS:
      case c.IsoBuildingStateEnum.REPAIR_STOPPED:
        this._disp.visible = false;
    }
    this._disp.enableButton = u.CastleModel.userData.hasLevelFor(l.ClientConstLevelRestrictions.MIN_LEVEL_DESTRUCTION);
    if (n.buildingVO.isDistrict) {
      var o = u.CastleModel.areaData.activeCommonInfo;
      var a = r.int(n.buildingVO.districtTypeID);
      this._disp.enableButton = o && o.isDistrictEmpty(a);
      this._disp.toolTipText = "ringmenu_demolish_districtNotEmpty";
    } else {
      this._disp.toolTipText = null;
    }
  };
  RingMenuButtonDisassemble.prototype.onClick = function (e, t) {
    if (f.instanceOfClass(this.targetBuilding, "DworkshopBuildingVE") && this.targetBuilding.unitProductionBuildingVO.isProductive || f.instanceOfClass(this.targetBuilding, "WorkshopBuildingVE") && this.targetBuilding.unitProductionBuildingVO.isProductive || f.instanceOfClass(this.targetBuilding, "BarracksBuildingVE") && this.targetBuilding.unitProductionBuildingVO.isProductive) {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleCharacterYesNoOKDialog, new d.CastleCharacterYesNoOKDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("alert_disassembleWhileProductiv"), 4, null, null, false));
    } else {
      g.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleStandardYesNoDialog, new a.BasicStandardYesNoDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("alert_disassembleBuilding_copy"), this.bindFunction(this.onDisassemble)));
    }
  };
  RingMenuButtonDisassemble.prototype.onDisassemble = function (e = null) {
    h.Iso.controller.server.demolishBuilding(this.targetBuilding.vo.objectId);
  };
  RingMenuButtonDisassemble.prototype.getAction = function () {
    return r.int(m.RingMenuBuilding.ACTION_DISASSEMBLE);
  };
  return RingMenuButtonDisassemble;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonDisassemble = p;
var h = require("./34.js");
var g = require("./9.js");
var C = require("./238.js");
var _ = require("./151.js");
var m = require("./369.js");
o.classImplementsInterfaces(p, "IRingMenuButton");
var f = require("./1.js");