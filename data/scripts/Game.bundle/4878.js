Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = function (e) {
  function SGICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SGICommand, e);
  Object.defineProperty(SGICommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.C2S_SKIP_GENERALS_INTRODUCTION;
    },
    enumerable: true,
    configurable: true
  });
  SGICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SGICommand;
}(require("./10.js").CastleCommand);
exports.SGICommand = s;