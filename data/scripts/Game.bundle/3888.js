Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SReportUserSurveyVO(t, i, n) {
    var o = this;
    o.SID = 0;
    o.ST = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).SID = t;
    o.ST = i;
    o.A = n;
    return o;
  }
  n.__extends(C2SReportUserSurveyVO, e);
  C2SReportUserSurveyVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REPORT_USER_SURVEY;
  };
  return C2SReportUserSurveyVO;
}(o.BasicCommandVO);
exports.C2SReportUserSurveyVO = s;