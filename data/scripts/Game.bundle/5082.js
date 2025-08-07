Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./7.js");
var u = require("./4.js");
var d = require("./10.js");
var p = function (e) {
  function FJFCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FJFCommand, e);
  Object.defineProperty(FJFCommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_JOIN_FACTION;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FJFCommand.prototype.executeCommand = function (e, t) {
    switch (e) {
      case r.ERROR.ALL_OK:
        var i = JSON.parse(t[1]);
        u.CastleModel.kingdomData.willBecomeFaction = l.FactionConst.KINGDOM_ID;
        u.CastleModel.kingdomData.parse_KPI(i.kpi);
        u.CastleModel.specialEventData.parse_SEI(i.sei);
        if (i.mir) {
          u.CastleModel.userData.parse_MIR(i.mir);
        }
        var n = u.CastleModel.userData.castleList.getMainCastleByKingdomID(l.FactionConst.KINGDOM_ID);
        u.CastleModel.worldmapCameraData.currentSelectedCastleInActionPanel = n;
        var s;
        var c = [n.kingdomID, n.absAreaPosX, n.absAreaPosY];
        a.CommandController.instance.executeCommand(h.IngameClientCommands.SWITCH_KINGDOM_GOTO_WORLDMAP_AND_CENTER_POS_COMMAND, c);
        if (i.mir) {
          u.CastleModel.userData.parse_MIR_openDialog(i.mir);
        }
        s = i.FID == l.FactionConst.BLUE_FACTION ? C.CastleFactionChooseFactionBlueDialog : _.CastleFactionChooseFactionRedDialog;
        g.CastleDialogHandler.getInstance().registerDefaultDialogs(s, null, false, o.BasicDialogHandler.PRIORITY_TOP);
        break;
      default:
        this.showErrorDialog(e, t);
    }
    return false;
  };
  return FJFCommand;
}(d.CastleCommand);
exports.FJFCommand = p;
var h = require("./29.js");
var g = require("./9.js");
var C = require("./5083.js");
var _ = require("./5084.js");
s.classImplementsInterfaces(p, "IExecCommand");