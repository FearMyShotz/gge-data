Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmDecoAndPublicOrderCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmDecoAndPublicOrderCommand, e);
  TutorialConfirmDecoAndPublicOrderCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "s_070_020_dialog_confirmed";
  };
  return TutorialConfirmDecoAndPublicOrderCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmDecoAndPublicOrderCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");