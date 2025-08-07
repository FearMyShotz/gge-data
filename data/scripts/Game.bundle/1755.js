Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SKingdomPayInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SKingdomPayInfoVO, e);
  C2SKingdomPayInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_KINGDOM_INFO;
  };
  return C2SKingdomPayInfoVO;
}(o.BasicCommandVO);
exports.C2SKingdomPayInfoVO = s;