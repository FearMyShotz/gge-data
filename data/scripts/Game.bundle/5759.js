Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = require("./52.js");
var r = require("./474.js");
var l = require("./22.js");
var c = function (e) {
  function SaleDaysLuckyWheelData(t) {
    return e.call(this, t) || this;
  }
  n.__extends(SaleDaysLuckyWheelData, e);
  SaleDaysLuckyWheelData.prototype.parseXml = function (e) {
    this._rewardSets = this.createRewardItemsMappedToSetID(e, "saleDaysLuckyWheelRewardSets", "saleDaysLuckyWheelRewardSet", "saleDaysLuckyWheelRewardSetID", "rewardIDs");
    this._normalPreviewSets = this.createRewardItemsMappedToSetID(e, "saleDaysLuckyWheelClasses", "saleDaysLuckyWheelClass", "saleDaysLuckyWheelClassID", "normalPreview");
    this._pointThresholds = this.getActivityRewardThresholds(e);
    this._winClassesAmount = e.saleDaysLuckyWheelClasses.length;
    var t;
    var i = 0;
    var n = 0;
    var o = 0;
    this._sumOfSpinsWithinThresholds = new Array();
    for (var a = 0; a < this._winClassesAmount; a++) {
      t = e.saleDaysLuckyWheelClasses[a];
      i = parseInt(l.CastleXMLUtils.getValueOrDefault("saleDaysLuckyWheelClassID", t, "0"));
      n = parseInt(l.CastleXMLUtils.getValueOrDefault("neededSpinsForNextClass", t, "0"));
      this._c2CostsPerSpinByWinClass.set(i, Number(l.CastleXMLUtils.getValueOrDefault("C2PerSkippedSpin", t, "0")));
      this._neededSpinsForNextClass.set(i, n);
      if (i >= this._pointThresholds[o] || i == 1) {
        this._sumOfSpinsWithinThresholds.push(this._neededSpinsForNextClass.get(i));
        o++;
      } else {
        this._sumOfSpinsWithinThresholds.push(this._neededSpinsForNextClass.get(i - 1) + this._neededSpinsForNextClass.get(i));
      }
    }
  };
  SaleDaysLuckyWheelData.prototype.getActivityRewardThresholds = function (e) {
    var t = new Array();
    for (var i = a.int(e.saleDaysLuckyWheelClasses.length), n = 0; n < i; n++) {
      if ((e.saleDaysLuckyWheelClasses[n].activityRewardThreshold || "") != "") {
        t.push(a.int(e.saleDaysLuckyWheelClasses[n].saleDaysLuckyWheelClassID || ""));
      }
    }
    return t;
  };
  Object.defineProperty(SaleDaysLuckyWheelData.prototype, "currencyID", {
    get: function () {
      return s.ClientConstCurrency.ID_SALES_DAYS_LUCKY_WHEEL_TICKET;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.LuckyWheelData.prototype, "currencyID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SaleDaysLuckyWheelData.prototype, "eventID", {
    get: function () {
      return o.EventConst.EVENTTYPE_LUCKYWHEEL_SD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.LuckyWheelData.prototype, "eventID").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return SaleDaysLuckyWheelData;
}(r.LuckyWheelData);
exports.SaleDaysLuckyWheelData = c;