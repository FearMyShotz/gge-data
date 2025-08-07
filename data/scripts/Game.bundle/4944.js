Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./140.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function MMNCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MMNCommand, e);
  Object.defineProperty(MMNCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_MARKET_CARRIAGE_NOTIFY;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MMNCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.otherPlayerData.parseOwnerInfoArray(i.O);
        this.controller.dispatchEvent(new r.CastleMessageDataEvent(r.CastleMessageDataEvent.GET_TRADE_DATA, [i]));
        break;
      default:
        this.showErrorDialog(e, t);
        this.controller.dispatchEvent(new r.CastleMessageDataEvent(r.CastleMessageDataEvent.GET_TRADE_DATA));
    }
    return false;
  };
  return MMNCommand;
}(c.CastleCommand);
exports.MMNCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");