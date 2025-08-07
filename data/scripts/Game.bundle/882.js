Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SFestivalStartVO(t, i, n, o = -1, s = false) {
    var r = this;
    r.T = 0;
    r.CID = 0;
    r.KID = 0;
    r.PO = 0;
    r.PWR = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this).T = t;
    r.CID = i;
    r.KID = n;
    r.PO = o;
    r.PWR = a.int(s == 1 ? 1 : 0);
    return r;
  }
  n.__extends(C2SFestivalStartVO, e);
  C2SFestivalStartVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_FESTIVAL_START;
  };
  return C2SFestivalStartVO;
}(o.BasicCommandVO);
exports.C2SFestivalStartVO = r;