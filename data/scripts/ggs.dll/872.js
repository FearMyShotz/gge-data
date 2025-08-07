Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = function (e) {
  function DevInstanceVO() {
    var t = e.call(this) || this;
    t._type = "Dev";
    return t;
  }
  i.__extends(DevInstanceVO, e);
  return DevInstanceVO;
}(require("./483.js").TestInstanceVO);
exports.DevInstanceVO = a;