Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialBasicQuestFinisherActionCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialBasicQuestFinisherActionCommand, e);
  TutorialBasicQuestFinisherActionCommand.prototype.onQuestConfirmPre = function () {
    this.tutorialController.waitForDialogHide(this.getDialogClass(), this.bindFunction(this.onQuestConfirm));
  };
  TutorialBasicQuestFinisherActionCommand.prototype.getDialogClass = function () {
    return s.CastleQuestCompletedDialog;
  };
  return TutorialBasicQuestFinisherActionCommand;
}(require("./1973.js").TutorialBasicQuestActionCommand);
exports.TutorialBasicQuestFinisherActionCommand = a;
var s = require("./1067.js");
o.classImplementsInterfaces(a, "ISimpleCommand");