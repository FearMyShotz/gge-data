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
var h = require("./1.js");
var g = require("./5.js");
var C = require("./7.js");
var _ = require("./364.js");
var m = require("./4.js");
var f = require("./10.js");
var O = function (e) {
  function LRECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LRECommand, e);
  Object.defineProperty(LRECommand.prototype, "cmdId", {
    get: function () {
      return C.ClientConstSF.S2C_REGISTER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(f.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LRECommand.prototype.executeCommand = function (e, t) {
    var i;
    switch (e) {
      case g.ERROR.ALL_OK:
        i = JSON.parse(t[1]);
        m.CastleModel.userData.playerID = i && i.PID ? i.PID : m.CastleModel.userData.playerID;
        m.CastleModel.localData.saveCountryData(u.GGSCountryController.instance.currentCountry.ggsCountryCode);
        r.ClientFunnelTrackingController.getInstance().trackState(s.ClientFunnelGameStates.REGISTERED);
        l.CommandController.instance.executeCommand(o.BasicController.GTM_CALL_GGS_TRACK_EVENT, "clientregistration");
        l.CommandController.instance.executeCommand(o.BasicController.GAMESIGHT_CALL_GGS_TRACK_EVENT, new D.GameSightPayloadVO(b.GamesightEventConstants.PLAYER_REGISTRATION));
        c.ExternalInterfaceController.instance.executeJavaScriptFunction(new p.JavascriptCallOnRegisterCompleteFactory());
        if (y.CastleFacebookModule.userID) {
          l.CommandController.instance.executeCommand(E.IngameClientCommands.UPDATE_DATA_FOR_FACEBOOK_LOGIN_REGISTRATION);
        } else if (m.CastleModel.userData.persistentLogin) {
          m.CastleModel.localData.saveFacebookID("");
          m.CastleModel.localData.saveUsername(m.CastleModel.userData.userName);
        }
        m.CastleModel.userData.sendInviterCodeToServer();
        a.BasicModel.sessionData.loggedIn = true;
        return true;
      case g.ERROR.EMAIL_ALREADY_IN_USE:
        this.controller.dispatchEvent(new _.CastleRegisterErrorEvent(_.CastleRegisterErrorEvent.REGISTER_ERROR, _.CastleRegisterErrorEvent.EMAIL_ALREADY_IN_USE));
        break;
      case g.ERROR.INVALID_EMAIL:
        this.controller.dispatchEvent(new _.CastleRegisterErrorEvent(_.CastleRegisterErrorEvent.REGISTER_ERROR, _.CastleRegisterErrorEvent.INVALID_EMAIL));
        break;
      case g.ERROR.INVALID_PASSWORD:
        this.controller.dispatchEvent(new _.CastleRegisterErrorEvent(_.CastleRegisterErrorEvent.REGISTER_ERROR, _.CastleRegisterErrorEvent.INVALID_PASSWORD));
        break;
      case g.ERROR.INVALID_NAME:
        if (t[1] !== undefined) {
          i = JSON.parse(t[1]);
          this.controller.dispatchEvent(new _.CastleRegisterErrorEvent(_.CastleRegisterErrorEvent.REGISTER_ERROR, _.CastleRegisterErrorEvent.INVALID_NAME, i));
        }
        break;
      case g.ERROR.NAME_ALREADY_IN_USE:
        if (t[1] !== undefined) {
          i = JSON.parse(t[1]);
          this.controller.dispatchEvent(new _.CastleRegisterErrorEvent(_.CastleRegisterErrorEvent.REGISTER_ERROR, _.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, i));
        }
        break;
      case g.ERROR.WRONG_INPUT_SCREEN:
        this.controller.dispatchEvent(new _.CastleRegisterErrorEvent(_.CastleRegisterErrorEvent.REGISTER_ERROR, _.CastleRegisterErrorEvent.INVALID_LOGIN_FIELD));
        break;
      case g.ERROR.WRONG_MODE:
        break;
      case g.ERROR.NAME_HAS_ONLY_NUMBERS:
        if (t[1] !== undefined) {
          i = JSON.parse(t[1]);
          this.controller.dispatchEvent(new _.CastleRegisterErrorEvent(_.CastleRegisterErrorEvent.REGISTER_ERROR, _.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, i));
        }
        break;
      case g.ERROR.USAGE_OF_BADWORDS:
        if (t[1] !== undefined) {
          i = JSON.parse(t[1]);
          this.controller.dispatchEvent(new _.CastleRegisterErrorEvent(_.CastleRegisterErrorEvent.REGISTER_ERROR, _.CastleRegisterErrorEvent.USAGE_OF_BADWORDS, i));
        }
        break;
      case d.IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED:
        l.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, d.IdentityManagementConstants.ERROR_CLIENT_REGISTER_AGE_CHECK_FAILED);
        break;
      case d.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA:
        l.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, d.IdentityManagementConstants.ERROR_SERVER_MISSING_KOREA_USER_DATA);
        break;
      case d.IdentityManagementConstants.ERROR_SERVER_KOREA_ID_ALREADY_REGISTERED:
        l.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, d.IdentityManagementConstants.ERROR_SERVER_KOREA_ID_ALREADY_REGISTERED);
        break;
      case d.IdentityManagementConstants.ERROR_SERVER_NO_KOREA_USER_DATA_AVAILABLE:
        i = JSON.parse(t[1]);
        m.CastleModel.userData.playerID = i && i.PID ? i.PID : m.CastleModel.userData.playerID;
        if (a.BasicModel.identityManagement) {
          a.BasicModel.identityManagement.authenticateViaJS();
        } else {
          l.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, d.IdentityManagementConstants.ERROR_CLIENT_REGISTER_MISSING_KOREA_ID_CHECK);
        }
        break;
      case d.IdentityManagementConstants.ERROR_SERVER_AGE_CHECK_FAILED_GAME_NOT_ALLOWED_FOR_AGE:
        l.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_IDENTITY_MANAGEMENT_ERROR, d.IdentityManagementConstants.ERROR_CLIENT_REGISTER_NOT_ALLOWED_FOR_AGE);
        break;
      case g.ERROR.UNEXPECTED_FACEBOOK_ERROR:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return LRECommand;
}(f.CastleCommand);
exports.LRECommand = O;
var E = require("./29.js");
var y = require("./193.js");
var b = require("./660.js");
var D = require("./661.js");
h.classImplementsInterfaces(O, "IExecCommand");