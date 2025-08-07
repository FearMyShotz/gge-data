Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = require("./4.js");
var r = function (e) {
  function C2SLuckyWheelBuyJackpotVO() {
    var t = e.call(this) || this;
    s.CastleModel.luckyWheelData.doJackpotSpin();
    return t;
  }
  n.__extends(C2SLuckyWheelBuyJackpotVO, e);
  C2SLuckyWheelBuyJackpotVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_LUCKY_WHEEL_BUY_JACKPOT;
  };
  return C2SLuckyWheelBuyJackpotVO;
}(o.BasicCommandVO);
exports.C2SLuckyWheelBuyJackpotVO = r;