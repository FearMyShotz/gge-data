Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SOpenGateStartVO(t, i, n) {
    var o = this;
    o.CID = 0;
    o.KID = 0;
    o.CD = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).CID = t;
    o.KID = i;
    o.CD = n;
    return o;
  }
  n.__extends(C2SOpenGateStartVO, e);
  C2SOpenGateStartVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_OPEN_GATE_START;
  };
  return C2SOpenGateStartVO;
}(o.BasicCommandVO);
exports.C2SOpenGateStartVO = s;