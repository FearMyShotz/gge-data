Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmBuildBuildingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmBuildBuildingCommand, e);
  TutorialConfirmBuildBuildingCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "010_020_dialog_confirmed";
  };
  return TutorialConfirmBuildBuildingCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmBuildBuildingCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");