Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMinuteSkipBuildingVO(t, i) {
    var n = this;
    n.OID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).MST = t;
    n.OID = i;
    return n;
  }
  n.__extends(C2SMinuteSkipBuildingVO, e);
  C2SMinuteSkipBuildingVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MINUTE_SKIP_BUILDING;
  };
  return C2SMinuteSkipBuildingVO;
}(o.BasicCommandVO);
exports.C2SMinuteSkipBuildingVO = s;