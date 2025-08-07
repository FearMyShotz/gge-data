Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function ForwardMessageListItemVO() {
    var t = this;
    t.level = 0;
    t.honor = 0;
    t.isReceiver = false;
    t.playerID = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ForwardMessageListItemVO, e);
  return ForwardMessageListItemVO;
}(require("./2.js").ScrollItemVO);
exports.ForwardMessageListItemVO = o;