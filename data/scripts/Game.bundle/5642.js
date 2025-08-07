Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.TimerEvent;
var o = function () {
  function FusionForgeVO(e) {
    this._id = -1;
    this._level = -1;
    this._currentEnergy = 0;
    this._energyRechargeProgressTime = 0;
    this._newDataArrivedTimestamp = 0;
    this._usedMinuteSkips = 0;
    this._usedPremiumSkips = 0;
    this._requestTimer = new u.Timer(1000);
    this._id = e;
    this.init();
  }
  FusionForgeVO.prototype.init = function () {
    this._requestTimer.addEventListener(n.TIMER_COMPLETE, this.bindFunction(this.onRequestTimerComplete));
  };
  FusionForgeVO.prototype.destroy = function () {
    this._requestTimer.addEventListener(n.TIMER_COMPLETE, this.bindFunction(this.onRequestTimerComplete));
  };
  FusionForgeVO.prototype.parseServerObject = function (e) {
    this._level = h.int(e.FL);
    this._currentEnergy = h.int(e.FE);
    this._energyRechargeProgressTime = h.int(e.FRS);
    this._usedMinuteSkips = h.int(e.FUM);
    this._usedPremiumSkips = h.int(e.FUPS);
    this._newDataArrivedTimestamp = h.int(C.CachedTimer.getCachedTimer());
    this._requestTimer.delay = this.getNextEnergyRechargeTime() * r.ClientConstTime.SEC_2_MILLISEC;
    this._requestTimer.repeatCount = 1;
    this._requestTimer.reset();
    this._requestTimer.start();
  };
  FusionForgeVO.prototype.requestDataFromServer = function () {
    this._requestTimer.stop();
    _.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetFusionForgeInfoEventVO([this.id]));
  };
  FusionForgeVO.prototype.getFullEnergy = function () {
    return h.int(d.FusionConst.getFusionEnergyCap(this.level));
  };
  FusionForgeVO.prototype.getMaxEnergy = function () {
    return h.int(d.FusionConst.getFusionEnergyCap(this.level) * f.ClientConstFusion.MAX_ENERGY_PERCENTAGE_FACTOR);
  };
  FusionForgeVO.prototype.getCurrentEnergyFillFactor = function () {
    return l.MathBase.clamp(this.currentEnergy / this.getFullEnergy(), 0, f.ClientConstFusion.MAX_ENERGY_PERCENTAGE_FACTOR);
  };
  FusionForgeVO.prototype.getCurrentEnergyOverfillFactor = function () {
    return l.MathBase.max(0, this.getCurrentEnergyFillFactor() - f.ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR);
  };
  FusionForgeVO.prototype.getPremiumSkipEnergy = function () {
    return h.int(d.FusionConst.getFusionEnergyRechargeFromC2(this.getFullEnergy()));
  };
  FusionForgeVO.prototype.getEnergyAfterPremiumSkip = function () {
    return h.int(Math.min(this.getMaxEnergy() * f.ClientConstFusion.MAX_ENERGY_PERCENTAGE_FACTOR, this.currentEnergy + this.getPremiumSkipEnergy()));
  };
  FusionForgeVO.prototype.getC2PriceForEnergyPremiumSkip = function () {
    var e = _.CastleModel.fusionForgeData.xml.getFusionSystem(this.id);
    return h.int(d.FusionConst.getFusionEnergyRechargeFromC2Cost(e.skipRechargeHardCurrencyCost, e.skipRechargeHardCurrencyCostFactor, this._usedPremiumSkips));
  };
  FusionForgeVO.prototype.getNextEnergyRechargeTime = function () {
    var e = h.int(_.CastleModel.fusionForgeData.xml.getFusionSystem(this.id).energyRechargeIntervalInSeconds * r.ClientConstTime.SEC_2_MILLISEC);
    var t = h.int(this._energyRechargeProgressTime * r.ClientConstTime.SEC_2_MILLISEC);
    var i = h.int(C.CachedTimer.getCachedTimer() - this._newDataArrivedTimestamp);
    return h.int((e - t - i) * r.ClientConstTime.MILLISEC_2_SEC);
  };
  FusionForgeVO.prototype.getEnergyProgressbarTooltipText = function () {
    if (this.getCurrentEnergyFillFactor() >= f.ClientConstFusion.FULL_ENERGY_PERCENTAGE_FACTOR) {
      return "";
    } else {
      return p.Localize.text("fusionEnergy_refillTime_tt", [d.FusionConst.getFusionEnergyRechargeAmount(this.level), c.TimeStringHelper.getShortTimeStringBySeconds(this.getNextEnergyRechargeTime())]);
    }
  };
  FusionForgeVO.prototype.getCostForForgeLevelUp = function () {
    return s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, d.FusionConst.getForgeLevelUpDustCost(this.level), m.ClientConstCurrency.ID_DECO_DUST);
  };
  FusionForgeVO.prototype.getAvailableCatalysts = function (e = -1) {
    var t = _.CastleModel.fusionForgeData.xml.getCatalystsByForge(this.id);
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var r = o[n];
        if (r !== undefined) {
          var l = s.CollectableHelper.createVO(a.CollectableEnum.GENERIC_CURRENCY, _.CastleModel.currencyData.getAmountById(r.currencyId), r.currencyId);
          if ((e <= r.maxUsableFusionLevel || e < 0) && (l.amount > 0 || !r.deprecated)) {
            i.push(l);
          }
        }
      }
    }
    return i;
  };
  FusionForgeVO.prototype.onRequestTimerComplete = function (e) {
    this.requestDataFromServer();
  };
  Object.defineProperty(FusionForgeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "currentEnergy", {
    get: function () {
      return this._currentEnergy;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "energyRechargeProgressTime", {
    get: function () {
      return this._energyRechargeProgressTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "usedMinuteSkips", {
    get: function () {
      return this._usedMinuteSkips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeVO.prototype, "usedPremiumSkips", {
    get: function () {
      return this._usedPremiumSkips;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeVO;
}();
exports.FusionForgeVO = o;
var a = require("./12.js");
var s = require("./45.js");
var r = require("./28.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./1970.js");
var C = require("./30.js");
var _ = require("./4.js");
var m = require("./52.js");
var f = require("./217.js");