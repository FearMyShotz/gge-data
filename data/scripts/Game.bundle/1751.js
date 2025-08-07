Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SFindNextEnemyCastleVO(t, i, n, o = -1, a = -1) {
    var s = this;
    s.X = 0;
    s.Y = 0;
    s.N = 0;
    s.LMIN = 0;
    s.LMAX = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).X = t;
    s.Y = i;
    s.N = n;
    s.LMIN = o;
    s.LMAX = a;
    return s;
  }
  n.__extends(C2SFindNextEnemyCastleVO, e);
  C2SFindNextEnemyCastleVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_FIND_NEXT_ENEMY_CASTLE;
  };
  return C2SFindNextEnemyCastleVO;
}(o.BasicCommandVO);
exports.C2SFindNextEnemyCastleVO = s;