Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = function (e) {
  function TutorialConfirmMainTutorialFinishedCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmMainTutorialFinishedCommand, e);
  TutorialConfirmMainTutorialFinishedCommand.prototype.internalExecute = function () {
    e.prototype.internalExecute.call(this);
    a.ClientFunnelTrackingController.getInstance().trackState(o.ClientFunnelGameStates.TUTORIAL_END);
  };
  TutorialConfirmMainTutorialFinishedCommand.prototype.getTrackOnQuestConfirmID = function () {
    return "050_020_tutorial_finished";
  };
  return TutorialConfirmMainTutorialFinishedCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmMainTutorialFinishedCommand = r;
s.classImplementsInterfaces(r, "ISimpleCommand");