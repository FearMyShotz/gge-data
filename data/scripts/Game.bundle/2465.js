Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGlobalServerPreviousRunInfoVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(C2SGlobalServerPreviousRunInfoVO, e);
  C2SGlobalServerPreviousRunInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GLOBAL_SERVER_PREVIOUS_RUN_INFO;
  };
  return C2SGlobalServerPreviousRunInfoVO;
}(o.BasicCommandVO);
exports.C2SGlobalServerPreviousRunInfoVO = s;