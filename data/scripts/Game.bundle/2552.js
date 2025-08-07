Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SGetConquerCapitalInfosVO(t, i) {
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
  n.__extends(C2SGetConquerCapitalInfosVO, e);
  C2SGetConquerCapitalInfosVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_GET_CONQUER_INFO_CAPITAL;
  };
  return C2SGetConquerCapitalInfosVO;
}(o.BasicCommandVO);
exports.C2SGetConquerCapitalInfosVO = r;