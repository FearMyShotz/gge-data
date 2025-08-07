Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SStartCollectTaxVO(t) {
    var i = this;
    i.TT = 0;
    i.TX = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).TT = t;
    i.TX = 3;
    return i;
  }
  n.__extends(C2SStartCollectTaxVO, e);
  C2SStartCollectTaxVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_START_COLLECT_TAX;
  };
  return C2SStartCollectTaxVO;
}(o.BasicCommandVO);
exports.C2SStartCollectTaxVO = s;