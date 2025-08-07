Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = function (e) {
  function HandleDialogInfoCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HandleDialogInfoCommand, e);
  HandleDialogInfoCommand.prototype.execute = function (t = null) {
    e.prototype.execute.call(this);
    if (t) {
      if (!r.instanceOfClass(t, "DialogInfoVO")) {
        throw new Error("Argument must be a DialogInfoVO!");
      }
      var i = t;
      if (i.dialogClass) {
        c.CastleDialogHandler.getInstance().registerDefaultDialogs(i.dialogClass, i.properties);
      } else if (i.command) {
        a.CommandController.instance.executeCommand(i.command, i.parameter);
      }
    }
  };
  return HandleDialogInfoCommand;
}(o.BasicClientCommand);
exports.HandleDialogInfoCommand = l;
var c = require("./9.js");
s.classImplementsInterfaces(l, "ISimpleCommand");