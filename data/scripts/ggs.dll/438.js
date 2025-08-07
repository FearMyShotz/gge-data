Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./68.js");
var l = require("./184.js");
var u = require("./4.js");
var c = require("./439.js");
var _ = require("./12.js");
var d = require("./31.js");
var m = require("./418.js");
var h = require("./37.js");
var p = function (e) {
  function SPLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(SPLCommand, e);
  Object.defineProperty(SPLCommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_NEW_LOGIN_SOCIAL;
    },
    enumerable: true,
    configurable: true
  });
  SPLCommand.prototype.executeCommand = function (e, t) {
    h.info("error: " + e + ", params: " + t);
    if (e == SPLCommand.LOGIN_KEYS_INVALID) {
      h.info("Signature key (sig) is outdated, request a new one.");
      s.BasicController.getInstance().addEventListener(l.SocialDataEvent.LOGIN_KEYS_REFRESHED, this.bindFunction(this.onLoginKeysRefreshed));
      _.CommandController.instance.executeCommand(s.BasicController.REQUEST_SOCIAL_LOGIN_KEYS);
      return false;
    } else {
      if (e == o.BasicErrorConstants.ALL_OK) {
        u.BasicModel.sessionData.loggedIn = true;
        if (this.env.suk == "") {
          u.BasicModel.localData.saveCountryData(d.GGSCountryController.instance.currentCountry.ggsCountryCode);
        }
      }
      this.handleGameSpecificErrors(e, t);
      return false;
    }
  };
  SPLCommand.prototype.onLoginKeysRefreshed = function (e) {
    s.BasicController.getInstance().removeEventListener(l.SocialDataEvent.LOGIN_KEYS_REFRESHED, this.bindFunction(this.onLoginKeysRefreshed));
    this.retrySocialLogin();
  };
  SPLCommand.prototype.retrySocialLogin = function () {
    if (u.BasicModel.socialData.socialLoginReloginCount < c.BasicSocialData.LOGIN_RELOGIN_COUNT_MAX_TRIES) {
      h.info("Retry " + u.BasicModel.socialData.socialLoginReloginCount + ", try to execute social login again.");
      _.CommandController.instance.executeCommand(s.BasicController.COMMAND_SOCIAL_LOGIN);
    } else {
      m.fatal("Can't execute social login after " + c.BasicSocialData.LOGIN_RELOGIN_COUNT_MAX_TRIES + " tries!");
      this.handleGameSpecificErrors(SPLCommand.LOGIN_KEYS_INVALID, []);
    }
    u.BasicModel.socialData.socialLoginReloginCount++;
  };
  SPLCommand.prototype.handleGameSpecificErrors = function (e, t) {};
  SPLCommand.LOGIN_KEYS_INVALID = 10014;
  return SPLCommand;
}(a.BasicCommand);
exports.SPLCommand = p;