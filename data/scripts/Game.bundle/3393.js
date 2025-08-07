Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./140.js");
var r = require("./15.js");
var l = require("./4.js");
var c = require("./43.js");
var u = require("./201.js");
var d = require("./521.js");
var p = function (e) {
  function OpenAttackOrderCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenAttackOrderCommand, e);
  OpenAttackOrderCommand.prototype.execute = function (e = null) {
    h.CastleDialogHandler.getInstance().registerDialogsWithType(_.CastleExternalPreloaderDialog, new u.CastleExternalPreloaderDialogProperties(null), false, c.CastleDialogConsts.PRIORITY_TOP, 0, c.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
    r.CastleBasicController.getInstance().addEventListener(s.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    r.CastleBasicController.getInstance().addEventListener(s.CastleMessageDataEvent.MESSAGE_NO_EXIST, this.bindFunction(this.onMessageError));
    l.CastleModel.messageData.getBodyForTextMessage(e.mid);
  };
  OpenAttackOrderCommand.prototype.onMessageError = function (e) {
    this.removeEventListeners();
  };
  OpenAttackOrderCommand.prototype.onMessageBodyAvailable = function (e) {
    this.removeEventListeners();
    var t = l.CastleModel.bookmarkData.parseBookmarkObject(e.params[1]);
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleAttackOrderReceivedDialog, new d.CastleBookmarkPasserProperties(t));
  };
  OpenAttackOrderCommand.prototype.removeEventListeners = function () {
    r.CastleBasicController.getInstance().removeEventListener(s.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageBodyAvailable));
    r.CastleBasicController.getInstance().removeEventListener(s.CastleMessageDataEvent.MESSAGE_NO_EXIST, this.bindFunction(this.onMessageError));
    g.CastleLayoutManager.getInstance().hideDialog(_.CastleExternalPreloaderDialog);
  };
  return OpenAttackOrderCommand;
}(o.SimpleCommand);
exports.OpenAttackOrderCommand = p;
var h = require("./9.js");
var g = require("./17.js");
var C = require("./3394.js");
var _ = require("./154.js");
a.classImplementsInterfaces(p, "ISimpleCommand");