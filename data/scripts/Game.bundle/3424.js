Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./21.js");
var p = require("./26.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./174.js");
var _ = require("./27.js");
var m = require("./40.js");
var f = require("./8.js");
var O = function (e) {
  function SeasonLeagueMainDialogInfoPagePass(t) {
    var i = e.call(this, t) || this;
    i.init();
    return i;
  }
  n.__extends(SeasonLeagueMainDialogInfoPagePass, e);
  SeasonLeagueMainDialogInfoPagePass.prototype.init = function () {
    f.ButtonHelper.initButton(this.disp.btn_buy, -1, y.ClickFeedbackButtonBackground);
    this.disp.mc_time.mouseChildren = false;
    this.disp.mc_cost.mouseChildren = false;
    E.CastleComponent.textFieldManager.registerTextField(this.disp.btn_buy.txt_text, new c.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_infoSection_seasonPassPurchase_button"))).autoFitToBounds = true;
    E.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new l.LocalizedTextVO("dialog_seasonLeague_infoSection_seasonPass_text_1")).autoFitToBounds = true;
    this.disp.mc_time.toolTipText = "dialog_seasonLeague_infoSection_seasonPassTime_tooltip";
    this.disp.mc_cost.toolTipText = "costs";
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    g.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    g.CastleModel.specialEventData.addEventListener(p.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    E.CastleComponent.controller.addEventListener(C.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.removeEventListener = function () {
    g.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    g.CastleModel.specialEventData.removeEventListener(p.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
    E.CastleComponent.controller.removeEventListener(C.SeasonLeagueEvent.ON_INFO_UPDATED, this.bindFunction(this.onSeasonInfoUpdated));
    e.prototype.removeEventListener.call(this);
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.update = function () {
    this.updateCost();
    this.updateTimer();
    this.updateButton();
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.updateCost = function () {
    var e = o.castAs(g.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_PRIME_SALES_KINGDOM_LEAGUE_PASS), "SeasonPassPrimeSaleEventVO");
    var t = e != null;
    var i = u.int(g.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale());
    E.CastleComponent.textFieldManager.registerTextField(this.disp.mc_cost.txt_text, new r.LocalizedNumberVO(i)).autoFitToBounds = true;
    this.disp.mc_sale.visible = t;
    if (t) {
      E.CastleComponent.textFieldManager.registerTextField(this.disp.mc_sale.txt_text, new l.LocalizedTextVO("value_percentage_subtract", [e.discount])).autoFitToBounds = true;
    }
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.updateTimer = function () {
    var e = g.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_KINGDOMS_LEAGUE);
    var t = u.int(e ? e.remainingEventTimeInSeconds : -1);
    _.CastleTimeStringHelper.setEventTime(this.disp.mc_time.txt_text, t);
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.updateButton = function () {
    var e = !g.CastleModel.seasonLeagueData.server.passSeasonActive;
    f.ButtonHelper.enableButton(this.disp.btn_buy, e);
    this.disp.btn_buy.toolTipText = e ? "" : "dialog_seasonLeague_infoSection_seasonPassPurchase_tooltip";
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.onClick = function (t) {
    if (f.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_buy:
          E.CastleComponent.dialogHandler.registerDefaultDialogs(b.SeasonLeagueBuyPassesDialog, new D.SeasonLeagueBuyPassesDialogProperties());
      }
    }
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.onTickEvent = function (e) {
    this.updateTimer();
    this.updateCost();
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.onRefreshSpecialEvent = function (e) {
    this.updateCost();
  };
  SeasonLeagueMainDialogInfoPagePass.prototype.onSeasonInfoUpdated = function (e) {
    this.updateButton();
  };
  return SeasonLeagueMainDialogInfoPagePass;
}(m.CastleItemRenderer);
exports.SeasonLeagueMainDialogInfoPagePass = O;
var E = require("./14.js");
var y = require("./121.js");
var b = require("./810.js");
var D = require("./1070.js");
a.classImplementsInterfaces(O, "ICollectableRendererList");