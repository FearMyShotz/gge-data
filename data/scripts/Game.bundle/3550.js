Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./264.js");
var d = require("./104.js");
var p = require("./4.js");
var h = require("./740.js");
var g = require("./741.js");
var C = require("./330.js");
var _ = function () {
  function CastleFactionReputationRewardComponent(e, t, i, o) {
    this._updateRewardAfterProgressbarComplete = false;
    this._tabID = 0;
    this._maxReputationPoints = 0;
    this._disp = e;
    this._nextRewardProgressbar = new h.AdvancedProgressBar(this._disp.mc_factionBar.mc_bar, new g.HorizontalCallbackProgressBehaviour(this.bindFunction(this.onProgressAnimationUpdate), this.bindFunction(this.onProgressAnimationComplete)));
    this._rewardRenderList = new d.CollectableRendererList();
    this._rewardList = t;
    this._pointThresholds = i;
    this._tabID = o;
    this._currentProgressbarInfo = new E();
    this._itxtCurrentReward = this.textFieldManager.registerTextField(this._disp.mc_nextReward.mc_rewards.txt_threshold, new l.LocalizedTextVO("points"));
    var a = this.textFieldManager.registerTextField(this._disp.btn_showRewards.txt_btnRewards, new l.LocalizedTextVO("listRewards"));
    a.autoFitToBounds = true;
    a.verticalAlign = n.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this._disp.mc_allRewards.txt_gotAllRewards, new l.LocalizedTextVO("dialog_pointsEvent_scoreBar_allRewardsEarned"));
    this._disp.mc_factionBar.mouseChildren = false;
  }
  CastleFactionReputationRewardComponent.prototype.update = function (e, t) {
    this._maxReputationPoints = t;
    var i = this.getReputationRewardProgressInfo(e, this._maxReputationPoints);
    i.currentRewardPoints = e;
    this.updateRewardProgressbar(i);
    if (this._updateRewardAfterProgressbarComplete) {
      this.updateProgressbarTooltip();
    } else {
      this.updateNextReward(t);
    }
  };
  CastleFactionReputationRewardComponent.prototype.updateRewardProgressbar = function (e) {
    if (this.isDefault(this._currentProgressbarInfo)) {
      this.showCurrentRewardProgress(e);
    } else if (e.nextRewardPoints != this._currentProgressbarInfo.nextRewardPoints) {
      this.showRewardReceivedProgress(e);
    } else if (e.currentRewardPoints != this._currentProgressbarInfo.currentRewardPoints) {
      this.showCurrentRewardProgress(e);
    }
  };
  CastleFactionReputationRewardComponent.prototype.showRewardReceivedProgress = function (e) {
    this._updateRewardAfterProgressbarComplete = true;
    this._nextRewardProgressbar.fromTo(this.currentProgressScale, 1);
    this._currentProgressbarInfo = e;
  };
  CastleFactionReputationRewardComponent.prototype.showCurrentRewardProgress = function (e) {
    this._nextRewardProgressbar.fromTo(this.currentProgressScale, this.calcProgressScale(e));
    this._currentProgressbarInfo = e;
  };
  CastleFactionReputationRewardComponent.prototype.onProgressAnimationUpdate = function (e, t) {
    var i = e.target;
    this._disp.mc_factionBar.mc_seperator.x = this._disp.mc_factionBar.mc_bar.x + this._nextRewardProgressbar.getOriginBarWidth * i.scaleX;
  };
  CastleFactionReputationRewardComponent.prototype.onProgressAnimationComplete = function () {
    if (this._updateRewardAfterProgressbarComplete) {
      this._updateRewardAfterProgressbarComplete = false;
      this.updateNextReward(this._maxReputationPoints);
      this.updateProgressbarTooltip();
      if (!this.isDefault(this.getReputationRewardProgressInfo(this._maxReputationPoints, this._maxReputationPoints))) {
        this._nextRewardProgressbar.fromTo(0, this.currentProgressScale);
      }
    }
  };
  CastleFactionReputationRewardComponent.prototype.getReputationRewardProgressInfo = function (e, t) {
    var i = new E();
    for (var n = 0; n < this._pointThresholds.length; n++) {
      if (this._pointThresholds[n] > t) {
        i.nextRewardPoints = c.int(this._pointThresholds[n]);
        for (var o = n; o >= 0; o--) {
          if (this._pointThresholds[o] <= e) {
            i.previousRewardPoints = c.int(this._pointThresholds[o]);
            break;
          }
        }
        break;
      }
    }
    return i;
  };
  CastleFactionReputationRewardComponent.prototype.updateNextReward = function (e) {
    var t = null;
    var i = 0;
    for (var n = 0; n < this._pointThresholds.length; n++) {
      if (this._pointThresholds[n] > e) {
        t = this._rewardList[n];
        i = this._pointThresholds[n];
        break;
      }
    }
    if (t) {
      this._disp.mc_allRewards.visible = false;
      this._disp.mc_nextReward.visible = true;
      this._itxtCurrentReward.textContentVO.textReplacements = [i];
      f.RewardRenderHelper.renderCollectableList(this._rewardRenderList, this._disp.mc_nextReward.mc_rewards, t);
      this._disp.mc_nextReward.mc_rewards.mc_decoration.gotoAndStop(this._rewardRenderList.collectableRenderList.length);
    } else {
      this._disp.mc_allRewards.visible = true;
      this._disp.mc_nextReward.visible = false;
    }
    this.updateProgressbarTooltip();
  };
  CastleFactionReputationRewardComponent.prototype.showAllRewards = function () {
    CastleFactionReputationRewardComponent.dialogHandler.registerDefaultDialogs(O.CastleFactionInvasionEventRewardListDialog, new C.GenericEventInfoListProperties(a.EventConst.EVENTTYPE_FACTION_INVASION, this._tabID));
  };
  CastleFactionReputationRewardComponent.prototype.updateProgressbarTooltip = function () {
    if (this._currentProgressbarInfo.nextRewardPoints - this._currentProgressbarInfo.currentRewardPoints > 0) {
      this._disp.mc_factionBar.toolTipText = {
        t: "dialog_berimondInvasion_sp_singleReputationBar_tooltip",
        p: [this._currentProgressbarInfo.nextRewardPoints - this._currentProgressbarInfo.currentRewardPoints]
      };
    } else {
      this._disp.mc_factionBar.toolTipText = {
        t: "dialog_pointsEvent_rewardsList_rewards_all"
      };
    }
  };
  CastleFactionReputationRewardComponent.prototype.gotoCamp = function (e) {
    p.CastleModel.smartfoxClient.sendCommandVO(new u.C2SFindNextMapObjectVO(r.WorldConst.AREA_TYPE_FACTION_INVASION_CAMP, s.WorldClassic.KINGDOM_ID, -1, -1, e));
  };
  Object.defineProperty(CastleFactionReputationRewardComponent.prototype, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleFactionReputationRewardComponent.prototype, "currentProgressScale", {
    get: function () {
      return this.calcProgressScale(this._currentProgressbarInfo);
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionReputationRewardComponent.prototype.calcProgressScale = function (e) {
    if (this.isDefault(e)) {
      return 0;
    }
    if (e.nextRewardPoints == 0) {
      return 1;
    }
    var t = e.nextRewardPoints - e.previousRewardPoints;
    return (e.currentRewardPoints - e.previousRewardPoints) / t;
  };
  CastleFactionReputationRewardComponent.prototype.isDefault = function (e) {
    return e.nextRewardPoints == 0 && e.currentRewardPoints == 0 && e.previousRewardPoints == 0;
  };
  Object.defineProperty(CastleFactionReputationRewardComponent, "dialogHandler", {
    get: function () {
      return m.CastleDialogHandler.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleFactionReputationRewardComponent;
}();
exports.CastleFactionReputationRewardComponent = _;
var m = require("./9.js");
var f = require("./398.js");
var O = require("./1062.js");
var E = function () {
  return function ReputationProgressbarRewardInfo() {
    this.nextRewardPoints = 0;
    this.previousRewardPoints = 0;
    this.currentRewardPoints = 0;
  };
}();