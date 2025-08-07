Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SGetConquerMetropolInfosVO(t, i) {
    var n = this;
    n.KID = 0;
    n.TX = 0;
    n.TY = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).KID = i;
    n.TX = a.int(t.x);
    n.TY = a.int(t.y);
    return n;
  }
  n.__extends(C2SGetConquerMetropolInfosVO, e);
  C2SGetConquerMetropolInfosVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_GET_CONQUER_INFO_METROPOL;
  };
  return C2SGetConquerMetropolInfosVO;
}(o.BasicCommandVO);
exports.C2SGetConquerMetropolInfosVO = r;