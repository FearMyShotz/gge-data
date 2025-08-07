Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./397.js");
var c = require("./10.js");
var u = function (e) {
  function SCICommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SCICommand, e);
  Object.defineProperty(SCICommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_MINUTE_SKIP_CRAFTING;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SCICommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        o.debug("===== minute skip answer!");
        o.debug(t ? t.join(", ") : "null");
        this.controller.dispatchEvent(new l.CastleMinuteSkipEvent(l.CastleMinuteSkipEvent.MINUTESKIP_USE_SUCESS));
        break;
      default:
        this.controller.dispatchEvent(new l.CastleMinuteSkipEvent(l.CastleMinuteSkipEvent.MINUTESKIP_USE_FAIL));
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SCICommand;
}(c.CastleCommand);
exports.SCICommand = u;
a.classImplementsInterfaces(u, "IExecCommand");