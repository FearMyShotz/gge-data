Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAchievementListVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SAchievementListVO, e);
  C2SAchievementListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ACHIEVEMENT_LIST;
  };
  return C2SAchievementListVO;
}(o.BasicCommandVO);
exports.C2SAchievementListVO = s;