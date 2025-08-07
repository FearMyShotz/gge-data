Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRenameLordVO(t, i) {
    var n = this;
    n.LID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).N = t;
    n.LID = i;
    return n;
  }
  n.__extends(C2SRenameLordVO, e);
  C2SRenameLordVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_RENAME_LORD_EVENT;
  };
  return C2SRenameLordVO;
}(o.BasicCommandVO);
exports.C2SRenameLordVO = s;