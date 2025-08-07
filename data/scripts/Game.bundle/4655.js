Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = require("./4.js");
var c = function (e) {
  function MNSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MNSCommand, e);
  Object.defineProperty(MNSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_MAIL_NEWSLETTER_STATUS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MNSCommand.prototype.executeCommand = function (e, t) {
    var i = t && t[1] ? JSON.parse(t[1]) : null;
    switch (e) {
      case a.ERROR.ALL_OK:
        l.CastleModel.playerEmailData.parse_MNS(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return MNSCommand;
}(r.CastleCommand);
exports.MNSCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");