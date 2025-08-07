Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./1.js");
var u = require("./4.js");
var d = require("./29.js");
var p = function (e) {
  function CastleNetworkUpdateCommand() {
    return e.call(this) || this;
  }
  n.__extends(CastleNetworkUpdateCommand, e);
  CastleNetworkUpdateCommand.prototype.execute = function (e = null) {
    if (this.env.useAutoLogin && u.CastleModel.localData.hasInstanceId) {
      r.ClientFunnelTrackingController.getInstance().trackState(s.ClientFunnelGameStates.LOGIN_COOKIE_READ);
      l.CommandController.instance.executeCommand(o.BasicController.COMMAND_LOGIN);
      l.CommandController.instance.executeCommand(d.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
    }
  };
  return CastleNetworkUpdateCommand;
}(a.BasicNetworkUpdateCommand);
exports.CastleNetworkUpdateCommand = p;
c.classImplementsInterfaces(p, "ISimpleCommand");