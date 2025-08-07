Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./1.js");
var p = function (e) {
  function CastleSocialLoginCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleSocialLoginCommand, e);
  CastleSocialLoginCommand.prototype.execute = function (e = null) {
    o.BasicController.getInstance().onLogIn();
    var t = [];
    t[0] = r.EnvGlobalsHandler.globals.pln;
    t[1] = r.EnvGlobalsHandler.globals.sig;
    t[2] = a.BasicModel.smartfoxClient.connectionTime;
    t[3] = a.BasicModel.smartfoxClient.roundTripTime;
    t[4] = r.EnvGlobalsHandler.globals.referrer;
    t[5] = r.EnvGlobalsHandler.globals.networkId;
    t[6] = r.EnvGlobalsHandler.globals.accountId;
    t[7] = r.EnvGlobalsHandler.globals.suk;
    t[8] = c.TimezoneUtil.getTrackingTimezone();
    t[9] = a.BasicModel.socialData.displayNameExistingPlayer;
    t[10] = r.EnvGlobalsHandler.globals.urlVariables.websiteId;
    t[11] = r.EnvGlobalsHandler.globals.urlVariables.loginSource;
    t[12] = r.EnvGlobalsHandler.globals.urlVariables.urlParams.get("gci") || "";
    u.info("Social login, request parameters: " + t);
    a.BasicModel.smartfoxClient.sendMessage(s.BasicSmartfoxConstants.C2S_NEW_LOGIN_SOCIAL, t);
  };
  return CastleSocialLoginCommand;
}(l.SimpleCommand);
exports.CastleSocialLoginCommand = p;
d.classImplementsInterfaces(p, "ISimpleCommand");