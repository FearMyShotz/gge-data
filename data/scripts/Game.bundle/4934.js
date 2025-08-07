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
  function CARCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CARCommand, e);
  CARCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        r.CastleModel.eventAnnouncementData.parseCAR(null);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  Object.defineProperty(CARCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_COLLECT_ANNOUNCEMENT_REWARD_EVENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CARCommand;
}(l.CastleCommand);
exports.CARCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");