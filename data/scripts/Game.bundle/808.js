Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./26.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./27.js");
var h = require("./8.js");
var g = function (e) {
  function SeasonLeagueMainDialog() {
    return e.call(this, SeasonLeagueMainDialog.NAME) || this;
  }
  n.__extends(SeasonLeagueMainDialog, e);
  SeasonLeagueMainDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    h.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_eventRank, this.dialogDisp.btn_tab_promotion, this.dialogDisp.btn_tab_seasonRank, this.dialogDisp.btn_tab_info]);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], E.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(SeasonLeagueMainDialog.TAB_EVENT_RANK, new _.SeasonLeagueMainDialogEventRank(this.dialogDisp.tab_eventRank));
    this._subLayer.set(SeasonLeagueMainDialog.TAB_PROMOTION, new f.SeasonLeagueMainDialogPromotion(this.dialogDisp.tab_promotion));
    this._subLayer.set(SeasonLeagueMainDialog.TAB_SEASON_RANK, new O.SeasonLeagueMainDialogSeasonRank(this.dialogDisp.tab_seasonRank));
    this._subLayer.set(SeasonLeagueMainDialog.TAB_INFO, new m.SeasonLeagueMainDialogInfo(this.dialogDisp.tab_info));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_seasonTimeremaining_copy"))).autoFitToBounds = true;
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.btn_tab_eventRank.toolTipText = "dialog_seasonLeague_divisionRanking_tab_tooltip";
    this.dialogDisp.btn_tab_promotion.toolTipText = "dialog_seasonLeague_promotionRanks_tab_tooltip";
    this.dialogDisp.btn_tab_seasonRank.toolTipText = "dialog_seasonLeague_seasonRanking_tab_tooltip";
    this.dialogDisp.btn_tab_info.toolTipText = "dialog_seasonLeague_infoSection_tab_tooltip";
  };
  SeasonLeagueMainDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    d.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    d.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.changeCategory(SeasonLeagueMainDialog.TAB_EVENT_RANK);
    this.updateEventTime();
  };
  SeasonLeagueMainDialog.prototype.hide = function () {
    d.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    d.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    e.prototype.hide.call(this);
  };
  SeasonLeagueMainDialog.prototype.changeCategory = function (t) {
    function updateButton(e, t) {
      e.gotoAndStop(t ? 2 : 1);
    }
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), []);
      updateButton(this.dialogDisp.btn_tab_eventRank, this._currentCategory == SeasonLeagueMainDialog.TAB_EVENT_RANK);
      updateButton(this.dialogDisp.btn_tab_promotion, this._currentCategory == SeasonLeagueMainDialog.TAB_PROMOTION);
      updateButton(this.dialogDisp.btn_tab_seasonRank, this._currentCategory == SeasonLeagueMainDialog.TAB_SEASON_RANK);
      updateButton(this.dialogDisp.btn_tab_info, this._currentCategory == SeasonLeagueMainDialog.TAB_INFO);
    }
  };
  SeasonLeagueMainDialog.prototype.updateEventTime = function () {
    var e = d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_KINGDOMS_LEAGUE);
    if (e) {
      var t = e.remainingEventTimeInSeconds;
      p.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_text, t);
      this.dialogDisp.mc_time.toolTipText = "dialog_seasonLeague_seasonTimeremaining_tooltip";
    }
  };
  SeasonLeagueMainDialog.prototype.getHelpTextId = function () {
    switch (this._currentCategory) {
      case SeasonLeagueMainDialog.TAB_EVENT_RANK:
        return "help_seasonLeague_divisionRanking";
      case SeasonLeagueMainDialog.TAB_PROMOTION:
        return "help_seasonLeague_promotionRanks";
      case SeasonLeagueMainDialog.TAB_SEASON_RANK:
        return "help_seasonLeague_seasonRanking";
      case SeasonLeagueMainDialog.TAB_INFO:
        return "help_seasonLeague_infoSection";
      default:
        return "";
    }
  };
  SeasonLeagueMainDialog.prototype.onClick = function (t) {
    if (h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_eventRank:
          this.changeCategory(SeasonLeagueMainDialog.TAB_EVENT_RANK);
          break;
        case this.dialogDisp.btn_tab_promotion:
          this.changeCategory(SeasonLeagueMainDialog.TAB_PROMOTION);
          break;
        case this.dialogDisp.btn_tab_seasonRank:
          this.changeCategory(SeasonLeagueMainDialog.TAB_SEASON_RANK);
          break;
        case this.dialogDisp.btn_tab_info:
          this.changeCategory(SeasonLeagueMainDialog.TAB_INFO);
          break;
        case this.dialogDisp.btn_help:
          C.CastleExternalDialog.dialogHandler.showHelper("", s.Localize.text(this.getHelpTextId()));
      }
    }
  };
  SeasonLeagueMainDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
      this.hide();
    }
  };
  SeasonLeagueMainDialog.prototype.onTickEvent = function (e) {
    this.updateEventTime();
  };
  SeasonLeagueMainDialog.NAME = "SeasonLeagueMain_RewardHub";
  SeasonLeagueMainDialog.TAB_EVENT_RANK = "tab_eventRank";
  SeasonLeagueMainDialog.TAB_PROMOTION = "tab_promotion";
  SeasonLeagueMainDialog.TAB_SEASON_RANK = "tab_seasonRank";
  SeasonLeagueMainDialog.TAB_INFO = "tab_info";
  return SeasonLeagueMainDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.SeasonLeagueMainDialog = g;
var C = require("./11.js");
var _ = require("./3419.js");
var m = require("./1659.js");
var f = require("./3542.js");
var O = require("./3546.js");
var E = require("./36.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");