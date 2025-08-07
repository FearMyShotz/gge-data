Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialFinishedExpandCastleCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialFinishedExpandCastleCommand, e);
  TutorialFinishedExpandCastleCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "030_080_quest_finished_confirmed";
  };
  return TutorialFinishedExpandCastleCommand;
}(require("./478.js").TutorialBasicQuestFinisherActionCommand);
exports.TutorialFinishedExpandCastleCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");