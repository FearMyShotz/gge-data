Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./37.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function TXICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TXICommand, e);
  Object.defineProperty(TXICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_TAX_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TXICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        l.CastleModel.taxData.parse_TXI(i);
        this.controller.dispatchEvent(new r.CastleServerMessageArrivedEvent(r.CastleServerMessageArrivedEvent.TXI_ARRIVED));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TXICommand;
}(c.CastleCommand);
exports.TXICommand = u;
o.classImplementsInterfaces(u, "IExecCommand");