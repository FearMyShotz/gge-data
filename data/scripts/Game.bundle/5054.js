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
  function AJPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(AJPCommand, e);
  Object.defineProperty(AJPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ABG_JOINED_PLAYER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AJPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        this.controller.dispatchEvent(new r.CastleServerMessageArrivedEvent(r.CastleServerMessageArrivedEvent.AJP_ARRIVED, [i]));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return AJPCommand;
}(l.CastleCommand);
exports.AJPCommand = c;
o.classImplementsInterfaces(c, "IExecCommand");