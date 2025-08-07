Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./96.js");
var s = require("./380.js");
var r = require("./6.js");
var o = require("./12.js");
var l = require("./8.js");
var u = function (e) {
  function BasicSendClientLoginTrackingCommand() {
    return e.call(this, true) || this;
  }
  i.__extends(BasicSendClientLoginTrackingCommand, e);
  BasicSendClientLoginTrackingCommand.prototype.execute = function (e = null) {
    if (!e.isLocal) {
      a.ExternalInterfaceController.instance.executeJavaScriptFunction(new s.JavascriptCallOnLoginCompleteFactory());
    }
    o.CommandController.instance.executeCommand(l.BasicController.COMMAND_TRACK_BROWSER_STATE_EVENT);
  };
  return BasicSendClientLoginTrackingCommand;
}(r.SimpleCommand);
exports.BasicSendClientLoginTrackingCommand = u;