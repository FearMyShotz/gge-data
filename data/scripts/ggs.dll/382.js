Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./8.js");
var r = require("./156.js");
var o = require("./12.js");
var l = require("./6.js");
var u = require("./2.js").getLogger("BasicTrackRegistrationDataCommand");
var c = function (e) {
  function BasicTrackRegistrationDataCommand() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.wasExecuted = false;
    return t;
  }
  i.__extends(BasicTrackRegistrationDataCommand, e);
  BasicTrackRegistrationDataCommand.prototype.execute = function (e = null) {
    if (!this.wasExecuted) {
      u.warn("FIRST INSTANCE TRACKING WAS RETIRED --  REPLACE TRACKING WITH CLIENTFUNNEL?");
      if (this.env.doUserTunnelTracking) {
        r.ConnectionTrackingUtil.instance.measureRTT(r.ConnectionTrackingUtil.SECOND_CONNECTION_EVENT_DELAY);
        r.ConnectionTrackingUtil.instance.measureRTT(r.ConnectionTrackingUtil.THIRD_CONNECTION_EVENT_DELAY);
      }
      o.CommandController.instance.executeCommand(s.BasicController.COMMAND_TRACK_DESKTOP_DEVICE_INFORMATION_EVENT);
      o.CommandController.instance.executeCommand(s.BasicController.COMMAND_TRACK_BROWSER_STATE_EVENT);
      this.wasExecuted = true;
    }
  };
  Object.defineProperty(BasicTrackRegistrationDataCommand.prototype, "env", {
    get: function () {
      return a.EnvGlobalsHandler.globals;
    },
    enumerable: true,
    configurable: true
  });
  return BasicTrackRegistrationDataCommand;
}(l.SimpleCommand);
exports.BasicTrackRegistrationDataCommand = c;