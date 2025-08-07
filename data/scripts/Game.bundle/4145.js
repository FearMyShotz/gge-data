Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSeasonJoinEventVO(t) {
    var i = this;
    i.MID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2SSeasonJoinEventVO, e);
  C2SSeasonJoinEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SEASON_JOIN_EVENT;
  };
  return C2SSeasonJoinEventVO;
}(o.BasicCommandVO);
exports.C2SSeasonJoinEventVO = s;