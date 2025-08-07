Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = function (e) {
  function MessageSpyCancelledVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MessageSpyCancelledVO, e);
  MessageSpyCancelledVO.prototype.parseSubject = function () {
    return o.Localize.text("spyWarning_warning");
  };
  return MessageSpyCancelledVO;
}(require("./1952.js").MessageCancelledVO);
exports.MessageSpyCancelledVO = a;