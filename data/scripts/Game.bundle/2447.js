Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceQuitVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SAllianceQuitVO, e);
  C2SAllianceQuitVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_QUIT;
  };
  return C2SAllianceQuitVO;
}(o.BasicCommandVO);
exports.C2SAllianceQuitVO = s;