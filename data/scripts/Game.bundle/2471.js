Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceApplicationListVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SAllianceApplicationListVO, e);
  C2SAllianceApplicationListVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_APPLICATION_LIST;
  };
  return C2SAllianceApplicationListVO;
}(o.BasicCommandVO);
exports.C2SAllianceApplicationListVO = s;