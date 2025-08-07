Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialFinishedBuildBarracksCommands() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialFinishedBuildBarracksCommands, e);
  TutorialFinishedBuildBarracksCommands.prototype.getTrackOnQuestConfirmID = function () {
    return "s_060_010_quest_finished_confirmed";
  };
  return TutorialFinishedBuildBarracksCommands;
}(require("./478.js").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedBuildBarracksCommands = a;
o.classImplementsInterfaces(a, "ISimpleCommand");