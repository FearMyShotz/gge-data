Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialConfirmChooseHeroCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialConfirmChooseHeroCommand, e);
  TutorialConfirmChooseHeroCommand.prototype.getTrackOnQuestConfirmID = function () {
    return null;
  };
  return TutorialConfirmChooseHeroCommand;
}(require("./253.js").TutorialBasicQuestStarterActionCommand);
exports.TutorialConfirmChooseHeroCommand = a;
o.classImplementsInterfaces(a, "ISimpleCommand");