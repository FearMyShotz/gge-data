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
var d = require("./2.js");
var p = require("./2.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./2.js");
var _ = require("./1.js");
var m = require("./5.js");
var f = require("./5.js");
var O = require("./3.js");
var E = require("./7.js");
var y = require("./28.js");
var b = require("./432.js");
var D = require("./4.js");
var I = require("./1926.js");
var T = require("./4651.js");
var v = require("./4652.js");
var S = require("./1927.js");
var A = require("./10.js");
var L = function (e) {
  function LLICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LLICommand, e);
  Object.defineProperty(LLICommand.prototype, "cmdId", {
    get: function () {
      return E.ClientConstSF.S2C_LOGIN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(A.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LLICommand.prototype.executeCommand = function (e, t) {
    var i;
    b.CastleCheatData.cheatLoginName = null;
    if (e != f.ERROR.ALL_OK) {
      a.BasicDialogHandler.getInstance().blockDialogs = false;
      this.controller.dispatchEvent(new w.CastleRegisterErrorEvent(w.CastleRegisterErrorEvent.LLI_ERROR, "LLI", e));
    }
    r.BasicModel.smartfoxClient.onLoginResponceSuccess();
    switch (e) {
      case f.ERROR.PLAYER_NOT_FOUND:
        u.ClientFunnelTrackingController.getInstance().trackState(c.ClientFunnelGameStates.ERROR_LOGIN_NAME);
        break;
      case f.ERROR.INVALID_PASSWORD:
        u.ClientFunnelTrackingController.getInstance().trackState(c.ClientFunnelGameStates.ERROR_LOGIN_PASSWORD);
    }
    switch (e) {
      case f.ERROR.ALL_OK:
        this.layoutManager.onEndProgressbar();
        LLICommand.authenticateToBugsnag();
        this.env.isFirstVisitOfGGS;
        this.env.isFirstVisit &&= false;
        if (M.CastleFacebookModule.hasAuthResponse && !M.CastleFacebookModule.credentialsFromLandingPage) {
          d.CommandController.instance.executeCommand(P.IngameClientCommands.UPDATE_DATA_FOR_FACEBOOK_LOGIN_REGISTRATION);
        } else if (D.CastleModel.userData.persistentLogin) {
          D.CastleModel.localData.saveFacebookID("");
          D.CastleModel.localData.saveUsername(D.CastleModel.userData.userName);
        }
        D.CastleModel.localData.saveCountryData(p.GGSCountryController.instance.currentCountry.ggsCountryCode);
        r.BasicModel.sessionData.loggedIn = true;
        if (this.env.currentCountryLanguageCode == "ko") {
          if (!this.env.isIdentityManagementActive) {
            d.CommandController.instance.executeCommand(o.BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
          }
          r.BasicModel.identityManagement.showStuff = true;
        }
        return true;
      case f.ERROR.PLAYER_NOT_FOUND:
      case f.ERROR.INVALID_PASSWORD:
        if (!this.env.loginIsKeyBased) {
          this.layoutManager.state = s.BasicLayoutManager.STATE_STARTSCREEN;
        }
        this.layoutManager.unLockPanel(x.CastleStartscreenPanel);
        break;
      case f.ERROR.NO_AVATAR_CREATED:
        this.layoutManager.state = s.BasicLayoutManager.STATE_STARTSCREEN;
        break;
      case f.ERROR.IS_BANNED:
        if (!this.env.loginIsKeyBased) {
          this.layoutManager.state = s.BasicLayoutManager.STATE_STARTSCREEN;
        }
        if ((i = JSON.parse(t[1])).GDPR) {
          R.CastleDialogHandler.getInstance().registerDialogs(B.DarkOkDialog, new l.BasicStandardOkDialogProperties(O.Localize.text("attention"), O.Localize.text("generic_login_deleted")));
        } else {
          this.handleBannedUser(i.RS);
        }
        break;
      case h.IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED:
        d.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, h.IdentityManagementConstants.ERROR_CLIENT_LOGIN_AGE_CHECK_FAILED);
        break;
      case h.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA:
        d.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, h.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA);
        break;
      case h.IdentityManagementConstants.ERROR_SERVER_NO_KOREA_USER_DATA_AVAILABLE:
        i = JSON.parse(t[1]);
        D.CastleModel.userData.playerID = i && i.PID ? i.PID : D.CastleModel.userData.playerID;
        d.CommandController.instance.executeCommand(o.BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
        r.BasicModel.identityManagement.authenticateViaJS();
        break;
      case h.IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE:
        d.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, h.IdentityManagementConstants.ERROR_CLIENT_LOGIN_AGE_CHECK_FAILED);
        break;
      case f.ERROR.EXISTING_MAPPING_WRONG_SERVER:
        i = JSON.parse(t[1]);
        var n = r.BasicModel.instanceProxy.getInstanceVOByID(i[m.CommKeys.INSTANCE_ID]);
        if (n) {
          if (M.CastleFacebookModule.hasAuthResponse) {
            D.CastleModel.localData.saveUsername("");
            D.CastleModel.localData.saveFacebookID(M.CastleFacebookModule.userID);
            D.CastleModel.localData.saveIsRedirectedWithFacebook(true);
          }
          d.CommandController.instance.executeCommand(o.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, n);
        } else {
          C.error("facebook account mapped to unknown instance ID or wrong network");
        }
        break;
      case f.ERROR.INVALID_LOGIN_TOKEN:
        D.CastleModel.localData.deleteLoginData();
        V.CastleLayoutManager.getInstance().state = s.BasicLayoutManager.STATE_STARTSCREEN;
        break;
      case f.ERROR.UNEXPECTED_FACEBOOK_ERROR:
        break;
      case f.ERROR.LOGIN_COOLDOWN_ACTIVE:
        this.layoutManager.state = s.BasicLayoutManager.STATE_STARTSCREEN;
        i = JSON.parse(t[1]);
        R.CastleDialogHandler.getInstance().registerDialogs(T.CastleTimerOkDialog, new v.CastleTimerOKDialogProperties("generic_alert_information", "login_attempt_cooldown", i[m.CommKeys.REMAINING_COOLDOWN]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  LLICommand.prototype.handleBannedUser = function (e) {
    var t;
    var i = new Date();
    var n = new Date();
    n.setTime(n.getTime() + e * y.ClientConstTime.SEC_2_MILLISEC);
    t = i.getFullYear() == n.getFullYear() && i.getMonth() == n.getMonth() && i.getDate() == n.getDate() ? g.TimeStringHelper.getDateToString(n.getTime(), g.TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, O.Localize.text) : O.Localize.datetime(n);
    if (e >= y.ClientConstTime.SECONDS_PER_FOUR_WEEKS) {
      R.CastleDialogHandler.getInstance().registerDialogs(S.AccountBannedDialog, new I.BasicTimedNoClickProperties(O.Localize.text("generic_alert_watchout"), O.Localize.text("generic_login_banned", [t]), e));
    } else {
      R.CastleDialogHandler.getInstance().registerDialogs(S.AccountBannedDialog, new I.BasicTimedNoClickProperties(O.Localize.text("generic_alert_watchout"), O.Localize.text("generic_login_banned_2", [t]), e));
    }
  };
  LLICommand.authenticateToBugsnag = function () {
    var e = window.bugsnagClient;
    if (e) {
      e.user = {
        id: D.CastleModel.userData.playerID != -1 ? D.CastleModel.userData.playerID : D.CastleModel.userData.userName,
        name: D.CastleModel.userData.userName
      };
    }
  };
  return LLICommand;
}(A.CastleCommand);
exports.LLICommand = L;
var P = require("./29.js");
var M = require("./193.js");
var R = require("./9.js");
var V = require("./17.js");
var x = require("./1137.js");
var w = require("./364.js");
var B = require("./215.js");
_.classImplementsInterfaces(L, "IExecCommand");