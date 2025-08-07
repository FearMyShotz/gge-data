Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = function (e) {
  function TutorialChooseHeroCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TutorialChooseHeroCommand, e);
  TutorialChooseHeroCommand.prototype.internalExecute = function () {
    this.filter.replace(r.CastleChooseHeroDialog);
    this.tutorialController.waitForExternalDialogShow(r.CastleChooseHeroDialog, this.bindFunction(this.onDialog));
    s.CastleDialogHandler.getInstance().registerDefaultDialogs(r.CastleChooseHeroDialog);
  };
  TutorialChooseHeroCommand.prototype.onDialog = function () {
    this.tutorialController.waitForDialogHide(r.CastleChooseHeroDialog, this.bindFunction(this.finishStep));
  };
  return TutorialChooseHeroCommand;
}(require("./252.js").TutorialBasicActionCommand);
exports.TutorialChooseHeroCommand = a;
var s = require("./9.js");
var r = require("./1292.js");
o.classImplementsInterfaces(a, "ISimpleCommand");