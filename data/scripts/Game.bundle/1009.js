Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceHelpRequestVO(t, i) {
    var n = this;
    n.ID = 0;
    n.T = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).ID = t;
    n.T = i;
    return n;
  }
  n.__extends(C2SAllianceHelpRequestVO, e);
  C2SAllianceHelpRequestVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_HELP_REQUEST;
  };
  return C2SAllianceHelpRequestVO;
}(o.BasicCommandVO);
exports.C2SAllianceHelpRequestVO = s;