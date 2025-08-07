Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SIsoBuyExpansionVO(t, i, n, o) {
    var a = this;
    a.X = 0;
    a.Y = 0;
    a.R = 0;
    a.CT = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).X = t;
    a.Y = i;
    a.R = n;
    a.CT = o;
    return a;
  }
  n.__extends(C2SIsoBuyExpansionVO, e);
  C2SIsoBuyExpansionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_EXPANSION;
  };
  return C2SIsoBuyExpansionVO;
}(o.BasicCommandVO);
exports.C2SIsoBuyExpansionVO = s;