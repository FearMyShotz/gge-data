Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./26.js");
var s = require("./8.js");
var r = require("./9.js");
var o = function (e) {
  function GCHCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(GCHCommand, e);
  Object.defineProperty(GCHCommand.prototype, "cmdId", {
    get: function () {
      return r.BasicSmartfoxConstants.S2C_CASH_HASH;
    },
    enumerable: true,
    configurable: true
  });
  GCHCommand.prototype.executeCommand = function (e, t) {
    return e == 0 && (t.shift(), s.BasicController.getInstance().paymentHash = String(t.shift()), true);
  };
  return GCHCommand;
}(a.BasicCommand);
exports.GCHCommand = o;