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
  function GFCCommand() {
    return e.call(this) || this;
  }
  n.__extends(GFCCommand, e);
  Object.defineProperty(GFCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_FRIEND_CONNECTIONS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GFCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.friendListData.parse_GFC(i.CON);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GFCCommand;
}(l.CastleCommand);
exports.GFCCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");