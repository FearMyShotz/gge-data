Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SUnlockPreDefinedAttackSetupVO(t) {
    var i = this;
    i.S = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).S = t;
    return i;
  }
  n.__extends(C2SUnlockPreDefinedAttackSetupVO, e);
  C2SUnlockPreDefinedAttackSetupVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_UNLOCK_PREDEFINED_ATTACK_SETUP;
  };
  return C2SUnlockPreDefinedAttackSetupVO;
}(o.BasicCommandVO);
exports.C2SUnlockPreDefinedAttackSetupVO = s;