Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./818.js");
var u = require("./43.js");
var d = require("./10.js");
var p = function (e) {
  function FSCCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FSCCommand, e);
  Object.defineProperty(FSCCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_SELECT_FACTION_CAMP_ID;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FSCCommand.prototype.executeCommand = function (e, t) {
    if (e == s.ERROR.ALL_OK) {
      this.controller.dispatchEvent(new c.PrebuiltCastleResponseEvent(false));
      return false;
    }
    this.controller.dispatchEvent(new c.PrebuiltCastleResponseEvent(true));
    switch (e) {
      case s.ERROR.FACTION_LAST_MAN_STANDING_ACTIVE:
        h.CastleDialogHandler.getInstance().registerDialogsWithType(g.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("alert_factionJoin_lms_triggered ")), false, u.CastleDialogConsts.PRIORITY_LOW, 0, u.CastleDialogConsts.DIALOG_TYPE_MODAL);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FSCCommand;
}(d.CastleCommand);
exports.FSCCommand = p;
var h = require("./9.js");
var g = require("./38.js");
a.classImplementsInterfaces(p, "IExecCommand");