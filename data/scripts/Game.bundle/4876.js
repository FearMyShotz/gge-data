Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = function (e) {
  function LWTACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LWTACommand, e);
  Object.defineProperty(LWTACommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.C2S_LAUNCH_WOLFKING_TAUNT_ATTACK;
    },
    enumerable: true,
    configurable: true
  });
  LWTACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return LWTACommand;
}(require("./10.js").CastleCommand);
exports.LWTACommand = s;