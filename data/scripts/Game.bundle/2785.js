Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./231.js");
var u = require("./1009.js");
var d = require("./87.js");
var p = require("./4.js");
var h = require("./1521.js");
var g = function (e) {
  function RingMenuButtonRepairHelpRequest() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonRepairHelpRequest, e);
  RingMenuButtonRepairHelpRequest.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_repairHelpRequest;
    this._disp.visible = n.buildingVO.isDamaged;
    this.updateAllianceHelpRepairButton();
    switch (n.buildingVO.buildingState) {
      case d.IsoBuildingStateEnum.DISASSEMBLE_IN_PROGRESS:
      case d.IsoBuildingStateEnum.DISASSEMBLE_STOPPED:
        this._disp.visible = false;
    }
  };
  RingMenuButtonRepairHelpRequest.prototype.onClick = function (e, t) {
    p.CastleModel.smartfoxClient.sendCommandVO(new u.C2SAllianceHelpRequestVO(this.targetBuilding.vo.objectId, s.AllianceConst.ALLIANCE_HELP_REPAIR));
  };
  RingMenuButtonRepairHelpRequest.prototype.getInfoText = function () {
    this.updateAllianceHelpRepairButton();
    return r.Localize.text("ringmenu_allianceHelp");
  };
  RingMenuButtonRepairHelpRequest.prototype.updateAllianceHelpRepairButton = function () {
    if (p.CastleModel.userData.isInAlliance) {
      var e = l.int(p.CastleModel.allianceHelpRequestData.getRemainingRepairHelpCooldown());
      var t = new h.AllianceHelpRequestRepairParamsVO(p.CastleModel.kingdomData.activeKingdomID, p.CastleModel.areaData.activeArea.areaId, this.targetBuilding.vo.objectId);
      var i = l.int(p.CastleModel.allianceHelpRequestData.getStatusOfOwnRequestByID(s.AllianceConst.ALLIANCE_HELP_REPAIR, t));
      var n = p.CastleModel.allianceHelpRequestData.getOwnRequestVOByParams(s.AllianceConst.ALLIANCE_HELP_REPAIR, t);
      switch (i) {
        case c.ClientConstAlliance.STATUS_REQUEST_POSSIBLE:
          if (e > -1) {
            this._disp.toolTipText = {
              t: "ringmenu_allianceHelp_repairCooldown_tooltip",
              p: [o.TimeStringHelper.getShortTimeStringBySeconds(e)]
            };
            this._disp.enableButton = false;
          } else {
            this.defaultBehavior();
          }
          break;
        case c.ClientConstAlliance.STATUS_REQUEST_PROCESSING:
          this._disp.toolTipText = n.progress > 0 ? {
            t: "ringmenu_allianceHelp_helpRequestIncoming_tooltip",
            p: [n.progress, n.neededProgress]
          } : "ringmenu_allianceHelp_sentHelpRequest_tooltip";
          this._disp.enableButton = false;
          break;
        default:
          this.defaultBehavior();
      }
    } else {
      this._disp.enableButton = false;
      this._disp.toolTipText = "ringmenu_allianceHelp_noAlliance_tooltip";
    }
  };
  RingMenuButtonRepairHelpRequest.prototype.defaultBehavior = function () {
    var e = new h.AllianceHelpRequestRepairParamsVO(p.CastleModel.kingdomData.activeKingdomID, p.CastleModel.areaData.activeArea.areaId, this.targetBuilding.vo.objectId);
    var t = p.CastleModel.allianceHelpRequestData.getOwnRequestVOByParams(s.AllianceConst.ALLIANCE_HELP_REPAIR, e);
    if (t) {
      this._disp.toolTipText = t.progress > 0 ? {
        t: "ringmenu_allianceHelp_helpRequestIncoming_tooltip",
        p: [t.progress, t.neededProgress]
      } : "ringmenu_allianceHelp_sentHelpRequest_tooltip";
      this._disp.enableButton = false;
    } else {
      this._disp.toolTipText = "";
      this._disp.enableButton = true;
    }
  };
  return RingMenuButtonRepairHelpRequest;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonRepairHelpRequest = g;
a.classImplementsInterfaces(g, "IRingMenuButton");