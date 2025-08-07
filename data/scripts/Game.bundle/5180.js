Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./10.js");
var c = function (e) {
  function GALCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GALCommand, e);
  Object.defineProperty(GALCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_PLAYER_ALLIANCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GALCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.userData.parse_GAL(i);
        this.layoutManager.hideDialog(u.CastleSearchAllianceDialog);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GALCommand;
}(l.CastleCommand);
exports.GALCommand = c;
var u = require("./970.js");
o.classImplementsInterfaces(c, "IExecCommand");