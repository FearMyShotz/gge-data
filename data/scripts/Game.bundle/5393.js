Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDeleteMessageVO(t) {
    var i = this;
    i.MID = NaN;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2SDeleteMessageVO, e);
  C2SDeleteMessageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DELETE_MESSAGE;
  };
  return C2SDeleteMessageVO;
}(o.BasicCommandVO);
exports.C2SDeleteMessageVO = s;