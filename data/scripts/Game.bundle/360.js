Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./727.js");
var a = require("./596.js");
var s = require("./4.js");
var r = require("./57.js");
var l = require("./3428.js");
var c = require("./514.js");
var u = require("./2.js");
var d = require("./283.js");
var p = require("./3.js");
var h = require("./9.js");
var g = require("./38.js");
var C = require("./5.js");
var _ = require("./1708.js");
var m = require("./1709.js");
var f = require("./1710.js");
var O = function (e) {
  function CastleRewardHubMicroservice() {
    return e.call(this) || this;
  }
  n.__extends(CastleRewardHubMicroservice, e);
  Object.defineProperty(CastleRewardHubMicroservice, "Instance", {
    get: function () {
      return this._instance ||= new this();
    },
    enumerable: true,
    configurable: true
  });
  CastleRewardHubMicroservice.prototype.initialize = function () {
    if (!this._isInitialized) {
      this._isInitialized = true;
      this.getRewardsSignal = new r.Signal();
      this.onRewardsUpdatedSignal = new r.Signal();
      this.pickRewardsSignal = new r.Signal();
      this.upgradeRewardsSignal = new r.Signal();
      this.onUpgradeRewardsSuccessSignal = new r.Signal();
      this._rewardHubParser = new l.RewardHubParser();
      this.getRewardsSignal.add(this.bindFunction(this.getPendingRewards));
      this.pickRewardsSignal.add(this.bindFunction(this.pickUpRewards));
      this.upgradeRewardsSignal.add(this.bindFunction(this.upgradeRewards));
      s.CastleModel.userData.onAPITokenRequestSignal.add(this.bindFunction(this.onForceRequest));
    }
  };
  CastleRewardHubMicroservice.prototype.reset = function () {
    this.getRewardsSignal.remove(this.bindFunction(this.getPendingRewards));
    this.pickRewardsSignal.remove(this.bindFunction(this.pickUpRewards));
    this.upgradeRewardsSignal.remove(this.bindFunction(this.upgradeRewards));
    s.CastleModel.userData.onAPITokenRequestSignal.remove(this.bindFunction(this.onForceRequest));
    this._rewardHubParser = null;
  };
  CastleRewardHubMicroservice.prototype.onForceRequest = function (e) {
    if (e == d.CastleUserData.CALLER_METHOD_GET) {
      this.getPendingRewards();
    } else if (e == d.CastleUserData.CALLER_METHOD_POST) {
      if (this._currentRewardHubIds) {
        this.pickUpRewards(this._currentRewardHubIds);
        this._currentRewardHubIds = null;
      } else if (this._upgradeRewardsData) {
        this.upgradeRewards(this._upgradeRewardsData);
        this._upgradeRewardsData = null;
      }
    }
  };
  CastleRewardHubMicroservice.prototype.upgradeRewards = function (e) {
    this._upgradeRewardsData = e;
    if (s.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(d.CastleUserData.CALLER_METHOD_POST, false)) {
      var t = {
        options: {
          displayedTotalCostC2: e.price,
          hubRewardIds: e.rewardIdsToUnlock,
          "cc2t=": -1
        },
        endPoint: this.getDataEndpoint(this.pingParams(), CastleRewardHubMicroservice.UNLOCK_REWARDS_KEY),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + s.CastleModel.userData.apiTokenV2
        }
      };
      this.axiosLog(o.BasicMicroservice.REQUEST_METHOD_POST, false);
      this.requestPOST(t).then(this.bindFunction(this.onUpgradeRewardsSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleRewardHubMicroservice.prototype.onUpgradeRewardsSuccess = function (e) {
    if (e) {
      switch (e.data.ERROR) {
        case C.ERROR.ALL_OK:
          this._rewardHubParser.updateUnlockedRewards(this._upgradeRewardsData.rewardIdsToUnlock);
          this.onUpgradeRewardsSuccessSignal.dispatch();
          this._upgradeRewardsData = null;
          break;
        case C.ERROR.ALREADY_UNLOCKED:
        case C.ERROR.INVALID_PARAMETER_VALUE:
        case C.ERROR.INVALID_PRICE:
          this.showErrorDialog(e);
      }
    }
  };
  CastleRewardHubMicroservice.prototype.pickUpRewards = function (e) {
    this._currentRewardHubIds = e;
    if (s.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(d.CastleUserData.CALLER_METHOD_POST, false)) {
      var t = {
        options: {
          hubRewardIds: e || []
        },
        endPoint: this.getDataEndpoint(this.pingParams(), CastleRewardHubMicroservice.COLLECT_REWARDS_KEY),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + s.CastleModel.userData.apiTokenV2
        }
      };
      this.axiosLog(o.BasicMicroservice.REQUEST_METHOD_POST, false);
      this.requestPOST(t).then(this.bindFunction(this.requestPickRewardsSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleRewardHubMicroservice.prototype.getPendingRewards = function () {
    if (s.CastleModel.userData.checkAndRequestApiTokenForRequestMethod(d.CastleUserData.CALLER_METHOD_GET, false)) {
      var e = {
        options: {
          method: o.BasicMicroservice.REQUEST_METHOD_GET,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: "Bearer " + s.CastleModel.userData.apiTokenV2
          },
          body: ""
        },
        endPoint: this.getDataEndpoint(this.pingParams(), CastleRewardHubMicroservice.PENDING_REWARDS_KEY),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: "Bearer " + s.CastleModel.userData.apiTokenV2
        }
      };
      this.axiosLog(o.BasicMicroservice.REQUEST_METHOD_GET, false);
      this.requestGET(e).then(this.bindFunction(this.onPendingRewardsGetSuccess)).catch(this.bindFunction(this.requestFail));
    }
  };
  CastleRewardHubMicroservice.prototype.onPendingRewardsGetSuccess = function (e) {
    if (e && e.data) {
      this._rewardHubParser.parse(e.data.pendingRewards);
      this.onRewardsUpdatedSignal.dispatch();
    }
  };
  CastleRewardHubMicroservice.prototype.requestPickRewardsSuccess = function (e) {
    if (e) {
      switch (e.data.ERROR) {
        case C.ERROR.ALL_OK:
          if (e.data.hubRewardIdsGranted && e.data.hubRewardIdsGranted.length > 0) {
            s.CastleModel.rewardHubData.updateCurrentRewardHubIds(e.data.hubRewardIdsGranted);
            s.CastleModel.rewardHubData.setAmountOfPendingRewards(s.CastleModel.rewardHubData.rewardHubVOs.length, false);
            this.onRewardsUpdatedSignal.dispatch();
          }
          this.checkShowRewardHubErrorsDialog(e.data.hubRewardIdsNotGranted);
          break;
        case C.ERROR.ALREADY_COLLECTED:
        case C.ERROR.GENERAL_ERROR:
        case C.ERROR.INVALID_PARAMETER_VALUE:
        case C.ERROR.MISSING_PARAMETER:
        case C.ERROR.INVALID_PLAYER_ID:
        case C.ERROR.REWARD_ID_NOT_FOUND:
          this.showErrorDialog(e);
      }
    }
  };
  CastleRewardHubMicroservice.prototype.checkShowRewardHubErrorsDialog = function (e) {
    if (e && e.length) {
      h.CastleDialogHandler.getInstance().registerDialogs(m.RewardHubErrorsDialog, new f.RewardHubErrorsDialogProperties(this.getAdditionalErrors(e)));
    }
  };
  CastleRewardHubMicroservice.prototype.showErrorDialog = function (e) {
    var t = p.Localize.text("generic_alert_bug");
    var i = p.Localize.text("errorCode_" + e.data.ERROR);
    h.CastleDialogHandler.getInstance().registerDialogs(g.CastleStandardOkDialog, new u.BasicStandardOkDialogProperties(t, i));
  };
  CastleRewardHubMicroservice.prototype.requestGET = function (e = null) {
    return a.default.get(e.endPoint, e.options);
  };
  CastleRewardHubMicroservice.prototype.requestPOST = function (e = null) {
    return a.default.post(e.endPoint, e.options, {
      headers: e.headers
    });
  };
  CastleRewardHubMicroservice.prototype.getDataEndpoint = function (e, t) {
    if (c.ClientConstABTests.isOnQAServerInstance) {
      return CastleRewardHubMicroservice.TEST_DATA_ENDPOINT + "/" + CastleRewardHubMicroservice.BASE_REWARDS_KEY + "/" + e + "/" + t;
    } else if (c.ClientConstABTests.isOnDevServerInstance) {
      return CastleRewardHubMicroservice.DEV_DATA_ENDPOINT + "/" + CastleRewardHubMicroservice.BASE_REWARDS_KEY + "/" + e + "/" + t;
    } else {
      return CastleRewardHubMicroservice.LIVE_DATA_ENDPOINT + "/" + CastleRewardHubMicroservice.BASE_REWARDS_KEY + "/" + e + "/" + t;
    }
  };
  CastleRewardHubMicroservice.prototype.pingParams = function () {
    return u.EnvGlobalsHandler.globals.gameId + "-" + s.CastleModel.userData.zoneId + "-" + u.BasicModel.instanceProxy.selectedInstanceVO.instanceId + "-" + s.CastleModel.userData.playerID;
  };
  CastleRewardHubMicroservice.prototype.getAdditionalErrors = function (e) {
    var t;
    var i = "";
    var n = [];
    var o = [];
    for (var a = 0; a < e.length; a++) {
      if (o.indexOf(e[a].ERROR) == -1) {
        (t = new _.RewardHubErrorsItemVO()).rewardHubItemId = e[a].hubRewardID;
        t.infoTextId = "errorCode_" + e[a].ERROR;
        n.push(t);
        i += "rewardId: " + e[a].hubRewardID + " " + p.Localize.text("errorCode_" + e[a].ERROR) + "\n";
        o.push(e[a].ERROR);
      }
    }
    if (i != "") {
      console.warn("The following rewards were not granted!\n" + i);
    }
    return n;
  };
  CastleRewardHubMicroservice.BASE_REWARDS_KEY = "rewards";
  CastleRewardHubMicroservice.PENDING_REWARDS_KEY = "pending";
  CastleRewardHubMicroservice.COLLECT_REWARDS_KEY = "collect";
  CastleRewardHubMicroservice.UNLOCK_REWARDS_KEY = "unlock";
  CastleRewardHubMicroservice.DEV_DATA_ENDPOINT = "https://reward-hub-dev.public.ggs-ep.com/api";
  CastleRewardHubMicroservice.TEST_DATA_ENDPOINT = "https://reward-hub-test.public.ggs-ep.com/api";
  CastleRewardHubMicroservice.LIVE_DATA_ENDPOINT = "https://reward-hub.public.ggs-ep.com/api";
  return CastleRewardHubMicroservice;
}(o.BasicMicroservice);
exports.CastleRewardHubMicroservice = O;