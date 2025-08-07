Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ChatMessageVO() {
    this.playerID = 0;
  }
  ChatMessageVO.prototype.parseObj = function (e) {
    this.playerID = a.int(e.PID);
    this.playerName = e.PN;
    this.messageText = o.TextValide.parseChatJSONMessage(e.MT);
    var t = new Date();
    t.setTime(t.getTime() - e.MA * s.ClientConstTime.SEC_2_MILLISEC);
    this.bornDate = t;
  };
  return ChatMessageVO;
}();
exports.ChatMessageVO = n;
var o = require("./2.js");
var a = require("./6.js");
var s = require("./28.js");