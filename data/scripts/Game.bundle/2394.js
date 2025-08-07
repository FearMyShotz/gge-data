Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SCreateMarketMovementVO(t, i, n, o, s, r, l, c) {
    var u = this;
    u.KID = 0;
    u.SID = 0;
    u.TX = 0;
    u.TY = 0;
    u.HBW = 0;
    u.PTT = 0;
    u.SD = 0;
    CONSTRUCTOR_HACK;
    (u = e.call(this) || this).KID = t;
    u.SID = i;
    u.TX = n;
    u.TY = o;
    u.HBW = a.int(l ? -1 : s);
    u.G = r;
    u.PTT = a.int(l ? 1 : 0);
    u.SD = c;
    return u;
  }
  n.__extends(C2SCreateMarketMovementVO, e);
  C2SCreateMarketMovementVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_CREATE_MARKET_MOVEMENT;
  };
  return C2SCreateMarketMovementVO;
}(o.BasicCommandVO);
exports.C2SCreateMarketMovementVO = r;