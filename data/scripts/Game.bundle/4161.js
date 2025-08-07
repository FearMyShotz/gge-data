Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SValidateLoginNameVO(t) {
    var i = e.call(this) || this;
    i.NOM = t;
    return i;
  }
  n.__extends(C2SValidateLoginNameVO, e);
  C2SValidateLoginNameVO.prototype.getCmdId = function () {
    return a.ClientConstSF.S2C_VALIDATE_LOGIN_NAME;
  };
  return C2SValidateLoginNameVO;
}(o.BasicCommandVO);
exports.C2SValidateLoginNameVO = s;