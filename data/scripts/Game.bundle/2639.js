Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SFusionCatalystConversionEventVO(t, i, n, o) {
    var a = this;
    a.FID = 0;
    a.FCCD = 0;
    a.FCID = 0;
    a.FCCA = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).FID = t;
    a.FCCD = i;
    a.FCID = n;
    a.FCCA = o;
    return a;
  }
  n.__extends(C2SFusionCatalystConversionEventVO, e);
  C2SFusionCatalystConversionEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_FUSION_CATALYST_CONVERSION;
  };
  return C2SFusionCatalystConversionEventVO;
}(o.BasicCommandVO);
exports.C2SFusionCatalystConversionEventVO = s;