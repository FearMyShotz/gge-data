Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./28.js");
var a = require("./30.js");
var s = function () {
  function SamuraiDaimyoAreaVO(e, t) {
    this._x = 0;
    this._y = 0;
    this._rank = 0;
    this._level = 0;
    this._shogunPoints = 0;
    this._remainingCooldownTimestamp = 0;
    this._cooldownCounter = 0;
    this._eventAutoScalingCampID = -1;
    this.parseServerData(e, t);
  }
  SamuraiDaimyoAreaVO.prototype.parseServerData = function (e, t) {
    this._contractType = e;
    this._x = n.int(t.PX);
    this._y = n.int(t.PY);
    this._rank = n.int(t.R);
    this._level = n.int(t.L);
    this._shogunPoints = n.int(t.SP);
    this._remainingCooldownTimestamp = n.int(a.CachedTimer.getCachedTimer() + t.CD * o.ClientConstTime.SEC_2_MILLISEC);
    this._cooldownCounter = n.int(t.CDC);
    this._eventAutoScalingCampID = n.int(t.DDCID);
  };
  SamuraiDaimyoAreaVO.prototype.getRemainingCooldown = function () {
    return n.int(Math.max((this._remainingCooldownTimestamp - a.CachedTimer.getCachedTimer()) * o.ClientConstTime.MILLISEC_2_SEC, 0));
  };
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "contractType", {
    get: function () {
      return this._contractType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "x", {
    get: function () {
      return this._x;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "y", {
    get: function () {
      return this._y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "rank", {
    get: function () {
      return this._rank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "shogunPoints", {
    get: function () {
      return this._shogunPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "remainingCooldownTimestamp", {
    get: function () {
      return this._remainingCooldownTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "cooldownCounter", {
    get: function () {
      return this._cooldownCounter;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoAreaVO.prototype, "eventAutoScalingCampID", {
    get: function () {
      return this._eventAutoScalingCampID;
    },
    enumerable: true,
    configurable: true
  });
  return SamuraiDaimyoAreaVO;
}();
exports.SamuraiDaimyoAreaVO = s;