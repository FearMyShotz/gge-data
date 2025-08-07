Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./28.js");
var r = require("./30.js");
var l = require("./4.js");
var c = require("./1159.js");
var u = require("./1963.js");
var d = function (e) {
  function UnitHealPackageSlotVO() {
    var t = this;
    t._healTimeReduction = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(UnitHealPackageSlotVO, e);
  UnitHealPackageSlotVO.prototype.fillFromParamArray = function (e) {
    this._wodId = e.shift();
    this._amount = e.shift();
    this._remainingTime = e.shift();
    this._recruitmentSpeedAtStart = e.shift() / 100;
    this._healTimeReduction = e.shift();
    this._recruitmentID = e.shift();
    this._timeTillLocked = e.shift();
    this._unitReadyTimeStamp = r.CachedTimer.getCachedTimer() + this._remainingTime * s.ClientConstTime.SEC_2_MILLISEC;
    this.setLockTimestamp();
    this._isFree = this._wodId == a.ConstructionConst.SLOTSTATEUNLOCKED;
    this._isLocked = this._wodId == a.ConstructionConst.SLOTSTATELOCKED;
  };
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "healTimeReduction", {
    get: function () {
      return this._healTimeReduction;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "healingReadyInPercent", {
    get: function () {
      return 1 - Math.max(0, Math.min(1, this.remainingTimeInSeconds / this.healingTime));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "healingTime", {
    get: function () {
      if (this.wodId > 0) {
        return l.CastleModel.wodData.voSubList(p.CastleWodData.TYPE_UNIT).get(this.wodId).basicHealingTime * this._amount / this._recruitmentSpeedAtStart - this.healTimeReduction;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "unitReadyInPercent", {
    get: function () {
      return 1 - Math.max(0, Math.min(1, this.remainingTimeInSeconds / this.productionTime));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.UnitPackageSlotVO.prototype, "unitReadyInPercent").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitHealPackageSlotVO.prototype, "isCurrentlyRecruiting", {
    get: function () {
      return this._amount > 0 && this.isFirst;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.BasicSlotVO.prototype, "isCurrentlyRecruiting").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return UnitHealPackageSlotVO;
}(u.UnitPackageSlotVO);
exports.UnitHealPackageSlotVO = d;
var p = require("./56.js");
o.classImplementsInterfaces(d, "ISlotVO", "IEventDispatcher");