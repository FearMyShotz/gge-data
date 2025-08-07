Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialBasicQuestActionCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialBasicQuestActionCommand, e);
  TutorialBasicQuestActionCommand.prototype.internalExecute = function () {
    this.filter.replace(this.getDialogClass());
    var e = this.getTrackOnQuestConfirmID();
    if (e) {
      this.trackStep(e);
    }
    this.onQuestConfirmPre();
  };
  TutorialBasicQuestActionCommand.prototype.onQuestConfirmPre = function () {
    this.onQuestConfirm();
  };
  TutorialBasicQuestActionCommand.prototype.onQuestConfirm = function () {
    this.finishStep();
  };
  TutorialBasicQuestActionCommand.prototype.getDialogClass = function () {
    return this.constructor;
  };
  TutorialBasicQuestActionCommand.prototype.getTrackOnQuestConfirmID = function () {
    return null;
  };
  return TutorialBasicQuestActionCommand;
}(require("./252.js").TutorialBasicActionCommand);
exports.TutorialBasicQuestActionCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");