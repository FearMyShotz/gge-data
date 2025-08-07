Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRefreshMercenaryMissionVO(t) {
    var i = this;
    i.MID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2SRefreshMercenaryMissionVO, e);
  C2SRefreshMercenaryMissionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REFRESH_MERCENARY_MISSION;
  };
  return C2SRefreshMercenaryMissionVO;
}(o.BasicCommandVO);
exports.C2SRefreshMercenaryMissionVO = s;