Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function AGSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AGSCommand, e);
  Object.defineProperty(AGSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SET_AUTO_SELL_GEM_CONDITIONS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AGSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AGSCommand;
}(r.CastleCommand);
exports.AGSCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");