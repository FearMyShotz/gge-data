Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmUpgradeBuildingCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmUpgradeBuildingCommand, e);
  TutorialConfirmUpgradeBuildingCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "020_010_dialog_confirmed";
  };
  return TutorialConfirmUpgradeBuildingCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmUpgradeBuildingCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");