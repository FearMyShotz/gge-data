Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleDetailedCastleListEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleDetailedCastleListEvent, e);
  CastleDetailedCastleListEvent.__initialize_static_members = function () {
    CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED = "detailed_castlelistdata_updated";
  };
  return CastleDetailedCastleListEvent;
}(createjs.Event);
exports.CastleDetailedCastleListEvent = o;
o.__initialize_static_members();