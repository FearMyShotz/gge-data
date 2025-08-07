Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDuplicateRecruitmentInfoVO(t, i, n) {
    var o = this;
    o.LID = 0;
    o.AID = 0;
    o.SID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).LID = t;
    o.AID = i;
    o.SID = n;
    return o;
  }
  n.__extends(C2SDuplicateRecruitmentInfoVO, e);
  C2SDuplicateRecruitmentInfoVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DUPLICATE_RECRUITMENT_INFO;
  };
  return C2SDuplicateRecruitmentInfoVO;
}(o.BasicCommandVO);
exports.C2SDuplicateRecruitmentInfoVO = s;