Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./4.js");
var l = function (e) {
  function BasicLoginCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicLoginCommand, e);
  BasicLoginCommand.prototype.execute = function (e = null) {
    s.BasicController.getInstance().onLogIn();
    if (a.EnvGlobalsHandler.globals.pln !== "" && a.EnvGlobalsHandler.globals.sig !== "") {
      o.BasicModel.smartfoxClient.sendMessage(r.BasicSmartfoxConstants.C2S_LOGIN_SOCIAL, [a.EnvGlobalsHandler.globals.pln, a.EnvGlobalsHandler.globals.sig, o.BasicModel.smartfoxClient.connectionTime, o.BasicModel.smartfoxClient.roundTripTime, a.EnvGlobalsHandler.globals.cleanReferrer, a.EnvGlobalsHandler.globals.networkId, a.EnvGlobalsHandler.globals.accountId, "", "", a.EnvGlobalsHandler.globals.urlVariables.loginSource]);
    } else {
      s.BasicController.getInstance().sendServerMessageAndWait(r.BasicSmartfoxConstants.C2S_LOGIN, [o.BasicModel.userData.userName, o.BasicModel.userData.loginPwd, o.BasicModel.smartfoxClient.connectionTime.toString(), o.BasicModel.smartfoxClient.roundTripTime.toString(), a.EnvGlobalsHandler.globals.accountId.toString()], r.BasicSmartfoxConstants.C2S_LOGIN);
    }
  };
  return BasicLoginCommand;
}(require("./6.js").SimpleCommand);
exports.BasicLoginCommand = l;