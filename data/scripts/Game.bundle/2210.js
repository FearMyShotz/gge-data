Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGeneralStarUpgradeVO(t, i) {
    var n = e.call(this) || this;
    n.GID = 0;
    n.CID = 0;
    n.GID = t;
    n.CID = i;
    return n;
  }
  n.__extends(C2SGeneralStarUpgradeVO, e);
  C2SGeneralStarUpgradeVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GENERAL_STAR_UPGRADE;
  };
  return C2SGeneralStarUpgradeVO;
}(o.BasicCommandVO);
exports.C2SGeneralStarUpgradeVO = s;