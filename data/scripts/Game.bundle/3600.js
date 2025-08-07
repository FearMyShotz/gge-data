Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4.js");
var r = require("./1077.js");
var l = function (e) {
  function OpenPortUpgradeDialogCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(OpenPortUpgradeDialogCommand, e);
  OpenPortUpgradeDialogCommand.prototype.execute = function (e = null) {
    c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleSeasonUpgradePortDialog, new r.CastleSeasonBaseRepairDialogProperties(s.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.getNextLockedPortNode(), "dialog_upgradeShip"));
  };
  return OpenPortUpgradeDialogCommand;
}(o.SimpleCommand);
exports.OpenPortUpgradeDialogCommand = l;
var c = require("./9.js");
var u = require("./3601.js");
a.classImplementsInterfaces(l, "ISimpleCommand");