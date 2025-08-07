Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceHelpAllRequestVO(t = 15) {
    var i = this;
    i.KID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).KID = t;
    console.log("***" + JSON.stringify(i));
    return i;
  }
  n.__extends(C2SAllianceHelpAllRequestVO, e);
  C2SAllianceHelpAllRequestVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_HELP_ALL;
  };
  return C2SAllianceHelpAllRequestVO;
}(o.BasicCommandVO);
exports.C2SAllianceHelpAllRequestVO = s;