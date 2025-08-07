Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./28.js");
var u = require("./279.js");
var d = require("./21.js");
var p = require("./192.js");
var h = require("./26.js");
var g = require("./4.js");
var C = require("./27.js");
var _ = require("./8.js");
var m = require("./11.js");
var f = require("./950.js");
var O = function (e) {
  function FactionEventMainDialog() {
    return e.call(this, FactionEventMainDialog.NAME) || this;
  }
  n.__extends(FactionEventMainDialog, e);
  FactionEventMainDialog.prototype.initLoaded = function (t = null) {
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help]);
    this.dialogDisp.mc_time.toolTipText = "resttime";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_time.mouseChildren = false;
    this.dialogDisp.tab_introduction.toolTipText = "dialog_faction_tutorial";
    this.dialogDisp.tab_overview.toolTipText = "dialog_faction_overview";
    this.dialogDisp.tab_join.toolTipText = "dialog_faction_join";
    this.dialogDisp.tab_rankings.toolTipText = "dialog_faction_rewards";
    this.dialogDisp.tab_titles.toolTipText = "dialog_faction_titles";
    this.itxt_remainingTime = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new l.TextVO("-"));
    e.prototype.initLoaded.call(this, t);
  };
  FactionEventMainDialog.prototype.setupSublayers = function () {
    if (!this.sublayers) {
      this.dialogDisp.sublayer_titles.addChild(this.dialogProperties.titlesSublayer);
      this.sublayers = new u.SublayerSwitcher(this.bindFunction(this.createProperties));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_INTRODUCTION, this.dialogDisp.tab_introduction, new y.FactionEventIntroductionSublayer(this.dialogDisp.sublayer_introduction));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_OVERVIEW, this.dialogDisp.tab_overview, new D.FactionEventOverviewSublayer(this.dialogDisp.sublayer_overview));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_RANKINGS, this.dialogDisp.tab_rankings, new I.FactionEventRankingsSublayer(this.dialogDisp.sublayer_rankings));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_JOIN, this.dialogDisp.tab_join, new b.FactionEventJoinSublayer(this.dialogDisp.sublayer_join, this.sublayers));
      this.sublayers.add(FactionEventMainDialog.SUBLAYER_TITLES, this.dialogDisp.tab_titles, new T.FactionEventTitlesSublayer(this.dialogProperties.titlesSublayer));
    }
  };
  FactionEventMainDialog.prototype.createProperties = function (e) {
    if (e == FactionEventMainDialog.SUBLAYER_TITLES) {
      return new f.CastleTitleSublayerFactionProperties();
    } else {
      return null;
    }
  };
  FactionEventMainDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setupSublayers();
    if (this.dialogProperties && this.dialogProperties.layerID != -1) {
      this.sublayers.switchTo(this.dialogProperties.layerID);
    } else {
      this.sublayers.switchTo(FactionEventMainDialog.SUBLAYER_OVERVIEW);
    }
    this.updateShowJoinOrEnterTab();
    this.updateTimer();
    this.sublayers.show();
  };
  FactionEventMainDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.sublayers.hide();
  };
  FactionEventMainDialog.prototype.updateShowJoinOrEnterTab = function () {
    var e = g.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    this.dialogDisp.tab_join.visible = e.isLocked;
    this.dialogDisp.tab_overview.visible = !e.isLocked;
    if (e.isLocked || this.sublayers.activeTab != FactionEventMainDialog.SUBLAYER_JOIN) {
      if (e.isLocked && this.sublayers.activeTab == FactionEventMainDialog.SUBLAYER_OVERVIEW) {
        this.sublayers.switchTo(FactionEventMainDialog.SUBLAYER_JOIN);
      }
    } else {
      this.sublayers.switchTo(FactionEventMainDialog.SUBLAYER_OVERVIEW);
    }
  };
  FactionEventMainDialog.prototype.addEventListenerOnShow = function () {
    g.CastleModel.timerData.addEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    g.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    g.CastleModel.kingdomData.addEventListener(p.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    g.CastleModel.specialEventData.addEventListener(h.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onKingdomDataUpdated));
  };
  FactionEventMainDialog.prototype.removeEventListenerOnHide = function () {
    g.CastleModel.timerData.removeEventListener(d.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    g.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    g.CastleModel.kingdomData.removeEventListener(p.CastleKingdomEvent.KINGDOMDATA_ARRIVED, this.bindFunction(this.onKingdomDataUpdated));
    g.CastleModel.specialEventData.removeEventListener(h.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onKingdomDataUpdated));
  };
  FactionEventMainDialog.prototype.onKingdomDataUpdated = function (e) {
    this.updateShowJoinOrEnterTab();
  };
  FactionEventMainDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_FACTION) {
      this.hide();
    }
  };
  FactionEventMainDialog.prototype.onClick = function (e) {
    if (_.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          E.CastleDialogHandler.getInstance().showHelper("", this.helpText);
      }
    }
  };
  FactionEventMainDialog.prototype.onTimer = function (e = null) {
    this.updateTimer();
  };
  FactionEventMainDialog.prototype.updateTimer = function () {
    var e;
    var t = g.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_FACTION);
    e = t ? C.CastleTimeStringHelper.getEventTimeString(t.remainingEventTimeInSeconds) : "-";
    this.itxt_remainingTime.textContentVO.stringValue = e;
  };
  Object.defineProperty(FactionEventMainDialog.prototype, "helpText", {
    get: function () {
      switch (this.sublayers.activeTab) {
        case FactionEventMainDialog.SUBLAYER_OVERVIEW:
          return r.Localize.text("help_berimond_overview");
        case FactionEventMainDialog.SUBLAYER_INTRODUCTION:
          return r.Localize.text("help_berimond_instructions");
        case FactionEventMainDialog.SUBLAYER_RANKINGS:
          return r.Localize.text("help_berimond_pointsEvent");
        case FactionEventMainDialog.SUBLAYER_JOIN:
          return r.Localize.text("help_berimond_join");
        case FactionEventMainDialog.SUBLAYER_TITLES:
          return r.Localize.text("help_berimond_titles", [s.FactionConst.TITLE_RESET_INTERVAL_SECONDS / c.ClientConstTime.HOURES_2_SEC]);
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEventMainDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  FactionEventMainDialog.NAME = "FactionEventMain_SeasonLeague";
  FactionEventMainDialog.SUBLAYER_OVERVIEW = 0;
  FactionEventMainDialog.SUBLAYER_INTRODUCTION = 1;
  FactionEventMainDialog.SUBLAYER_RANKINGS = 2;
  FactionEventMainDialog.SUBLAYER_JOIN = 3;
  FactionEventMainDialog.SUBLAYER_TITLES = 4;
  return FactionEventMainDialog;
}(m.CastleExternalDialog);
exports.FactionEventMainDialog = O;
var E = require("./9.js");
var y = require("./3551.js");
var b = require("./3552.js");
var D = require("./3554.js");
var I = require("./3558.js");
var T = require("./1652.js");
o.classImplementsInterfaces(O, "ICollectableRendererList");