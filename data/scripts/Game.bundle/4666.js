Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./7.js");
var u = require("./4.js");
var d = require("./10.js");
var p = function (e) {
  function SLTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SLTCommand, e);
  Object.defineProperty(SLTCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_SEND_LOGIN_TOKEN;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SLTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case l.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        o.BasicModel.networkCookie.saveLoginData(u.CastleModel.userData.userName, i.LT);
        a.debug("persistent login token: " + i.LT);
        this.clearDeprecatedLoginData();
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  SLTCommand.prototype.clearDeprecatedLoginData = function () {
    s.info("Deprecrated login data removed ... for good!");
  };
  return SLTCommand;
}(d.CastleCommand);
exports.SLTCommand = p;
r.classImplementsInterfaces(p, "IExecCommand");