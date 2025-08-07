Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./600.js");
var c = require("./15.js");
var u = require("./4.js");
var d = function (e) {
  function CastleFacebookSwitchToCachedAccountCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleFacebookSwitchToCachedAccountCommand, e);
  CastleFacebookSwitchToCachedAccountCommand.prototype.execute = function (e = null) {
    a.CommandController.instance.executeCommand(o.BasicController.COMMAND_LOGOUT);
    a.CommandController.instance.executeCommand(o.BasicController.COMMAND_CONNECT_CLIENT);
    c.CastleBasicController.getInstance().addEventListener(l.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onGetFacebookStatus));
    p.CastleFacebookModule.checkLoginStatus();
  };
  CastleFacebookSwitchToCachedAccountCommand.prototype.onGetFacebookStatus = function (e) {
    c.CastleBasicController.getInstance().removeEventListener(l.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onGetFacebookStatus));
    u.CastleModel.localData.saveFacebookID(e.authResponse.userID);
    a.CommandController.instance.executeCommand(o.BasicController.COMMAND_LOGIN);
    a.CommandController.instance.executeCommand(h.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
  };
  return CastleFacebookSwitchToCachedAccountCommand;
}(s.SimpleCommand);
exports.CastleFacebookSwitchToCachedAccountCommand = d;
var p = require("./193.js");
var h = require("./29.js");
r.classImplementsInterfaces(d, "ISimpleCommand");