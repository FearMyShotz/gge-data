Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./4.js");
var u = function (e) {
  function SwitchKingdomCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(SwitchKingdomCommand, e);
  SwitchKingdomCommand.prototype.execute = function (e = null) {
    var t = r.int(r.int(e));
    if (t == -1 || !c.CastleModel.kingdomData.kingdomVOs.has(t)) {
      t = 0;
    }
    if (c.CastleModel.kingdomData.activeKingdomID != t) {
      if (t == s.FactionConst.KINGDOM_ID) {
        l.ClientConstCastle.setWorldmapSize(s.FactionConst.MAP_WIDTH_IN_SECTORS, s.FactionConst.MAP_HEIGHT_IN_SECTORS);
      } else {
        l.ClientConstCastle.setWorldmapSize(l.ClientConstCastle.GGC_X, l.ClientConstCastle.GGC_Y);
      }
      c.CastleModel.kingdomData.activeKingdomID = t;
      c.CastleModel.privateOfferData.onKingdomSwitched();
    }
  };
  return SwitchKingdomCommand;
}(o.SimpleCommand);
exports.SwitchKingdomCommand = u;
a.classImplementsInterfaces(u, "ISimpleCommand");