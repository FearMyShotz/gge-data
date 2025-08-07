Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./114.js");
var r = require("./8.js");
var l = require("./20.js");
var c = require("./13.js");
var u = require("./21.js");
var d = require("./4.js");
var p = require("./5.js");
var h = require("./27.js");
var g = require("./1840.js");
var C = require("./4012.js");
var _ = require("./4014.js");
var m = require("./11.js");
var f = require("./4015.js");
var O = require("./4017.js");
var E = require("./4019.js");
var y = function (e) {
  function CastleStormIslandsMainDialog() {
    var t = this;
    t.lastPerformanceTab = "";
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleStormIslandsMainDialog.NAME) || this;
  }
  n.__extends(CastleStormIslandsMainDialog, e);
  CastleStormIslandsMainDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    r.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_main, this.dialogDisp.btn_tab_ranking, this.dialogDisp.btn_tab_performance]);
    r.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], l.ClickFeedbackButtonHover);
    this._subLayer = new Map();
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_MAIN, new g.CastleStormIslandsMainDialogOverview(this.dialogDisp.tab_main));
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_RANKING, new C.CastleStormIslandsMainDialogRanking(this.dialogDisp.tab_ranking));
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE, new O.CastleStormIslandsMainDialogPerformanceAlliance(this.dialogDisp.tab_performance_alliance, this));
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_TITLES, new f.CastleStormIslandsMainDialogTitles(this.dialogDisp.tab_titles, this));
    this._subLayer.set(CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER, new _.CastleStormIslandsMainDialogPerformancePlayer(this.dialogDisp.tab_performance_player, this));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new o.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("remainingTime")));
  };
  CastleStormIslandsMainDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.lastPerformanceTab == "") {
      this.lastPerformanceTab = CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE;
    }
    d.CastleModel.timerData.addEventListener(u.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    this.setCategory(this.startTab ? this.startTab : CastleStormIslandsMainDialog.TAB_MAIN);
    this.updateRemainingEventTime();
    this.dialogDisp.btn_tab_main.toolTipText = "dialog_island_main_overview_title";
    this.dialogDisp.btn_tab_ranking.toolTipText = "dialog_island_main_cargoPointsContestRanking_title";
    this.dialogDisp.btn_tab_performance.toolTipText = "internalAllianceContest";
    this.dialogDisp.btn_tab_main.mouseChildren = false;
    this.dialogDisp.btn_tab_ranking.mouseChildren = false;
    this.dialogDisp.btn_tab_performance.mouseChildren = false;
    if (d.CastleModel.userData.isInAlliance) {
      d.CastleModel.smartfoxClient.sendCommandVO(new E.C2SStormIslandsInfoVO());
    }
  };
  CastleStormIslandsMainDialog.prototype.updateRemainingEventTime = function () {
    var e = d.CastleModel.kingdomData.getKingdomVOByID(p.WorldIsland.KINGDOM_ID).resetTime;
    h.CastleTimeStringHelper.setEventTime(this.dialogDisp.txt_text, e);
  };
  CastleStormIslandsMainDialog.prototype.onTickEvent = function (e) {
    this.updateRemainingEventTime();
  };
  CastleStormIslandsMainDialog.prototype.onClick = function (t) {
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_main:
          this.setCategory(CastleStormIslandsMainDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_ranking:
          this.setCategory(CastleStormIslandsMainDialog.TAB_RANKING);
          break;
        case this.dialogDisp.btn_tab_performance:
          this.setCategory(this.lastPerformanceTab);
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
    }
  };
  CastleStormIslandsMainDialog.prototype.setCategory = function (e) {
    this.changeCategory(e);
    this.showSublayer(this._subLayer.get(e), []);
    r.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_main, this._currentCategory == CastleStormIslandsMainDialog.TAB_MAIN);
    r.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_ranking, this._currentCategory == CastleStormIslandsMainDialog.TAB_RANKING);
    r.ButtonHelper.setButtonSelected(this.dialogDisp.btn_tab_performance, this.isInPerformanceTab);
    if (this.isInPerformanceTab) {
      this.lastPerformanceTab = e;
    }
  };
  CastleStormIslandsMainDialog.prototype.showHelp = function () {
    switch (this._currentCategory) {
      case CastleStormIslandsMainDialog.TAB_MAIN:
        m.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_island_main_overview"));
        break;
      case CastleStormIslandsMainDialog.TAB_RANKING:
        m.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_island_main_cargoPointsContestRanking"));
        break;
      case CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE:
        m.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_island_main_internalAllianceRanking"));
        break;
      case CastleStormIslandsMainDialog.TAB_TITLES:
        m.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_island_main_stormTitles"));
        break;
      case CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER:
        m.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_island_main_myPerformance"));
    }
  };
  Object.defineProperty(CastleStormIslandsMainDialog.prototype, "isInPerformanceTab", {
    get: function () {
      switch (this._currentCategory) {
        case CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE:
        case CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER:
        case CastleStormIslandsMainDialog.TAB_TITLES:
          return true;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStormIslandsMainDialog.prototype, "startTab", {
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
  Object.defineProperty(CastleStormIslandsMainDialog.prototype, "dialogProp", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleStormIslandsMainDialog.NAME = "CastleStormIslandsMain_D";
  CastleStormIslandsMainDialog.TAB_MAIN = "tab_main";
  CastleStormIslandsMainDialog.TAB_RANKING = "tab_ranking";
  CastleStormIslandsMainDialog.TAB_PERFORMANCE_ALLIANCE = "tab_performance_alliance";
  CastleStormIslandsMainDialog.TAB_TITLES = "tab_titles";
  CastleStormIslandsMainDialog.TAB_PERFORMANCE_PLAYER = "tab_performance_player";
  return CastleStormIslandsMainDialog;
}(s.CastleExternalSubLayerDialog);
exports.CastleStormIslandsMainDialog = y;