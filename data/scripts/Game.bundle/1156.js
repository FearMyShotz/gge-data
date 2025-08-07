Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./7.js");
var u = require("./37.js");
var d = require("./4.js");
var p = require("./10.js");
var h = function (e) {
  function FNMCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FNMCommand, e);
  Object.defineProperty(FNMCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_FIND_NEXT_MAPOBJECT;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FNMCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case r.ERROR.ALL_OK:
        if (t == null || t.length == 0) {
          return false;
        }
        var i = JSON.parse(t[1]);
        d.CastleModel.otherPlayerData.parseOwnerInfoArray(i.gaa.OI);
        a.CommandController.instance.executeCommand(g.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND);
        d.CastleModel.worldmapData.parseAreaInfos(i.gaa.AI);
        d.CastleModel.worldmapData.parseSearchInfos(i);
        this.controller.dispatchEvent(new u.CastleServerMessageArrivedEvent(u.CastleServerMessageArrivedEvent.FNM_ARRIVED, [i.X, i.Y]));
        break;
      case r.ERROR.NO_PLAYER_FOUND:
        C.CastleDialogHandler.getInstance().registerDefaultDialogs(_.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(l.Localize.text("generic_alert_information"), l.Localize.text("no_player_found")));
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FNMCommand;
}(p.CastleCommand);
exports.FNMCommand = h;
var g = require("./29.js");
var C = require("./9.js");
var _ = require("./38.js");
s.classImplementsInterfaces(h, "IExecCommand");