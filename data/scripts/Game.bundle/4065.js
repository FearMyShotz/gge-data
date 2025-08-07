Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SDeleteMessagesVO(t) {
    var i = this;
    i.MIDS = [];
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).MIDS = t;
    return i;
  }
  n.__extends(C2SDeleteMessagesVO, e);
  C2SDeleteMessagesVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_DELETE_MESSAGE;
  };
  return C2SDeleteMessagesVO;
}(o.BasicCommandVO);
exports.C2SDeleteMessagesVO = s;