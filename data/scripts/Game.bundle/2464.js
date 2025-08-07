Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetWeeklyHonorRankVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetWeeklyHonorRankVO, e);
  C2SGetWeeklyHonorRankVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_WEEKLY_HONOR_SCORE;
  };
  return C2SGetWeeklyHonorRankVO;
}(o.BasicCommandVO);
exports.C2SGetWeeklyHonorRankVO = s;