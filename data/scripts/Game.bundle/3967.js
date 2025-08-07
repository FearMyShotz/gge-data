Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAbandonOutpostStartVO(t, i) {
    var n = this;
    n.CID = 0;
    n.KID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).CID = t;
    n.KID = i;
    return n;
  }
  n.__extends(C2SAbandonOutpostStartVO, e);
  C2SAbandonOutpostStartVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ABANDON_OUTPOST_START;
  };
  return C2SAbandonOutpostStartVO;
}(o.BasicCommandVO);
exports.C2SAbandonOutpostStartVO = s;