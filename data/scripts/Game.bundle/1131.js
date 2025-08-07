Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleLostAndFoundDataEvent(t, i = false, n = false) {
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleLostAndFoundDataEvent, e);
  CastleLostAndFoundDataEvent.UPDATE_DATA = "UPDATE_DATA";
  return CastleLostAndFoundDataEvent;
}(createjs.Event);
exports.CastleLostAndFoundDataEvent = o;