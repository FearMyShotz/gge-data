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
  function DFFCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DFFCommand, e);
  Object.defineProperty(DFFCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_DECO_FORGE_FUSE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DFFCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        r.CastleModel.fusionForgeData.parseDFF(i);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return DFFCommand;
}(l.CastleCommand);
exports.DFFCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");