Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SLoginVO(t, i, n, s, r, l, c, u, d, p = "", h = false) {
    var g = this;
    g.CONM = 0;
    g.RTM = 0;
    g.ID = 0;
    g.PL = 0;
    CONSTRUCTOR_HACK;
    (g = e.call(this) || this).NOM = t;
    g.PW = i;
    if (i && i.length > 0) {
      n = null;
    }
    g.LT = n;
    g.LANG = s;
    g.DID = r;
    g.CONM = l;
    g.RTM = c;
    g.AID = u;
    g.KID = p;
    g.ID = 0;
    g.REF = d;
    g.PL = a.int(h ? 1 : 0);
    g.GCI = o.EnvGlobalsHandler.globals.urlVariables.urlParams.get("gci") || "";
    g.SID = o.EnvGlobalsHandler.globals.storeId;
    g.PLFID = o.EnvGlobalsHandler.globals.platformId;
    return g;
  }
  n.__extends(C2SLoginVO, e);
  C2SLoginVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_LOGIN;
  };
  return C2SLoginVO;
}(o.BasicCommandVO);
exports.C2SLoginVO = r;