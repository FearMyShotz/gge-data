Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./5006.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function RVECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RVECommand, e);
  Object.defineProperty(RVECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_REDEEM_VOUCHER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RVECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        l.CastleModel.privateOfferData.dispatchEvent(new r.CastleVoucherEvent(r.CastleVoucherEvent.VOUCHER_CODE_SUCCESS));
        break;
      default:
        l.CastleModel.privateOfferData.dispatchEvent(new r.CastleVoucherEvent(r.CastleVoucherEvent.VOUCHER_CODE_FAILED));
    }
    return false;
  };
  return RVECommand;
}(c.CastleCommand);
exports.RVECommand = u;
o.classImplementsInterfaces(u, "IExecCommand");