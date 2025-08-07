Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmBuildToolsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmBuildToolsCommand, e);
  TutorialConfirmBuildToolsCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_090_020_dialog_confirmed";
  };
  return TutorialConfirmBuildToolsCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmBuildToolsCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");