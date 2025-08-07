Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./231.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./136.js");
var d = require("./630.js");
var p = function (e) {
  function AJACommand() {
    return e.call(this) || this;
  }
  n.__extends(AJACommand, e);
  Object.defineProperty(AJACommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_AUTO_JOIN_ALLIANCE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(o.BasicCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AJACommand.prototype.executeCommand = function (e, t) {
    var i;
    var n;
    switch (e) {
      case a.ERROR.ALL_OK:
        var o = JSON.parse(t[1]);
        c.CastleModel.userData.parse_GAL(o.gal);
        c.CastleModel.allianceData.parseAllianceInfo(o.A);
        var r = o.A.M.length == 1;
        var l = r ? this.showAllianceDialog : this.showAllianceChat;
        i = r ? s.Localize.text("dialog_alliance_joiningAlliance_failed_title") : s.Localize.text("dialog_alliance_joiningAlliance_popup_title");
        n = r ? s.Localize.text("dialog_alliance_joiningAlliance_failed_copy") : s.Localize.text("dialog_alliance_joiningAlliance_popup_copy", [o.A.N]);
        h.CastleDialogHandler.getInstance().registerDefaultDialogs(C.CastleLargeYesNoDialog, new d.CastleLargeYesNoDialogProperties(i, n, l, null, null, "", "", false));
    }
    return false;
  };
  AJACommand.prototype.showAllianceDialog = function (e) {
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleAllianceDialog, new u.CastleAllianceDialogProperties());
  };
  AJACommand.prototype.showAllianceChat = function (e) {
    h.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleAllianceDialog, new u.CastleAllianceDialogProperties(r.ClientConstAlliance.CAT_COMMUNICATION));
  };
  return AJACommand;
}(o.BasicCommand);
exports.AJACommand = p;
var h = require("./9.js");
var g = require("./125.js");
var C = require("./449.js");