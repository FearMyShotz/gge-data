Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmFoodReductionForUnitsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmFoodReductionForUnitsCommand, e);
  TutorialConfirmFoodReductionForUnitsCommand.prototype.finishStep = function () {
    e.prototype.finishStep.call(this);
  };
  TutorialConfirmFoodReductionForUnitsCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_060_060_dialog_confirmed";
  };
  return TutorialConfirmFoodReductionForUnitsCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmFoodReductionForUnitsCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");