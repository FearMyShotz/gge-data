Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAutoSellConditionsEventVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetAutoSellConditionsEventVO, e);
  C2SGetAutoSellConditionsEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_AUTO_SELL_CONDITIONS;
  };
  return C2SGetAutoSellConditionsEventVO;
}(o.BasicCommandVO);
exports.C2SGetAutoSellConditionsEventVO = s;