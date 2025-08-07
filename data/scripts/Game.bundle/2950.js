Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSetRecruitmentModeVO(t, i, n, o) {
    var s = this;
    s.LID = 0;
    s.SID = 0;
    s.AID = 0;
    s.RM = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).LID = t;
    s.SID = i;
    s.AID = n;
    s.RM = a.int(o ? 1 : 0);
    return s;
  }
  n.__extends(C2SSetRecruitmentModeVO, e);
  C2SSetRecruitmentModeVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SET_RECRUITMENT_MODE;
  };
  return C2SSetRecruitmentModeVO;
}(o.BasicCommandVO);
exports.C2SSetRecruitmentModeVO = r;