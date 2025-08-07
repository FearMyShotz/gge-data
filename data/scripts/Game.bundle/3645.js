Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SShowMeUpgradeBuildingsVO(t, i = true) {
    var n = this;
    n.WOD = 0;
    n.PSU = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).WOD = t;
    n.PSU = i;
    return n;
  }
  n.__extends(C2SShowMeUpgradeBuildingsVO, e);
  C2SShowMeUpgradeBuildingsVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SHOW_ME_UPGRADABLE_BUILDINGS;
  };
  return C2SShowMeUpgradeBuildingsVO;
}(o.BasicCommandVO);
exports.C2SShowMeUpgradeBuildingsVO = s;