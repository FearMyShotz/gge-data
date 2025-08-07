Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SExtractGemVO(t, i) {
    var n = this;
    n.EID = 0;
    n.LID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).EID = t;
    n.LID = i;
    return n;
  }
  n.__extends(C2SExtractGemVO, e);
  C2SExtractGemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_EXTRACT_GEM;
  };
  return C2SExtractGemVO;
}(o.BasicCommandVO);
exports.C2SExtractGemVO = s;