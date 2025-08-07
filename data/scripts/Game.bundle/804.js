Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function TaxInfoVO() {
    this._currentTaxType = 0;
    this._taxCollectEndTime = NaN;
    this._expectedIncome = 0;
    this._population = 0;
    this._isBoostedCollection = false;
    this._rewardBoosterLevel = 0;
    this._vipBonus = 0;
  }
  TaxInfoVO.prototype.fillFromParamObject = function (e) {
    if (e) {
      this._currentTaxType = r.int(e.TT);
      var t = r.int(e.RT);
      this._taxCollectEndTime = c.CachedTimer.getCachedTimer() + t * l.ClientConstTime.SEC_2_MILLISEC;
      this._expectedIncome = r.int(e.EM);
      this._population = r.int(e.PO);
      this._isBoostedCollection = Boolean(parseInt(e.IB));
      this._vipBonus = r.int(parseFloat(e.VB));
    }
  };
  Object.defineProperty(TaxInfoVO.prototype, "taxState", {
    get: function () {
      if (this._currentTaxType > -1) {
        if (this.remainingCollectionTimeInSeconds >= 0) {
          return TaxInfoVO.TAXSTATUS_COLLECTING;
        } else {
          return TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT;
        }
      } else {
        return TaxInfoVO.TAXSTATUS_NONE;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "remainingCollectionTimeInSeconds", {
    get: function () {
      return (this._taxCollectEndTime - c.CachedTimer.getCachedTimer()) * l.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "timeInPercent", {
    get: function () {
      switch (this.taxState) {
        case TaxInfoVO.TAXSTATUS_NONE:
          return 0;
        case TaxInfoVO.TAXSTATUS_COLLECTING:
          return (this.currentTaxDuration - this.remainingCollectionTimeInSeconds) / this.currentTaxDuration;
        case TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT:
          return 1;
        default:
          return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "currentTaxDuration", {
    get: function () {
      return a.TaxConst.COLLECTOR_DURATION[this._currentTaxType];
    },
    enumerable: true,
    configurable: true
  });
  TaxInfoVO.prototype.getEstimatedIncomeById = function (e) {
    var t = r.int(a.TaxConst.getCollectorIncome(e, this._population));
    var i = u.CastleModel.boostData.taxBribeVO.isActive;
    var n = r.int(u.CastleModel.vipData.currentActiveVIPLevel.taxBonus);
    var o = 1 + u.CastleModel.researchData.getResearchEffectValue(d.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_BOOST).strength / 100;
    return r.int(a.TaxConst.applyCollectionBoosts(t, i, o, n));
  };
  Object.defineProperty(TaxInfoVO.prototype, "currentIncome", {
    get: function () {
      var e = 1 + u.CastleModel.researchData.getResearchEffectValue(d.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_BOOST).strength / 100;
      return a.TaxConst.getCollectedMoney(this._currentTaxType, this.remainingCollectionTimeInSeconds, this._expectedIncome, this._isBoostedCollection, e, this._vipBonus);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "expectedIncome", {
    get: function () {
      var e = 1 + u.CastleModel.researchData.getResearchEffectValue(d.EffectTypeEnum.EFFECT_TYPE_TAX_COLLECTOR_BOOST).strength / 100;
      return a.TaxConst.applyCollectionBoosts(this._expectedIncome, this._isBoostedCollection, e, this._vipBonus);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "isBoostedCollection", {
    get: function () {
      return this._isBoostedCollection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "population", {
    get: function () {
      return this._population;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "isCollecting", {
    get: function () {
      return this.taxState == TaxInfoVO.TAXSTATUS_COLLECTING;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "isTaxReadyForCollection", {
    get: function () {
      return this.taxState == TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "currentTaxType", {
    get: function () {
      return this._currentTaxType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "rewardBoosterLevel", {
    get: function () {
      return this._rewardBoosterLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TaxInfoVO.prototype, "taxAmountString", {
    get: function () {
      return s.Localize.text(o.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [this.currentIncome, this.expectedIncome]);
    },
    enumerable: true,
    configurable: true
  });
  TaxInfoVO.__initialize_static_members = function () {
    TaxInfoVO.TAXSTATUS_NONE = 0;
    TaxInfoVO.TAXSTATUS_COLLECTING = 1;
    TaxInfoVO.TAXSTATUS_WAIT_FOR_COLLECT = 2;
  };
  return TaxInfoVO;
}();
exports.TaxInfoVO = n;
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./28.js");
var c = require("./30.js");
var u = require("./4.js");
var d = require("./35.js");
n.__initialize_static_members();