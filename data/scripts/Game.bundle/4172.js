Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRuinInfoVO(t, i) {
    var n = this;
    n.PX = 0;
    n.PY = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PX = t;
    n.PY = i;
    return n;
  }
  n.__extends(C2SRuinInfoVO, e);
  C2SRuinInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_RUIN_INFO;
  };
  return C2SRuinInfoVO;
}(o.BasicCommandVO);
exports.C2SRuinInfoVO = s;