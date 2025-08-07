Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./7.js");
var a = function (e) {
  function C2SStormIslandsInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SStormIslandsInfoVO, e);
  C2SStormIslandsInfoVO.prototype.getCmdId = function () {
    return o.ClientConstSF.C2S_STORM_ISLANDS_INFO;
  };
  return C2SStormIslandsInfoVO;
}(require("./2.js").BasicCommandVO);
exports.C2SStormIslandsInfoVO = a;