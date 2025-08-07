Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./28.js");
var a = require("./30.js");
var s = function (e) {
  function BasicSlotVO() {
    var t = e.call(this) || this;
    t._timeTillLocked = 0;
    t._lockTimestamp = NaN;
    t._isCurrentlyRecruiting = false;
    t._pos = 0;
    t.isLockedProductionSlot = false;
    return t;
  }
  n.__extends(BasicSlotVO, e);
  BasicSlotVO.prototype.fillFromParamObject = function (e) {};
  BasicSlotVO.prototype.fillFromParamArray = function (e) {};
  BasicSlotVO.prototype.setLockTimestamp = function () {
    if (this._timeTillLocked > 0) {
      this._lockTimestamp = a.CachedTimer.getCachedTimer() + (this._timeTillLocked + 1) * o.ClientConstTime.SEC_2_MILLISEC;
    } else {
      this._lockTimestamp = Number.MAX_VALUE;
    }
  };
  Object.defineProperty(BasicSlotVO.prototype, "remainingUnlockTimeInSeconds", {
    get: function () {
      return (this._lockTimestamp - a.CachedTimer.getCachedTimer()) * o.ClientConstTime.MILLISEC_2_SEC;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isAlwaysUnlocked", {
    get: function () {
      return this._timeTillLocked == -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "lockTimestamp", {
    get: function () {
      return this._lockTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "timeTillLocked", {
    get: function () {
      return this._timeTillLocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isFirst", {
    get: function () {
      return this.pos == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "pos", {
    get: function () {
      return this._pos;
    },
    set: function (e) {
      this._pos = e;
      this._isCurrentlyRecruiting = this._pos == 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isFree", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isLocked", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicSlotVO.prototype, "isCurrentlyRecruiting", {
    get: function () {
      return this._isCurrentlyRecruiting;
    },
    set: function (e) {
      this._isCurrentlyRecruiting = e;
    },
    enumerable: true,
    configurable: true
  });
  return BasicSlotVO;
}(require("./72.js").CastleEventDispatcher);
exports.BasicSlotVO = s;