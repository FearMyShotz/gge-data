Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./58.js");
var l = require("./4.js");
var c = require("./350.js");
var u = function (e) {
  function RingMenuButtonEquip() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonEquip, e);
  RingMenuButtonEquip.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_equip;
    this._disp.visible = n.buildingVO.usesLords;
    this._disp.enableButton = l.CastleModel.userData.userLevel >= r.ClientConstLevelRestrictions.MIN_LEVEL_EQUIPMENT;
  };
  RingMenuButtonEquip.prototype.onClick = function (e, t) {
    if (a.instanceOfClass(this.targetBuilding, "EstateBuildingVE")) {
      d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleEquipmentDialog, new c.CastleEquipmentDialogProperties(null, l.CastleModel.lordData.barons[0].id));
    } else if (a.instanceOfClass(this.targetBuilding, "MilitarycampBuildingVE")) {
      d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleEquipmentDialog, new c.CastleEquipmentDialogProperties(null, l.CastleModel.lordData.commanders[0].id));
    }
    this.parent.hide();
  };
  RingMenuButtonEquip.prototype.getInfoText = function () {
    return s.Localize.text("panel_multiinfo_equipment");
  };
  return RingMenuButtonEquip;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonEquip = u;
var d = require("./9.js");
var p = require("./246.js");
o.classImplementsInterfaces(u, "IRingMenuButton");