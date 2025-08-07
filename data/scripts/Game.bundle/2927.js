Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSetBreweryProductionVO(t, i, n, o, a, s, r) {
    var l = this;
    l.KID = 0;
    l.AID = 0;
    l.WID = 0;
    l.OID = 0;
    CONSTRUCTOR_HACK;
    (l = e.call(this) || this).KID = t;
    l.AID = i;
    l.WID = n;
    l.OID = o;
    l.PA = {
      MEAD: a
    };
    l.MS = {
      F: s,
      HONEY: r
    };
    return l;
  }
  n.__extends(C2SSetBreweryProductionVO, e);
  C2SSetBreweryProductionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_AREA_BUILDING_PRODUCTION_INFO;
  };
  return C2SSetBreweryProductionVO;
}(o.BasicCommandVO);
exports.C2SSetBreweryProductionVO = s;