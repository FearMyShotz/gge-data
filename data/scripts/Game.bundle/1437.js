Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleFactionBalanceEvent(t, i, n, o = true, a = false) {
    var s = this;
    s.redFactionPlayerPercentAmount = 0;
    s.bluePlayers = 0;
    s.redPlayers = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this, t, o, a) || this).bluePlayers = i;
    s.redPlayers = n;
    return s;
  }
  n.__extends(CastleFactionBalanceEvent, e);
  CastleFactionBalanceEvent.__initialize_static_members = function () {
    CastleFactionBalanceEvent.FACTION_BALACE_UPDATED = "FACTION_BALACE_UPDATED";
  };
  return CastleFactionBalanceEvent;
}(createjs.Event);
exports.CastleFactionBalanceEvent = o;
o.__initialize_static_members();