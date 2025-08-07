Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SForwardSpyLogVO(t, i) {
    var n = this;
    n.MID = NaN;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PID = t;
    n.MID = i;
    return n;
  }
  n.__extends(C2SForwardSpyLogVO, e);
  C2SForwardSpyLogVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_FORWARD_SPY_LOG;
  };
  return C2SForwardSpyLogVO;
}(o.BasicCommandVO);
exports.C2SForwardSpyLogVO = s;