Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function TutorialFinishedAttackRobberBaronCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialFinishedAttackRobberBaronCommand, e);
  TutorialFinishedAttackRobberBaronCommand.prototype.onQuestConfirm = function () {
    this.clearBlockers();
    if (o.BasicDialogHandler.getInstance().isDialogRegistered(l.CastleLevelUpDialog)) {
      this.tutorialController.waitForExternalDialogShow(l.CastleLevelUpDialog, this.bindFunction(this.onLevelDialogOpened));
    } else if (r.CastleLayoutManager.getInstance().isDialogVisibleByName(l.CastleLevelUpDialog)) {
      this.onLevelDialogOpened();
    } else {
      this.finishStep();
    }
  };
  TutorialFinishedAttackRobberBaronCommand.prototype.onLevelDialogOpened = function () {
    this.tutorialController.waitForExternalDialogHide(l.CastleLevelUpDialog, this.bindFunction(this.onLevelUpConfirmed));
  };
  TutorialFinishedAttackRobberBaronCommand.prototype.onLevelUpConfirmed = function () {
    this.trackStep("s_080_150_levelUp_5_confirmed");
    this.finishStep();
  };
  TutorialFinishedAttackRobberBaronCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_080_140_quest_finished_confirmed";
  };
  return TutorialFinishedAttackRobberBaronCommand;
}(require("./478.js").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedAttackRobberBaronCommand = s;
var r = require("./17.js");
var l = require("./814.js");
a.classImplementsInterfaces(s, "ISimpleCommand");