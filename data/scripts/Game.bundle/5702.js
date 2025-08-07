Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialFinishedDecoAndPublicOrderCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialFinishedDecoAndPublicOrderCommand, e);
  TutorialFinishedDecoAndPublicOrderCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_070_010_quest_finished_confirmed";
  };
  return TutorialFinishedDecoAndPublicOrderCommand;
}(require("./477.js").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedDecoAndPublicOrderCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");