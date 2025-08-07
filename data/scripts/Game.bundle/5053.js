Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./53.js");
var l = require("./10.js");
var c = function (e) {
  function ABGPHCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ABGPHCommand, e);
  Object.defineProperty(ABGPHCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ABG_GET_POINT_HIGHSCORE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ABGPHCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (r.ABGHelper.abgEvent) {
          r.ABGHelper.abgEvent.parseOwnRanks(i);
        }
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return ABGPHCommand;
}(l.CastleCommand);
exports.ABGPHCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");