Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function LPLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LPLCommand, e);
  Object.defineProperty(LPLCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_LOGIN_POPUP_LIST;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LPLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = !!i.P && i.P.length > 2;
        c.CastlePopUpHelper.displayPopUps(i, n);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return LPLCommand;
}(r.CastleCommand);
exports.LPLCommand = l;
var c = require("./405.js");
o.classImplementsInterfaces(l, "IExecCommand");