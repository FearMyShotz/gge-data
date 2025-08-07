Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./4.js");
var r = function (e) {
  function GLACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GLACommand, e);
  Object.defineProperty(GLACommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GENERAL_ASSIGN_LORD;
    },
    enumerable: true,
    configurable: true
  });
  GLACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        s.CastleModel.lordData.parse_GLI(i.gli);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GLACommand;
}(require("./10.js").CastleCommand);
exports.GLACommand = r;