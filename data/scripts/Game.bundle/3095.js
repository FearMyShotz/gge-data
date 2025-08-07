Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SEnchantRelicItemEventVO(t, i, n) {
    var o = this;
    o.C2 = 0;
    o.RIID = NaN;
    o.EQ = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).C2 = a.int(i ? 1 : 0);
    o.RIID = t;
    o.EQ = n;
    return o;
  }
  n.__extends(C2SEnchantRelicItemEventVO, e);
  C2SEnchantRelicItemEventVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_ENCHANT_RELIC_ITEM_EVENT;
  };
  return C2SEnchantRelicItemEventVO;
}(o.BasicCommandVO);
exports.C2SEnchantRelicItemEventVO = r;