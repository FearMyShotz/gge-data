Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SBugReportVO(t) {
    var i = e.call(this) || this;
    i.BM = a.TextValide.getValideSmartFoxJSONTextMessage(t);
    return i;
  }
  n.__extends(C2SBugReportVO, e);
  C2SBugReportVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_BUG_REPORT;
  };
  return C2SBugReportVO;
}(o.BasicCommandVO);
exports.C2SBugReportVO = r;