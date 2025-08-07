Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./37.js");
var l = require("./10.js");
var c = function (e) {
  function CPECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CPECommand, e);
  Object.defineProperty(CPECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_GET_ALLIANCE_CENTERS_OF_POWER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CPECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleServerMessageArrivedEvent(r.CastleServerMessageArrivedEvent.CPE_ARRIVED, [i]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return CPECommand;
}(l.CastleCommand);
exports.CPECommand = c;
o.classImplementsInterfaces(c, "IExecCommand");