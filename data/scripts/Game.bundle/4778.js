Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function FBECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FBECommand, e);
  Object.defineProperty(FBECommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_FINISHED_BUILDING;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FBECommand.prototype.exec = function (e) {
    var t = s.int(e[0]);
    var i = e[1];
    switch (t) {
      case a.ERROR.ALL_OK:
        var n = JSON.parse(i[1]);
        if (l.CastleModel.areaData.activeArea) {
          l.CastleModel.areaData.activeArea.updater.parseCBX(n);
        }
        break;
      default:
        this.showErrorDialog(t, i);
    }
  };
  return FBECommand;
}(c.CastleCommand);
exports.FBECommand = u;
o.classImplementsInterfaces(u, "IExecCommand");