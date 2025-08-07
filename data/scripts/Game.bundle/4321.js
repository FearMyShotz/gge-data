Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./57.js");
var l = require("./58.js");
var c = require("./277.js");
var u = require("./300.js");
var d = require("./804.js");
var p = require("./261.js");
var h = require("./15.js");
var g = require("./72.js");
var C = require("./29.js");
var _ = require("./9.js");
var m = require("./17.js");
var f = require("./4322.js");
var O = require("./4.js");
var E = require("./1266.js");
var y = require("./1101.js");
var b = function (e) {
  function GeneralIntroductionData() {
    var t = e.call(this) || this;
    t._guidanceListeners = [];
    t.onProgress = new r.Signal();
    t.reset();
    return t;
  }
  n.__extends(GeneralIntroductionData, e);
  GeneralIntroductionData.prototype.reset = function () {
    this._activeIntroductionQuest = null;
    this.removeGeneralIntroductionGuidance();
    h.CastleBasicController.getInstance().addEventListener(d.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    O.CastleModel.smartfoxClient.addEventListener(o.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost));
    O.CastleModel.questData.addEventListener(p.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    O.CastleModel.questData.addEventListener(p.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestStart));
    O.CastleModel.questData.addEventListener(p.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinish));
  };
  GeneralIntroductionData.prototype.canAccessGenerals = function () {
    var e = O.CastleModel.userData.userLevel >= l.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS;
    var t = !this._activeIntroductionQuest || this._activeIntroductionQuest.questSeriesNumber > GeneralIntroductionData.QUEST_STARTER_1;
    return e && t;
  };
  GeneralIntroductionData.prototype.isIntroductionFinished = function () {
    var e = O.CastleModel.userData.userLevel >= l.ClientConstLevelRestrictions.MIN_LEVEL_GENERALS;
    var t = O.CastleModel.questData.isQuestSeriesActive(GeneralIntroductionData.QUEST_SERIES_ID);
    return e && !t;
  };
  GeneralIntroductionData.prototype.canAttackWolfking = function () {
    if (this.activeIntroductionQuest) {
      var e = this.activeIntroductionQuest.conditions[0];
      return e.conditionType == c.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER || e.conditionType == c.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING;
    }
    return false;
  };
  GeneralIntroductionData.prototype.canTauntWolfking = function () {
    if (this.activeIntroductionQuest) {
      var e = this.activeIntroductionQuest.conditions[0].conditionType == c.ClientConstQuestCondition.QUESTTYPE_DEFEND_WOLFKING;
      var t = !!O.CastleModel.lordData.getBaronByCastleMapObjectVO(O.CastleModel.userData.castleList.getHomeCastle()).assignedGeneralVO;
      return e && t;
    }
    return false;
  };
  GeneralIntroductionData.prototype.getAvailableCinematics = function () {
    var e = [];
    var t = this.isIntroductionFinished();
    var i = new E.GeneralCinematicVO(1);
    var n = new E.GeneralCinematicVO(2);
    if (t || this._activeIntroductionQuest && this._activeIntroductionQuest.questSeriesNumber >= GeneralIntroductionData.QUEST_GENERALS_INN_1) {
      e.push(i);
    }
    if (t || this._activeIntroductionQuest && this._activeIntroductionQuest.questSeriesNumber >= GeneralIntroductionData.QUEST_GENERAL_INN_2) {
      e.push(n);
    }
    return e;
  };
  GeneralIntroductionData.prototype.onConnectionLost = function (e) {
    this.onLogout(null);
  };
  GeneralIntroductionData.prototype.onLogout = function (e) {
    this.removeGeneralIntroductionGuidance();
    h.CastleBasicController.getInstance().removeEventListener(d.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    O.CastleModel.smartfoxClient.removeEventListener(o.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost));
    O.CastleModel.questData.removeEventListener(p.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    O.CastleModel.questData.removeEventListener(p.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestStart));
    O.CastleModel.questData.removeEventListener(p.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinish));
  };
  GeneralIntroductionData.prototype.onQuestStart = function (e) {
    var t = !!this._activeIntroductionQuest || e.quest && e.quest.questSeriesID == GeneralIntroductionData.QUEST_SERIES_ID;
    this._activeIntroductionQuest = O.CastleModel.questData.getActiveQuestFromSeries(GeneralIntroductionData.QUEST_SERIES_ID);
    if (t && this._activeIntroductionQuest) {
      var i = this._activeIntroductionQuest.conditions[0];
      switch (i.conditionType) {
        case c.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_BARON:
          this.showGeneralIntroductionGuidance(C.IngameClientCommands.GENERAL_INTRODUCTION_GUIDANCE_ASSIGN_BARON, i);
          break;
        case c.ClientConstQuestCondition.QUESTTYPE_GENERAL_ASSIGN_TO_COMMANDER:
        case c.ClientConstQuestCondition.QUESTTYPE_DEFEAT_WOLFKING:
          this.showGeneralIntroductionGuidance(C.IngameClientCommands.GENERAL_INTRODUCTION_GUIDANCE_ATTACK_WOLFKING, i);
      }
    }
    this.onProgress.dispatch();
  };
  GeneralIntroductionData.prototype.onQuestFinish = function (e) {
    this._activeIntroductionQuest = O.CastleModel.questData.getActiveQuestFromSeries(GeneralIntroductionData.QUEST_SERIES_ID);
    if (e.quest.questSeriesID == GeneralIntroductionData.QUEST_SERIES_ID) {
      m.CastleLayoutManager.getInstance().removeGuidancePanel();
      this.removeGeneralIntroductionGuidance();
      if (e.quest.questSeriesNumber == GeneralIntroductionData.QUEST_STARTER_1) {
        _.CastleDialogHandler.getInstance().registerDefaultDialogs(f.GeneralIntroductionPopUpDialog, null, true);
        a.ClientFunnelTrackingController.getInstance().trackState("start_generals_intro");
      }
    }
    this.onProgress.dispatch();
  };
  Object.defineProperty(GeneralIntroductionData.prototype, "activeIntroductionQuest", {
    get: function () {
      return this._activeIntroductionQuest;
    },
    enumerable: true,
    configurable: true
  });
  GeneralIntroductionData.prototype.executeShowMeOfCurrentQuest = function () {
    s.CommandController.instance.executeCommand(C.IngameClientCommands.SHOW_HOW_TODO_QUESTCONDITION_COMMAND, [this._activeIntroductionQuest, this._activeIntroductionQuest.conditions[0]]);
  };
  GeneralIntroductionData.prototype.registerListener = function (e, t, i) {
    var n = new y.TutorialListenerObject(e, t, i);
    n.target.addEventListener(t, i);
    this._guidanceListeners.push(n);
    return n;
  };
  GeneralIntroductionData.prototype.showGeneralIntroductionGuidance = function (e, t) {
    this.removeGeneralIntroductionGuidance();
    s.CommandController.instance.executeCommand(e, t);
  };
  GeneralIntroductionData.prototype.removeGeneralIntroductionGuidance = function () {
    if (m.CastleLayoutManager.getInstance().guidancePanel) {
      m.CastleLayoutManager.getInstance().guidancePanel.hide();
    }
    u.CastleTutorialArrowController.instance.clear();
    this._guidanceListeners.forEach(function (e) {
      return e.target.removeEventListener(e.type, e.listenerFunc);
    });
    this._guidanceListeners = [];
  };
  GeneralIntroductionData.QUEST_SERIES_ID = 10000;
  GeneralIntroductionData.QUEST_STARTER_1 = 1;
  GeneralIntroductionData.QUEST_GENERALS_INN_1 = 2;
  GeneralIntroductionData.QUEST_ASSIGN_TO_BARON = 3;
  GeneralIntroductionData.QUEST_DEFEND_WOLFKING = 4;
  GeneralIntroductionData.QUEST_STARTER_2 = 5;
  GeneralIntroductionData.QUEST_ASSIGN_TO_COMMANDER = 6;
  GeneralIntroductionData.QUEST_DEFEAT_WOLFKING = 7;
  GeneralIntroductionData.QUEST_GENERAL_INN_2 = 8;
  GeneralIntroductionData.QUEST_GACHA_DRAW = 9;
  GeneralIntroductionData.QUEST_STARTER_3 = 10;
  GeneralIntroductionData.QUEST_GENERAL_OVERVIEW = 11;
  return GeneralIntroductionData;
}(g.CastleEventDispatcher);
exports.GeneralIntroductionData = b;