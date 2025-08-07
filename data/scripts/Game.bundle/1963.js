Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./796.js");
var c = require("./30.js");
var u = require("./4.js");
var d = require("./1159.js");
var p = function (e) {
  function UnitPackageSlotVO() {
    var t = this;
    t._wodId = 0;
    t._amount = 0;
    t._remainingTime = 0;
    t._unitReadyTimeStamp = 0;
    t._boostAmount = 0;
    t._helpAmount = 0;
    t._recruitmentSpeedAtStart = 0;
    t._recruitmentID = 0;
    t._isVIP = false;
    t._productionTime = 0;
    t._isFree = false;
    t._isLocked = false;
    t._sourceRecruitmentID = 0;
    t._receivedAllianceHelp = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(UnitPackageSlotVO, e);
  UnitPackageSlotVO.prototype.fillFromParamObject = function (e) {
    var t = false;
    if (e && e.ICT) {
      this._wodId = s.int(e.WID);
      this._amount = s.int(e.TUA);
      this._boostAmount = s.int(e.CBS);
      t = !!e.RAH;
      this._receivedAllianceHelp = Boolean(t);
      this._recruitmentID = s.int(e.PID);
      this._remainingTime = s.int(e.RCT);
      this._productionTime = s.int(e.ICT);
      this._sourceRecruitmentID = s.int(e.SPID);
      this._isFree = false;
      this._isCurrentlyRecruiting = true;
    }
    if (e && e.P) {
      this._wodId = s.int(e.P.WID);
      this._amount = s.int(e.P.TUA);
      this._boostAmount = s.int(e.P.CBS);
      t = !!e.P.RAH;
      this._receivedAllianceHelp = Boolean(t);
      this._recruitmentID = s.int(e.P.PID);
    }
    if (e && e.SI) {
      this._timeTillLocked = this.amount <= 0 ? e.SI.RUT : -1;
      t = !!e.SI.VIP;
      this._isVIP = Boolean(t);
      this._isLocked = this._timeTillLocked == 0;
      this._isFree = !this._isLocked && this.amount <= 0;
    }
    this._unitReadyTimeStamp = c.CachedTimer.getCachedTimer() + this._remainingTime * r.ClientConstTime.SEC_2_MILLISEC;
    this.setLockTimestamp();
  };
  UnitPackageSlotVO.prototype.initProductionSlot = function () {
    this._timeTillLocked = -1;
    this._isLocked = false;
    this._isFree = !this._isLocked;
    this._isVIP = false;
  };
  UnitPackageSlotVO.prototype.fillFromParamArray = function (e) {
    this._wodId = s.int(e.shift());
    this._amount = s.int(e.shift());
    this._remainingTime = s.int(e.shift());
    this._recruitmentSpeedAtStart = e.shift() / 100;
    this._boostAmount = s.int(e.shift());
    this._helpAmount = s.int(e.shift());
    this._recruitmentID = s.int(e.shift());
    this._productionTime = s.int(e.shift());
    this._timeTillLocked = e.shift();
    var t = s.int(e.shift());
    this._isVIP = Boolean(t);
    this._isFree = this._wodId == a.ConstructionConst.SLOTSTATEUNLOCKED;
    this._isLocked = this._wodId == a.ConstructionConst.SLOTSTATELOCKED;
    this._unitReadyTimeStamp = c.CachedTimer.getCachedTimer() + this._remainingTime * r.ClientConstTime.SEC_2_MILLISEC;
    this.setLockTimestamp();
  };
  UnitPackageSlotVO.prototype.update = function () {
    this._castleSlotVOEvent ||= new l.CastleSlotVOEvent(l.CastleSlotVOEvent.SLOT_UPDATE);
    this.dispatchEvent(this._castleSlotVOEvent);
  };
  Object.defineProperty(UnitPackageSlotVO.prototype, "isFree", {
    get: function () {
      return this._isFree;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicSlotVO.prototype, "isFree").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicSlotVO.prototype, "isLocked").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "isVIP", {
    get: function () {
      return this._isVIP;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "amount", {
    get: function () {
      return this._amount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "unitReadyTimeStamp", {
    get: function () {
      return this._unitReadyTimeStamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "remainingTimeInSeconds", {
    get: function () {
      if (this.isCurrentlyRecruiting) {
        return Math.ceil(this._unitReadyTimeStamp - c.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC;
      } else {
        return this._remainingTime;
      }
    },
    enumerable: true,
    configurable: true
  });
  UnitPackageSlotVO.prototype.isReady = function () {
    return c.CachedTimer.getCachedTimer() > this._unitReadyTimeStamp;
  };
  Object.defineProperty(UnitPackageSlotVO.prototype, "numOfBoost", {
    get: function () {
      return this._boostAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "unitReadyInPercent", {
    get: function () {
      return Math.max(0, Math.min(1, this.remainingTimeInSeconds / this.productionTime));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "productionTime", {
    get: function () {
      return this._productionTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "unitVO", {
    get: function () {
      if (this.wodId > 0) {
        return u.CastleModel.wodData.voSubList(h.CastleWodData.TYPE_UNIT).get(this.wodId);
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "recruitmentID", {
    get: function () {
      return this._recruitmentID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "helpAmount", {
    get: function () {
      return this._helpAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "hasLoopableUnitAmount", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "sourceRecruitmentID", {
    get: function () {
      return this._sourceRecruitmentID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "isCurrentlyRecruiting", {
    get: function () {
      return this._isCurrentlyRecruiting;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.BasicSlotVO.prototype, "isCurrentlyRecruiting").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitPackageSlotVO.prototype, "receivedAllianceHelp", {
    get: function () {
      return this._receivedAllianceHelp;
    },
    enumerable: true,
    configurable: true
  });
  return UnitPackageSlotVO;
}(d.BasicSlotVO);
exports.UnitPackageSlotVO = p;
var h = require("./56.js");
o.classImplementsInterfaces(p, "ISlotVO", "IEventDispatcher");