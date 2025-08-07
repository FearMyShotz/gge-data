Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SLevelUpFusionForgeEventVO(t) {
    var i = this;
    i.FID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).FID = t;
    return i;
  }
  n.__extends(C2SLevelUpFusionForgeEventVO, e);
  C2SLevelUpFusionForgeEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_LEVEL_UP_FUSION_FORGE;
  };
  return C2SLevelUpFusionForgeEventVO;
}(o.BasicCommandVO);
exports.C2SLevelUpFusionForgeEventVO = s;