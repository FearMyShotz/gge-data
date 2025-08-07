Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = function (e) {
  function GDECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GDECommand, e);
  Object.defineProperty(GDECommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GACHA_INFO;
    },
    enumerable: true,
    configurable: true
  });
  GDECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GDECommand;
}(require("./10.js").CastleCommand);
exports.GDECommand = s;