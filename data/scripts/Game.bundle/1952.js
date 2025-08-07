Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SIgnorePlayerVO(t, i) {
    var n = this;
    n.IPID = 0;
    n.IGN = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).IPID = t;
    n.IGN = a.int(i ? 1 : 0);
    return n;
  }
  n.__extends(C2SIgnorePlayerVO, e);
  C2SIgnorePlayerVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_IGNORE_PLAYER;
  };
  return C2SIgnorePlayerVO;
}(o.BasicCommandVO);
exports.C2SIgnorePlayerVO = r;