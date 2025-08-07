Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./6.js");
var r = require("./7.js");
var l = function (e) {
  function C2SFoundAllianceVO(t, i, n, o, r = -1, l = false) {
    var c = this;
    c.PO = 0;
    c.PWR = 0;
    c.IA = 1;
    CONSTRUCTOR_HACK;
    (c = e.call(this) || this).N = a.TextValide.getValideSmartFoxJSONTextMessage(t);
    c.D = a.TextValide.getValideSmartFoxJSONTextMessage(i);
    c.ALL = n;
    c.PO = r;
    c.PWR = s.int(l == 1 ? 1 : 0);
    c.IA = s.int(o == 1 ? 1 : 0);
    return c;
  }
  n.__extends(C2SFoundAllianceVO, e);
  C2SFoundAllianceVO.prototype.getCmdId = function () {
    return r.ClientConstSF.C2S_FOUND_ALLIANCE;
  };
  return C2SFoundAllianceVO;
}(o.BasicCommandVO);
exports.C2SFoundAllianceVO = l;