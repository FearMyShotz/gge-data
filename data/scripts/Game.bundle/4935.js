Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function DMSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DMSCommand, e);
  Object.defineProperty(DMSCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_DELETE_MESSAGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DMSCommand.prototype.exec = function (e) {
    var t = r.int(e[0]);
    var i = e[1];
    switch (t) {
      case s.ERROR.ALL_OK:
        var n;
        var o = JSON.parse(i[1]);
        if (a.instanceOfClass(o.MID, "Array")) {
          for (var l = 0, u = o.MID; l < u.length; l++) {
            var d = u[l];
            if (d !== undefined) {
              n = c.CastleModel.messageData.getMessageVOById(d);
              c.CastleModel.messageData.deleteMessageFromClientList(n);
            }
          }
        } else {
          n = c.CastleModel.messageData.getMessageVOById(o.MID);
          c.CastleModel.messageData.deleteMessageFromClientList(n);
        }
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return DMSCommand;
}(u.CastleCommand);
exports.DMSCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");