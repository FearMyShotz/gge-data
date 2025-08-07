Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SJoinAreaVO(t, i, n) {
    var o = this;
    o.PX = 0;
    o.PY = 0;
    o.KID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).PX = t;
    o.PY = i;
    o.KID = n;
    return o;
  }
  n.__extends(C2SJoinAreaVO, e);
  C2SJoinAreaVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_JOIN_AREA;
  };
  return C2SJoinAreaVO;
}(o.BasicCommandVO);
exports.C2SJoinAreaVO = s;