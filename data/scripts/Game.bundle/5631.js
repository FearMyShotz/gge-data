Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SUpdatePreDefinedAttackSetupVO(t) {
    var i = this;
    i.S = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).S = t.index;
    i.A = t.unitsAsString;
    return i;
  }
  n.__extends(C2SUpdatePreDefinedAttackSetupVO, e);
  C2SUpdatePreDefinedAttackSetupVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_UPDATE_PREDEFINED_ATTACK_SETUP;
  };
  return C2SUpdatePreDefinedAttackSetupVO;
}(o.BasicCommandVO);
exports.C2SUpdatePreDefinedAttackSetupVO = s;