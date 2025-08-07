Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetDaimyoAreasEventVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetDaimyoAreasEventVO, e);
  C2SGetDaimyoAreasEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_DAIMYO_AREAS_EVENT;
  };
  return C2SGetDaimyoAreasEventVO;
}(o.BasicCommandVO);
exports.C2SGetDaimyoAreasEventVO = s;