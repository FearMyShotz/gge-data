Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = require("./5.js");
var a = require("./28.js");
var s = require("./30.js");
var r = function () {
  function PremiumAccountVO() {
    this._isActive = false;
    this._remainingTime = 0;
    this._accountType = -1;
    this._startTime = 0;
    this._isOutrun = false;
  }
  PremiumAccountVO.prototype.parseServerInfo = function (e) {
    this._remainingTime = e.PA * a.ClientConstTime.SEC_2_MILLISEC;
    this._startTime = s.CachedTimer.getCachedTimer();
    this._isActive = this._remainingTime > 0;
  };
  Object.defineProperty(PremiumAccountVO.prototype, "isActive", {
    get: function () {
      return this._remainingTime - (s.CachedTimer.getCachedTimer() - this._startTime) > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      if (this.isActive) {
        return (this._remainingTime - (s.CachedTimer.getCachedTimer() - this._startTime)) * a.ClientConstTime.MILLISEC_2_SEC;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "premiumAccountType", {
    get: function () {
      if (this.isActive) {
        return this._accountType;
      } else {
        return -1;
      }
    },
    set: function (e) {
      this._accountType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "factor_C2", {
    get: function () {
      return o.PremiumConst.FACTOR_C2[this._accountType];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "factor_C1", {
    get: function () {
      return o.PremiumConst.FACTOR_C1[this._accountType];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "bribe_C2_Factor", {
    get: function () {
      return o.PremiumConst.FACTOR_BRIBE_TAX_C2[this._accountType];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "isOutrun", {
    get: function () {
      return this._isOutrun;
    },
    set: function (e) {
      this._isOutrun = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "level", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PremiumAccountVO.prototype, "bonusValue", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  return PremiumAccountVO;
}();
exports.PremiumAccountVO = r;
n.classImplementsInterfaces(r, "IDefaultBoosterDataVO", "IBoosterDataVO");