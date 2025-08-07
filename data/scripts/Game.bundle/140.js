Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleMessageDataEvent(t, i = null, n = true, o = false) {
    var a = this;
    CONSTRUCTOR_HACK;
    (a = e.call(this, t, n, o) || this).params = i;
    return a;
  }
  n.__extends(CastleMessageDataEvent, e);
  CastleMessageDataEvent.__initialize_static_members = function () {
    CastleMessageDataEvent.NEW_MESSAGE_BODY = "newmessagebody";
    CastleMessageDataEvent.UPDATE_MESSAGELIST = "updatemessagelist";
    CastleMessageDataEvent.SENT_OK = "sent_ok";
    CastleMessageDataEvent.SENT_ERROR = "sent_error";
    CastleMessageDataEvent.GET_TRADE_DATA = "gettradedata";
    CastleMessageDataEvent.GET_IGNORED_PLAYER = "getignoredplayer";
    CastleMessageDataEvent.MESSAGE_ARCHIVED = "message_archived";
    CastleMessageDataEvent.MESSAGE_NO_EXIST = "messageNoExist";
  };
  return CastleMessageDataEvent;
}(createjs.Event);
exports.CastleMessageDataEvent = o;
o.__initialize_static_members();