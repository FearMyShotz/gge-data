Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./4717.js");
var c = require("./10.js");
var u = function (e) {
  function AGCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AGCCommand, e);
  Object.defineProperty(AGCCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ALLIANCE_GIFT_COLLECT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AGCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = r.CastleModel.allianceGiftData.parse_AGC(i);
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleAllianceGiftCollectedDialog, new l.CastleAllianceGiftCollectedDialogProperties(n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AGCCommand;
}(c.CastleCommand);
exports.AGCCommand = u;
var d = require("./9.js");
var p = require("./4718.js");
o.classImplementsInterfaces(u, "IExecCommand");