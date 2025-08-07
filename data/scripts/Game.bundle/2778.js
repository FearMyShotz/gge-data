Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./893.js");
var u = require("./709.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./707.js");
var g = function (e) {
  function RingMenuButtonDefence() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonDefence, e);
  RingMenuButtonDefence.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_defence;
    this._disp.visible = a.instanceOfClass(n, "ADefenceBuildingVE") && p.CastleModel.userData.userCanOpenDefenceScreen;
    this._disp.enableButton = this.enableButton();
  };
  RingMenuButtonDefence.prototype.onGetDefenceInfos = function (e) {
    d.CastleBasicController.getInstance().removeEventListener(u.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
    this._disp.enableButton = p.CastleModel.defenceData.areaInfo.moatLevel >= 1;
  };
  RingMenuButtonDefence.prototype.onClick = function (e, t) {
    var n = l.int(s.DefenseConst.TOOL_TYPE_WALL);
    if (a.instanceOfClass(this.targetBuilding, "GuardTowerVE")) {
      n = l.int(s.DefenseConst.TOOL_TYPE_WALL);
    } else if (a.instanceOfClass(this.targetBuilding, "BasicGateVE")) {
      n = l.int(s.DefenseConst.TOOL_TYPE_GATE);
    } else if (a.instanceOfClass(this.targetBuilding, "BasicMoatVE")) {
      n = l.int(s.DefenseConst.TOOL_TYPE_MOAT);
    } else if (a.instanceOfClass(this.targetBuilding, "KeepBuildingVE")) {
      n = l.int(s.DefenseConst.TOOL_TYPE_KEEP);
    }
    this.parent.hide();
    var o = require("./426.js").CastleDefenceDialog;
    C.CastleDialogHandler.getInstance().registerDefaultDialogs(o, new h.CastleDefenceDialogProperties(p.CastleModel.areaData.activeAreaInfo, n));
  };
  RingMenuButtonDefence.prototype.getInfoText = function () {
    return r.Localize.text("ringmenu_defence");
  };
  RingMenuButtonDefence.prototype.enableButton = function () {
    if (a.instanceOfClass(this.targetBuilding, "BasicMoatVE") || a.instanceOfClass(this.targetBuilding, "PremiumMoatVE") || a.instanceOfClass(this.targetBuilding, "FactionMoatMoatVE")) {
      d.CastleBasicController.getInstance().addEventListener(u.CastleDefenceDataEvent.GET_DEFENCE_INFOS, this.bindFunction(this.onGetDefenceInfos));
      p.CastleModel.smartfoxClient.sendCommandVO(new c.C2SDefenceCompleteVO(p.CastleModel.areaData.activeAreaInfo.absAreaPos, p.CastleModel.areaData.activeAreaInfo.objectId));
      return false;
    } else {
      return this.targetBuilding.buildingVO.buildingState.isFunctionally;
    }
  };
  return RingMenuButtonDefence;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonDefence = g;
var C = require("./9.js");
o.classImplementsInterfaces(g, "IRingMenuButton");