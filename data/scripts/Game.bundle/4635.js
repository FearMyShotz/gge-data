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
var C = require("./5.js");
var _ = require("./3.js");
var m = require("./28.js");
var f = require("./364.js");
var O = require("./15.js");
var E = require("./4.js");
var y = require("./1926.js");
var b = function (e) {
  function CastleSPLCommand() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CastleSPLCommand, e);
  CastleSPLCommand.prototype.handleGameSpecificErrors = function (e, t) {
    g.info("error: " + e + ", params: " + t);
    switch (e) {
      case C.ERROR.ALL_OK:
        E.CastleModel.userData.firstLogin = true;
        if (this.layoutManager.currentState == a.BasicLayoutManager.STATE_STARTSCREEN && (this.env.loginIsKeyBased || this.env.isFacebook)) {
          r.ClientFunnelTrackingController.getInstance().trackState(s.ClientFunnelGameStates.REGISTERED);
          c.ExternalInterfaceController.instance.executeJavaScriptFunction(new u.JavascriptCallOnRegisterCompleteFactory());
        }
        break;
      case C.ERROR.INVALID_NAME:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new f.CastleRegisterErrorEvent(f.CastleRegisterErrorEvent.REGISTER_ERROR, f.CastleRegisterErrorEvent.INVALID_NAME, i));
        break;
      case C.ERROR.NAME_ALREADY_IN_USE:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new f.CastleRegisterErrorEvent(f.CastleRegisterErrorEvent.REGISTER_ERROR, f.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE, i));
        break;
      case C.ERROR.NAME_HAS_ONLY_NUMBERS:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new f.CastleRegisterErrorEvent(f.CastleRegisterErrorEvent.REGISTER_ERROR, f.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS, i));
        break;
      case C.ERROR.USAGE_OF_BADWORDS:
        i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new f.CastleRegisterErrorEvent(f.CastleRegisterErrorEvent.REGISTER_ERROR, f.CastleRegisterErrorEvent.USAGE_OF_BADWORDS, i));
        break;
      case C.ERROR.NO_FREE_RENAME:
        if (E.CastleModel.userData.userLevel > 1) {
          l.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_SERVER_ERROR, new p.ServerErrorVO(e, t));
        }
        break;
      case C.ERROR.IS_BANNED:
        if (!this.env.loginIsKeyBased) {
          this.layoutManager.state = a.BasicLayoutManager.STATE_STARTSCREEN;
        }
        var n = JSON.parse(t[1]);
        this.handleBannedUser(n.RS);
        break;
      default:
        l.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_SERVER_ERROR, new p.ServerErrorVO(e, t));
    }
  };
  CastleSPLCommand.prototype.handleBannedUser = function (e) {
    if (e >= m.ClientConstTime.SECONDS_PER_FOUR_WEEKS) {
      D.CastleDialogHandler.getInstance().registerDialogs(T.CastleTimedNoClickDialog, new y.BasicTimedNoClickProperties(_.Localize.text("generic_alert_watchout"), _.Localize.text("generic_login_banned"), -1));
    } else {
      var t;
      var i = new Date();
      var n = new Date();
      n.setTime(n.getTime() + e * m.ClientConstTime.SEC_2_MILLISEC);
      t = i.getFullYear() == n.getFullYear() && i.getMonth() == n.getMonth() && i.day == n.day ? h.TimeStringHelper.getDateToString(n.getTime(), h.TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, E.CastleModel.languageData.getTextById) : h.TimeStringHelper.getDateStringFromDate(n, E.CastleModel.languageData.getTextById) + " " + h.TimeStringHelper.getDateToString(n.getTime(), h.TimeStringHelper.DATE_TIMEOCLOCK_FORMAT_ADVANCED, E.CastleModel.languageData.getTextById);
      D.CastleDialogHandler.getInstance().registerDialogs(v.AccountBannedDialog, new y.BasicTimedNoClickProperties(_.Localize.text("generic_alert_watchout"), _.Localize.text("generic_login_banned_2", [t]), e));
    }
  };
  Object.defineProperty(CastleSPLCommand.prototype, "controller", {
    get: function () {
      return O.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSPLCommand.prototype, "layoutManager", {
    get: function () {
      return I.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleSPLCommand.__initialize_static_members = function () {
    CastleSPLCommand.FOUR_WEEKS_IN_SECONDS = 2419200;
  };
  return CastleSPLCommand;
}(d.SPLCommand);
exports.CastleSPLCommand = b;
var D = require("./9.js");
var I = require("./17.js");
var T = require("./4636.js");
var v = require("./1927.js");
b.__initialize_static_members();