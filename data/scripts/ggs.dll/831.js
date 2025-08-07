Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./9.js");
var s = function (e) {
  function CoreC2SSetInviteCodeVO(t, n, i = null, a = null) {
    var s = e.call(this) || this;
    s.IC = t;
    s.RM = n;
    s.EID_INVITED = a;
    s.EID_INVITER = i;
    return s;
  }
  i.__extends(CoreC2SSetInviteCodeVO, e);
  CoreC2SSetInviteCodeVO.prototype.getCmdId = function () {
    return a.BasicSmartfoxConstants.C2S_SET_INVITE_CODE;
  };
  return CoreC2SSetInviteCodeVO;
}(require("./124.js").BasicCommandVO);
exports.CoreC2SSetInviteCodeVO = s;