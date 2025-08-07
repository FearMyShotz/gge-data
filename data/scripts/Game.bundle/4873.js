Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = function (e) {
  function GRFCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GRFCommand, e);
  Object.defineProperty(GRFCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GENERAL_RESET_FLAGS;
    },
    enumerable: true,
    configurable: true
  });
  GRFCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GRFCommand;
}(require("./10.js").CastleCommand);
exports.GRFCommand = s;