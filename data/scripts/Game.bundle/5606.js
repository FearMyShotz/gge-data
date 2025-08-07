Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./342.js");
var u = require("./91.js");
var d = require("./804.js");
var p = require("./37.js");
var h = require("./805.js");
var g = require("./261.js");
var C = require("./15.js");
var _ = require("./54.js");
var m = require("./4.js");
var f = require("./5607.js");
var O = require("./1101.js");
var E = function (e) {
  function CastleTutorialData(t) {
    var i = this;
    i._tutorialStepVOs = [];
    i._existingListeners = new Array();
    i._isTutorialActive = false;
    i._isWaitingToStartTutorial = false;
    i._isCompletelyLoggedIn = false;
    i.isSkippingTutorial = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).parseChapters(t.tutorials);
    i.reinit();
    return i;
  }
  n.__extends(CastleTutorialData, e);
  CastleTutorialData.prototype.reset = function () {
    this.reinit();
  };
  CastleTutorialData.prototype.reinit = function () {
    this._isTutorialActive = false;
    this._isWaitingToStartTutorial = false;
    this._isCompletelyLoggedIn = false;
    this._currentStep = null;
    this._delayedSteps = [];
    C.CastleBasicController.getInstance().addEventListener(p.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onLoginProcessComplete));
    C.CastleBasicController.getInstance().addEventListener(d.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    m.CastleModel.questData.addEventListener(g.CastleQuestDataEvent.QUEST_START, this.bindFunction(this.onQuestStart));
    m.CastleModel.questData.addEventListener(g.CastleQuestDataEvent.GET_QUESTLIST, this.bindFunction(this.onQuestStart));
    m.CastleModel.questData.addEventListener(g.CastleQuestDataEvent.QUEST_FINISHED, this.bindFunction(this.onQuestFinish));
    C.CastleBasicController.getInstance().addEventListener(h.CastleTutorialEvent.STEP_FINISHED, this.bindFunction(this.onStepFinished));
  };
  CastleTutorialData.prototype.onQuestStart = function (e) {
    this.checkQuest(CastleTutorialData.QUEST_IDS, function (e) {
      return m.CastleModel.questData.getActiveQuestByID(e);
    });
  };
  CastleTutorialData.prototype.onQuestFinish = function (e) {
    this.checkQuest(CastleTutorialData.FINISH_QUEST_IDS, function (t) {
      return e.quest.questID == t;
    });
  };
  CastleTutorialData.prototype.onStepFinished = function (e) {
    this.checkQuest(CastleTutorialData.STEP_FINISHED, function (t) {
      return e.params[0] == t;
    });
  };
  CastleTutorialData.prototype.checkQuest = function (e, t) {
    if (!this.isSkippingTutorial && this._tutorialStepVOs != null) {
      for (var i = 0, n = this._tutorialStepVOs; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.attributes.has(e)) {
          var a = o.attributes.get(e).split(",");
          if (a != null) {
            for (var s = 0, r = a; s < r.length; s++) {
              var l = r[s];
              if (l !== undefined) {
                var c = parseInt(l);
                if (t(c)) {
                  this.handleStep(o, c);
                  return;
                }
              }
            }
          }
        }
      }
    }
  };
  CastleTutorialData.prototype.handleStep = function (e, t) {
    if (!this._currentStep || e.id != this._currentStep.id) {
      if (this._isCompletelyLoggedIn) {
        if (this.isTutorialActive) {
          this.delayStep(e, t);
        } else {
          this.startTutorialStep(e, t);
        }
      } else {
        this.delayStep(e, t);
        this._isWaitingToStartTutorial = true;
      }
    }
  };
  CastleTutorialData.prototype.delayStep = function (e, t) {
    if (this._delayedSteps != null) {
      for (var i = 0, n = this._delayedSteps; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && (o.step.id == e.id || o.questId == t)) {
          return;
        }
      }
    }
    this._delayedSteps.push({
      step: e,
      questId: t
    });
  };
  CastleTutorialData.prototype.onLoginProcessComplete = function (e) {
    C.CastleBasicController.getInstance().removeEventListener(p.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onLoginProcessComplete));
    if (!c.ClientConstInstanceIDs.isBetaInstance()) {
      this.startTutorialOnLoginComplete();
    }
  };
  CastleTutorialData.prototype.startTutorialOnLoginComplete = function () {
    this._isCompletelyLoggedIn = true;
    if (this._isWaitingToStartTutorial) {
      this._isWaitingToStartTutorial = false;
      if (!this.isTutorialFinished()) {
        a.ClientFunnelTrackingController.getInstance().trackState(o.ClientFunnelGameStates.TUTORIAL_START);
      }
      this.checkDelayedSteps();
    }
  };
  CastleTutorialData.prototype.startTutorialStep = function (e, t) {
    this._isWaitingToStartTutorial = false;
    if (this.isTutorialFinished()) {
      s.debug("We should've started a tutorial step although it seems to be finished! Step: " + (e ? e.id : "null"));
      this.activateTutorial(false);
      v.CastleTutorialSpotlight.instance.destroyTutorialCanvas();
      return;
    }
    this._currentStep = e;
    D.CastleTutorialController.getInstance().startStep(e, t);
  };
  CastleTutorialData.prototype.parseChapters = function (e) {
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new f.TutorialStepVO().parseData(n);
          this._tutorialStepVOs.push(o);
        }
      }
    }
  };
  CastleTutorialData.prototype.activateTutorial = function (e) {
    this._isTutorialActive = e;
  };
  Object.defineProperty(CastleTutorialData.prototype, "isTutorialActive", {
    get: function () {
      return this._isTutorialActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTutorialData.prototype, "currentTutorialCommand", {
    get: function () {
      if (this._currentStep) {
        return this._currentStep.command;
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialData.prototype.removeAllListeners = function () {
    if (this._existingListeners != null) {
      for (var e = 0, t = this._existingListeners; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.target.removeEventListener(i.type, i.listenerFunc);
        }
      }
    }
    this._existingListeners = new Array();
  };
  CastleTutorialData.prototype.removeFromExisting = function (e) {
    for (var t = 0; t < this._existingListeners.length; t++) {
      if (this._existingListeners[t].listenerFunc == e) {
        this._existingListeners.splice(t, 1);
        break;
      }
    }
  };
  CastleTutorialData.prototype.registerListener = function (e, t, i) {
    var n = new O.TutorialListenerObject(e, t, i);
    n.target.addEventListener(t, i);
    this._existingListeners.push(n);
    return n;
  };
  CastleTutorialData.prototype.removeListener = function (e, t, i) {
    if (this._existingListeners != null) {
      for (var n = 0, o = this._existingListeners; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.listenerFunc == i && a.target == e && a.type == t) {
          a.target.removeEventListener(t, i);
          this._existingListeners.splice(this._existingListeners.indexOf(a), 1);
          return;
        }
      }
    }
  };
  CastleTutorialData.prototype.onLogout = function (e) {
    C.CastleBasicController.getInstance().removeEventListener(d.CastleLogoutEvent.LOGOUT_TRIGGERED, this.bindFunction(this.onLogout));
    this.removeAllListeners();
    this.clearBlockers();
    this.reinit();
  };
  CastleTutorialData.prototype.clearBlockers = function () {
    y.CastleTutorialArrowController.instance.clear();
    b.CastleTutorialClickBlocker.instance.clear();
    v.CastleTutorialSpotlight.instance.clear();
    I.CastleTutorialDialogFilter.instance.clear();
    T.CastleLayoutManager.getInstance().dispatchEvent(new u.CastleLayoutManagerEvent(u.CastleLayoutManagerEvent.LOCK_CAMERA, [false]));
  };
  Object.defineProperty(CastleTutorialData.prototype, "existingListeners", {
    get: function () {
      return this._existingListeners;
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialData.prototype.isInTutorial = function () {
    return this.isTutorialActive;
  };
  CastleTutorialData.prototype.isTutorialFinished = function () {
    return m.CastleModel.userData.userXP >= l.TutorialConst.LAST_TUTORIAL_STEP_XP;
  };
  CastleTutorialData.prototype.checkDelayedSteps = function () {
    var e = this._delayedSteps.shift();
    return !!e && (this.startTutorialStep(e.step, e.questId), true);
  };
  CastleTutorialData.QUEST_IDS = "questIDs";
  CastleTutorialData.FINISH_QUEST_IDS = "onfinishQuestIDs";
  CastleTutorialData.STEP_FINISHED = "stepFinished";
  return CastleTutorialData;
}(_.CastleBasicData);
exports.CastleTutorialData = E;
var y = require("./300.js");
var b = require("./433.js");
var D = require("./828.js");
var I = require("./326.js");
var T = require("./17.js");
var v = require("./472.js");
r.classImplementsInterfaces(E, "IUpdatable");