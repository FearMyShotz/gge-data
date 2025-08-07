Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = function (e) {
  function FQCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FQCCommand, e);
  Object.defineProperty(FQCCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.C2S_FINISH_QUEST_CONDITION;
    },
    enumerable: true,
    configurable: true
  });
  FQCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FQCCommand;
}(require("./10.js").CastleCommand);
exports.FQCCommand = s;