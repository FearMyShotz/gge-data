Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMinuteSkipMapTransferVO(t, i, n) {
    var o = this;
    o.MID = 0;
    o.TT = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).MST = t;
    o.MID = i;
    o.TT = n;
    return o;
  }
  n.__extends(C2SMinuteSkipMapTransferVO, e);
  C2SMinuteSkipMapTransferVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MINUTE_SKIP_MAP_TRANSFER;
  };
  return C2SMinuteSkipMapTransferVO;
}(o.BasicCommandVO);
exports.C2SMinuteSkipMapTransferVO = s;