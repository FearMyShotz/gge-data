Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function PlayerGiftEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(PlayerGiftEvent, e);
  PlayerGiftEvent.__initialize_static_members = function () {
    PlayerGiftEvent.PLAYER_GIFT_LIST_RECEIVED = "PLAYER_GIFT_LIST_RECEIVED";
  };
  return PlayerGiftEvent;
}(createjs.Event);
exports.PlayerGiftEvent = o;
o.__initialize_static_members();