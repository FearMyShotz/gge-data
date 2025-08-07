Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetGeneralsInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetGeneralsInfoVO, e);
  C2SGetGeneralsInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_GENERALS_INFO;
  };
  return C2SGetGeneralsInfoVO;
}(o.BasicCommandVO);
exports.C2SGetGeneralsInfoVO = s;