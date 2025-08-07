Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SJoinCampVO(t) {
    var i = this;
    i.MID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2SJoinCampVO, e);
  C2SJoinCampVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_JOIN_CAMP;
  };
  return C2SJoinCampVO;
}(o.BasicCommandVO);
exports.C2SJoinCampVO = s;