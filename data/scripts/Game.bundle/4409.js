Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SColossusDepositResourcesVO(t, i, n, o) {
    var a = this;
    a.DS = 0;
    a.DW = 0;
    a.SCID = 0;
    a.SKID = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).SCID = t;
    a.SKID = i;
    a.DS = n;
    a.DW = o;
    return a;
  }
  n.__extends(C2SColossusDepositResourcesVO, e);
  C2SColossusDepositResourcesVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_COLOSSUS_DEPOSIT_RESOURCES;
  };
  return C2SColossusDepositResourcesVO;
}(o.BasicCommandVO);
exports.C2SColossusDepositResourcesVO = s;