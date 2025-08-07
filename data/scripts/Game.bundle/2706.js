Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SUseBoosterConsumableOnConstructionItemVO(t, i, n, o, a, s) {
    var r = this;
    r.OID = 0;
    r.SUC = 0;
    r.SID = 0;
    r.KID = 0;
    r.AID = 0;
    r.CID = 0;
    CONSTRUCTOR_HACK;
    (r = e.call(this) || this).OID = t;
    r.SUC = i;
    r.SID = n;
    r.KID = o;
    r.AID = a;
    r.CID = s;
    return r;
  }
  n.__extends(C2SUseBoosterConsumableOnConstructionItemVO, e);
  C2SUseBoosterConsumableOnConstructionItemVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_USE_BOOSTER_CONSUMABLE_ON_CONSTRUCTION_ITEM_EVENT;
  };
  return C2SUseBoosterConsumableOnConstructionItemVO;
}(o.BasicCommandVO);
exports.C2SUseBoosterConsumableOnConstructionItemVO = s;