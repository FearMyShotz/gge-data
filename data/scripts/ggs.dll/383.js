Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./5.js");
var s = require("./8.js");
var r = require("./4.js");
var o = require("./25.js");
var l = require("./12.js");
var u = require("./6.js");
var c = require("./37.js");
var _ = function (e) {
  function ChooseLoginMethodCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(ChooseLoginMethodCommand, e);
  ChooseLoginMethodCommand.prototype.execute = function (e = null) {
    if (!r.BasicModel.smartfoxClient.userForcedDisconnect) {
      var t = undefined;
      var n = undefined;
      if (this.isAutoLoginInSocialNetworkPossible()) {
        n = "With social login account.";
        t = true;
      } else if (this.isLoginPossibleWithCookieAccount()) {
        n = "With account stored in SharedObject.";
        t = true;
      } else if (this.alternativeLoginPossible()) {
        return;
      }
      if (!this.isAgeGateValid()) {
        var i = undefined;
        i = t ? "Auto login would have been possible, but age gate validation is not complete." : "AgeGate validation is not complete. No login possible.";
        c.info(i);
        r.BasicModel.ageGateData.autoLoginTryFailed = t;
        t = false;
      }
      if (t) {
        c.info("Do autologin: " + n);
        this.login();
        return;
      }
    }
    c.info("No auto login possible, show startscreen.");
    this.handleAutoLoginImpossible();
  };
  ChooseLoginMethodCommand.prototype.isAgeGateValid = function () {
    return !r.BasicModel.ageGateData.isAgeGateActive || !!r.BasicModel.ageGateData.validationSucceeded;
  };
  ChooseLoginMethodCommand.prototype.handleAutoLoginImpossible = function () {
    o.BasicLayoutManager.getInstance().state = o.BasicLayoutManager.STATE_STARTSCREEN;
  };
  ChooseLoginMethodCommand.prototype.alternativeLoginPossible = function () {
    return false;
  };
  ChooseLoginMethodCommand.prototype.isAutoLoginInSocialNetworkPossible = function () {
    var e = r.BasicModel.socialData.displayNameExistingPlayer;
    if (e && e != "") {
      var t = r.BasicModel.instanceProxy.instanceMap.length;
      var n = r.BasicModel.instanceProxy.instanceMap[0].countries.length;
      return t != 1 || !(n > 1);
    }
    return false;
  };
  ChooseLoginMethodCommand.prototype.isLoginPossibleWithCookieAccount = function () {
    var e = r.BasicModel.networkCookie.username;
    var t = r.BasicModel.networkCookie.loginToken;
    return !!this.hasAccountSavedInCookie(e, t) && (r.BasicModel.userData.userName = e, r.BasicModel.userData.loginToken = t, true);
  };
  ChooseLoginMethodCommand.prototype.hasAccountSavedInCookie = function (e, t) {
    return e && e !== "" && t && t !== "";
  };
  ChooseLoginMethodCommand.prototype.login = function () {
    var e;
    e = a.EnvGlobalsHandler.globals.isSSO && !a.EnvGlobalsHandler.globals.useLegacySocialRegistration ? s.BasicController.COMMAND_SOCIAL_LOGIN : s.BasicController.COMMAND_LOGIN;
    l.CommandController.instance.executeCommand(e);
  };
  return ChooseLoginMethodCommand;
}(u.SimpleCommand);
exports.ChooseLoginMethodCommand = _;