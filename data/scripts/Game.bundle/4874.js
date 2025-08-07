Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./179.js");
var r = require("./4.js");
var l = function (e) {
  function GUECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GUECommand, e);
  Object.defineProperty(GUECommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.C2S_GENERAL_UNLOCK;
    },
    enumerable: true,
    configurable: true
  });
  GUECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        r.CastleModel.generalsData.dispatchEvent(new s.GeneralsEvent(s.GeneralsEvent.GENERAL_UNLOCKED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GUECommand;
}(require("./10.js").CastleCommand);
exports.GUECommand = l;