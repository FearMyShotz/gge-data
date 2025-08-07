Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleEilandEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleEilandEvent, e);
  CastleEilandEvent.EILAND_RESET = "EILAND_RESET";
  CastleEilandEvent.NEW_EILAND_TITLE = "NEW_EILAND_TITLE";
  CastleEilandEvent.STORM_ISLANDS_INFO_RECEIVED = "STORM_ISLAND_INFO_RECEIVED";
  return CastleEilandEvent;
}(createjs.Event);
exports.CastleEilandEvent = o;