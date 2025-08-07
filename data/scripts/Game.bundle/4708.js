Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./102.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function BAICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BAICommand, e);
  Object.defineProperty(BAICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_ALLIANCE_INVITATION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BAICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.allianceData.parse_BAI(i);
        break;
      default:
        l.CastleModel.allianceData.dispatchEvent(new r.CastleAllianceDataEvent(r.CastleAllianceDataEvent.ALLIANCE_INVITATION, null));
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BAICommand;
}(c.CastleCommand);
exports.BAICommand = u;
o.classImplementsInterfaces(u, "IExecCommand");