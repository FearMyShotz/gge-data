Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGachaSpinVO(t, i = 1) {
    var n = e.call(this) || this;
    n.EID = 0;
    n.AMT = 1;
    n.OB = 0;
    n.EID = t;
    n.AMT = i;
    return n;
  }
  n.__extends(C2SGachaSpinVO, e);
  C2SGachaSpinVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GACHA_SPIN;
  };
  return C2SGachaSpinVO;
}(o.BasicCommandVO);
exports.C2SGachaSpinVO = s;