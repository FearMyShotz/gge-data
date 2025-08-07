Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMarketCarriageNotifyVO(t) {
    var i = this;
    i.MID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2SMarketCarriageNotifyVO, e);
  C2SMarketCarriageNotifyVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MARKET_CARRIAGE_NOTIFY;
  };
  return C2SMarketCarriageNotifyVO;
}(o.BasicCommandVO);
exports.C2SMarketCarriageNotifyVO = s;