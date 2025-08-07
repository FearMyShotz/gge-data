Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetDaimyoWarEffortsEventVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetDaimyoWarEffortsEventVO, e);
  C2SGetDaimyoWarEffortsEventVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_DAIMYO_WAR_EFFORTS;
  };
  return C2SGetDaimyoWarEffortsEventVO;
}(o.BasicCommandVO);
exports.C2SGetDaimyoWarEffortsEventVO = s;