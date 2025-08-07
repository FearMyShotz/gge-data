Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleChangelistRewardsEvent(t, i, n = false, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).rewards = i;
    return a;
  }
  n.__extends(CastleChangelistRewardsEvent, e);
  CastleChangelistRewardsEvent.__initialize_static_members = function () {
    CastleChangelistRewardsEvent.DATA_UPDATED = "dataUpdated";
  };
  return CastleChangelistRewardsEvent;
}(createjs.Event);
exports.CastleChangelistRewardsEvent = o;
o.__initialize_static_members();