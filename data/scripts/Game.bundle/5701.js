Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialFinishedBuildWorkshopCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialFinishedBuildWorkshopCommand, e);
  TutorialFinishedBuildWorkshopCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_080_010_quest_finished_confirmed";
  };
  return TutorialFinishedBuildWorkshopCommand;
}(require("./477.js").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedBuildWorkshopCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");