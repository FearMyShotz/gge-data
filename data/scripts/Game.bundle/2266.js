Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./7.js");
var l = function (e) {
  function C2SUserAttackProtectionVO(t = s.int(a.WorldClassic.KINGDOM_ID)) {
    var i = this;
    i.KID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).KID = t;
    return i;
  }
  n.__extends(C2SUserAttackProtectionVO, e);
  C2SUserAttackProtectionVO.prototype.getCmdId = function () {
    return r.ClientConstSF.C2S_USER_ATTACK_PROTECTION;
  };
  return C2SUserAttackProtectionVO;
}(o.BasicCommandVO);
exports.C2SUserAttackProtectionVO = l;