Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMarauderStartVO(t) {
    var i = this;
    i.PO = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).PO = t;
    return i;
  }
  n.__extends(C2SMarauderStartVO, e);
  C2SMarauderStartVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MARAUDER_START;
  };
  return C2SMarauderStartVO;
}(o.BasicCommandVO);
exports.C2SMarauderStartVO = s;