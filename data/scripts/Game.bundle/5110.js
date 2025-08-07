Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./241.js");
var u = require("./10.js");
var d = function (e) {
  function BKPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BKPCommand, e);
  Object.defineProperty(BKPCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_BUY_BEGGINGKNIGHTS_POINT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BKPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        l.CastleModel.smartfoxClient.sendCommandVO(new c.C2SPointEventGetPointsVO(s.EventConst.EVENTTYPE_BEGGING_KNIGHTS));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BKPCommand;
}(u.CastleCommand);
exports.BKPCommand = d;
o.classImplementsInterfaces(d, "IExecCommand");