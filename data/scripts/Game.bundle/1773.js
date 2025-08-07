Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./332.js");
var l = function (e) {
  function CastleAllianceSamuraiInvasionRewardListDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceSamuraiInvasionRewardListDialog.NAME) || this;
  }
  n.__extends(CastleAllianceSamuraiInvasionRewardListDialog, e);
  CastleAllianceSamuraiInvasionRewardListDialog.prototype.createProperties = function (t) {
    if (t == r.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE) {
      return new u.GenericScoreBarRewardListSublayerProperties(this.allianceScorebarVO.rewardLists, this.allianceScorebarVO.pointThresholds, this.allianceScorebarVO.rewardsReceived, "", "", "", this.eventVO.isPlayerQualifiedForAllianceRewards());
    } else {
      return e.prototype.createProperties.call(this, t);
    }
  };
  CastleAllianceSamuraiInvasionRewardListDialog.prototype.showHelp = function () {
    c.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_samuraiInvasion_rewardsList"));
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionRewardListDialog.prototype, "eventVO", {
    get: function () {
      return s.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionRewardListDialog.prototype, "singleplayerScorebarVO", {
    get: function () {
      return this.eventVO.scoreBarVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AllianceAndPlayerPointEventRewardListDialog.prototype, "singleplayerScorebarVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionRewardListDialog.prototype, "allianceScorebarVO", {
    get: function () {
      return this.eventVO.allianceBarVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AllianceAndPlayerPointEventRewardListDialog.prototype, "allianceScorebarVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionRewardListDialog.__initialize_static_members = function () {
    CastleAllianceSamuraiInvasionRewardListDialog.NAME = "CastleAllianceSamuraiInvasionEventRewardList_V";
  };
  return CastleAllianceSamuraiInvasionRewardListDialog;
}(r.AllianceAndPlayerPointEventRewardListDialog);
exports.CastleAllianceSamuraiInvasionRewardListDialog = l;
var c = require("./9.js");
var u = require("./546.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();