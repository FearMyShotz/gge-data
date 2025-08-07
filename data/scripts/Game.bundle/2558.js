Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2STroopSupportInfoVO(t, i, n) {
    var o = this;
    o.SX = 0;
    o.SY = 0;
    o.TX = 0;
    o.TY = 0;
    o.KID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).SX = a.int(i.x);
    o.SY = a.int(i.y);
    o.TX = a.int(t.x);
    o.TY = a.int(t.y);
    o.KID = n;
    return o;
  }
  n.__extends(C2STroopSupportInfoVO, e);
  C2STroopSupportInfoVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_TROOP_SUPPORT_INFO;
  };
  return C2STroopSupportInfoVO;
}(o.BasicCommandVO);
exports.C2STroopSupportInfoVO = r;