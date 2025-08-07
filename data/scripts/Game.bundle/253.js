Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialBasicQuestStarterActionCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialBasicQuestStarterActionCommand, e);
  TutorialBasicQuestStarterActionCommand.prototype.getDialogClass = function () {
    return s.CastleStartQuestDialog;
  };
  return TutorialBasicQuestStarterActionCommand;
}(require("./1973.js").TutorialBasicQuestActionCommand);
exports.TutorialBasicQuestStarterActionCommand = a;
var s = require("./461.js");
o.classImplementsInterfaces(a, "ISimpleCommand");