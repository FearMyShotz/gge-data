Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./332.js");
var l = function (e) {
  function CastleRedAllianceAlienInvasionRewardListDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleRedAllianceAlienInvasionRewardListDialog.NAME) || this;
  }
  n.__extends(CastleRedAllianceAlienInvasionRewardListDialog, e);
  CastleRedAllianceAlienInvasionRewardListDialog.prototype.createProperties = function (t) {
    if (t == r.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE) {
      return new u.GenericScoreBarRewardListSublayerProperties(this.allianceScorebarVO.rewardLists, this.allianceScorebarVO.pointThresholds, this.allianceScorebarVO.rewardsReceived, "", "", "", this.eventVO.isPlayerQualifiedForAllianceRewards());
    } else {
      return e.prototype.createProperties.call(this, t);
    }
  };
  CastleRedAllianceAlienInvasionRewardListDialog.prototype.showHelp = function () {
    c.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_redAlienInvasion_rewardsList"));
  };
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardListDialog.prototype, "eventVO", {
    get: function () {
      return s.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardListDialog.prototype, "singleplayerScorebarVO", {
    get: function () {
      return this.eventVO.singleEventVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AllianceAndPlayerPointEventRewardListDialog.prototype, "singleplayerScorebarVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRedAllianceAlienInvasionRewardListDialog.prototype, "allianceScorebarVO", {
    get: function () {
      return this.eventVO.allianceEventVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AllianceAndPlayerPointEventRewardListDialog.prototype, "allianceScorebarVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRedAllianceAlienInvasionRewardListDialog.__initialize_static_members = function () {
    CastleRedAllianceAlienInvasionRewardListDialog.NAME = "CastleRedAlienInvasionEventRewardList_V";
  };
  return CastleRedAllianceAlienInvasionRewardListDialog;
}(r.AllianceAndPlayerPointEventRewardListDialog);
exports.CastleRedAllianceAlienInvasionRewardListDialog = l;
var c = require("./11.js");
var u = require("./547.js");
o.classImplementsInterfaces(l, "ICollectableRendererList");
l.__initialize_static_members();