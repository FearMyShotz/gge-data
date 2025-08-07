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
  function RESCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RESCommand, e);
  Object.defineProperty(RESCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_RESEARCH_START;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RESCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.researchData.parse_REI(i.rei);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        r.CastleModel.areaData.activeArea.updater.parseGRC(i.grc);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RESCommand;
}(l.CastleCommand);
exports.RESCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");