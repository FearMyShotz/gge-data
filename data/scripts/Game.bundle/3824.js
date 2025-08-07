Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./4.js");
var l = function (e) {
  function SetAddPipesAtEndOfTextCommand(t = false) {
    return e.call(this, t) || this;
  }
  n.__extends(SetAddPipesAtEndOfTextCommand, e);
  SetAddPipesAtEndOfTextCommand.prototype.execute = function (t = null) {
    e.prototype.execute.call(this, t);
    var i = r.CastleModel.localData.readAddPipesOnEndOfText();
    r.CastleModel.languageData.addPipeToEndOfString = i;
    s.Localization.usePipe = i;
  };
  return SetAddPipesAtEndOfTextCommand;
}(o.SimpleCommand);
exports.SetAddPipesAtEndOfTextCommand = l;
a.classImplementsInterfaces(l, "ISimpleCommand");