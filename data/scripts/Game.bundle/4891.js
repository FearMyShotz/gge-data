Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = require("./1580.js");
var c = require("./4892.js");
var u = function (e) {
  function HFLCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HFLCommand, e);
  Object.defineProperty(HFLCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_HOSPITAL_FLAGS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  HFLCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        var n = new c.HospitalFlagsVO();
        n.parse_HFL(i);
        this.controller.dispatchEvent(new l.CastleHospitalEvent(l.CastleHospitalEvent.HOSPITAL_FLAGS_RECEIVED, n));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return HFLCommand;
}(r.CastleCommand);
exports.HFLCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");