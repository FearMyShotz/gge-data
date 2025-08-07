Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SKingdomGoodsTransferVO(t, i, n, o) {
    var a = this;
    a.SCID = 0;
    a.SKID = 0;
    a.TKID = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).SCID = t;
    a.SKID = i;
    a.TKID = n;
    a.G = o;
    return a;
  }
  n.__extends(C2SKingdomGoodsTransferVO, e);
  C2SKingdomGoodsTransferVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_KINGDOM_GOODS_TRANSFER;
  };
  return C2SKingdomGoodsTransferVO;
}(o.BasicCommandVO);
exports.C2SKingdomGoodsTransferVO = s;