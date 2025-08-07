Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleArmyDataEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.mapmovementVO = i;
    return a;
  }
  n.__extends(CastleArmyDataEvent, e);
  CastleArmyDataEvent.NEW_MOVEMENT = "newymovement";
  CastleArmyDataEvent.REMOVE_MOVEMENT = "removemovement";
  CastleArmyDataEvent.MOVEMENTS_CHANGED = "movementschanged";
  CastleArmyDataEvent.MOVEMENTS_REMOVED = "movementsremoved";
  CastleArmyDataEvent.ATTACK_WARNINGS_UPDATED = "attackWarningsUpdated";
  return CastleArmyDataEvent;
}(createjs.Event);
exports.CastleArmyDataEvent = o;