Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./69.js");
var s = require("./210.js");
var r = require("./15.js");
var l = require("./1654.js");
var c = require("./546.js");
var u = function (e) {
  function AllianceAndPlayerPointEventRewardListDialog(t) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(AllianceAndPlayerPointEventRewardListDialog, e);
  AllianceAndPlayerPointEventRewardListDialog.prototype.onUpdatePoints = function (e) {
    this.sublayerSwitcher.show();
  };
  AllianceAndPlayerPointEventRewardListDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    r.CastleBasicController.getInstance().addEventListener(s.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  AllianceAndPlayerPointEventRewardListDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    r.CastleBasicController.getInstance().removeEventListener(s.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  AllianceAndPlayerPointEventRewardListDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.tab_0.toolTipText = "dialog_pointsEvent_rewardsList_singleRewards_tooltip";
    this.dialogDisp.tab_1.toolTipText = "dialog_pointsEvent_rewardsList_allianceRewards_tooltip";
  };
  Object.defineProperty(AllianceAndPlayerPointEventRewardListDialog.prototype, "singleplayerScorebarVO", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceAndPlayerPointEventRewardListDialog.prototype, "allianceScorebarVO", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AllianceAndPlayerPointEventRewardListDialog.prototype.createProperties = function (e) {
    if (e == AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER) {
      return new c.GenericScoreBarRewardListSublayerProperties(this.singleplayerScorebarVO.rewardLists, this.singleplayerScorebarVO.pointThresholds, this.singleplayerScorebarVO.rewardsReceived, "", "", "", true);
    } else {
      return null;
    }
  };
  Object.defineProperty(AllianceAndPlayerPointEventRewardListDialog.prototype, "eventVO", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  AllianceAndPlayerPointEventRewardListDialog.__initialize_static_members = function () {
    AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER = 0;
    AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE = 1;
  };
  return AllianceAndPlayerPointEventRewardListDialog;
}(l.ABasicScoreBarRewardListDialog);
exports.AllianceAndPlayerPointEventRewardListDialog = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();