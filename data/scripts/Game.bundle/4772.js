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
  function EBECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EBECommand, e);
  Object.defineProperty(EBECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_BUY_EXPANSION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EBECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.areaData.activeArea.updater.parseEBE(i);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        r.CastleModel.decoStorage.parseSIN(i.sin);
        u.Iso.controller.viewUpdater.onExpansion();
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return EBECommand;
}(l.CastleCommand);
exports.EBECommand = c;
var u = require("./34.js");
o.classImplementsInterfaces(c, "IExecCommand");