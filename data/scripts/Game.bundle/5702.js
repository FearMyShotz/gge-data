Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialFinishedBuildDefenseWorkshopCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialFinishedBuildDefenseWorkshopCommand, e);
  TutorialFinishedBuildDefenseWorkshopCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_090_010_quest_finished_confirmed";
  };
  return TutorialFinishedBuildDefenseWorkshopCommand;
}(require("./478.js").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedBuildDefenseWorkshopCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");