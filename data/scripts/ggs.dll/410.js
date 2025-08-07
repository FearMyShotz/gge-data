Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./6.js");
var s = require("./8.js");
var r = require("./4.js");
var o = require("./121.js");
var l = require("./2.js").getLogger("Connection.BasicConnectClientCommand");
var u = function (e) {
  function BasicConnectClientCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicConnectClientCommand, e);
  BasicConnectClientCommand.prototype.execute = function () {
    var e = r.BasicModel.instanceProxy.selectedInstanceVO;
    if (e) {
      if (r.BasicModel.smartfoxClient == null) {
        r.BasicModel.smartfoxClient = new o.BasicSmartfoxClient();
      }
      l.info("Connect to: " + e.instanceId, e.ip);
      s.BasicController.getInstance().connectClient(e.ip, e.port);
    } else {
      l.error("Network instance is null!");
    }
  };
  return BasicConnectClientCommand;
}(a.SimpleCommand);
exports.BasicConnectClientCommand = u;