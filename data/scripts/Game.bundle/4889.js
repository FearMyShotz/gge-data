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
  function HCSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HCSCommand, e);
  Object.defineProperty(HCSCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_CANCEL_HOSPITAL_SLOT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HCSCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.militaryData.parse_SPL(i.spl);
        r.CastleModel.militaryData.parse_GUI(i.gui);
        break;
      case a.ERROR.INVALID_PARAMETER_VALUE:
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return HCSCommand;
}(l.CastleCommand);
exports.HCSCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");