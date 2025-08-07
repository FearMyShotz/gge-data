Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = function (e) {
  function TutorialTrackGameJoinedCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialTrackGameJoinedCommand, e);
  TutorialTrackGameJoinedCommand.prototype.internalExecute = function () {
    this.trackStep(o.ClientFunnelGameStates.GAME_JOINED, false);
    this.trackStep("tutorial_started");
    a.ClientFunnelTrackingController.getInstance().trackState(o.ClientFunnelGameStates.TUTORIAL_START);
    this.finishStep();
  };
  return TutorialTrackGameJoinedCommand;
}(require("./252.js").TutorialBasicActionCommand);
exports.TutorialTrackGameJoinedCommand = r;
s.classImplementsInterfaces(r, "ISimpleCommand");