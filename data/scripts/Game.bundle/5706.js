Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialFinishedUpgradeBuildingActionCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialFinishedUpgradeBuildingActionCommand, e);
  TutorialFinishedUpgradeBuildingActionCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "020_090_quest_finished_confirmed";
  };
  return TutorialFinishedUpgradeBuildingActionCommand;
}(require("./478.js").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedUpgradeBuildingActionCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");