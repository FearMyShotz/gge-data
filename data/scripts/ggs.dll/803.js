Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./31.js");
var s = require("./5.js");
var r = require("./8.js");
var o = require("./9.js");
var l = require("./4.js");
var u = function (e) {
  function BasicLoginJsonCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicLoginJsonCommand, e);
  BasicLoginJsonCommand.prototype.execute = function (e = null) {
    if (s.EnvGlobalsHandler.globals.pln !== "" && s.EnvGlobalsHandler.globals.sig !== "") {
      e.PLN = s.EnvGlobalsHandler.globals.pln;
      e.KEY = s.EnvGlobalsHandler.globals.sig;
      e.connectTime = l.BasicModel.smartfoxClient.connectionTime;
      e.ping = l.BasicModel.smartfoxClient.roundTripTime;
      e.referrer = s.EnvGlobalsHandler.globals.cleanReferrer;
      e.networkID = s.EnvGlobalsHandler.globals.networkId;
      l.BasicModel.smartfoxClient.sendMessage(o.BasicSmartfoxConstants.C2S_LOGIN_SOCIAL, [JSON.stringify(e)]);
    } else {
      e.name = l.BasicModel.userData.userName;
      e.pw = l.BasicModel.userData.loginPwd;
      e.lang = a.GGSCountryController.instance.currentCountry.ggsLanguageCode;
      e.did = s.EnvGlobalsHandler.globals.distributorId;
      e.connectTime = l.BasicModel.smartfoxClient.connectionTime;
      e.ping = l.BasicModel.smartfoxClient.roundTripTime;
      e.accountId = s.EnvGlobalsHandler.globals.accountId;
      r.BasicController.getInstance().sendServerMessageAndWait(o.BasicSmartfoxConstants.C2S_LOGIN, [JSON.stringify(e)], o.BasicSmartfoxConstants.C2S_LOGIN);
    }
  };
  return BasicLoginJsonCommand;
}(require("./6.js").SimpleCommand);
exports.BasicLoginJsonCommand = u;