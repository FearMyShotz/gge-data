Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./21.js");
var l = require("./26.js");
var c = require("./31.js");
var u = require("./19.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./27.js");
var g = require("./9.js");
var C = require("./8.js");
var _ = require("./11.js");
var m = require("./138.js");
var f = require("./135.js");
var O = require("./1.js");
var E = require("./128.js");
var y = require("./650.js");
var b = require("./25.js");
var D = require("./36.js");
var I = require("./651.js");
var T = require("./543.js");
var v = require("./1660.js");
var S = require("./1661.js");
var A = require("./403.js");
var L = require("./1662.js");
var P = require("./3426.js");
var M = require("./3427.js");
var R = require("./652.js");
var V = require("./360.js");
var x = require("./549.js");
var w = require("./201.js");
var B = createjs.Point;
var F = require("./15.js");
var N = require("./174.js");
var k = function (e) {
  function SeasonLeagueBuyPassConfirmDialog(t = null) {
    return e.call(this, t || SeasonLeagueBuyPassConfirmDialog.NAME) || this;
  }
  n.__extends(SeasonLeagueBuyPassConfirmDialog, e);
  SeasonLeagueBuyPassConfirmDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], D.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new o.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("buy")));
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    p.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    p.CastleModel.specialEventData.addEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    F.CastleBasicController.getInstance().addEventListener(N.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onBoughtSeason));
    this.updateCollectables();
    this.updateSale();
    this.updateInfos();
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.hideLoaded = function (t = null) {
    p.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    p.CastleModel.specialEventData.removeEventListener(l.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    F.CastleBasicController.getInstance().removeEventListener(N.SeasonLeagueEvent.ON_PASS_SEASON_BOUGHT, this.bindFunction(this.onBoughtSeason));
    e.prototype.hideLoaded.call(this, t);
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.updateCollectables = function () {
    this.destroyCollectableRenderList();
    b.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new c.CollectableRenderClips(this.dialogDisp.mc_reward).addInfoBtn(this.dialogDisp.btn_info), this.dialogProps.pass, new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_DEFAULT, new B(136, 132)));
    var e = new u.CollectableRenderOptions(u.CollectableRenderOptions.SET_DEFAULT, new B(44, 35));
    e.tooltip.useAmount = false;
    b.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new c.CollectableRenderClips(this.dialogDisp.mc_cost), new E.CollectableItemC2VO(this.dialogProps.price), e);
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.updateSale = function () {
    if (this.dialogProps.discountPercent > 0) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new o.LocalizedTextVO("value_percentage_subtract", [this.dialogProps.discountPercent])).autoFitToBounds = true;
    }
    this.dialogDisp.mc_discount.visible = this.dialogProps.discountPercent > 0;
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.updateInfos = function () {
    var e = p.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO();
    var t = a.int(e ? e.remainingEventTimeInSeconds : -1);
    var i = this.dialogProps.price;
    var n = "";
    if (this.dialogProps.pass instanceof y.CollectableItemSeasonLeagueSeasonPassVO) {
      n = "dialog_seasonLeague_seasonPass_purchase_copy";
    } else if (this.dialogProps.pass instanceof I.CollectableItemSeasonLeagueEventPassVO) {
      n = "dialog_seasonLeague_eventPass_purchase_copy";
    } else if (this.dialogProps.pass instanceof T.CollectableItemSeasonLeaguePromotionPassVO) {
      n = "dialog_seasonLeague_promotionPass_purchase_copy";
    } else if (this.dialogProps.pass instanceof R.CollectableItemUnlockAllPassVO) {
      switch (this.dialogProps.source) {
        case A.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_PROMOTION:
          n = "dialog_rewardHub_unlockPromotionReward_rewardPasses_desc";
          break;
        case A.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_EVENT_END:
          n = "dialog_rewardHub_unlockEventEndRewards_rewardPasses_desc";
          break;
        case A.SeasonLeagueBuyPassConfirmDialogProperties.SOURCE_REWARD_HUB_ALL:
        default:
          n = "dialog_rewardHub_unlockAll_rewardPasses_desc";
      }
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new o.LocalizedTextVO(n, [h.CastleTimeStringHelper.getEventTimeString(t, s.ClientConstTime.SECONDS_PER_DAY, 1)])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_text, new o.LocalizedNumberVO(i)).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costs, new o.LocalizedTextVO("dialoge_shapeshifter_Travel_title")).autoFitToBounds = true;
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.onClick = function (t) {
    if (C.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          if (this.dialogProps.pass instanceof y.CollectableItemSeasonLeagueSeasonPassVO) {
            p.CastleModel.smartfoxClient.sendCommandVO(new L.C2SBuySeasonPassEventVO());
          } else if (this.dialogProps.pass instanceof I.CollectableItemSeasonLeagueEventPassVO) {
            p.CastleModel.smartfoxClient.sendCommandVO(new P.C2SBuySeasonPassEventEventVO(this.dialogProps.eventID, this.dialogProps.instanceID));
          } else if (this.dialogProps.pass instanceof T.CollectableItemSeasonLeaguePromotionPassVO) {
            p.CastleModel.smartfoxClient.sendCommandVO(new M.C2SBuySeasonPassPromotionEventVO(this.dialogProps.rankID, this.dialogProps.seasonID));
          } else if (this.dialogProps.pass instanceof R.CollectableItemUnlockAllPassVO) {
            this.buyUnlockAllPass();
          }
          x.MicroServiceRequestPreloader.showPreloader(new w.CastleExternalPreloaderDialogProperties(null), 5000);
          this.hide();
      }
    }
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.buyUnlockAllPass = function () {
    if (p.CastleModel.currencyData.c2Amount < this.dialogProps.price) {
      _.CastleExternalDialog.dialogHandler.registerDefaultDialogs(m.CastleNoMoneyC2Dialog, new f.CastleNoMoneyC2DialogProperties());
    } else {
      var e = {
        rewardIdsToUnlock: this.dialogProps.pass.hubRewardIdsToUnlock,
        price: this.dialogProps.price
      };
      if (p.CastleModel.settingsData.confirmC2Threshold > 0 && this.dialogProps.price >= p.CastleModel.settingsData.confirmC2Threshold) {
        g.CastleDialogHandler.getInstance().registerDialogs(v.ConfirmC2Dialog, new S.ConfirmC2DialogProperties(this.dialogProps.price, null, V.CastleRewardHubMicroservice.Instance.upgradeRewardsSignal, e));
      } else {
        V.CastleRewardHubMicroservice.Instance.upgradeRewardsSignal.dispatch(e);
      }
    }
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.onTickEvent = function (e) {
    this.updateInfos();
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.onRefreshSpecialEvent = function (e) {
    this.updateSale();
    this.updateInfos();
  };
  SeasonLeagueBuyPassConfirmDialog.prototype.onBoughtSeason = function (e) {
    this.hide();
  };
  Object.defineProperty(SeasonLeagueBuyPassConfirmDialog.prototype, "dialogProps", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassConfirmDialog.NAME = "SeasonLeaguePassBuyConfirm";
  return SeasonLeagueBuyPassConfirmDialog;
}(_.CastleExternalDialog);
exports.SeasonLeagueBuyPassConfirmDialog = k;
O.classImplementsInterfaces(k, "ICollectableRendererList");