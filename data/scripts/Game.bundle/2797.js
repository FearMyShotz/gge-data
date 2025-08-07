Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SUpgradePrivateResourceVillageVO(t, i) {
    var n = this;
    n.XID = 0;
    n.VID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).XID = t;
    n.VID = i;
    return n;
  }
  n.__extends(C2SUpgradePrivateResourceVillageVO, e);
  C2SUpgradePrivateResourceVillageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_UPGRADE_PRIVATE_RESOURCE_VILLAGE;
  };
  return C2SUpgradePrivateResourceVillageVO;
}(o.BasicCommandVO);
exports.C2SUpgradePrivateResourceVillageVO = s;