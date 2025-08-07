Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmExpandCastleCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmExpandCastleCommand, e);
  TutorialConfirmExpandCastleCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "030_010_dialog_confirmed";
  };
  return TutorialConfirmExpandCastleCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmExpandCastleCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");