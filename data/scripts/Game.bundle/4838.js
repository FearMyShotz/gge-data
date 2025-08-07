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
  function EEQCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(EEQCommand, e);
  Object.defineProperty(EEQCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_EQUIP_EQUIPMENT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EEQCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        r.CastleModel.equipData.parse_EEQ();
        break;
      default:
        r.CastleModel.equipData.error_EEQ(e);
    }
    return false;
  };
  return EEQCommand;
}(l.CastleCommand);
exports.EEQCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");