Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./332.js");
var r = function (e) {
  function CastleAllianceAlienInvasionRewardListDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceAlienInvasionRewardListDialog.NAME) || this;
  }
  n.__extends(CastleAllianceAlienInvasionRewardListDialog, e);
  CastleAllianceAlienInvasionRewardListDialog.prototype.createProperties = function (t) {
    if (t == s.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE) {
      return new c.GenericScoreBarRewardListSublayerProperties(this.allianceScorebarVO.rewardLists, this.allianceScorebarVO.pointThresholds, this.allianceScorebarVO.rewardsReceived, "", "", "", this.eventVO.isPlayerQualifiedForAllianceRewards());
    } else {
      return e.prototype.createProperties.call(this, t);
    }
  };
  CastleAllianceAlienInvasionRewardListDialog.prototype.showHelp = function () {
    l.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_alienInvasion_rewardsList"));
  };
  Object.defineProperty(CastleAllianceAlienInvasionRewardListDialog.prototype, "eventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardListDialog.prototype, "singleplayerScorebarVO", {
    get: function () {
      return this.eventVO.singleEventVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AllianceAndPlayerPointEventRewardListDialog.prototype, "singleplayerScorebarVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionRewardListDialog.prototype, "allianceScorebarVO", {
    get: function () {
      return this.eventVO.allianceEventVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AllianceAndPlayerPointEventRewardListDialog.prototype, "allianceScorebarVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionRewardListDialog.__initialize_static_members = function () {
    CastleAllianceAlienInvasionRewardListDialog.NAME = "CastleAllianceAlienInvasionEventRewardList_V";
  };
  return CastleAllianceAlienInvasionRewardListDialog;
}(s.AllianceAndPlayerPointEventRewardListDialog);
exports.CastleAllianceAlienInvasionRewardListDialog = r;
var l = require("./11.js");
var c = require("./547.js");
var u = require("./4.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");
r.__initialize_static_members();