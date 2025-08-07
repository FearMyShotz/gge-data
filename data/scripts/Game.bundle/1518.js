Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./231.js");
var c = require("./39.js");
var u = require("./1009.js");
var d = require("./102.js");
var p = require("./32.js");
var h = require("./161.js");
var g = require("./87.js");
var C = require("./15.js");
var _ = require("./4.js");
var m = require("./857.js");
var f = require("./1237.js");
var O = function (e) {
  function RingMenuButtonConstructionHelpRequest() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RingMenuButtonConstructionHelpRequest, e);
  RingMenuButtonConstructionHelpRequest.prototype.init = function (t, i, n) {
    e.prototype.init.call(this, t, i, n);
    this._disp = i.btn_constructionHelpRequest;
    this._checkMarkDisp = i.mc_checkmark;
    this.updateButton();
  };
  RingMenuButtonConstructionHelpRequest.prototype.updateButton = function (e = null) {
    this._checkMarkDisp.mouseEnabled = false;
    this._checkMarkDisp.visible = false;
    this._disp.visible = false;
    if (_.CastleModel.allianceHelpRequestData.isBuildHelpAvailable()) {
      switch (this.targetBuilding.buildingVO.buildingState) {
        case g.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case g.IsoBuildingStateEnum.BUILD_STOPPED:
        case g.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case g.IsoBuildingStateEnum.UPGRADE_STOPPED:
          var t = new m.AllianceHelpRequestConstructionParamsVO(_.CastleModel.kingdomData.activeKingdomID, _.CastleModel.areaData.activeArea.areaId, this.targetBuilding.vo.objectId);
          var i = r.int(_.CastleModel.allianceHelpRequestData.getStatusOfOwnRequestByID(a.AllianceConst.ALLIANCE_HELP_BUILD, t));
          var n = _.CastleModel.allianceHelpRequestData.getOwnRequestVOByParams(a.AllianceConst.ALLIANCE_HELP_BUILD, t);
          this._disp.visible = true;
          this._disp.enableButton = i == l.ClientConstAlliance.STATUS_REQUEST_POSSIBLE;
          if (n) {
            if (n.progress == 0) {
              this._disp.toolTipText = "ringmenu_allianceHelp_sentHelpRequest_tooltip";
            } else if (n.progress < n.neededProgress) {
              this._disp.toolTipText = {
                t: "ringmenu_allianceHelp_helpRequestIncoming_tooltip",
                p: [n.progress, n.neededProgress]
              };
            } else {
              this._disp.toolTipText = "ringmenu_allianceHelp_helpRequestCompleted_tooltip";
              this._checkMarkDisp.visible = true;
            }
          } else {
            this._disp.toolTipText = "";
          }
          break;
        default:
          this._disp.toolTipText = "";
      }
      if (_.CastleModel.allianceHelpRequestData.hasBuildHelpAbTestLevelRestriction()) {
        this._disp.enableButton = false;
        this._disp.toolTipText = {
          t: c.ClientConstTextIds.LEVEL_NEEDED,
          p: [a.AllianceConst.ALLIANCE_HELP_BUILD_MINLEVEL]
        };
      }
    }
  };
  RingMenuButtonConstructionHelpRequest.prototype.addEventListeners = function () {
    _.CastleModel.allianceData.addEventListener(d.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.updateButton));
    if (_.CastleModel.allianceHelpRequestData.hasBuildHelpAbTestLevelRestriction()) {
      C.CastleBasicController.getInstance().addEventListener(p.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.updateButton));
      C.CastleBasicController.getInstance().addEventListener(h.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.updateButton));
    }
  };
  RingMenuButtonConstructionHelpRequest.prototype.removeEventListeners = function () {
    _.CastleModel.allianceData.removeEventListener(d.CastleAllianceDataEvent.MY_ALLIANCEDATA_UPDATED, this.bindFunction(this.updateButton));
    C.CastleBasicController.getInstance().removeEventListener(p.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.updateButton));
    C.CastleBasicController.getInstance().removeEventListener(h.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.updateButton));
  };
  RingMenuButtonConstructionHelpRequest.prototype.onClick = function (e, t) {
    if (_.CastleModel.allianceHelpRequestData.isBuildHelpAvailable() && !_.CastleModel.allianceHelpRequestData.hasBuildHelpAbTestLevelRestriction()) {
      if (_.CastleModel.userData.isInAlliance) {
        _.CastleModel.smartfoxClient.sendCommandVO(new u.C2SAllianceHelpRequestVO(this.targetBuilding.vo.objectId, a.AllianceConst.ALLIANCE_HELP_BUILD));
      } else {
        E.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleAllianceTeaserDialog, new f.CastleStartAllianceDialogProperties(function () {}, true));
      }
    }
  };
  RingMenuButtonConstructionHelpRequest.prototype.getInfoText = function () {
    return s.Localize.text("ringmenu_allianceHelp_construction");
  };
  return RingMenuButtonConstructionHelpRequest;
}(require("./98.js").ARingMenuButton);
exports.RingMenuButtonConstructionHelpRequest = O;
var E = require("./9.js");
var y = require("./388.js");
o.classImplementsInterfaces(O, "IRingMenuButton");