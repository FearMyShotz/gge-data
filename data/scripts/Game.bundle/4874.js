Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = function (e) {
  function GRSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GRSCommand, e);
  Object.defineProperty(GRSCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GENERAL_RESET_SKILLS;
    },
    enumerable: true,
    configurable: true
  });
  GRSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GRSCommand;
}(require("./10.js").CastleCommand);
exports.GRSCommand = s;