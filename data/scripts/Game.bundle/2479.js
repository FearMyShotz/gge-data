Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SAllianceAnswerApplicationVO(t, i) {
    var n = this;
    n.PID = 0;
    n.A = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PID = t;
    n.A = a.int(i ? 1 : 0);
    return n;
  }
  n.__extends(C2SAllianceAnswerApplicationVO, e);
  C2SAllianceAnswerApplicationVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ALLIANCE_ANSWER_APPLICATION;
  };
  return C2SAllianceAnswerApplicationVO;
}(o.BasicCommandVO);
exports.C2SAllianceAnswerApplicationVO = r;