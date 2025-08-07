Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSelectKingdomCastleVO(t, i, n, o, s = false) {
    var r = this;
    r.ID = 0;
    r.D = 0;
    r.PWR = 0;
    r.OC2 = 0;
    r.SID = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this).ID = t;
    r.D = i;
    r.OC2 = a.int(n ? 1 : 0);
    r.PWR = a.int(s ? 1 : 0);
    r.SID = o;
    return r;
  }
  n.__extends(C2SSelectKingdomCastleVO, e);
  C2SSelectKingdomCastleVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SELECT_PREBUILT_CASTLE_ID;
  };
  return C2SSelectKingdomCastleVO;
}(o.BasicCommandVO);
exports.C2SSelectKingdomCastleVO = r;