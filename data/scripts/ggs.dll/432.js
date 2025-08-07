Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./8.js");
var r = require("./9.js");
var o = require("./183.js");
var l = require("./68.js");
var u = require("./154.js");
var c = require("./12.js");
var _ = function (e) {
  function NCHCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(NCHCommand, e);
  Object.defineProperty(NCHCommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_NEW_CASH_HASH;
    },
    enumerable: true,
    configurable: true
  });
  NCHCommand.prototype.executeCommand = function (e, t) {
    if (e == l.BasicErrorConstants.ALL_OK) {
      if (t.length == 2) {
        t.shift();
      }
      s.BasicController.getInstance().paymentHash = String(t.shift());
      s.BasicController.getInstance().dispatchEvent(new u.BasicPaymentEvent(u.BasicPaymentEvent.PAYMENT_HASH_CHANGED));
    } else if (e == l.BasicErrorConstants.NO_PLAYER) {
      c.CommandController.instance.executeCommand(s.BasicController.COMMAND_HANDLE_SERVER_ERROR, new o.ServerErrorVO(e, t));
    }
    return false;
  };
  return NCHCommand;
}(a.BasicCommand);
exports.NCHCommand = _;