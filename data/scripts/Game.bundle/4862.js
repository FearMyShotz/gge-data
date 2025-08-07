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
  function FFICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FFICommand, e);
  Object.defineProperty(FFICommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_FUSION_FORGE_INFO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FFICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.fusionForgeData.parseFFI(i.FI);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FFICommand;
}(l.CastleCommand);
exports.FFICommand = c;
o.classImplementsInterfaces(c, "IExecCommand");