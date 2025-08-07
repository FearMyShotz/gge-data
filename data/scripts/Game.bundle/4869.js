Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./4.js");
var r = function (e) {
  function GIECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GIECommand, e);
  Object.defineProperty(GIECommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GET_GENERALS_INFO;
    },
    enumerable: true,
    configurable: true
  });
  GIECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        s.CastleModel.generalsData.parse_GIE(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GIECommand;
}(require("./10.js").CastleCommand);
exports.GIECommand = r;