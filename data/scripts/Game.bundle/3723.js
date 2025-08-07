Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SActivateGlobalEffectBuffVO(t) {
    var i = this;
    i.GEID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).GEID = t;
    return i;
  }
  n.__extends(C2SActivateGlobalEffectBuffVO, e);
  C2SActivateGlobalEffectBuffVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ACTIVATE_GLOBAL_EFFECT_BOOSTER_EVENT;
  };
  return C2SActivateGlobalEffectBuffVO;
}(o.BasicCommandVO);
exports.C2SActivateGlobalEffectBuffVO = s;