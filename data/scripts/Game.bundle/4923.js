Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./7.js");
var s = require("./4.js");
var r = require("./10.js");
var l = function (e) {
  function MIRCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MIRCommand, e);
  Object.defineProperty(MIRCommand.prototype, "cmdId", {
    get: function () {
      return a.ClientConstSF.S2C_RENAME_CASTLE_INVITATION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MIRCommand.prototype.executeCommand = function (e, t) {
    var i = JSON.parse(t[1]);
    s.CastleModel.userData.parse_MIR(i);
    s.CastleModel.userData.parse_MIR_openDialog(i);
    return true;
  };
  return MIRCommand;
}(r.CastleCommand);
exports.MIRCommand = l;
o.classImplementsInterfaces(l, "IExecCommand");