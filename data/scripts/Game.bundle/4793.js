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
  function IRACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IRACommand, e);
  Object.defineProperty(IRACommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_REPAIR_ALL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  IRACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        if (r.CastleModel.areaData.activeArea) {
          r.CastleModel.areaData.activeArea.updater.parseIRA(i);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return IRACommand;
}(l.CastleCommand);
exports.IRACommand = c;
o.classImplementsInterfaces(c, "IExecCommand");