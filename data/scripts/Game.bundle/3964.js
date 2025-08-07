Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SVoteWorldCupVO(t) {
    var i = this;
    i.V = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).V = t;
    return i;
  }
  n.__extends(C2SVoteWorldCupVO, e);
  C2SVoteWorldCupVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_VOTE_WORLD_CUP;
  };
  return C2SVoteWorldCupVO;
}(o.BasicCommandVO);
exports.C2SVoteWorldCupVO = s;