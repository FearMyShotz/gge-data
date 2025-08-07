Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGeneralResetFlagsVO(t) {
    var i = e.call(this) || this;
    i.GID = 0;
    i.GID = t;
    return i;
  }
  n.__extends(C2SGeneralResetFlagsVO, e);
  C2SGeneralResetFlagsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GENERAL_RESET_FLAGS;
  };
  return C2SGeneralResetFlagsVO;
}(o.BasicCommandVO);
exports.C2SGeneralResetFlagsVO = s;