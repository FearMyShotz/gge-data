Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SCatchLoginBonusVO(t, i, n = null) {
    var o = this;
    o.ID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).I = t;
    o.ID = i;
    o.SP = n;
    return o;
  }
  n.__extends(C2SCatchLoginBonusVO, e);
  C2SCatchLoginBonusVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_CATCH_LOGIN_BONUS;
  };
  return C2SCatchLoginBonusVO;
}(o.BasicCommandVO);
exports.C2SCatchLoginBonusVO = s;