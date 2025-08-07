Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SColossusCoinDepositResourcesVO(t) {
    var i = this;
    i.DC = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).DC = t;
    return i;
  }
  n.__extends(C2SColossusCoinDepositResourcesVO, e);
  C2SColossusCoinDepositResourcesVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_COLOSSUS_COIN_DEPOSIT_RESOURCES;
  };
  return C2SColossusCoinDepositResourcesVO;
}(o.BasicCommandVO);
exports.C2SColossusCoinDepositResourcesVO = s;