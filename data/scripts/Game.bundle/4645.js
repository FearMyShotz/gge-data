Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./18.js");
var r = require("./7.js");
var l = require("./10.js");
var c = function (e) {
  function GGCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GGCCommand, e);
  Object.defineProperty(GGCCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_GET_GAME_CONSTANTS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GGCCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        s.ClientConstCastle.setWorldmapSizeViaGGC(i.SX, i.SY);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return GGCCommand;
}(l.CastleCommand);
exports.GGCCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");