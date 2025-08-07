Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./4.js");
var l = require("./332.js");
var c = require("./546.js");
var u = function (e) {
  function CastleAllianceNomadInvasionRewardListDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceNomadInvasionRewardListDialog.NAME) || this;
  }
  n.__extends(CastleAllianceNomadInvasionRewardListDialog, e);
  CastleAllianceNomadInvasionRewardListDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.tab_2.toolTipText = "dialog_pointsEvent_rewardsList_khanContest_tooltip";
  };
  CastleAllianceNomadInvasionRewardListDialog.prototype.showHelp = function () {
    if (this.sublayerSwitcher.activeTab == CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCECAMP) {
      d.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_nomadInvasion_khanContest_rewardsList"));
    } else {
      d.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("help_nomadInvasion_rewardsList"));
    }
  };
  CastleAllianceNomadInvasionRewardListDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.dialogDisp.tab_2.visible = this.allianceCampScorebarVO != null && r.CastleModel.userData.level >= a.PlayerConst.LEVEL_CAP;
  };
  Object.defineProperty(CastleAllianceNomadInvasionRewardListDialog.prototype, "allianceNomadInvasionEventVO", {
    get: function () {
      return r.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardListDialog.prototype, "singleplayerScorebarVO", {
    get: function () {
      return this.allianceNomadInvasionEventVO.scoreBarVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AllianceAndPlayerPointEventRewardListDialog.prototype, "singleplayerScorebarVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardListDialog.prototype, "allianceScorebarVO", {
    get: function () {
      return this.allianceNomadInvasionEventVO.allianceBarVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AllianceAndPlayerPointEventRewardListDialog.prototype, "allianceScorebarVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionRewardListDialog.prototype, "allianceCampScorebarVO", {
    get: function () {
      return this.allianceNomadInvasionEventVO.khanCampBarVO;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionRewardListDialog.prototype.createProperties = function (t) {
    if (t == CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCE) {
      return new c.GenericScoreBarRewardListSublayerProperties(this.allianceScorebarVO.rewardLists, this.allianceScorebarVO.pointThresholds, this.allianceScorebarVO.rewardsReceived, "", "", "", this.allianceNomadInvasionEventVO.isPlayerQualifiedForAllianceRewards());
    } else if (t == CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCECAMP) {
      return new c.GenericScoreBarRewardListSublayerProperties(this.allianceCampScorebarVO.rewardLists, this.allianceCampScorebarVO.pointThresholds, this.allianceCampScorebarVO.rewardsReceived, s.Localize.text("dialog_pointsEvent_rewardsList_khanContest_eventEndInfo"), "level_placeholder", "dialog_nomadInvasionAlliance_participantInfo");
    } else {
      return e.prototype.createProperties.call(this, t);
    }
  };
  CastleAllianceNomadInvasionRewardListDialog.__initialize_static_members = function () {
    CastleAllianceNomadInvasionRewardListDialog.NAME = "CastleAllianceNomadInvasionEventRewardList_V";
    CastleAllianceNomadInvasionRewardListDialog.TAB_ALLIANCECAMP = 2;
  };
  return CastleAllianceNomadInvasionRewardListDialog;
}(l.AllianceAndPlayerPointEventRewardListDialog);
exports.CastleAllianceNomadInvasionRewardListDialog = u;
var d = require("./9.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();