Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SReviveUnitPackageVO(t, i) {
    var n = this;
    n.U = 0;
    n.A = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).U = t;
    n.A = i;
    return n;
  }
  n.__extends(C2SReviveUnitPackageVO, e);
  C2SReviveUnitPackageVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REVIVE_HOSPITAL_UNITS;
  };
  return C2SReviveUnitPackageVO;
}(o.BasicCommandVO);
exports.C2SReviveUnitPackageVO = s;