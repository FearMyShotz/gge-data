Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetTemporaryServerLoginTokenVO(t) {
    var i = this;
    i.GST = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).GST = t;
    return i;
  }
  n.__extends(C2SGetTemporaryServerLoginTokenVO, e);
  C2SGetTemporaryServerLoginTokenVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_TEMPORARY_SERVER_LOGIN_TOKEN;
  };
  return C2SGetTemporaryServerLoginTokenVO;
}(o.BasicCommandVO);
exports.C2SGetTemporaryServerLoginTokenVO = s;