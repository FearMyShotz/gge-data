Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./1960.js");
var s = function (e) {
  function MessageSystemVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(MessageSystemVO, e);
  Object.defineProperty(MessageSystemVO.prototype, "senderName", {
    get: function () {
      return o.Localize.text("system");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.MessageUserVO.prototype, "senderName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return MessageSystemVO;
}(a.MessageUserVO);
exports.MessageSystemVO = s;