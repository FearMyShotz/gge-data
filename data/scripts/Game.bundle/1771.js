Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSelectEventDifficultyVO(t, i, n) {
    var o = this;
    o.EID = 0;
    o.EDID = 0;
    o.C2U = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).EID = t;
    o.EDID = i;
    o.C2U = n ? 1 : 0;
    return o;
  }
  n.__extends(C2SSelectEventDifficultyVO, e);
  C2SSelectEventDifficultyVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SELECT_EVENT_AUTO_SCALING_DIFFICULTY_EVENT;
  };
  return C2SSelectEventDifficultyVO;
}(o.BasicCommandVO);
exports.C2SSelectEventDifficultyVO = s;