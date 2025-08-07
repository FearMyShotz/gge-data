Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./7.js");
var u = require("./37.js");
var d = require("./29.js");
var p = require("./4.js");
var h = require("./10.js");
var g = require("./17.js");
var C = function (e) {
  function GAACommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(GAACommand, e);
  Object.defineProperty(GAACommand.prototype, "cmdId", {
    get: function () {
      return c.ClientConstSF.S2C_GET_AREAS;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.CastleCommand.prototype, "cmdId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GAACommand.prototype.executeCommand = function (e, t) {
    var i = [];
    switch (e) {
      case s.ERROR.ALL_OK:
        try {
          var n = JSON.parse(t[1]);
        } catch (e) {
          o.debug("Invalid Json String appears");
          o.debug(e.toString());
          return false;
        }
        p.CastleModel.userData.parse_UAP(n.uap);
        p.CastleModel.otherPlayerData.parseOwnerInfoArray(n.OI);
        var a = 0;
        a = n.KID ? l.int(n.KID) : l.int(p.CastleModel.kingdomData.activeKingdomID);
        if (p.CastleModel.kingdomData.activeKingdomID != a) {
          break;
        }
        if (p.CastleModel.worldmapData) {
          var c = p.CastleModel.worldmapData.getExpiredRelocationObject();
          if (c) {
            g.CastleLayoutManager.getInstance().worldmapScreen.renderer.clearMapobjects(true);
            p.CastleModel.worldmapData.relocationObjects.splice(p.CastleModel.worldmapData.relocationObjects.indexOf(c), 1);
          }
          if (a == r.FactionConst.KINGDOM_ID && !p.CastleModel.specialEventData.getActiveEventByEventId(s.EventConst.EVENTTYPE_FACTION)) {
            o.CommandController.instance.executeCommand(d.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
            return;
          }
          i = p.CastleModel.worldmapData.parseAreaInfos(n.AI);
          if (a != r.FactionConst.KINGDOM_ID) {
            p.CastleModel.worldmapData.areaTiles.setReadyForRendering(i);
          }
        }
        if (this.layoutManager.worldmapScreen && this.layoutManager.worldmapScreen.renderer) {
          this.layoutManager.worldmapScreen.renderer.invalidateMap();
          this.layoutManager.worldmapScreen.renderer.invalideteMovements();
          this.layoutManager.updateGameStage();
          this.layoutManager.renderStaticStage();
        }
        break;
      case s.ERROR.TARGETAREA_DOES_NOT_EXSIST:
    }
    this.controller.dispatchEvent(new u.CastleServerMessageArrivedEvent(u.CastleServerMessageArrivedEvent.GAA_ARRIVED, [i]));
    return false;
  };
  return GAACommand;
}(h.CastleCommand);
exports.GAACommand = C;
a.classImplementsInterfaces(C, "IExecCommand");