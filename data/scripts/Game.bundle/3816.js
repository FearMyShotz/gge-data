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
var p = require("./6.js");
var h = require("./15.js");
var g = require("./432.js");
var C = require("./4.js");
var _ = function (e) {
  function CastleChooseLoginMethodCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleChooseLoginMethodCommand, e);
  CastleChooseLoginMethodCommand.prototype.execute = function (e = null) {
    var t = s.BasicModel.smartfoxClient.userForcedDisconnect;
    var i = g.CastleCheatData.cheatLoginName != null && g.CastleCheatData.cheatLoginName != "";
    var n = C.CastleModel.userData.connectToSpecialServer;
    if (i || !t || C.CastleModel.localData.getIsRedirectedWithFacebook() || n) {
      var o;
      var a;
      var r = false;
      if (this.isAutoLoginInSocialNetworkPossible()) {
        o = "*** Castle **** With social login account.";
        r = true;
        C.CastleModel.userData.persistentLogin = true;
      } else if (this.isLoginPossibleWithFacebookCookie()) {
        o = "*** Castle **** With  facebook account stored in SharedObject.";
        C.CastleModel.localData.saveIsRedirectedWithFacebook(false);
        r = true;
      } else if (this.isLoginPossibleWithCookieAccount() && !n) {
        o = "*** Castle **** With account stored in SharedObject.";
        C.CastleModel.localData.saveIsRedirectedWithFacebook(false);
        C.CastleModel.localData.saveFacebookID("");
        r = true;
        C.CastleModel.userData.persistentLogin = true;
      }
      if (!this.isAgeGateValid()) {
        a = r ? "*** Castle ****  Auto login would have been possible, but age gate validation is not complete." : "*** Castle ****  AgeGate validation is not complete. No login possible.";
        u.info(a);
        s.BasicModel.ageGateData.autoLoginTryFailed = r;
        r = false;
      }
      if (i) {
        C.CastleModel.userData.userName = g.CastleCheatData.cheatLoginName;
        C.CastleModel.userData.loginPwd = "-+";
        C.CastleModel.userData.loginToken = null;
        r = true;
      }
      if (r && !n) {
        u.info("*** Castle **** Do autologin: " + o);
        this.login();
        return;
      }
      if (n) {
        this.login();
        return;
      }
    }
    u.info("*** Castle **** No auto login possible, show startscreen.");
    this.handleAutoLoginImpossible();
  };
  CastleChooseLoginMethodCommand.prototype.isAgeGateValid = function () {
    return !s.BasicModel.ageGateData.isAgeGateActive || !!s.BasicModel.ageGateData.validationSucceeded;
  };
  CastleChooseLoginMethodCommand.prototype.handleAutoLoginImpossible = function () {
    a.BasicLayoutManager.getInstance().state = a.BasicLayoutManager.STATE_STARTSCREEN;
  };
  CastleChooseLoginMethodCommand.prototype.isAutoLoginInSocialNetworkPossible = function () {
    var e = s.BasicModel.socialData.displayNameExistingPlayer;
    if (e && e != "") {
      var t = p.int(s.BasicModel.instanceProxy.instanceMap.length);
      var i = p.int(s.BasicModel.instanceProxy.instanceMap[0].countries.length);
      return t != 1 || !(i > 1);
    }
    return false;
  };
  CastleChooseLoginMethodCommand.prototype.isLoginPossibleWithFacebookCookie = function () {
    var e = C.CastleModel.localData.getFacebookID();
    return !!e && e != "";
  };
  CastleChooseLoginMethodCommand.prototype.isLoginPossibleWithCookieAccount = function () {
    var e = C.CastleModel.localData.readLoginDataUsername();
    var t = C.CastleModel.localData.readLoginDataLoginToken();
    return !!this.hasAccountSavedInCookie(e, t) && (C.CastleModel.userData.userName = e, C.CastleModel.userData.loginToken = t, true);
  };
  CastleChooseLoginMethodCommand.prototype.hasAccountSavedInCookie = function (e, t) {
    return !!e && e != "" && !!t && t != "";
  };
  CastleChooseLoginMethodCommand.prototype.login = function () {
    var e;
    if (C.CastleModel.userData.connectToSpecialServer && C.CastleModel.userData.specialServerLoginToken) {
      if (C.CastleModel.userData.connectToTempServer) {
        r.CommandController.instance.executeCommand(h.CastleBasicController.CONNECT_TO_TEMPORARY_SERVER, "login");
      }
      if (C.CastleModel.userData.connectToABGServer) {
        r.CommandController.instance.executeCommand(h.CastleBasicController.CONNECT_TO_ALLIANCE_BATTLE_GROUND_SERVER, "login");
      }
      return;
    }
    e = l.EnvGlobalsHandler.globals.isSSO && !l.EnvGlobalsHandler.globals.useLegacySocialRegistration ? o.BasicController.COMMAND_SOCIAL_LOGIN : o.BasicController.COMMAND_LOGIN;
    r.CommandController.instance.executeCommand(e);
  };
  return CastleChooseLoginMethodCommand;
}(c.SimpleCommand);
exports.CastleChooseLoginMethodCommand = _;
d.classImplementsInterfaces(_, "ISimpleCommand");