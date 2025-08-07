Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCraftGemVO(t, i, n) {
    var o = this;
    o.MID = 0;
    o.C2 = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).MID = t;
    o.UG = i;
    o.C2 = a.int(n ? 1 : 0);
    return o;
  }
  n.__extends(C2SCraftGemVO, e);
  C2SCraftGemVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_CRAFT_GEM;
  };
  return C2SCraftGemVO;
}(o.BasicCommandVO);
exports.C2SCraftGemVO = r;