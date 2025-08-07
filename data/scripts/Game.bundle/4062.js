Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyLevelVO(t) {
    var i = this;
    i.NL = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).NL = t;
    return i;
  }
  n.__extends(C2SBuyLevelVO, e);
  C2SBuyLevelVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_LEVEL;
  };
  return C2SBuyLevelVO;
}(o.BasicCommandVO);
exports.C2SBuyLevelVO = s;