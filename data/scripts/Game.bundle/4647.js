Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = require("./4648.js");
var c = require("./10.js");
var u = function (e) {
  function LCBCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(LCBCommand, e);
  Object.defineProperty(LCBCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.C2S_USER_ACHIEVED_RANKS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LCBCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        d.CastleDialogHandler.getInstance().registerDefaultDialogs(p.CastleWelcomebackDialog, new l.CastleWelcomebackDialogProperties(s.int(i.C2)));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return LCBCommand;
}(c.CastleCommand);
exports.LCBCommand = u;
var d = require("./9.js");
var p = require("./4649.js");
o.classImplementsInterfaces(u, "IExecCommand");