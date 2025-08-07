Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SResearchFinishInstantVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SResearchFinishInstantVO, e);
  C2SResearchFinishInstantVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_RESEARCH_FINISH_INSTANT;
  };
  return C2SResearchFinishInstantVO;
}(o.BasicCommandVO);
exports.C2SResearchFinishInstantVO = s;