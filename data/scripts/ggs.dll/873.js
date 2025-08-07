Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function LiveInstanceVO() {
    var t = e.call(this) || this;
    t._type = "Live";
    return t;
  }
  i.__extends(LiveInstanceVO, e);
  return LiveInstanceVO;
}(require("./55.js").NetworkInstance);
exports.LiveInstanceVO = a;