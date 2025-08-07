Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2STreasuremapGoodsTransferVO(t, i, n, o) {
    var a = this;
    a.MID = 0;
    a.SCID = 0;
    a.KID = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).MID = t;
    a.SCID = i;
    a.KID = n;
    a.G = o;
    return a;
  }
  n.__extends(C2STreasuremapGoodsTransferVO, e);
  C2STreasuremapGoodsTransferVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_TREASUREMAP_GOODS_TRANSFER;
  };
  return C2STreasuremapGoodsTransferVO;
}(o.BasicCommandVO);
exports.C2STreasuremapGoodsTransferVO = s;