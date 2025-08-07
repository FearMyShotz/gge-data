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
  function SCDCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SCDCommand, e);
  Object.defineProperty(SCDCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_SET_CREDENTIALS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SCDCommand.prototype.executeCommand = function (e, t) {
    var i = null;
    switch (e) {
      case a.ERROR.ALL_OK:
        if (t && t.length > 0) {
          i = JSON.parse(t[1]);
        }
        l.CastleModel.userData.parse_SCD(i);
        break;
      case a.ERROR.INVALID_OBJECT_STATE:
        this.showErrorDialog(e, t);
    }
    this.dispatchArrivedEvent(e, i);
    return false;
  };
  SCDCommand.prototype.dispatchArrivedEvent = function (e, t) {
    this.controller.dispatchEvent(new r.CastleServerMessageArrivedEvent(r.CastleServerMessageArrivedEvent.SDC_ARRIVED, [e, t]));
  };
  return SCDCommand;
}(c.CastleCommand);
exports.SCDCommand = u;
o.classImplementsInterfaces(u, "IExecCommand");