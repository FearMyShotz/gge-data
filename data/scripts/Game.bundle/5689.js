Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmEquipDefenseCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmEquipDefenseCommand, e);
  TutorialConfirmEquipDefenseCommand.prototype.finishStep = function () {
    e.prototype.finishStep.call(this);
  };
  TutorialConfirmEquipDefenseCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_090_070_dialog_confirmed";
  };
  return TutorialConfirmEquipDefenseCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmEquipDefenseCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");