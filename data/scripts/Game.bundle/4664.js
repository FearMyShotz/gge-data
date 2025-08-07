Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./37.js");
var l = require("./4.js");
var c = require("./10.js");
var u = function (e) {
  function SCPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SCPCommand, e);
  Object.defineProperty(SCPCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_CHANGE_PASSWORD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SCPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (l.CastleModel.userData.persistentLogin && i && i.NPW) {
          this.dispatchArrivedEvent(true);
        } else {
          this.dispatchArrivedEvent(false);
        }
        break;
      case a.ERROR.INVALID_PASSWORD:
        this.dispatchArrivedEvent(false);
        break;
      default:
        this.showErrorDialog(e, t);
        this.dispatchArrivedEvent(false);
    }
    return false;
  };
  SCPCommand.prototype.dispatchArrivedEvent = function (e) {
    this.controller.dispatchEvent(new r.CastleServerMessageArrivedEvent(r.CastleServerMessageArrivedEvent.SCP_ARRIVED, [e]));
  };
  return SCPCommand;
}(c.CastleCommand);
exports.SCPCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");