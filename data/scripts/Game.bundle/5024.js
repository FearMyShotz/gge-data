Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SUpdateRecruitmentLoopVO(t, i, n) {
    var o = this;
    o.LID = 0;
    o.L = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).LID = t;
    o.RS = i;
    o.L = n;
    return o;
  }
  n.__extends(C2SUpdateRecruitmentLoopVO, e);
  C2SUpdateRecruitmentLoopVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_UPDATE_RECRUITMENT_LOOP;
  };
  return C2SUpdateRecruitmentLoopVO;
}(o.BasicCommandVO);
exports.C2SUpdateRecruitmentLoopVO = s;