Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./21.js");
var l = require("./172.js");
var c = require("./26.js");
var u = require("./31.js");
var d = require("./19.js");
var p = require("./4.js");
var h = require("./27.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = createjs.Point;
var m = function (e) {
  function ACastleTournamentEventDialog(t) {
    var i = this;
    i.DEFAULT_ICON_DIMENSION = new _(42, 42);
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(ACastleTournamentEventDialog, e);
  ACastleTournamentEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close]);
    this.updateStaticText();
    this.initRankListComponent();
    this._rankList.requestHighscoreDataFunction = this.bindFunction(this.requestHighscoreData);
  };
  ACastleTournamentEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._rankList.reset();
    p.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    p.CastleModel.timerData.addEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    p.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialEvent));
    p.CastleModel.highscoreData.addEventListener(l.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscore));
    p.CastleModel.highscoreData.addEventListener(l.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    this.requestHighscoreData("-1");
    this.updateRewards();
    this.updateDialog();
    this._rankList.onShow();
  };
  ACastleTournamentEventDialog.prototype.hideLoaded = function (t = null) {
    this._rankList.onHide();
    p.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    p.CastleModel.timerData.removeEventListener(r.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    p.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialEvent));
    p.CastleModel.highscoreData.removeEventListener(l.CastleHighscoreEvent.GET_HIGHSCORE_DATA, this.bindFunction(this.onGetHighscore));
    p.CastleModel.highscoreData.removeEventListener(l.CastleHighscoreEvent.GET_HIGHSCORE_DATA_ERROR, this.bindFunction(this.onGetHighscoreDataError));
    e.prototype.hideLoaded.call(this, t);
  };
  ACastleTournamentEventDialog.prototype.initRankListComponent = function () {};
  ACastleTournamentEventDialog.prototype.updateStaticText = function () {};
  ACastleTournamentEventDialog.prototype.requestHighscoreData = function (e) {};
  ACastleTournamentEventDialog.prototype.updateTimeText = function () {
    h.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_remainingTime, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
    h.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
  };
  ACastleTournamentEventDialog.prototype.setOwnRankTexts = function (e, t) {
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourFame, new a.LocalizedNumberVO(t));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_yourRank, new s.TextVO(e <= 0 ? "-" : String(e)));
  };
  ACastleTournamentEventDialog.prototype.updateDialog = function () {
    this.updateTimeText();
  };
  ACastleTournamentEventDialog.prototype.updateRewards = function () {
    this.destroyCollectableRenderList();
  };
  ACastleTournamentEventDialog.prototype.setRewardsTop1 = function (e) {
    this.setRewardsBySimpleRewardList("mc_reward_top1_", e);
  };
  ACastleTournamentEventDialog.prototype.setRewardsTop2 = function (e) {
    this.setRewardsBySimpleRewardList("mc_reward_top2_", e);
  };
  ACastleTournamentEventDialog.prototype.setRewardsTop3 = function (e) {
    this.setRewardsBySimpleRewardList("mc_reward_top3_", e);
  };
  ACastleTournamentEventDialog.prototype.setRewardsBySimpleRewardList = function (e, t) {
    for (var i, n = 0; n < t.length && (i = this.dialogDisp[e + n]); ++n) {
      this.addCollectableItem(i, t.getItemByIndexSave(n));
    }
  };
  ACastleTournamentEventDialog.prototype.addCollectableItem = function (e, t) {
    f.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new u.CollectableRenderClips(e).addColorBgMc(e.mc_background), t, new d.CollectableRenderOptions(d.CollectableRenderOptions.SET_TOURNAMENT_DEFAULT, this.defaultRewardIconDimension));
  };
  Object.defineProperty(ACastleTournamentEventDialog.prototype, "defaultRewardIconDimension", {
    get: function () {
      return this.DEFAULT_ICON_DIMENSION;
    },
    enumerable: true,
    configurable: true
  });
  ACastleTournamentEventDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  ACastleTournamentEventDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  ACastleTournamentEventDialog.prototype.onTimerUpdate = function (e) {
    this.updateTimeText();
  };
  ACastleTournamentEventDialog.prototype.onRefreshSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.dialogProperties.eventVO = e.specialEventVO;
      this.updateDialog();
    }
  };
  ACastleTournamentEventDialog.prototype.onGetHighscoreDataError = function (e) {
    this.isWaitingForServerMessage = false;
  };
  ACastleTournamentEventDialog.prototype.onGetHighscore = function (e = null) {
    this.isWaitingForServerMessage = false;
    this._rankList.updateWithNewData(e.params[0]);
  };
  Object.defineProperty(ACastleTournamentEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleTournamentEventDialog;
}(C.CastleExternalDialog);
exports.ACastleTournamentEventDialog = m;
var f = require("./25.js");
o.classImplementsInterfaces(m, "ICollectableRendererList");