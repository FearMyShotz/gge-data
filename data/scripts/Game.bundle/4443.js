Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SBuyFortuneTellerPackageVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SBuyFortuneTellerPackageVO, e);
  C2SBuyFortuneTellerPackageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_FORTUNE_TELLER_EVENT;
  };
  return C2SBuyFortuneTellerPackageVO;
}(o.BasicCommandVO);
exports.C2SBuyFortuneTellerPackageVO = s;