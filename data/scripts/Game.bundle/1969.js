Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetFusionForgeInfoEventVO(t) {
    var i = e.call(this) || this;
    i.FIDS = t;
    return i;
  }
  n.__extends(C2SGetFusionForgeInfoEventVO, e);
  C2SGetFusionForgeInfoEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_FUSION_FORGE_INFO;
  };
  return C2SGetFusionForgeInfoEventVO;
}(o.BasicCommandVO);
exports.C2SGetFusionForgeInfoEventVO = s;