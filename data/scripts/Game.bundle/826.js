Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./91.js");
var s = require("./37.js");
var r = require("./15.js");
var l = require("./72.js");
var c = require("./4.js");
var u = require("./1100.js");
var d = createjs.MouseEvent;
var p = function (e) {
  function CastleTutorialController(t) {
    return e.call(this) || this;
  }
  n.__extends(CastleTutorialController, e);
  Object.defineProperty(CastleTutorialController, "layoutManager", {
    get: function () {
      return h.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialController.prototype.removeListeners = function () {
    c.CastleModel.tutorialData.removeAllListeners();
  };
  CastleTutorialController.prototype.startStep = function (e, t) {
    c.CastleModel.tutorialData.removeAllListeners();
    c.CastleModel.tutorialData.activateTutorial(true);
    o.CommandController.instance.executeCommand(e.command, [e, t]);
  };
  CastleTutorialController.prototype.finishStep = function () {
    c.CastleModel.tutorialData.removeAllListeners();
    c.CastleModel.tutorialData.clearBlockers();
    if (CastleTutorialController.layoutManager.tutorialPanel) {
      CastleTutorialController.layoutManager.tutorialPanel.hide();
    }
    c.CastleModel.tutorialData.activateTutorial(false);
    c.CastleModel.tutorialData.checkDelayedSteps();
  };
  CastleTutorialController.prototype.waitForDialogShow = function (e, t) {
    if (CastleTutorialController.layoutManager.isDialogVisibleByName(e)) {
      t();
    } else {
      var i = new u.TutorialListenerObject(CastleTutorialController.controller, a.CastleLayoutManagerEvent.SHOW_DIALOG, this.waitForDialogListener(e, t, a.CastleLayoutManagerEvent.SHOW_DIALOG));
      this.startListening(i);
    }
  };
  CastleTutorialController.prototype.waitForExternalDialogShow = function (e, t) {
    if (CastleTutorialController.layoutManager.isDialogVisibleByName(e)) {
      t();
    } else {
      var i = new u.TutorialListenerObject(CastleTutorialController.controller, a.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, this.waitForDialogListener(e, t, a.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG));
      this.startListening(i);
    }
  };
  CastleTutorialController.prototype.waitForSublayerPanelShow = function (e, t) {
    var i = new u.TutorialListenerObject(CastleTutorialController.controller, a.CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL, this.waitForDialogListener(e.buttonClassName, t, a.CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL));
    this.startListening(i);
  };
  CastleTutorialController.prototype.waitForSublayerPanelHide = function (e, t) {
    var i = new u.TutorialListenerObject(CastleTutorialController.controller, a.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, this.waitForDialogListener(e.buttonClassName, t, a.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL));
    this.startListening(i);
  };
  CastleTutorialController.prototype.waitForDialogHide = function (e, t) {
    var i = new u.TutorialListenerObject(CastleTutorialController.controller, a.CastleLayoutManagerEvent.HIDE_DIALOG, this.waitForDialogListener(e, t, a.CastleLayoutManagerEvent.HIDE_DIALOG));
    this.startListening(i);
  };
  CastleTutorialController.prototype.waitForExternalDialogHide = function (e, t) {
    var i = new u.TutorialListenerObject(CastleTutorialController.controller, a.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, this.waitForDialogListener(e, t, a.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG));
    this.startListening(i);
  };
  CastleTutorialController.prototype.waitForLayoutStateChange = function (e, t) {
    var i = new u.TutorialListenerObject(CastleTutorialController.controller, a.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.waitForLayoutStateListener(e, t, a.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE));
    this.startListening(i);
  };
  CastleTutorialController.prototype.waitForLayoutStateChangeFinished = function (e, t) {
    var i = new u.TutorialListenerObject(CastleTutorialController.controller, a.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.waitForLayoutStateListener(e, t, a.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED));
    this.startListening(i);
  };
  CastleTutorialController.prototype.waitForJoinCastle = function (e) {
    var t = new u.TutorialListenerObject(CastleTutorialController.controller, s.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.genericEventListener(CastleTutorialController.controller, e, s.CastleServerMessageArrivedEvent.JAA_ARRIVED));
    this.startListening(t);
  };
  CastleTutorialController.prototype.registerComplexListener = function (e, t, i) {
    c.CastleModel.tutorialData.registerListener(e, t, i);
  };
  CastleTutorialController.prototype.removeComplexListener = function (e, t, i) {
    c.CastleModel.tutorialData.removeListener(e, t, i);
  };
  CastleTutorialController.prototype.removeListenerFrom = function (e) {
    c.CastleModel.tutorialData.removeFromExisting(e);
  };
  CastleTutorialController.prototype.waitForDialogListener = function (e, t, i) {
    function n(o) {
      if (o.type == i && o.params[0] && o.params[0] == e) {
        CastleTutorialController.controller.removeEventListener(i, n);
        c.CastleModel.tutorialData.removeFromExisting(n);
        t();
      }
    }
    return n;
  };
  CastleTutorialController.prototype.waitForDialogListenerCallback = function (e, t, i, n) {
    if (e.type == i && e.params[0] && e.params[0] == n) {
      CastleTutorialController.controller.removeEventListener(i, this.bindFunction(this.waitForDialogListener));
      c.CastleModel.tutorialData.removeFromExisting(this.bindFunction(this.waitForDialogListener));
      t();
    }
  };
  CastleTutorialController.prototype.genericEventListener = function (e, t, i) {
    function n(o) {
      if (o.type == i) {
        e.removeEventListener(o.type, n);
        c.CastleModel.tutorialData.removeFromExisting(n);
        t();
      }
    }
    return n;
  };
  CastleTutorialController.prototype.waitForLayoutStateListener = function (e, t, i) {
    function n(o) {
      if (o.type == i && o.params[0] && o.params[0] == e) {
        CastleTutorialController.controller.removeEventListener(i, n);
        c.CastleModel.tutorialData.removeFromExisting(n);
        t();
      }
    }
    return n;
  };
  CastleTutorialController.prototype.onClick = function (e, t) {
    function i() {
      e.removeEventListener(d.CLICK, i);
      c.CastleModel.tutorialData.removeFromExisting(i);
      t();
    }
    var n = new u.TutorialListenerObject(e, d.CLICK, i);
    this.startListening(n);
  };
  CastleTutorialController.prototype.startListening = function (e) {
    c.CastleModel.tutorialData.existingListeners.push(e);
    e.target.addEventListener(e.type, e.listenerFunc);
  };
  CastleTutorialController.getInstance = function () {
    CastleTutorialController.tutorialControllerInstance ||= new CastleTutorialController(new g());
    return CastleTutorialController.tutorialControllerInstance;
  };
  Object.defineProperty(CastleTutorialController, "controller", {
    get: function () {
      return r.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleTutorialController;
}(l.CastleEventDispatcher);
exports.CastleTutorialController = p;
var h = require("./17.js");
var g = function () {
  return function TutorialControllerSingletonBlocker() {};
}();
exports.TutorialControllerSingletonBlocker = g;