Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSelectTitleVO(t, i = "") {
    var n = e.call(this) || this;
    n.PRE = t;
    n.SUF = i;
    return n;
  }
  n.__extends(C2SSelectTitleVO, e);
  C2SSelectTitleVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SELECT_TITLE_EVENT;
  };
  return C2SSelectTitleVO;
}(o.BasicCommandVO);
exports.C2SSelectTitleVO = s;