Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./33.js");
var u = function (e) {
  function CollectTaxElementVO(t) {
    var i = this;
    i.taxType = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).taxType = t;
    i.active = true;
    return i;
  }
  n.__extends(CollectTaxElementVO, e);
  Object.defineProperty(CollectTaxElementVO.prototype, "c1Costs", {
    get: function () {
      var e = r.int(l.CastleModel.boostData.premiumAccountVO.premiumAccountType);
      var t = l.CastleModel.vipData.currentActiveVIPLevel;
      return l.CastleModel.costsData.getFinalCostsC1(s.TaxConst.getCollectorC1Costs(this.taxType, e, l.CastleModel.taxData.taxInfoVO.population, this.hasTaxResearch, t.taxCollector12HoursNoRubies, t.taxCollector24HoursNoRubies));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "c2Costs", {
    get: function () {
      var e = r.int(l.CastleModel.boostData.premiumAccountVO.premiumAccountType);
      var t = l.CastleModel.vipData.currentActiveVIPLevel;
      return l.CastleModel.costsData.getFinalCostsC2(s.TaxConst.getCollectorC2Costs(this.taxType, e, this.hasTaxResearch, t.taxCollector12HoursNoRubies, t.taxCollector24HoursNoRubies));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "hasTaxResearch", {
    get: function () {
      return l.CastleModel.researchData.getResearchEffectValue(c.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_NO_RUBIES).strength >= 1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "hasC2CostWithoutPremium", {
    get: function () {
      var e = l.CastleModel.vipData.currentActiveVIPLevel;
      return l.CastleModel.costsData.getFinalCostsC2(s.TaxConst.getCollectorC2Costs(this.taxType, -1, this.hasTaxResearch, e.taxCollector12HoursNoRubies, e.taxCollector24HoursNoRubies)) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "duration", {
    get: function () {
      return s.TaxConst.COLLECTOR_DURATION[this.taxType];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "reward", {
    get: function () {
      return l.CastleModel.taxData.taxInfoVO.getEstimatedIncomeById(this.taxType);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectTaxElementVO.prototype, "durationString", {
    get: function () {
      return a.TimeStringHelper.getHoureMinutesTimeString(s.TaxConst.COLLECTOR_DURATION[this.taxType]);
    },
    enumerable: true,
    configurable: true
  });
  return CollectTaxElementVO;
}(o.ScrollItemVO);
exports.CollectTaxElementVO = u;