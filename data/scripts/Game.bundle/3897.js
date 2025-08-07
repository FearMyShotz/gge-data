Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SSetPasswordForSocialLoginMigrationVO(t) {
    var i = e.call(this) || this;
    i.NPW = t;
    return i;
  }
  n.__extends(C2SSetPasswordForSocialLoginMigrationVO, e);
  C2SSetPasswordForSocialLoginMigrationVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SET_PASSWORD_FOR_SOCIAL_LOGIN_MIGRATION;
  };
  return C2SSetPasswordForSocialLoginMigrationVO;
}(o.BasicCommandVO);
exports.C2SSetPasswordForSocialLoginMigrationVO = s;