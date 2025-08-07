Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmRecruitUnitsCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmRecruitUnitsCommand, e);
  TutorialConfirmRecruitUnitsCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_060_020_dialog_confirmed";
  };
  return TutorialConfirmRecruitUnitsCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmRecruitUnitsCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");