Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./7.js");
var l = require("./10.js");
var c = function (e) {
  function SMGCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SMGCommand, e);
  Object.defineProperty(SMGCommand.prototype, "cmdId", {
    get: function () {
      return r.ClientConstSF.S2C_SERVER_MESSAGE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SMGCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        if (i.BIG == 1) {
          u.CastleDialogHandler.getInstance().registerDialogs(d.CastleServerMessageBigDialog, new o.BasicStandardOkDialogProperties("SERVER MESSAGE", i.MSG));
        } else {
          u.CastleDialogHandler.getInstance().registerDialogs(p.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties("SERVER MESSAGE", i.MSG));
        }
    }
    return false;
  };
  return SMGCommand;
}(l.CastleCommand);
exports.SMGCommand = c;
var u = require("./9.js");
var d = require("./1002.js");
var p = require("./38.js");
a.classImplementsInterfaces(c, "IExecCommand");