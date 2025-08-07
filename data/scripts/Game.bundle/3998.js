Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceHelpConfirmedVO(t, i) {
    var n = this;
    n.LID = 0;
    n.KID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).LID = t;
    n.KID = i;
    return n;
  }
  n.__extends(C2SAllianceHelpConfirmedVO, e);
  C2SAllianceHelpConfirmedVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_HELP_CONFIRMED;
  };
  return C2SAllianceHelpConfirmedVO;
}(o.BasicCommandVO);
exports.C2SAllianceHelpConfirmedVO = s;