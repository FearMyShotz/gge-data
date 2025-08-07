Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetPreDefinedAttackSetupVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetPreDefinedAttackSetupVO, e);
  C2SGetPreDefinedAttackSetupVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_PREDEFINED_ATTACK_SETUP;
  };
  return C2SGetPreDefinedAttackSetupVO;
}(o.BasicCommandVO);
exports.C2SGetPreDefinedAttackSetupVO = s;