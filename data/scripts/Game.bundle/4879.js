Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./4.js");
var r = function (e) {
  function SCTCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SCTCommand, e);
  Object.defineProperty(SCTCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_SPIN_CHARACTER_TOMBOLA;
    },
    enumerable: true,
    configurable: true
  });
  SCTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        s.CastleModel.generalsData.parse_SCT(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SCTCommand;
}(require("./10.js").CastleCommand);
exports.SCTCommand = r;