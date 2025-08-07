Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./9.js");
var s = function (e) {
  function CoreC2SGenerateInviteCodeVO(t = "code", n = null) {
    var i = e.call(this) || this;
    i.T = t;
    i.CC = n;
    i.RR = "html5";
    return i;
  }
  i.__extends(CoreC2SGenerateInviteCodeVO, e);
  CoreC2SGenerateInviteCodeVO.prototype.getCmdId = function () {
    return a.BasicSmartfoxConstants.C2S_GENERATE_INVITE_CODE;
  };
  return CoreC2SGenerateInviteCodeVO;
}(require("./124.js").BasicCommandVO);
exports.CoreC2SGenerateInviteCodeVO = s;