Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmAttackRobberBaronCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmAttackRobberBaronCommand, e);
  TutorialConfirmAttackRobberBaronCommand.prototype.finishStep = function () {
    e.prototype.finishStep.call(this);
  };
  TutorialConfirmAttackRobberBaronCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_080_050_dialog_confirmed";
  };
  return TutorialConfirmAttackRobberBaronCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmAttackRobberBaronCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");