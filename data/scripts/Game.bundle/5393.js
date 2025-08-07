Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSendMessageVO(t, i, n) {
    var o = e.call(this) || this;
    o.RN = t;
    o.MH = a.TextValide.getValideSmartFoxJSONTextMessage(i);
    o.TXT = a.TextValide.getValideSmartFoxJSONTextMessage(n);
    return o;
  }
  n.__extends(C2SSendMessageVO, e);
  C2SSendMessageVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SEND_MESSAGE;
  };
  return C2SSendMessageVO;
}(o.BasicCommandVO);
exports.C2SSendMessageVO = r;