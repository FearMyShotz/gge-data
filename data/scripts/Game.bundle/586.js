Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleChatEvent(t, i = null, n = false, o = false) {
    var a = this;
    a.params = [];
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleChatEvent, e);
  CastleChatEvent.__initialize_static_members = function () {
    CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED = "newChatMessage";
    CastleChatEvent.OPEN_CHAT = "openChat";
  };
  return CastleChatEvent;
}(createjs.Event);
exports.CastleChatEvent = o;
o.__initialize_static_members();