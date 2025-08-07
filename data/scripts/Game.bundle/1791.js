Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1790.js");
var a = require("./91.js");
var s = require("./15.js");
var r = require("./4.js");
var l = require("./17.js");
var c = require("./300.js");
var u = function (e) {
  function GeneralIntroductionGuidanceBasicCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GeneralIntroductionGuidanceBasicCommand, e);
  GeneralIntroductionGuidanceBasicCommand.prototype.execute = function (t) {
    e.prototype.execute.call(this, t);
    this._questConditionVO = t;
    this.internalExecute();
  };
  GeneralIntroductionGuidanceBasicCommand.prototype.internalExecute = function () {};
  GeneralIntroductionGuidanceBasicCommand.prototype.showGuidance = function (e, t, i = null) {
    if (!this.layoutManager.guidancePanel) {
      this.layoutManager.addGuidancePanel();
    }
    this.layoutManager.guidancePanel.showWithText(e, t, i);
  };
  GeneralIntroductionGuidanceBasicCommand.prototype.removeGuidance = function () {
    r.CastleModel.generalsIntroductionData.removeGeneralIntroductionGuidance();
  };
  GeneralIntroductionGuidanceBasicCommand.prototype.waitForExternalDialog = function (e, t) {
    if (this.layoutManager.isDialogVisibleByName(e)) {
      t();
    } else {
      r.CastleModel.generalsIntroductionData.registerListener(this.controller, a.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, function (i) {
        if (i.params[0] && i.params[0] == e) {
          t();
        }
      });
    }
  };
  GeneralIntroductionGuidanceBasicCommand.prototype.waitForExternalDialogClose = function (e, t) {
    r.CastleModel.generalsIntroductionData.registerListener(this.controller, a.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, function (i) {
      if (i.params[0] && i.params[0] == e) {
        t();
      }
    });
  };
  Object.defineProperty(GeneralIntroductionGuidanceBasicCommand.prototype, "arrows", {
    get: function () {
      return c.CastleTutorialArrowController.instance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceBasicCommand.prototype, "controller", {
    get: function () {
      return s.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralIntroductionGuidanceBasicCommand.prototype, "layoutManager", {
    get: function () {
      return l.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return GeneralIntroductionGuidanceBasicCommand;
}(o.SimpleCommand);
exports.GeneralIntroductionGuidanceBasicCommand = u;