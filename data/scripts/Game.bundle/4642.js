Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function FIICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FIICommand, e);
  Object.defineProperty(FIICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_FRIEND_INVITE_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FIICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        if (t.length > 0) {
          var i = JSON.parse(t[1]);
          r.CastleModel.inviteFriendsData.parse_FII(i);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FIICommand;
}(l.CastleCommand);
exports.FIICommand = c;
o.classImplementsInterfaces(c, "IExecCommand");