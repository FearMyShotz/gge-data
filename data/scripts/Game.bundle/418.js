Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SClientSideTrackingVO(t, i = null) {
    var n = e.call(this) || this;
    n[t] = i;
    return n;
  }
  n.__extends(C2SClientSideTrackingVO, e);
  C2SClientSideTrackingVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CLIENT_TRACKING_COMMAND;
  };
  return C2SClientSideTrackingVO;
}(o.BasicCommandVO);
exports.C2SClientSideTrackingVO = s;