Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = function (e) {
  function CastleLostPasswordCommand(t = false) {
    var i = e.call(this, t) || this;
    i.ALL_OK1 = 0;
    i.GENERAL_ERROR1 = 1;
    i.PLAYER_NOT_FOUND1 = 2;
    return i;
  }
  n.__extends(CastleLostPasswordCommand, e);
  CastleLostPasswordCommand.prototype.execute = function (e = null) {
    this.errorCode1 = e;
    switch (this.errorCode1) {
      case this.ALL_OK1:
        this.all_ok();
        break;
      case this.GENERAL_ERROR1:
        this.general_error();
        break;
      case this.PLAYER_NOT_FOUND1:
        this.player_not_found();
        break;
      default:
        o.CommandController.instance.executeCommand(o.BasicController.COMMAND_HANDLE_SERVER_ERROR, new o.ServerErrorVO(this.errorCode1, [], "lpp"));
    }
  };
  CastleLostPasswordCommand.prototype.all_ok = function () {
    e.prototype.all_ok.call(this);
    s.EnvGlobalsHandler.globals.isFirstVisit &&= false;
    u.CastleDialogHandler.getInstance().registerDialogs(p.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties("", l.Localize.text("generic_change_password_copy_send")));
  };
  CastleLostPasswordCommand.prototype.general_error = function () {
    e.prototype.general_error.call(this);
    u.CastleDialogHandler.getInstance().registerDialogs(p.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("errorCode_1")));
  };
  CastleLostPasswordCommand.prototype.player_not_found = function () {
    e.prototype.player_not_found.call(this);
    u.CastleDialogHandler.getInstance().registerDialogs(p.CastleStandardOkDialog, new a.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("errorCode_21")));
  };
  Object.defineProperty(CastleLostPasswordCommand.prototype, "layoutManager", {
    get: function () {
      return d.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleLostPasswordCommand;
}(o.BasicLostPasswordCommand);
exports.CastleLostPasswordCommand = c;
var u = require("./9.js");
var d = require("./17.js");
var p = require("./38.js");
r.classImplementsInterfaces(c, "ISimpleCommand");