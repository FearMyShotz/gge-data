Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSetAllianceEmblemVO(t) {
    var i = this;
    i.ACLI = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).ACLI = t.ACLI;
    i.ACCS = t.ACCS;
    return i;
  }
  n.__extends(C2SSetAllianceEmblemVO, e);
  C2SSetAllianceEmblemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SET_ALLIANCE_EMBLEM;
  };
  return C2SSetAllianceEmblemVO;
}(o.BasicCommandVO);
exports.C2SSetAllianceEmblemVO = s;