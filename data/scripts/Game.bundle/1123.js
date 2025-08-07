Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetLoginBonusVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetLoginBonusVO, e);
  C2SGetLoginBonusVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_LOGIN_BONUS;
  };
  return C2SGetLoginBonusVO;
}(o.BasicCommandVO);
exports.C2SGetLoginBonusVO = s;