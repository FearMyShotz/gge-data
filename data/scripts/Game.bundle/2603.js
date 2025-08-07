Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyUnlockedSymbolVO(t) {
    var i = e.call(this) || this;
    i.CSI = t;
    return i;
  }
  n.__extends(C2SBuyUnlockedSymbolVO, e);
  C2SBuyUnlockedSymbolVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_UNLOCKED_SYMBOL;
  };
  return C2SBuyUnlockedSymbolVO;
}(o.BasicCommandVO);
exports.C2SBuyUnlockedSymbolVO = s;