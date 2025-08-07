Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./118.js");
var l = require("./801.js");
var c = require("./7.js");
var u = require("./4.js");
var d = require("./193.js");
var p = require("./9.js");
var h = require("./38.js");
var g = require("./5278.js");
var C = r.getLogger("Connection.CastleLoginCommand");
var _ = function (e) {
  function CastleLoginCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleLoginCommand, e);
  CastleLoginCommand.prototype.execute = function (e = null) {
    o.BasicController.getInstance().onLogIn();
    o.BasicModel.sessionData.loggedIn = true;
    if (!m() && !f(e) && !O()) {
      E();
    }
  };
  return CastleLoginCommand;
}(o.SimpleCommand);
exports.CastleLoginCommand = _;
a.classImplementsInterfaces(_, "ISimpleCommand");
function m() {
  var e = o.EnvGlobalsHandler.globals;
  return e.pln !== "" && e.sig !== "" && (u.CastleModel.smartfoxClient.sendMessage(c.ClientConstSF.C2S_LOGIN_SOCIAL, [e.pln, e.sig, u.CastleModel.smartfoxClient.connectionTime, u.CastleModel.smartfoxClient.roundTripTime, e.referrer, e.networkId, e.accountId, e.suk, Math.round(new Date().getTimezoneOffset() * -1 / 60) + 13]), true);
}
function f(e) {
  return e !== null && !!b(e) && (u.CastleModel.localData.saveFacebookID(e.userID), y(e), true);
}
function O() {
  var e = u.CastleModel.localData.getFacebookID();
  return !!e && (d.CastleFacebookModule.hasAuthResponse ? d.CastleFacebookModule.userID != e ? (C.warn("Facebook UserID we found in Cookies does not match with user currently logged in Facebook"), u.CastleModel.localData.deleteLoginData(), o.BasicLayoutManager.getInstance().state = o.BasicLayoutManager.STATE_STARTSCREEN) : y(d.facebookAuthResponse()) : (C.debug("found fb cookie " + e + " but user is not logged in,  show login panel"), u.CastleModel.localData.deleteLoginData(), o.BasicLayoutManager.getInstance().state = o.BasicLayoutManager.STATE_STARTSCREEN), true);
}
function E() {
  var e = o.EnvGlobalsHandler.globals;
  var t = new g.C2SLoginVO(u.CastleModel.userData.userName, u.CastleModel.userData.loginPwd, u.CastleModel.userData.loginToken, o.GGSCountryController.instance.currentCountry.ggsLanguageCode, e.distributorId, u.CastleModel.smartfoxClient.connectionTime, u.CastleModel.smartfoxClient.roundTripTime, e.accountId, e.referrer, e.identityManagementId, u.CastleModel.userData.persistentLogin);
  D(t);
  return true;
}
function y(e) {
  var t = o.EnvGlobalsHandler.globals;
  var i = new g.C2SLoginVO(null, null, null, o.GGSCountryController.instance.currentCountry.ggsLanguageCode, t.distributorId, u.CastleModel.smartfoxClient.connectionTime, u.CastleModel.smartfoxClient.roundTripTime, t.accountId, t.referrer, t.identityManagementId, u.CastleModel.userData.persistentLogin);
  i.FID = e ? e.userID : d.CastleFacebookModule.userID;
  i.FTK = e ? e.accessToken : d.CastleFacebookModule.accessToken;
  i.FAID = d.CastleFacebookModule.appID;
  D(i);
}
function b(e) {
  return e.userID !== undefined && e.accessToken !== undefined && e.expiresIn !== undefined && e.signedRequest !== undefined;
}
function D(e, t = 20) {
  try {
    window.grecaptcha.ready(function () {
      var t = l.ClientConstReCaptcha.getSiteKey();
      window.grecaptcha.execute(t, {
        action: "login"
      }).then(function (t) {
        e.RCT = t;
        o.BasicDialogHandler.getInstance().blockDialogs = true;
        o.BasicController.getInstance().sendCommandVOAndWait(e);
      }).catch(function (e) {
        p.CastleDialogHandler.getInstance().registerDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("errorCode_1")));
      });
    });
  } catch (i) {
    if (t > 0) {
      window.setTimeout(function () {
        D(e, t - 1);
      }, 250);
    } else {
      p.CastleDialogHandler.getInstance().registerDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(s.Localize.text("generic_alert_watchout"), s.Localize.text("errorCode_1")));
    }
  }
}