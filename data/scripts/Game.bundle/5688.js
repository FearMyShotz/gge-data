Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmDefenceEquippedCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmDefenceEquippedCommand, e);
  TutorialConfirmDefenceEquippedCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "tracking s_090_140_dialog_confirmed";
  };
  return TutorialConfirmDefenceEquippedCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmDefenceEquippedCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");