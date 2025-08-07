Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function C2SConfirmC2VO(t, i) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).cmdID = t;
    Object.assign(n, JSON.parse(i));
    return n;
  }
  n.__extends(C2SConfirmC2VO, e);
  C2SConfirmC2VO.prototype.getCmdId = function () {
    return this.cmdID;
  };
  return C2SConfirmC2VO;
}(require("./2.js").BasicCommandVO);
exports.C2SConfirmC2VO = o;