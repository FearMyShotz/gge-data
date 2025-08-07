Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./7.js");
var c = require("./4.js");
var u = require("./10.js");
var d = function (e) {
  function WSPCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(WSPCommand, e);
  Object.defineProperty(WSPCommand.prototype, "cmdId", {
    get: function () {
      return l.ClientConstSF.S2C_SEARCH_PLAYER;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  WSPCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case s.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        c.CastleModel.otherPlayerData.parseOwnerInfoArray(i.gaa.OI);
        c.CastleModel.worldmapData.parseAreaInfos(i.gaa.AI);
        c.CastleModel.worldmapData.parseSearchInfos(i);
        break;
      case s.ERROR.PLAYER_NOT_FOUND:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("player_not_found")));
        break;
      case s.ERROR.PLAYER_NOT_ON_MAP:
        p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("generic_alert_information"), r.Localize.text("player_not_on_map")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return WSPCommand;
}(u.CastleCommand);
exports.WSPCommand = d;
var p = require("./9.js");
var h = require("./38.js");
a.classImplementsInterfaces(d, "IExecCommand");