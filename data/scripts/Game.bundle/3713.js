Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SLaunchTauntAttackVO(t, i) {
    var n = this;
    n.AV = 0;
    n.EID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).AV = a.int(t ? 1 : 0);
    n.EID = i;
    return n;
  }
  n.__extends(C2SLaunchTauntAttackVO, e);
  C2SLaunchTauntAttackVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_LAUNCH_TAUNT_ATTACK;
  };
  return C2SLaunchTauntAttackVO;
}(o.BasicCommandVO);
exports.C2SLaunchTauntAttackVO = r;