Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./3.js");
var d = require("./801.js");
var p = require("./4.js");
var h = require("./9.js");
var g = require("./38.js");
var C = require("./1634.js");
var _ = function (e) {
  function CastleRegisterUserCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleRegisterUserCommand, e);
  Object.defineProperty(CastleRegisterUserCommand.prototype, "registrationVOClass", {
    get: function () {
      return C.C2SRegisterWithNameVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.BasicRegisterUserCommand.prototype, "registrationVOClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleRegisterUserCommand.prototype.parseCommandVariables = function (e = null) {
    var t = e;
    var i = t[0];
    var n = t[1];
    return new s.BasicRequiredRegistrationFieldsVO(n, null, i);
  };
  CastleRegisterUserCommand.prototype.sendRegisterUserCommand = function (e) {
    try {
      window.grecaptcha.ready(function () {
        var t = d.ClientConstReCaptcha.getSiteKey();
        window.grecaptcha.execute(t, {
          action: "submit"
        }).then(function (t) {
          try {
            if (c.instanceOfClass(r.EnvGlobalsHandler.globals, "CastleEnvironmentGlobals") && c.instanceOfClass(e, "C2SRegisterWithNameVO")) {
              e.IC = r.EnvGlobalsHandler.globals.inviterCode;
            }
          } catch (e) {
            console.warn(e);
          }
          try {
            if (t && c.instanceOfClass(e, "C2SRegisterWithNameVO")) {
              e.RCT = t;
            }
          } catch (e) {
            console.warn(e);
          }
          p.CastleModel.smartfoxClient.sendCommandVO(e);
        }).catch(function (e) {
          h.CastleDialogHandler.getInstance().registerDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_watchout"), u.Localize.text("errorCode_1")));
        });
      });
    } catch (e) {
      h.CastleDialogHandler.getInstance().registerDialogs(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_watchout"), u.Localize.text("errorCode_1")));
    }
  };
  CastleRegisterUserCommand.prototype.saveGameDataInCookie = function () {
    e.prototype.saveGameDataInCookie.call(this);
    p.CastleModel.localData.saveFacebookID("");
  };
  return CastleRegisterUserCommand;
}(a.BasicRegisterUserCommand);
exports.CastleRegisterUserCommand = _;
l.classImplementsInterfaces(_, "ISimpleCommand");