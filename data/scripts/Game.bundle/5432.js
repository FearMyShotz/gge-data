Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetPatchNoteRewardsVO(t) {
    var i = this;
    i.PNID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PNID = t;
    return i;
  }
  n.__extends(C2SGetPatchNoteRewardsVO, e);
  C2SGetPatchNoteRewardsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_PATCH_NOTE_REWARDS;
  };
  return C2SGetPatchNoteRewardsVO;
}(o.BasicCommandVO);
exports.C2SGetPatchNoteRewardsVO = s;