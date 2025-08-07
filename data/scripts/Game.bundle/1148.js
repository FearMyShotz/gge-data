Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./1068.js");
var u = require("./21.js");
var d = require("./26.js");
var p = require("./137.js");
var h = require("./13.js");
var g = require("./4.js");
var C = require("./386.js");
var _ = require("./27.js");
var m = require("./8.js");
var f = function (e) {
  function CastleTemporaryServerEventDialog() {
    var t = this;
    t.currentRankingType = CastleTemporaryServerEventDialog.TAB_RANKING2;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTemporaryServerEventDialog.NAME) || this;
  }
  n.__extends(CastleTemporaryServerEventDialog, e);
  CastleTemporaryServerEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    m.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_main_castletransportation, this.dialogDisp.btn_tab_main_crossplay, this.dialogDisp.btn_tab_ranking1, this.dialogDisp.btn_tab_tasks, this.dialogDisp.btn_tab_scoring]);
    m.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], I.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_MAIN, new E.CastleTemporaryServerEventDialogOverview(this.dialogDisp.tab_main));
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_RANKING2, new y.CastleTemporaryServerEventDialogRanking(this.dialogDisp.tab_ranking2, this.globalHighScoreType, this));
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_SCORING, new b.CastleTemporaryServerEventDialogScoring(this.dialogDisp.tab_scoring));
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_TASKS, new D.CastleTemporaryServerEventDialogTasks(this.dialogDisp.tab_tasks));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new r.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_shapeshifter_timer")));
  };
  Object.defineProperty(CastleTemporaryServerEventDialog.prototype, "globalHighScoreType", {
    get: function () {
      this.eventVO.settingVO.scoringSystem;
      return a.HighscoreConst.TEMP_SERVER_GLOBAL;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTemporaryServerEventDialog.prototype, "dailyHighScoreType", {
    get: function () {
      switch (this.eventVO.settingVO.scoringSystem) {
        case C.TempServerConfigurationVO.SCORING_SYSTEM_COLLECTOR:
          return a.HighscoreConst.TEMP_SERVER_DAILY_COLLECTOR_POINTS;
        case C.TempServerConfigurationVO.SCORING_SYSTEM_MIGHT:
          return a.HighscoreConst.TEMP_SERVER_DAILY_MIGHT_POINTS_BUILDINGS;
        case C.TempServerConfigurationVO.SCORING_SYSTEM_RANK_SWAP:
          return a.HighscoreConst.TEMP_SERVER_DAILY_RANK_SWAP;
      }
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._subLayer.set(CastleTemporaryServerEventDialog.TAB_RANKING1, new y.CastleTemporaryServerEventDialogRanking(this.dialogDisp.tab_ranking1, this.dailyHighScoreType, this));
    g.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    g.CastleModel.specialEventData.addEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    this.changeCategory(CastleTemporaryServerEventDialog.TAB_MAIN);
    this.updateRemainingEventTime();
    this.dialogDisp.btn_tab_main.visible = !this.eventVO.settingVO.isCastleTransportationOnly && !this.eventVO.isCrossPlay;
    this.dialogDisp.btn_tab_main_castletransportation.visible = this.eventVO.settingVO.isCastleTransportationOnly && !this.eventVO.isCrossPlay;
    this.dialogDisp.btn_tab_main_crossplay.visible = this.eventVO.isCrossPlay;
    this.dialogDisp.btn_tab_main.toolTipText = "panel_action_overview_tooltip";
    this.dialogDisp.btn_tab_main_castletransportation.toolTipText = "panel_action_overview_tooltip";
    this.dialogDisp.btn_tab_main_crossplay.toolTipText = "panel_action_overview_tooltip";
    this.dialogDisp.btn_tab_ranking1.toolTipText = "dialog_tempServer_Ranking_title";
    this.dialogDisp.btn_tab_tasks.toolTipText = this.env.isOnTemporaryServer ? "dialog_tempServer_dailyTask_header" : "dialog_accountInfo_notAvailable_tooltip";
    this.dialogDisp.btn_tab_scoring.toolTipText = "dialog_tempServer_scoring_title";
    m.ButtonHelper.enableButton(this.dialogDisp.btn_tab_tasks, this.env.isOnTemporaryServer);
    if (this.dialogDisp.btn_tab_main_crossplay.visible) {
      this.dialogDisp.btn_tab_main_crossplay.mc_icon.gotoAndStop(p.TempServerHelper.getAssetFrame());
      this.dialogDisp.btn_tab_main_crossplay.gotoAndStop(2);
      this.dialogDisp.btn_tab_main_crossplay.mc_icon.gotoAndStop(p.TempServerHelper.getAssetFrame());
      this.dialogDisp.btn_tab_main_crossplay.gotoAndStop(1);
    }
  };
  CastleTemporaryServerEventDialog.prototype.hideLoaded = function (t = null) {
    g.CastleModel.timerData.removeEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    g.CastleModel.specialEventData.removeEventListener(d.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.serverMessageArrived));
    e.prototype.hideLoaded.call(this, t);
  };
  CastleTemporaryServerEventDialog.prototype.changeCategory = function (t) {
    if (this._currentCategory != t) {
      if (p.TempServerHelper.tmpServerEvent) {
        e.prototype.changeCategory.call(this, t);
        this.showSublayer(this._subLayer.get(t), []);
        if (this.isInRankingTab) {
          this.currentRankingType = t;
        }
        if (this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1 || this._currentCategory == CastleTemporaryServerEventDialog.TAB_TASKS) {
          this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new r.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_timeUntilPoints_desc")));
        } else {
          this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new r.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_shapeshifter_timer")));
        }
        this.updateButton(this.dialogDisp.btn_tab_main, this._currentCategory == CastleTemporaryServerEventDialog.TAB_MAIN);
        this.updateButton(this.dialogDisp.btn_tab_main_castletransportation, this._currentCategory == CastleTemporaryServerEventDialog.TAB_MAIN);
        this.updateButton(this.dialogDisp.btn_tab_main_crossplay, this._currentCategory == CastleTemporaryServerEventDialog.TAB_MAIN);
        this.updateButton(this.dialogDisp.btn_tab_ranking1, this.isInRankingTab);
        this.updateButton(this.dialogDisp.btn_tab_tasks, this._currentCategory == CastleTemporaryServerEventDialog.TAB_TASKS);
        this.updateButton(this.dialogDisp.btn_tab_scoring, this._currentCategory == CastleTemporaryServerEventDialog.TAB_SCORING);
        this.updateRemainingEventTime();
        this.dialogDisp.icon_time.gotoAndStop(this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1 ? 2 : 1);
      } else {
        this.hide();
      }
    }
  };
  Object.defineProperty(CastleTemporaryServerEventDialog.prototype, "isInRankingTab", {
    get: function () {
      return this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1 || this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING2;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialog.prototype.updateButton = function (e, t) {
    e.gotoAndStop(t ? 2 : 1);
  };
  Object.defineProperty(CastleTemporaryServerEventDialog.prototype, "eventVO", {
    get: function () {
      return p.TempServerHelper.tmpServerEvent;
    },
    enumerable: true,
    configurable: true
  });
  CastleTemporaryServerEventDialog.prototype.updateRemainingEventTime = function () {
    if (this.eventVO) {
      var e = 0;
      if (this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1 || this._currentCategory == CastleTemporaryServerEventDialog.TAB_TASKS) {
        if ((e = l.int(this.eventVO.remainingTimeInSecondsUntilDailyReset)) <= 0 && !this.isWaitingForServerMessage) {
          g.CastleModel.smartfoxClient.sendCommandVO(new c.C2SSpecialEventInfoVO());
        }
      } else {
        e = l.int(this.eventVO.remainingEventTimeInSeconds);
      }
      _.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_text, e);
    } else {
      this.hide();
    }
  };
  CastleTemporaryServerEventDialog.prototype.toggleRankingType = function () {
    if (this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING1) {
      this.changeCategory(CastleTemporaryServerEventDialog.TAB_RANKING2);
    } else if (this._currentCategory == CastleTemporaryServerEventDialog.TAB_RANKING2) {
      this.changeCategory(CastleTemporaryServerEventDialog.TAB_RANKING1);
    }
  };
  CastleTemporaryServerEventDialog.prototype.onClick = function (t) {
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
        case this.dialogDisp.btn_tab_main_castletransportation:
        case this.dialogDisp.btn_tab_main_crossplay:
          this.changeCategory(CastleTemporaryServerEventDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_ranking1:
          this.changeCategory(this.currentRankingType);
          break;
        case this.dialogDisp.btn_tab_tasks:
          this.changeCategory(CastleTemporaryServerEventDialog.TAB_TASKS);
          break;
        case this.dialogDisp.btn_tab_scoring:
          this.changeCategory(CastleTemporaryServerEventDialog.TAB_SCORING);
          break;
        case this.dialogDisp.btn_help:
          O.CastleExternalDialog.dialogHandler.showHelper("", s.Localize.text("help_tempServer"));
      }
    }
  };
  CastleTemporaryServerEventDialog.prototype.serverMessageArrived = function (e) {
    this.isWaitingForServerMessage = false;
    if (p.TempServerHelper.tmpServerEvent) {
      this.updateRemainingEventTime();
    } else {
      this.hide();
    }
  };
  CastleTemporaryServerEventDialog.prototype.onTickEvent = function (e) {
    this.updateRemainingEventTime();
  };
  CastleTemporaryServerEventDialog.NAME = "CastleTemporaryServerEvent_9_0";
  CastleTemporaryServerEventDialog.TAB_MAIN = "tab_main";
  CastleTemporaryServerEventDialog.TAB_RANKING1 = "tab_ranking1";
  CastleTemporaryServerEventDialog.TAB_RANKING2 = "tab_ranking2";
  CastleTemporaryServerEventDialog.TAB_SCORING = "tab_scoring";
  CastleTemporaryServerEventDialog.TAB_TASKS = "tab_tasks";
  return CastleTemporaryServerEventDialog;
}(require("./114.js").CastleExternalSubLayerDialog);
exports.CastleTemporaryServerEventDialog = f;
var O = require("./11.js");
var E = require("./4532.js");
var y = require("./4534.js");
var b = require("./4538.js");
var D = require("./4539.js");
var I = require("./36.js");
o.classImplementsInterfaces(f, "ICollectableRendererList");