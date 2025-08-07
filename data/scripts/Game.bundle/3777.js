Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SLaunchDaimyoTauntAttackVO(t, i, n, o) {
    var a = this;
    a.TX = 0;
    a.TY = 0;
    a.SMK = 0;
    a.SPK = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).TX = t;
    a.TY = i;
    a.SMK = n;
    a.SPK = o;
    return a;
  }
  n.__extends(C2SLaunchDaimyoTauntAttackVO, e);
  C2SLaunchDaimyoTauntAttackVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_LAUNCH_DAIMYO_TAUNT_ATTACK;
  };
  return C2SLaunchDaimyoTauntAttackVO;
}(o.BasicCommandVO);
exports.C2SLaunchDaimyoTauntAttackVO = s;