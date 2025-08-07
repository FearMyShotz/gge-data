Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./6.js");
var p = require("./21.js");
var h = require("./261.js");
var g = require("./67.js");
var C = require("./19.js");
var _ = require("./4.js");
var m = require("./27.js");
var f = require("./251.js");
var O = require("./42.js");
var E = require("./8.js");
var y = require("./11.js");
var b = createjs.MovieClip;
var D = createjs.Point;
var I = function (e) {
  function CastleDailyQuestDialog() {
    var t = this;
    t.DAILY_QUESTS_AMOUNT = 12;
    t.DEFAULT_QUEST_INDEX = 0;
    t.REWARD_DIMENSION = new D(45, 45);
    t.selectedQuestIndex = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleDailyQuestDialog.NAME) || this;
  }
  n.__extends(CastleDailyQuestDialog, e);
  CastleDailyQuestDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    var i = [this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_showMe];
    for (var n = 0; n < this.DAILY_QUESTS_AMOUNT; n++) {
      i.push(this.dialogDisp["quest" + n]);
      this.dialogDisp["quest" + n].active.visible = false;
    }
    this.initBasicButtons(i);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new c.LocalizedTextVO("dialog_dailyQuests_desc")).verticalAlign = a.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_scoreBarComponent.txt_pointsDescription, new c.LocalizedTextVO("dialog_dailyQuests_counter2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_questRewards, new c.LocalizedTextVO("dialog_dailyQuests_rewards"));
    this.itxt_timer = this.textFieldManager.registerTextField(this.dialogDisp.mc_resetTimer.txt_time, new u.TextVO(""));
    this.itxt_questTitle = this.textFieldManager.registerTextField(this.dialogDisp.txt_questTitle, new c.LocalizedTextVO(""));
    this.itxt_questDescription = this.textFieldManager.registerTextField(this.dialogDisp.txt_questDescription, new c.LocalizedTextVO(""));
    this.itxt_showMe = this.textFieldManager.registerTextField(this.dialogDisp.btn_showMe.txt_label, new c.LocalizedTextVO(""));
    this.itxt_showMe.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_scoreBarComponent.mc_pointsTooltip.toolTipText = "dialog_dailyQuests_counter_tooltip";
    this.dialogDisp.mc_resetTimer.toolTipText = "dialog_dailyQuests_timer_tooltip";
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.mc_resetTimer.mouseChildren = false;
  };
  CastleDailyQuestDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.questData.currentQuests.length <= 0) {
      this.hide();
    } else {
      this.updateTimer();
      this.updateQuests();
      if (this.selectedQuest) {
        this.updateQuestInfo();
      } else {
        this.selectDailyQuest(this.DEFAULT_QUEST_INDEX);
      }
      if (this.scoreBar) {
        this.scoreBar.destroy();
      }
      this.scoreBar = new A.CastleScoreBarComponent(this.dialogDisp.mc_scoreBarComponent, new L.DailyQuestScoreBarProperties(this.questData.thresholdRewards));
      this.scoreBar.update(new f.CastleScoreBarProgressVO(this.questData.getFinishedQuests().length, 0, v.CastleQuestData.DAILY_QUEST_THRESHOLDS, []));
    }
  };
  CastleDailyQuestDialog.prototype.updateTimer = function () {
    this.itxt_timer.textContentVO.stringValue = m.CastleTimeStringHelper.getShortTimeString(_.CastleModel.timerData.timeTillDailyResetInSec);
  };
  CastleDailyQuestDialog.prototype.updateQuests = function () {
    var e;
    var t;
    for (var i = 0; i < Math.min(this.questData.currentQuests.length, this.DAILY_QUESTS_AMOUNT); i++) {
      e = this.questData.currentQuests[i];
      t = this.dialogDisp["quest" + i];
      s.MovieClipHelper.clearMovieClip(t.mc_questIcon);
      t.mc_questIcon.addChild(e.getQuestIcon());
      t.gotoAndStop(e.isFinished ? 2 : 1);
      t.toolTipText = e.getQuestName();
    }
  };
  CastleDailyQuestDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    _.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.questData.addEventListener(h.CastleQuestDataEvent.DAILYQUEST_REFRESHED, this.bindFunction(this.onQuestRefresh));
  };
  CastleDailyQuestDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    _.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.questData.removeEventListener(h.CastleQuestDataEvent.DAILYQUEST_REFRESHED, this.bindFunction(this.onQuestRefresh));
  };
  CastleDailyQuestDialog.prototype.onTimer = function (e) {
    this.updateTimer();
  };
  CastleDailyQuestDialog.prototype.onQuestRefresh = function (e) {
    this.updateQuests();
    this.updateQuestInfo();
    this.scoreBar.update(new f.CastleScoreBarProgressVO(this.questData.getFinishedQuests().length, 0, v.CastleQuestData.DAILY_QUEST_THRESHOLDS, []));
  };
  CastleDailyQuestDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (E.ButtonHelper.isButtonEnabled(t.target) && t.target instanceof b) {
      var i = t.target.name.match(/quest[0-9]+/);
      if (i && i.length > 0) {
        this.selectDailyQuest(d.int(i.pop().replace("quest", "")));
      }
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_showMe:
          o.CommandController.instance.executeCommand(T.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this.selectedQuest, this.selectedQuest.conditions[0]]);
          break;
        case this.dialogDisp.btn_help:
          S.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("help_dailyQuests"));
      }
    }
  };
  CastleDailyQuestDialog.prototype.selectDailyQuest = function (e) {
    if (this.selectedQuestMC) {
      this.selectedQuestMC.active.visible = false;
    }
    this.selectedQuestIndex = e;
    if (!this.selectedQuest && e != this.DEFAULT_QUEST_INDEX) {
      this.selectDailyQuest(this.DEFAULT_QUEST_INDEX);
    }
    if (this.selectedQuest) {
      this.selectedQuestMC = this.dialogDisp["quest" + e];
      this.selectedQuestMC.active.visible = true;
      this.updateQuestInfo();
    }
  };
  CastleDailyQuestDialog.prototype.updateQuestInfo = function () {
    this.itxt_questTitle.textContentVO.textId = this.selectedQuest.getQuestName();
    this.itxt_questDescription.textContentVO.textId = this.selectedQuest.getQuestDescription();
    s.MovieClipHelper.clearMovieClip(this.dialogDisp.currentQuest.mc_questIcon);
    this.dialogDisp.currentQuest.mc_questIcon.addChild(this.selectedQuest.getQuestIcon(true));
    this.dialogDisp.currentQuest.gotoAndStop(this.selectedQuest.isFinished ? 2 : 1);
    P.CollectableRenderHelper.displayMultipleItemsComplete(this, new g.CollectableRenderClipsList(this.dialogDisp, "reward").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.selectedQuest.rewards, new C.CollectableRenderOptions(C.CollectableRenderOptions.SET_DEFAULT, this.REWARD_DIMENSION));
    if (this.selectedQuest.isFinished) {
      this.itxt_showMe.textContentVO.textId = "dialog_dailyQuests_completed";
      this.itxt_showMe.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      E.ButtonHelper.enableButton(this.dialogDisp.btn_showMe, false);
    } else {
      this.itxt_showMe.textContentVO.textId = "dialog_dailyQuests_showMe";
      this.itxt_showMe.verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
      E.ButtonHelper.enableButton(this.dialogDisp.btn_showMe, true);
    }
  };
  Object.defineProperty(CastleDailyQuestDialog.prototype, "questData", {
    get: function () {
      return _.CastleModel.dailyQuestData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDailyQuestDialog.prototype, "selectedQuest", {
    get: function () {
      return this.questData.currentQuests[this.selectedQuestIndex];
    },
    enumerable: true,
    configurable: true
  });
  CastleDailyQuestDialog.NAME = "CastleDailyQuest";
  return CastleDailyQuestDialog;
}(y.CastleExternalDialog);
exports.CastleDailyQuestDialog = I;
var T = require("./29.js");
var v = require("./545.js");
var S = require("./9.js");
var A = require("./331.js");
var L = require("./1066.js");
var P = require("./25.js");
r.classImplementsInterfaces(I, "ICollectableRendererList");