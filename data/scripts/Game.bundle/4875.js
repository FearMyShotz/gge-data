Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = function (e) {
  function GUSECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GUSECommand, e);
  Object.defineProperty(GUSECommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GENERAL_UNLOCK_SKILL;
    },
    enumerable: true,
    configurable: true
  });
  GUSECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GUSECommand;
}(require("./10.js").CastleCommand);
exports.GUSECommand = s;