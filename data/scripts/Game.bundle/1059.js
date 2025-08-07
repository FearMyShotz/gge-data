Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetTaxInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetTaxInfoVO, e);
  C2SGetTaxInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_TAX_INFO;
  };
  return C2SGetTaxInfoVO;
}(o.BasicCommandVO);
exports.C2SGetTaxInfoVO = s;