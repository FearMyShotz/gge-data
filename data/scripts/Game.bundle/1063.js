Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./1654.js");
var r = require("./547.js");
var l = function (e) {
  function CastleFactionInvasionEventRewardListDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionInvasionEventRewardListDialog.NAME) || this;
  }
  n.__extends(CastleFactionInvasionEventRewardListDialog, e);
  CastleFactionInvasionEventRewardListDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.tab_0.toolTipText = "dialog_berimondInvasion_rewards_blue_tab";
    this.dialogDisp.tab_1.toolTipText = "dialog_berimondInvasion_rewards_red_tab";
    this.dialogDisp.tab_2.toolTipText = "dialog_berimondInvasion_rewards_alliance_tab";
  };
  CastleFactionInvasionEventRewardListDialog.prototype.showHelp = function () {
    c.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_berimondInvasion_rewardsList"));
  };
  CastleFactionInvasionEventRewardListDialog.prototype.createProperties = function (e) {
    var t;
    var i = this.dialogProperties.eventVO;
    var n = 0;
    var o = true;
    switch (e) {
      case CastleFactionInvasionEventRewardListDialog.TAB_BLUE:
        t = i.singleEventVO(true);
        n = i.rewardsReceivedBlue;
        break;
      case CastleFactionInvasionEventRewardListDialog.TAB_RED:
        t = i.singleEventVO(false);
        n = i.rewardsReceivedRed;
        break;
      case CastleFactionInvasionEventRewardListDialog.TAB_ALLIANCE:
        t = i.allianceEventVO;
        n = i.rewardsReceivedAlliance;
        o = this.isPlayerQualifiedForAllianceRewards();
    }
    return new r.GenericScoreBarRewardListSublayerProperties(t.rewardLists, t.pointThresholds, n, "", "", "", o);
  };
  CastleFactionInvasionEventRewardListDialog.prototype.isPlayerQualifiedForAllianceRewards = function () {
    var e = this.dialogProperties.eventVO.singleEventVO(true);
    var t = this.dialogProperties.eventVO.singleEventVO(false);
    return e.isPlayerQualifiedForAllianceRewards || t.isPlayerQualifiedForAllianceRewards;
  };
  CastleFactionInvasionEventRewardListDialog.__initialize_static_members = function () {
    CastleFactionInvasionEventRewardListDialog.NAME = "CastleFactionInvasionEventRewardList_V";
    CastleFactionInvasionEventRewardListDialog.TAB_BLUE = 0;
    CastleFactionInvasionEventRewardListDialog.TAB_RED = 1;
    CastleFactionInvasionEventRewardListDialog.TAB_ALLIANCE = 2;
  };
  return CastleFactionInvasionEventRewardListDialog;
}(s.ABasicScoreBarRewardListDialog);
exports.CastleFactionInvasionEventRewardListDialog = l;
var c = require("./9.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();