Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SValidateNewPlayerNameVO(t) {
    var i = e.call(this) || this;
    i.PN = t;
    return i;
  }
  n.__extends(C2SValidateNewPlayerNameVO, e);
  C2SValidateNewPlayerNameVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_VALIDATE_NEW_PLAYER_NAME;
  };
  return C2SValidateNewPlayerNameVO;
}(o.BasicCommandVO);
exports.C2SValidateNewPlayerNameVO = s;