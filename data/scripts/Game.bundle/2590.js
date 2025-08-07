Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyPremiumFlagVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SBuyPremiumFlagVO, e);
  C2SBuyPremiumFlagVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_BUY_PREMIUIM_FLAG;
  };
  return C2SBuyPremiumFlagVO;
}(o.BasicCommandVO);
exports.C2SBuyPremiumFlagVO = s;