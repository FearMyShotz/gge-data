Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./15.js");
var c = require("./1114.js");
var u = require("./10.js");
var d = require("./37.js");
var p = function (e) {
  function SPSLMSCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SPSLMSCommand, e);
  Object.defineProperty(SPSLMSCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_SET_PASSWORD_FOR_SOCIAL_LOGIN_MIGRATION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SPSLMSCommand.prototype.executeCommand = function (e, t) {
    this.controller.dispatchEvent(new d.CastleServerMessageArrivedEvent(d.CastleServerMessageArrivedEvent.SPSLMS_ARRIVED, [e]));
    switch (e) {
      case s.ERROR.ALL_OK:
        o.CommandController.instance.executeCommand(l.CastleBasicController.TRACK_SSO_USER_MOVE_ACTION, [c.SsoUserMoveTrackingEvent.POPUP_CONFIRMED]);
        return true;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SPSLMSCommand;
}(u.CastleCommand);
exports.SPSLMSCommand = p;
a.classImplementsInterfaces(p, "IExecCommand");