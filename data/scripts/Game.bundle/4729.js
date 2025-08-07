Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./43.js");
var u = require("./10.js");
var d = function (e) {
  function SAACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SAACommand, e);
  Object.defineProperty(SAACommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_ALLIANCE_SEND_APPLICATION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  SAACommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        p.CastleDialogHandler.getInstance().registerDialogsWithType(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("dialog_newMessage_message"), r.Localize.text("dialog_newMessage_messageSent")), false, c.CastleDialogConsts.PRIORITY_LOW, 0, c.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return SAACommand;
}(u.CastleCommand);
exports.SAACommand = d;
var p = require("./9.js");
var h = require("./38.js");
a.classImplementsInterfaces(d, "IExecCommand");