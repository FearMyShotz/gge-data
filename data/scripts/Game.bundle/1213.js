Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetFeastCostReductionVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(C2SGetFeastCostReductionVO, e);
  C2SGetFeastCostReductionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_FEAST_COST_REDUCTION;
  };
  return C2SGetFeastCostReductionVO;
}(o.BasicCommandVO);
exports.C2SGetFeastCostReductionVO = s;