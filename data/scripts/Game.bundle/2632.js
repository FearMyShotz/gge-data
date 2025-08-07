Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SDecoForgeFuseEventVO(t, i, n, o, s, r, l, c, u) {
    var d = this;
    d.FCID = 0;
    d.FFFP = 0;
    d.FSUID = 0;
    d.FSWID = 0;
    d.FTOID = 0;
    d.FTSID = 0;
    d.FTAID = 0;
    d.FTUID = 0;
    d.FTWID = 0;
    CONSTRUCTOR_HACK;
    (d = e.call(this) || this).FCID = c;
    d.FFFP = a.int(u ? 1 : 0);
    d.FSUID = i;
    d.FSWID = t;
    d.FTOID = l;
    d.FTSID = n;
    d.FTAID = o;
    d.FTUID = r;
    d.FTWID = s;
    return d;
  }
  n.__extends(C2SDecoForgeFuseEventVO, e);
  C2SDecoForgeFuseEventVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_DECO_FORGE_FUSE;
  };
  return C2SDecoForgeFuseEventVO;
}(o.BasicCommandVO);
exports.C2SDecoForgeFuseEventVO = r;