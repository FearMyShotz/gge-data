Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./7.js");
var r = require("./4.js");
var l = require("./4825.js");
var c = require("./1761.js");
var u = require("./10.js");
var d = function (e) {
  function APTCommand() {
    return e.call(this) || this;
  }
  n.__extends(APTCommand, e);
  Object.defineProperty(APTCommand.prototype, "cmdId", {
    get: function () {
      return s.ClientConstSF.S2C_ASSIGN_TITLE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  APTCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case a.ERROR.ALL_OK:
        if (t.length > 1) {
          var i = JSON.parse(t[1]);
          if (!i.PN) {
            r.CastleModel.titleData.parseAPT(i);
          }
        }
        r.CastleModel.smartfoxClient.sendCommandVO(new c.C2SUserAchievedRanksVO());
        break;
      case a.ERROR.LEVEL_TOO_HIGH_OR_LOW:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleEilandTitleErrorDialog, new l.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_level"));
        break;
      case a.ERROR.NOT_IN_SAME_ALLIANCE:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleEilandTitleErrorDialog, new l.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_alliance"));
        break;
      case a.ERROR.PLAYER_NOT_FOUND:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleEilandTitleErrorDialog, new l.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_name"));
        break;
      case a.ERROR.CANNOT_ASSIGN_TO_SELF:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleEilandTitleErrorDialog, new l.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_self"));
        break;
      case a.ERROR.ALREADY_HAS_TITLE:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleEilandTitleErrorDialog, new l.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", "dialog_eiland_titleMenu_error_same"));
        break;
      case a.ERROR.IS_NOT_KING:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleEilandTitleErrorDialog, new l.CastleEilandTitleErrorProperties("dialog_eiland_titleMenu_error", ""));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return APTCommand;
}(u.CastleCommand);
exports.APTCommand = d;
var p = require("./9.js");
var h = require("./4826.js");
o.classImplementsInterfaces(d, "IExecCommand");