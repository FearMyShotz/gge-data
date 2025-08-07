Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SAllianceUpgradeVO(t, i = 1) {
    var n = this;
    n.BT = 0;
    n.L = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).BT = t;
    n.L = i;
    return n;
  }
  n.__extends(C2SAllianceUpgradeVO, e);
  C2SAllianceUpgradeVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_ALLIANCE_UPGRADE;
  };
  return C2SAllianceUpgradeVO;
}(o.BasicCommandVO);
exports.C2SAllianceUpgradeVO = s;