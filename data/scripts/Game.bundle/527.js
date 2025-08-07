Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleVIPDataEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleVIPDataEvent, e);
  CastleVIPDataEvent.__initialize_static_members = function () {
    CastleVIPDataEvent.VIP_DATA_UPDATED = "vipdataupdated";
  };
  return CastleVIPDataEvent;
}(createjs.Event);
exports.CastleVIPDataEvent = o;
o.__initialize_static_members();