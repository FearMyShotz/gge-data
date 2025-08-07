Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCollectPatchNoteRewardsVO(t, i) {
    var n = this;
    n.PNID = 0;
    n.MID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PNID = t;
    n.MID = i;
    return n;
  }
  n.__extends(C2SCollectPatchNoteRewardsVO, e);
  C2SCollectPatchNoteRewardsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_COLLECT_PATCH_NOTE_REWARDS;
  };
  return C2SCollectPatchNoteRewardsVO;
}(o.BasicCommandVO);
exports.C2SCollectPatchNoteRewardsVO = s;