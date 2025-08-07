Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetPlayerPerformanceVO(t, i) {
    var n = this;
    n.PID = 0;
    n.EID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PID = t;
    n.EID = i;
    return n;
  }
  n.__extends(C2SGetPlayerPerformanceVO, e);
  C2SGetPlayerPerformanceVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_PLAYER_EVENT_STATISTICS;
  };
  return C2SGetPlayerPerformanceVO;
}(o.BasicCommandVO);
exports.C2SGetPlayerPerformanceVO = s;