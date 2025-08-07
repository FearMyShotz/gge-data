Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./17.js");
var l = require("./5675.js");
var c = require("./5676.js");
var u = function (e) {
  function TutorialAskToSkipTutorialCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialAskToSkipTutorialCommand, e);
  TutorialAskToSkipTutorialCommand.prototype.internalExecute = function () {
    if (o.EnvGlobalsHandler.globals.isOnSpecialServer) {
      this.doSkip();
    } else {
      this.finishStep();
    }
  };
  TutorialAskToSkipTutorialCommand.prototype.doSkip = function () {
    r.CastleLayoutManager.getInstance().hideAllDialogsExcept([l.CastleAutoTutorialBlockerDialog]);
    this.layoutManager.showDialog(l.CastleAutoTutorialBlockerDialog);
    s.CastleModel.tutorialData.activateTutorial(false);
    s.CastleModel.tutorialData.clearBlockers();
    s.CastleModel.tutorialData.removeAllListeners();
    s.CastleModel.tutorialData.isSkippingTutorial = true;
    this.layoutManager.muteDialogs = true;
    s.CastleModel.smartfoxClient.sendCommandVO(new c.C2STemporaryServerTutorialSkipVO());
  };
  return TutorialAskToSkipTutorialCommand;
}(require("./252.js").TutorialBasicActionCommand);
exports.TutorialAskToSkipTutorialCommand = u;
a.classImplementsInterfaces(u, "ISimpleCommand");