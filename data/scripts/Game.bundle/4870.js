Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./7.js");
var s = require("./4.js");
var r = function (e) {
  function GCSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GCSCommand, e);
  Object.defineProperty(GCSCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_GENERALS_HUB_STATUS;
    },
    enumerable: true,
    configurable: true
  });
  GCSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case o.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        s.CastleModel.generalsData.parse_GCS(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GCSCommand;
}(require("./10.js").CastleCommand);
exports.GCSCommand = r;