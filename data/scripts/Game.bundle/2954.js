Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDuplicateRecruitmentLoopVO(t, i, n, o) {
    var a = this;
    a.LID = 0;
    a.SID = 0;
    a.AID = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).LID = t;
    a.SID = n;
    a.AID = o;
    a.A = i;
    return a;
  }
  n.__extends(C2SDuplicateRecruitmentLoopVO, e);
  C2SDuplicateRecruitmentLoopVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DUPLICATE_RECRUITMENT_LOOP;
  };
  return C2SDuplicateRecruitmentLoopVO;
}(o.BasicCommandVO);
exports.C2SDuplicateRecruitmentLoopVO = s;