Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SMarkMessageReadVO(t) {
    var i = this;
    i.MID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2SMarkMessageReadVO, e);
  C2SMarkMessageReadVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_MARK_MESSAGE_READ;
  };
  return C2SMarkMessageReadVO;
}(o.BasicCommandVO);
exports.C2SMarkMessageReadVO = s;