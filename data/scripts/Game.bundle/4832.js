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
  function BGECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BGECommand, e);
  Object.defineProperty(BGECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_BIND_GEM;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BGECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        r.CastleModel.gemData.gemBoundToEquipmentSuccess();
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return BGECommand;
}(l.CastleCommand);
exports.BGECommand = c;
o.classImplementsInterfaces(c, "IExecCommand");