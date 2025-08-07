Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SAttackInfoLandmarkVO(t, i, n) {
    var o = this;
    o.KID = 0;
    o.TX = 0;
    o.TY = 0;
    o.SX = 0;
    o.SY = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).KID = n;
    o.TX = a.int(t.x);
    o.TY = a.int(t.y);
    o.SX = a.int(i.x);
    o.SY = a.int(i.y);
    return o;
  }
  n.__extends(C2SAttackInfoLandmarkVO, e);
  C2SAttackInfoLandmarkVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ATTACK_INFO_LANDMARK;
  };
  return C2SAttackInfoLandmarkVO;
}(o.BasicCommandVO);
exports.C2SAttackInfoLandmarkVO = r;