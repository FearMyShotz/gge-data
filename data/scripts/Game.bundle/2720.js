Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMinuteSkipResearchVO(t) {
    var i = e.call(this) || this;
    i.MST = t;
    return i;
  }
  n.__extends(C2SMinuteSkipResearchVO, e);
  C2SMinuteSkipResearchVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MINUTE_SKIP_RESEARCH;
  };
  return C2SMinuteSkipResearchVO;
}(o.BasicCommandVO);
exports.C2SMinuteSkipResearchVO = s;