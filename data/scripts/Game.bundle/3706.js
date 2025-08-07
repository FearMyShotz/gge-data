Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAssignTitleVO(t, i) {
    var n = this;
    n.TI = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).PN = i;
    n.TI = t;
    return n;
  }
  n.__extends(C2SAssignTitleVO, e);
  C2SAssignTitleVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ASSIGN_TITLE;
  };
  return C2SAssignTitleVO;
}(o.BasicCommandVO);
exports.C2SAssignTitleVO = s;