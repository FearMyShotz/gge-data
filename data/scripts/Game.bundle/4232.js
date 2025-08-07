Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2STemporaryServerLoginVO(t) {
    var i = e.call(this) || this;
    i.TLT = t;
    return i;
  }
  n.__extends(C2STemporaryServerLoginVO, e);
  C2STemporaryServerLoginVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GLOBAL_SERVER_REGISTER_OR_LOGIN_EP;
  };
  return C2STemporaryServerLoginVO;
}(o.BasicCommandVO);
exports.C2STemporaryServerLoginVO = s;