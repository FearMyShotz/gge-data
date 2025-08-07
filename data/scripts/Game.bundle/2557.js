Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSupportDefenceInfoVO(t, i) {
    var n = this;
    n.TX = 0;
    n.TY = 0;
    n.SX = 0;
    n.SY = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).TX = a.int(t.x);
    n.TY = a.int(t.y);
    n.SX = a.int(i.x);
    n.SY = a.int(i.y);
    return n;
  }
  n.__extends(C2SSupportDefenceInfoVO, e);
  C2SSupportDefenceInfoVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SUPPORT_DEFENCE_INFO;
  };
  return C2SSupportDefenceInfoVO;
}(o.BasicCommandVO);
exports.C2SSupportDefenceInfoVO = r;