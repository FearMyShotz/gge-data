Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleCostsData() {}
  CastleCostsData.prototype.getFinalCostsC1 = function (e) {
    if (e <= 0 || isNaN(e)) {
      return 0;
    } else if (s.CastleModel.boostData.premiumAccountVO.isActive) {
      return Math.ceil(e * s.CastleModel.boostData.premiumAccountVO.factor_C1);
    } else {
      return a.int(e);
    }
  };
  CastleCostsData.prototype.getFinalCostsC2 = function (e, t = false, i = 0) {
    if (e <= 0) {
      return 0;
    } else {
      return Math.ceil(e * (1 - this.getMaxPriceC2Reduction(t, i)));
    }
  };
  CastleCostsData.prototype.getMaxPriceC2Reduction = function (e = false, t = 0) {
    var i = t;
    if (s.CastleModel.globalOfferData.isAnyIngameDiscountActive()) {
      i = Math.max(i, s.CastleModel.globalOfferData.highestActiveIngameDiscount * 0.01);
    }
    if (s.CastleModel.boostData.premiumAccountVO.isActive) {
      i = Math.max(i, 1 - s.CastleModel.boostData.premiumAccountVO.factor_C2);
    }
    if (e) {
      i = Math.max(i, o.BoosterConst.DISCOUNT_FACTOR);
    }
    return i;
  };
  CastleCostsData.prototype.getFinalCostsStringC1 = function (e) {
    return String(this.getFinalCostsC1(e));
  };
  CastleCostsData.prototype.getFinalCostsStringC2 = function (e) {
    return String(this.getFinalCostsC2(e));
  };
  return CastleCostsData;
}();
exports.CastleCostsData = n;
var o = require("./5.js");
var a = require("./6.js");
var s = require("./4.js");