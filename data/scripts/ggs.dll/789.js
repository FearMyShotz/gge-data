Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./73.js");
var s = require("./6.js");
var r = require("./8.js");
var o = require("./2.js");
var l = require("./29.js");
var u = o.getLogger(l.CORE_LOGGER);
var c = function (e) {
  function BasicExtensionResponseCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicExtensionResponseCommand, e);
  BasicExtensionResponseCommand.prototype.execute = function (e = null) {
    var t = e;
    var n = Number(t.params[0]);
    u.debug("BasicExtensionResponseCommand: " + t.cmdId + " params: " + t.params);
    if (a.DictionaryUtil.containsKey(r.BasicController.commandDict, t.cmdId)) {
      r.BasicController.commandDict.get(t.cmdId).executeCommand(n, t.params);
      r.BasicController.getInstance().serverMessageArrived(t.cmdId);
    } else {
      u.warn("UNKNOWN SERVER COMMAND: " + t.cmdId);
    }
  };
  return BasicExtensionResponseCommand;
}(s.SimpleCommand);
exports.BasicExtensionResponseCommand = c;