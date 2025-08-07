Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  return function DecorationForgeMainDialogCostInfoVO() {
    this.energy = new r.DecorationForgeMainDialogCostInfoVOItem();
    this.fusionCurrency = new r.DecorationForgeMainDialogCostInfoVOItem();
    this.sequenceCurrency = new r.DecorationForgeMainDialogCostInfoVOItem();
    this.c2 = new r.DecorationForgeMainDialogCostInfoVOItem();
    this.fusionCurrency.collectableType = new a.CollectableTypeVO(o.CollectableEnum.GENERIC_CURRENCY, s.ClientConstCurrency.ID_FUSION_CURRENCY);
    this.c2.collectableType = new a.CollectableTypeVO(o.CollectableEnum.C2);
  };
}();
exports.DecorationForgeMainDialogCostInfoVO = n;
var o = require("./12.js");
var a = require("./74.js");
var s = require("./52.js");
var r = require("./2653.js");