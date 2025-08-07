Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./58.js");
var r = require("./4.js");
var l = function (e) {
  function TutorialOpenQuestbookCommand() {
    var t = this;
    t.timeoutId = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(TutorialOpenQuestbookCommand, e);
  TutorialOpenQuestbookCommand.prototype.internalExecute = function () {
    this.triggerQuestBookHint();
  };
  TutorialOpenQuestbookCommand.prototype.triggerQuestBookHint = function () {
    var e = this;
    if (r.CastleModel.userData.level >= s.ClientConstLevelRestrictions.TUTORIAL_END) {
      this.finishStep();
    } else if (!(this.timeoutId > -1)) {
      this.timeoutId = window.setInterval(function () {
        if (!O.CastleDialogHandler.getInstance().isThereADialog) {
          window.clearInterval(e.timeoutId);
          e.timeoutId = -1;
          if (e.layoutManager.isDialogVisibleByName(d.CastleChestDialog)) {
            m.CastleTutorialController.getInstance().waitForDialogHide(d.CastleChestDialog, e.bindFunction(e.hintAtQuestBook));
          } else if (e.layoutManager.isDialogVisibleByName(p.CastlePrivateOfferDecorationDialog)) {
            m.CastleTutorialController.getInstance().waitForDialogHide(p.CastlePrivateOfferDecorationDialog, e.bindFunction(e.hintAtQuestBook));
          } else {
            e.hintAtQuestBook();
          }
        }
      }, 250);
    }
  };
  TutorialOpenQuestbookCommand.prototype.hintAtQuestBook = function () {
    var e = this;
    try {
      var t = this.layoutManager.getPanel(g.CastleQuestStartPanel).disp.btn_questBook;
      f.CastleTutorialDialogFilter.instance.replace(h.CastleQuestDialog);
      f.CastleTutorialDialogFilter.instance.add(p.CastlePrivateOfferDecorationDialog);
      f.CastleTutorialDialogFilter.instance.add(d.CastleChestDialog);
      f.CastleTutorialDialogFilter.instance.add(u.CastleYesNoOrangeWarningDialog);
      C.CastleTutorialArrowController.instance.replace(t);
      c.CastleTutorialSpotlight.instance.replace(t);
      _.CastleTutorialClickBlocker.instance.replace(t);
      m.CastleTutorialController.getInstance().waitForDialogShow(h.CastleQuestDialog, this.bindFunction(this.removeQuestBookHintTimeout));
      m.CastleTutorialController.getInstance().waitForDialogShow(d.CastleChestDialog, function () {
        f.CastleTutorialDialogFilter.instance.replace(d.CastleChestDialog);
        C.CastleTutorialArrowController.instance.clear();
        c.CastleTutorialSpotlight.instance.clear();
        _.CastleTutorialClickBlocker.instance.clear();
        m.CastleTutorialController.getInstance().waitForDialogHide(d.CastleChestDialog, e.bindFunction(e.hintAtQuestBook));
      });
      m.CastleTutorialController.getInstance().waitForDialogShow(p.CastlePrivateOfferDecorationDialog, function () {
        f.CastleTutorialDialogFilter.instance.replace(p.CastlePrivateOfferDecorationDialog);
        f.CastleTutorialDialogFilter.instance.add(u.CastleYesNoOrangeWarningDialog);
        C.CastleTutorialArrowController.instance.clear();
        c.CastleTutorialSpotlight.instance.clear();
        _.CastleTutorialClickBlocker.instance.clear();
        m.CastleTutorialController.getInstance().waitForDialogHide(p.CastlePrivateOfferDecorationDialog, e.bindFunction(e.hintAtQuestBook));
      });
    } catch (e) {
      o.debug(e.stack);
    }
  };
  TutorialOpenQuestbookCommand.prototype.removeQuestBookHintTimeout = function () {
    if (this.timeoutId > -1) {
      window.clearInterval(this.timeoutId);
      this.timeoutId = -1;
    }
    this.finishStep();
  };
  TutorialOpenQuestbookCommand.prototype.finishStep = function () {
    e.prototype.finishStep.call(this);
    this.finishTriggerQuest();
  };
  return TutorialOpenQuestbookCommand;
}(require("./252.js").TutorialBasicActionCommand);
exports.TutorialOpenQuestbookCommand = l;
var c = require("./472.js");
var u = require("./1081.js");
var d = require("./1084.js");
var p = require("./1747.js");
var h = require("./654.js");
var g = require("./462.js");
var C = require("./300.js");
var _ = require("./433.js");
var m = require("./828.js");
var f = require("./326.js");
var O = require("./9.js");
a.classImplementsInterfaces(l, "ISimpleCommand");