Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = function (e) {
  function OpenJudgementSpotDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenJudgementSpotDialogCommand, e);
  OpenJudgementSpotDialogCommand.prototype.execute = function (e = null) {
    r.CastleDialogHandler.getInstance().registerDefaultDialogs(l.CastleJudgementChooseOptionDialog);
  };
  return OpenJudgementSpotDialogCommand;
}(o.SimpleCommand);
exports.OpenJudgementSpotDialogCommand = s;
var r = require("./9.js");
var l = require("./3577.js");
a.classImplementsInterfaces(s, "ISimpleCommand");