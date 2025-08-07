Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleAllianceSearchEvent(t, i = null, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).searchList = i;
    return a;
  }
  n.__extends(CastleAllianceSearchEvent, e);
  CastleAllianceSearchEvent.ALLIANCE_SEARCH_UPDATED = "allianceSearchUpdated";
  return CastleAllianceSearchEvent;
}(createjs.Event);
exports.CastleAllianceSearchEvent = o;