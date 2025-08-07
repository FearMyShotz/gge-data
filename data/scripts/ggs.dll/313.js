Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function HTMLTextCustomVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.appendTextGlue = "\n";
    return t;
  }
  i.__extends(HTMLTextCustomVO, e);
  return HTMLTextCustomVO;
}(require("./314.js").HTMLTextVO);
exports.HTMLTextCustomVO = a;