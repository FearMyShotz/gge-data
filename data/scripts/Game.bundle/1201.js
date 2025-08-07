Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SOverseerStartVO(t, i) {
    var n = this;
    n.T = 0;
    n.PO = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).T = t;
    n.PO = i;
    return n;
  }
  n.__extends(C2SOverseerStartVO, e);
  C2SOverseerStartVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_OVERSEER_START;
  };
  return C2SOverseerStartVO;
}(o.BasicCommandVO);
exports.C2SOverseerStartVO = s;