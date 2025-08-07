Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAreasVO(t, i, n, o, a) {
    var s = this;
    s.KID = 0;
    s.AX1 = 0;
    s.AY1 = 0;
    s.AX2 = 0;
    s.AY2 = 0;
    CONSTRUCTOR_HACK;
    (s = e.call(this) || this).KID = t;
    s.AX1 = i;
    s.AY1 = n;
    s.AX2 = o;
    s.AY2 = a;
    return s;
  }
  n.__extends(C2SGetAreasVO, e);
  C2SGetAreasVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_AREAS;
  };
  return C2SGetAreasVO;
}(o.BasicCommandVO);
exports.C2SGetAreasVO = s;