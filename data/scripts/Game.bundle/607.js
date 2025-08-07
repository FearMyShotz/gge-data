Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SReadMessagesVO(t) {
    var i = this;
    i.MID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MID = t;
    return i;
  }
  n.__extends(C2SReadMessagesVO, e);
  C2SReadMessagesVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_READ_MESSAGES;
  };
  return C2SReadMessagesVO;
}(o.BasicCommandVO);
exports.C2SReadMessagesVO = s;