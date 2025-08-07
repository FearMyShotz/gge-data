Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function OOPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OOPCommand, e);
  Object.defineProperty(OOPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_OFFER_OFFER_PAY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  OOPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return OOPCommand;
}(r.CastleCommand);
exports.OOPCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");