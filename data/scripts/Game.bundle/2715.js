Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SResearchInfoVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SResearchInfoVO, e);
  C2SResearchInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_RESEARCH_INFO;
  };
  return C2SResearchInfoVO;
}(o.BasicCommandVO);
exports.C2SResearchInfoVO = s;