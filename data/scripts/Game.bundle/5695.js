Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmWelcomeCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmWelcomeCommand, e);
  TutorialConfirmWelcomeCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "010_010_first_click_done";
  };
  return TutorialConfirmWelcomeCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmWelcomeCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");