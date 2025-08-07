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
  function BISCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BISCommand, e);
  Object.defineProperty(BISCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_INSTRUCTOR_START;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BISCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.currencyData.parseGCU(i.gcu);
        r.CastleModel.boostData.parse_BOI(i.boi);
        r.CastleModel.areaData.activeArea.updater.parseGPA(i.gpa);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BISCommand;
}(l.CastleCommand);
exports.BISCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");