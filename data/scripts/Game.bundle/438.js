Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMarketInfoVO() {
    var t = this;
    t.S = 0;
    t.KID = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).S = C2SMarketInfoVO.SCOPE_ALL_KINGDOMS;
    t.KID = -1;
    return t;
  }
  n.__extends(C2SMarketInfoVO, e);
  C2SMarketInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MARKET_INFO;
  };
  C2SMarketInfoVO.__initialize_static_members = function () {
    C2SMarketInfoVO.SCOPE_CURRENT_KINGDOM = 0;
    C2SMarketInfoVO.SCOPE_ALL_KINGDOMS = 1;
  };
  return C2SMarketInfoVO;
}(o.BasicCommandVO);
exports.C2SMarketInfoVO = s;
s.__initialize_static_members();