Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = function (e) {
  function GAAECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GAAECommand, e);
  Object.defineProperty(GAAECommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GENERALS_SET_ABILITIES;
    },
    enumerable: true,
    configurable: true
  });
  GAAECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GAAECommand;
}(require("./10.js").CastleCommand);
exports.GAAECommand = s;