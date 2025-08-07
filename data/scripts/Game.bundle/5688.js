Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmCollectTaxCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmCollectTaxCommand, e);
  TutorialConfirmCollectTaxCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "040_010_dialog_confirmed";
  };
  return TutorialConfirmCollectTaxCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmCollectTaxCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");