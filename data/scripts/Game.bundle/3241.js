Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function BoosterVO(e, t, i = 0, n = 0) {
    this._id = 0;
    this._duration = 0;
    this._level = 0;
    this._purchaseCount = 0;
    this._id = e;
    this._duration = t;
    this._level = i;
    this._purchaseCount = n;
  }
  BoosterVO.prototype.clone = function () {
    return new BoosterVO(this.id, this.duration, this.level, this.purchaseCount);
  };
  Object.defineProperty(BoosterVO.prototype, "isWoodBooster", {
    get: function () {
      return this.id == 0 || this.id == 3;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "isStoneBooster", {
    get: function () {
      return this.id == 1 || this.id == 4;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "isFoodBooster", {
    get: function () {
      return this.id == 2 || this.id == 5;
    },
    enumerable: true,
    configurable: true
  });
  BoosterVO.prototype.isMarauder = function () {
    return this.id == 6;
  };
  BoosterVO.prototype.isTaxcollector = function () {
    return this.id == 8;
  };
  BoosterVO.prototype.isInstructor = function () {
    return this.id == 10;
  };
  Object.defineProperty(BoosterVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "duration", {
    get: function () {
      return this._duration;
    },
    set: function (e) {
      this._duration = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    set: function (e) {
      this._level = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BoosterVO.prototype, "purchaseCount", {
    get: function () {
      return this._purchaseCount;
    },
    set: function (e) {
      this._purchaseCount = e;
    },
    enumerable: true,
    configurable: true
  });
  return BoosterVO;
}();
exports.BoosterVO = n;