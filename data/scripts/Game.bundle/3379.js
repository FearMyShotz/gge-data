Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./140.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./3380.js");
var d = function (e) {
  function CastleOpenMessageDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleOpenMessageDialogCommand, e);
  CastleOpenMessageDialogCommand.prototype.execute = function (e = null) {
    var t = e;
    a.CommandController.instance.executeCommand(p.IngameClientCommands.HANDLE_DIALOG_INFO, t.dialogInfo);
    if (!t.read) {
      c.CastleModel.smartfoxClient.sendCommandVO(new u.C2SMarkMessageReadVO(t.messageID));
    }
    t.read = true;
    l.CastleBasicController.getInstance().dispatchEvent(new r.CastleMessageDataEvent(r.CastleMessageDataEvent.UPDATE_MESSAGELIST));
  };
  return CastleOpenMessageDialogCommand;
}(o.BasicClientCommand);
exports.CastleOpenMessageDialogCommand = d;
var p = require("./29.js");
s.classImplementsInterfaces(d, "ISimpleCommand");