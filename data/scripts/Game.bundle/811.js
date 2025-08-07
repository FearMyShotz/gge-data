Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./54.js");
var a = require("./1663.js");
var s = require("./404.js");
var r = require("./550.js");
var l = require("./9.js");
var c = require("./4.js");
var u = require("./1707.js");
var d = function (e) {
  function RewardHubData() {
    var t = e.call(this) || this;
    t._amountPendingRewards = 0;
    t._rewardHubVOs = [];
    t.pendingSentCount = 0;
    return t;
  }
  n.__extends(RewardHubData, e);
  RewardHubData.prototype.reset = function () {
    this.resetVOs();
    this.pendingSentCount = 0;
    this._amountPendingRewards = 0;
  };
  RewardHubData.prototype.resetVOs = function () {
    this._rewardHubVOs = [];
  };
  RewardHubData.prototype.countPendingSent = function () {
    if (c.CastleModel.localData.readOpenRewardHubAtStart() && this.pendingSentCount == 0 && (this.getAmountOfPendingRewards() > 0 || c.CastleModel.lootBoxData.allLootBoxAmount() > 0)) {
      l.CastleDialogHandler.getInstance().registerDefaultDialogs(s.RewardHubMainDialog, new r.RewardHubDialogProperties(true));
    }
    this.pendingSentCount++;
  };
  RewardHubData.prototype.setAmountOfPendingRewards = function (e, t) {
    this._amountPendingRewards = e;
    if (t) {
      this.dispatchEvent(new u.RewardHubPanelNotificationEvent(u.RewardHubPanelNotificationEvent.NEW_REWARDS_ARRIVED));
    } else {
      this.dispatchEvent(new a.RewardHubEvent(a.RewardHubEvent.PENDING_REWARDS_AMOUNT_UPDATED));
    }
  };
  RewardHubData.prototype.getAmountOfPendingRewards = function () {
    return this._amountPendingRewards;
  };
  Object.defineProperty(RewardHubData.prototype, "rewardHubVOs", {
    get: function () {
      return this._rewardHubVOs;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubData.prototype.getRewardHubVOById = function (e) {
    if (this._rewardHubVOs) {
      for (var t = 0; t < this._rewardHubVOs.length; t++) {
        if (this._rewardHubVOs[t].hubRewardID == e) {
          return this._rewardHubVOs[t];
        }
      }
    }
  };
  RewardHubData.prototype.getCurrentRewardHubIds = function () {
    if (this._rewardHubVOs) {
      var e = [];
      for (var t = 0; t < this._rewardHubVOs.length; t++) {
        e.push(this._rewardHubVOs[t].hubRewardID);
      }
      return e;
    }
  };
  RewardHubData.prototype.updateCurrentRewardHubIds = function (e) {
    for (var t = 0; t < e.length; t++) {
      for (var i = this._rewardHubVOs.length - 1; i >= 0; i--) {
        if (e[t] == this._rewardHubVOs[i].hubRewardID) {
          this._rewardHubVOs.splice(this._rewardHubVOs.indexOf(this._rewardHubVOs[i]), 1);
        }
      }
    }
  };
  RewardHubData.REWARD_TYPE_GUARANTEED = "REWARD_TYPE_GUARANTEED";
  RewardHubData.REWARD_TYPE_EXTRA = "REWARD_TYPE_EXTRA";
  return RewardHubData;
}(o.CastleBasicData);
exports.RewardHubData = d;