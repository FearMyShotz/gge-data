Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./21.js");
var c = require("./26.js");
var u = require("./53.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./27.js");
var g = require("./8.js");
var C = function (e) {
  function CastleAllianceBattleGroundEventDialog() {
    var t = this;
    t.lastRankingTab = CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE;
    t.lastPerformanceTab = "";
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleAllianceBattleGroundEventDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBattleGroundEventDialog, e);
  CastleAllianceBattleGroundEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    g.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_ranking1, this.dialogDisp.btn_tab_scoring, this.dialogDisp.btn_tab_performance]);
    g.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], v.ClickFeedbackButtonHover);
    this._subLayer = new Map();
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_MAIN, new m.CastleAllianceBattlegroundEventDialogOverview(this.dialogDisp.tab_main));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE, new D.CastleAllianceBattlegroundEventDialogRankingAlliance(this.dialogDisp.tab_rankingAlliance, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_RANKING_PLAYER, new I.CastleAllianceBattlegroundEventDialogRankingPlayer(this.dialogDisp.tab_rankingPlayer, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_SCORING, new T.CastleAllianceBattleGroundEventDialogScoring(this.dialogDisp.tab_scoring, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR, new f.CastleAllianceBattlegroundEventDialogPerformanceAllianceCollector(this.dialogDisp.tab_performanceAlliance_collector, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER, new O.CastleAllianceBattlegroundEventDialogPerformanceAllianceTower(this.dialogDisp.tab_performanceAlliance_tower, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_COLLECTOR, new E.CastleAllianceBattlegroundEventDialogPerformancePlayerCollector(this.dialogDisp.tab_performancePlayer_collector, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER, new y.CastleAllianceBattlegroundEventDialogPerformancePlayerTower(this.dialogDisp.tab_performancePlayer_tower, this));
    this._subLayer.set(CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER, new b.CastleAllianceBattlegroundEventDialogPerformanceTower(this.dialogDisp.tab_abgTowers, this));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new a.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("remainingTime")));
  };
  CastleAllianceBattleGroundEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.lastPerformanceTab == "") {
      this.lastPerformanceTab = this.defaultPerformanceTab;
    }
    p.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    p.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    this.changeCategory(this.startTab ? this.startTab : CastleAllianceBattleGroundEventDialog.TAB_MAIN);
    this.updateRemainingEventTime();
    this.dialogDisp.btn_tab_main.toolTipText = "dialog_beyondTheHorizon_main_overview_title";
    this.dialogDisp.btn_tab_ranking1.toolTipText = "dialog_beyondTheHorizon_main_allianceRankings_title";
    this.dialogDisp.btn_tab_scoring.toolTipText = "dialog_beyondTheHorizon_main_journey_AllianceCollector_title";
    this.dialogDisp.btn_tab_performance.toolTipText = "dialog_beyondTheHorizon_main_performance_title";
    this.dialogDisp.btn_tab_ranking1.visible = u.ABGHelper.isOnABGServer;
    this.dialogDisp.btn_tab_performance.visible = u.ABGHelper.isOnABGServer;
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "defaultPerformanceTab", {
    get: function () {
      if (u.ABGHelper.isAllianceCollectorScoring) {
        return CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR;
      } else if (u.ABGHelper.isOnABGAndTower) {
        return CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventDialog.prototype.hide = function () {
    p.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    p.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    e.prototype.hide.call(this);
  };
  CastleAllianceBattleGroundEventDialog.prototype.setCategory = function (e) {
    this.changeCategory(e);
  };
  CastleAllianceBattleGroundEventDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      if (u.ABGHelper.abgEvent) {
        e.prototype.changeCategory.call(this, t);
        this.showSublayer(this._subLayer.get(t), []);
        this.updateButton(this.dialogDisp.btn_tab_main, this._currentCategory == CastleAllianceBattleGroundEventDialog.TAB_MAIN);
        this.updateButton(this.dialogDisp.btn_tab_ranking1, this.isInRankingTab);
        this.updateButton(this.dialogDisp.btn_tab_performance, this.isInPerformanceTab);
        this.updateButton(this.dialogDisp.btn_tab_scoring, this._currentCategory == CastleAllianceBattleGroundEventDialog.TAB_SCORING);
        this.updateRemainingEventTime();
        if (this.isInRankingTab) {
          this.lastRankingTab = t;
        }
        if (this.isInPerformanceTab) {
          this.lastPerformanceTab = t;
        }
      } else {
        this.hide();
      }
    }
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "isInRankingTab", {
    get: function () {
      switch (this._currentCategory) {
        case CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE:
        case CastleAllianceBattleGroundEventDialog.TAB_RANKING_PLAYER:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "isInPerformanceTab", {
    get: function () {
      switch (this._currentCategory) {
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR:
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_COLLECTOR:
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER:
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER:
        case CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventDialog.prototype.updateButton = function (e, t) {
    e.gotoAndStop(t ? 2 : 1);
  };
  CastleAllianceBattleGroundEventDialog.prototype.updateRemainingEventTime = function () {
    if (u.ABGHelper.abgEvent) {
      var e = r.int(u.ABGHelper.abgEvent.remainingEventTimeInSeconds);
      h.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_text, e);
    }
  };
  CastleAllianceBattleGroundEventDialog.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
          this.changeCategory(CastleAllianceBattleGroundEventDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_ranking1:
          this.changeCategory(this.lastRankingTab);
          break;
        case this.dialogDisp.btn_tab_performance:
          this.changeCategory(this.lastPerformanceTab);
          break;
        case this.dialogDisp.btn_tab_scoring:
          this.changeCategory(CastleAllianceBattleGroundEventDialog.TAB_SCORING);
          break;
        case this.dialogDisp.btn_help:
          _.CastleExternalDialog.dialogHandler.showHelper("", s.Localize.text("help_beyondTheHorizon"));
      }
    }
  };
  CastleAllianceBattleGroundEventDialog.prototype.serverMessageArrived = function (e) {
    this.isWaitingForServerMessage = false;
    if (u.ABGHelper.abgEvent) {
      this.updateRemainingEventTime();
    } else {
      this.hide();
    }
  };
  CastleAllianceBattleGroundEventDialog.prototype.onTickEvent = function (e) {
    this.updateRemainingEventTime();
  };
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "startTab", {
    get: function () {
      if (this.dialogProp) {
        return this.dialogProp.startTab;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceBattleGroundEventDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBattleGroundEventDialog.NAME = "CastleAllianceBattleGroundEvent_3_0";
  CastleAllianceBattleGroundEventDialog.TAB_MAIN = "tab_main";
  CastleAllianceBattleGroundEventDialog.TAB_RANKING_ALLIANCE = "tab_ranking_alliance";
  CastleAllianceBattleGroundEventDialog.TAB_RANKING_PLAYER = "tab_ranking_player";
  CastleAllianceBattleGroundEventDialog.TAB_SCORING = "tab_scoring";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_COLLECTOR = "tab_performanceAlliance_collector";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_COLLECTOR = "tab_performance_player_collector";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_ALLIANCE_TOWER = "tab_performanceAlliance_tower";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_PLAYER_TOWER = "tab_performance_player_tower";
  CastleAllianceBattleGroundEventDialog.TAB_PERFORMANCE_TOWER = "tab_performance_tower";
  return CastleAllianceBattleGroundEventDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.CastleAllianceBattleGroundEventDialog = C;
o.classImplementsInterfaces(C, "ICollectableRendererList");
var _ = require("./11.js");
var m = require("./2523.js");
var f = require("./2532.js");
var O = require("./2533.js");
var E = require("./2534.js");
var y = require("./2535.js");
var b = require("./2536.js");
var D = require("./2538.js");
var I = require("./2540.js");
var T = require("./2542.js");
var v = require("./20.js");