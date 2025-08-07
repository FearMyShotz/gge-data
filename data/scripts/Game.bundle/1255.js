Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGeneralUnlockVO(t) {
    var i = e.call(this) || this;
    i.GID = 0;
    i.GID = t;
    return i;
  }
  n.__extends(C2SGeneralUnlockVO, e);
  C2SGeneralUnlockVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GENERAL_UNLOCK;
  };
  return C2SGeneralUnlockVO;
}(o.BasicCommandVO);
exports.C2SGeneralUnlockVO = s;