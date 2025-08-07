Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = require("./4.js");
var r = function (e) {
  function C2SLuckyWheelSpinVO(t) {
    var i = this;
    i.LWET = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).LWET = t;
    if (i.LWET == 1) {
      s.CastleModel.saleDaysLuckyWheelData.doNormalSpin();
    } else {
      s.CastleModel.luckyWheelData.doNormalSpin();
    }
    return i;
  }
  n.__extends(C2SLuckyWheelSpinVO, e);
  C2SLuckyWheelSpinVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_LUCKY_WHEEL_SPIN;
  };
  return C2SLuckyWheelSpinVO;
}(o.BasicCommandVO);
exports.C2SLuckyWheelSpinVO = r;