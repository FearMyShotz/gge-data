Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSellGemVO(t, i, n) {
    var o = this;
    o.GID = NaN;
    o.RGEM = 0;
    o.LFID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).GID = t;
    o.RGEM = a.int(i ? 1 : 0);
    o.LFID = n;
    return o;
  }
  n.__extends(C2SSellGemVO, e);
  C2SSellGemVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SELL_GEM;
  };
  return C2SSellGemVO;
}(o.BasicCommandVO);
exports.C2SSellGemVO = r;