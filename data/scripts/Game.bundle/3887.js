Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetSurveyInfoVO(t) {
    var i = this;
    i.SID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).SID = t;
    return i;
  }
  n.__extends(C2SGetSurveyInfoVO, e);
  C2SGetSurveyInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_SURVEY_INFO;
  };
  return C2SGetSurveyInfoVO;
}(o.BasicCommandVO);
exports.C2SGetSurveyInfoVO = s;