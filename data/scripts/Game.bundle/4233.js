Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./6.js");
var u = function (e) {
  function CastleExtensionResponseCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleExtensionResponseCommand, e);
  CastleExtensionResponseCommand.prototype.execute = function (e = null) {
    var t;
    var i = e;
    var n = c.int(i.params[0]);
    if (s.DictionaryUtil.containsKey(a.BasicController.commandDict, i.cmdId)) {
      t = a.BasicController.commandDict.get(i.cmdId);
      o.EnvGlobalsHandler.globals.lastUsedCommandName = i.cmdId;
      t.executeCommand(n, i.params);
      a.BasicController.getInstance().serverMessageArrived(i.cmdId);
    } else {
      console.warn("UNKNOWN COMMAND " + i.cmdId);
    }
  };
  return CastleExtensionResponseCommand;
}(r.SimpleCommand);
exports.CastleExtensionResponseCommand = u;
l.classImplementsInterfaces(u, "ISimpleCommand");