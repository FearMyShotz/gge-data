Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./6.js");
var u = require("./803.js");
var d = require("./15.js");
var p = require("./4.js");
var h = require("./1057.js");
var g = createjs.Point;
var C = function (e) {
  function TutorialBasicActionCommand() {
    var t = this;
    t._triggeredByQuestId = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(TutorialBasicActionCommand, e);
  TutorialBasicActionCommand.prototype.onConnectionLost = function (e) {
    p.CastleModel.smartfoxClient.removeEventListener(s.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost), false);
    this.clearBlockers();
  };
  TutorialBasicActionCommand.prototype.execute = function (e = null) {
    p.CastleModel.smartfoxClient.addEventListener(s.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost), false, -1);
    this._tutorialStepVO = e[0];
    this._triggeredByQuestId = c.int(e[1]);
    if (this.actionConditionValid()) {
      this.internalExecute();
    } else {
      this.finishStep();
    }
  };
  TutorialBasicActionCommand.prototype.internalExecute = function () {};
  TutorialBasicActionCommand.prototype.actionConditionValid = function () {
    return true;
  };
  TutorialBasicActionCommand.prototype.finishStep = function () {
    p.CastleModel.smartfoxClient.removeEventListener(s.SmartfoxEvent.CONNECTION_LOST, this.bindFunction(this.onConnectionLost), false);
    this.tutorialController.finishStep();
    this.controller.dispatchEvent(new u.CastleTutorialEvent(u.CastleTutorialEvent.STEP_FINISHED, [this._tutorialStepVO.id]));
  };
  Object.defineProperty(TutorialBasicActionCommand.prototype, "controller", {
    get: function () {
      return d.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "layoutManager", {
    get: function () {
      return _.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  TutorialBasicActionCommand.prototype.getPanelDisp = function (e) {
    if (e == b.CastleActionPanel) {
      return this.layoutManager.getPanel(e).actionPanel;
    } else {
      return this.layoutManager.getPanel(e).disp;
    }
  };
  TutorialBasicActionCommand.prototype.getDialogDisp = function (e) {
    return this.layoutManager.getDialog(e).disp;
  };
  TutorialBasicActionCommand.prototype.getActionPanelButton = function (e) {
    return this.layoutManager.getPanel(b.CastleActionPanel).buttons.getAnyButtonByClass(e);
  };
  TutorialBasicActionCommand.prototype.getActionPanelButtonDisp = function (e) {
    var t = this.getActionPanelButton(e);
    if (t) {
      return t.buttonMc;
    } else {
      return null;
    }
  };
  TutorialBasicActionCommand.prototype.replaceActionPanelButtonInBlocker = function (e) {
    var t = this.getActionPanelButton(e);
    this.blocker.replace(t.disp);
    this.blocker.add(t.buttonMc);
  };
  Object.defineProperty(TutorialBasicActionCommand.prototype, "arrows", {
    get: function () {
      return f.CastleTutorialArrowController.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "blocker", {
    get: function () {
      return O.CastleTutorialClickBlocker.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "filter", {
    get: function () {
      return y.CastleTutorialDialogFilter.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "spotlight", {
    get: function () {
      return m.CastleTutorialSpotlight.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TutorialBasicActionCommand.prototype, "tutorialController", {
    get: function () {
      return E.CastleTutorialController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  TutorialBasicActionCommand.prototype.clearBlockers = function () {
    p.CastleModel.tutorialData.clearBlockers();
  };
  TutorialBasicActionCommand.prototype.tutorialData = function () {
    return p.CastleModel.tutorialData;
  };
  TutorialBasicActionCommand.prototype.trackStep = function (e, t = true) {
    if (e != "") {
      r.debug("[TRACKING] " + e);
      o.ClientFunnelTrackingController.getInstance().trackState(e);
      if (t) {
        o.ClientFunnelTrackingController.getInstance().trackState(e);
      }
    }
  };
  TutorialBasicActionCommand.prototype.finishTriggerQuest = function () {
    if (this._triggeredByQuestId > -1) {
      p.CastleModel.smartfoxClient.sendCommandVO(new h.C2SQuestStarterClickVO(this._triggeredByQuestId));
    }
  };
  TutorialBasicActionCommand.__initialize_static_members = function () {
    TutorialBasicActionCommand.TUT_ARROW_ACTION_PANEL_OFFSET = new g(15, 5);
    TutorialBasicActionCommand.TUT_ARROW_DUNGEON_OFFSET = new g(30, 30);
  };
  TutorialBasicActionCommand.WODID = "wodID";
  TutorialBasicActionCommand.AMOUNT = "unitAmount";
  return TutorialBasicActionCommand;
}(a.SimpleCommand);
exports.TutorialBasicActionCommand = C;
var _ = require("./17.js");
var m = require("./471.js");
var f = require("./300.js");
var O = require("./433.js");
var E = require("./826.js");
var y = require("./326.js");
var b = require("./558.js");
l.classImplementsInterfaces(C, "ISimpleCommand");
C.__initialize_static_members();