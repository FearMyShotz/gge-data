Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function TBMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TBMCommand, e);
  Object.defineProperty(TBMCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_BUY_TREASUREMAP_PIECE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  TBMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return TBMCommand;
}(r.CastleCommand);
exports.TBMCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");