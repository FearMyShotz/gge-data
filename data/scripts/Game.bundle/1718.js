Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleGenericRankingComponentEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleGenericRankingComponentEvent, e);
  CastleGenericRankingComponentEvent.__initialize_static_members = function () {
    CastleGenericRankingComponentEvent.LEAGUETYPE_CHANGED = "leaguetype_changed";
  };
  return CastleGenericRankingComponentEvent;
}(createjs.Event);
exports.CastleGenericRankingComponentEvent = o;
o.__initialize_static_members();