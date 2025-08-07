Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./77.js");
var s = require("./5.js");
var r = require("./8.js");
var o = require("./9.js");
var l = require("./4.js");
var u = require("./6.js");
var c = require("./37.js");
var _ = function (e) {
  function BasicSocialLoginCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicSocialLoginCommand, e);
  BasicSocialLoginCommand.prototype.execute = function (e = null) {
    r.BasicController.getInstance().onLogIn();
    var t = [];
    t[0] = s.EnvGlobalsHandler.globals.pln;
    t[1] = s.EnvGlobalsHandler.globals.sig;
    t[2] = l.BasicModel.smartfoxClient.connectionTime;
    t[3] = l.BasicModel.smartfoxClient.roundTripTime;
    t[4] = s.EnvGlobalsHandler.globals.cleanReferrer;
    t[5] = s.EnvGlobalsHandler.globals.networkId;
    t[6] = s.EnvGlobalsHandler.globals.accountId;
    t[7] = s.EnvGlobalsHandler.globals.suk;
    t[8] = a.TimezoneUtil.getTrackingTimezone();
    t[9] = l.BasicModel.socialData.displayNameExistingPlayer;
    t[10] = s.EnvGlobalsHandler.globals.urlVariables.websiteId;
    t[11] = s.EnvGlobalsHandler.globals.urlVariables.loginSource;
    t[12] = s.EnvGlobalsHandler.globals.storeId;
    t[13] = s.EnvGlobalsHandler.globals.platformId;
    c.info("Social login, request parameters: " + t);
    l.BasicModel.smartfoxClient.sendMessage(o.BasicSmartfoxConstants.C2S_NEW_LOGIN_SOCIAL, t);
  };
  return BasicSocialLoginCommand;
}(u.SimpleCommand);
exports.BasicSocialLoginCommand = _;