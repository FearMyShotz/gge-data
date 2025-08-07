Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = function (e) {
  function GAXPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GAXPCommand, e);
  Object.defineProperty(GAXPCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.C2S_GENERAL_ADD_XP;
    },
    enumerable: true,
    configurable: true
  });
  GAXPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GAXPCommand;
}(require("./10.js").CastleCommand);
exports.GAXPCommand = s;