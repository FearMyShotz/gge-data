Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./805.js");
var s = require("./252.js");
var r = createjs.Point;
var l = function (e) {
  function TutorialStartFromQuestBookActionCommand() {
    var t = this;
    t._questGiverID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(TutorialStartFromQuestBookActionCommand, e);
  TutorialStartFromQuestBookActionCommand.prototype.internalExecute = function () {
    this.filter.replace(c.CastleQuestDialog);
    if (this.layoutManager.tutorialPanel) {
      this.layoutManager.tutorialPanel.showWithText("tut_clickOnQuests_copy", this._questGiverID, o.MobileHelper.isScreenTooSmall() && o.MobileHelper.isLandscape() ? d.CastleTutorialPanel.POS_BOTTOM_RIGHT : d.CastleTutorialPanel.POS_TOP_RIGHT);
    }
    this.showArrowOnQuestBookButton();
    this.tutorialController.waitForExternalDialogShow(c.CastleQuestDialog, this.bindFunction(this.showQuestArrowInQuestBook));
  };
  TutorialStartFromQuestBookActionCommand.prototype.showArrowOnQuestBookButton = function () {
    var e = this.layoutManager.getPanel(u.CastleQuestStartPanel);
    this.arrows.replace(e.disp.btn_questBook);
    this.blocker.replace(e.disp.btn_questBook);
  };
  TutorialStartFromQuestBookActionCommand.prototype.showQuestArrowInQuestBook = function () {
    this.trackStep(this.getQuestBookOpenedTrackingID());
    this.layoutManager.tutorialPanel.showWithText("tut_selectQuest_copy", this._questGiverID, o.MobileHelper.isScreenTooSmall() && o.MobileHelper.isLandscape() ? d.CastleTutorialPanel.POS_BOTTOM_RIGHT : d.CastleTutorialPanel.POS_TOP_RIGHT);
    var e = this.layoutManager.getDialog(c.CastleQuestDialog);
    this.arrows.replace(e.tutorialRecommendedQuest.disp.headerMC, false, true, 1, new r(0, 35));
    this.blocker.replace(e.tutorialRecommendedQuest.disp.headerMC);
    this.tutorialController.registerComplexListener(this.controller, a.CastleTutorialEvent.QUEST_INFO_SHOWN, this.bindFunction(this.onShowQuestInfo));
  };
  TutorialStartFromQuestBookActionCommand.prototype.onShowQuestInfo = function (e) {
    this.tutorialController.removeComplexListener(this.controller, a.CastleTutorialEvent.QUEST_INFO_SHOWN, this.bindFunction(this.onShowQuestInfo));
    this.trackStep(this.getQuestInfoOpenedTrackingID());
    this.layoutManager.tutorialPanel.hide();
    this.handleUntilPlayerClickedOnShowMe();
  };
  TutorialStartFromQuestBookActionCommand.prototype.handleUntilPlayerClickedOnShowMe = function () {
    var e = this.getDialogDisp(c.CastleQuestDialog);
    this.arrows.replace(e.mc_questInfo.condition0.btn_showMe, true, true, 1, new r(15, -8));
    this.blocker.replace(e.mc_questInfo.condition0.btn_showMe);
  };
  TutorialStartFromQuestBookActionCommand.prototype.getQuestInfoOpenedTrackingID = function () {
    return "please override the getQuestInfoOpenedTrackingID method";
  };
  TutorialStartFromQuestBookActionCommand.prototype.getQuestBookOpenedTrackingID = function () {
    return "please override the getQuestBookOpenedTrackingID method";
  };
  return TutorialStartFromQuestBookActionCommand;
}(s.TutorialBasicActionCommand);
exports.TutorialStartFromQuestBookActionCommand = l;
var c = require("./654.js");
var u = require("./462.js");
var d = require("./677.js");
o.classImplementsInterfaces(l, "ISimpleCommand");