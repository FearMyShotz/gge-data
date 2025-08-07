Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./10.js");
var l = function (e) {
  function RAECommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RAECommand, e);
  Object.defineProperty(RAECommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_REPLACE_ALIEN_CAMP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RAECommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        c.CastleDialogHandler.getInstance().registerDialogs(u.CastleRerollAlienSuccessDialog);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return RAECommand;
}(r.CastleCommand);
exports.RAECommand = l;
var c = require("./9.js");
var u = require("./5050.js");
o.classImplementsInterfaces(l, "IExecCommand");