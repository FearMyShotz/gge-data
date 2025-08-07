Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SFindNextMapObjectVO(t, i, n = -1, o = -1, a = -1) {
    var s = this;
    s.T = 0;
    s.KID = 0;
    s.LMIN = 0;
    s.LMAX = 0;
    s.NID = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).T = t;
    s.KID = i;
    s.LMIN = n;
    s.LMAX = o;
    s.NID = a;
    return s;
  }
  n.__extends(C2SFindNextMapObjectVO, e);
  C2SFindNextMapObjectVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_FIND_NEXT_MAPOBJECT;
  };
  return C2SFindNextMapObjectVO;
}(o.BasicCommandVO);
exports.C2SFindNextMapObjectVO = s;