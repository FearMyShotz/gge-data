Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SJoinCastleVO(t, i) {
    var n = this;
    n.CID = 0;
    n.KID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).CID = t;
    n.KID = i;
    return n;
  }
  n.__extends(C2SJoinCastleVO, e);
  C2SJoinCastleVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_JOIN_CASTLE;
  };
  C2SJoinCastleVO.MY_CASTLE = -1;
  return C2SJoinCastleVO;
}(o.BasicCommandVO);
exports.C2SJoinCastleVO = s;