Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetLordsInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetLordsInfoVO, e);
  C2SGetLordsInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_LORDS_INFO;
  };
  return C2SGetLordsInfoVO;
}(o.BasicCommandVO);
exports.C2SGetLordsInfoVO = s;