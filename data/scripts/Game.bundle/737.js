Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleFriendListEvent(t, i = false, n = false) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n) || this;
  }
  n.__extends(CastleFriendListEvent, e);
  CastleFriendListEvent.__initialize_static_members = function () {
    CastleFriendListEvent.FRIEND_LIST_UPDATED = "friendListUpdated";
  };
  return CastleFriendListEvent;
}(createjs.Event);
exports.CastleFriendListEvent = o;
o.__initialize_static_members();