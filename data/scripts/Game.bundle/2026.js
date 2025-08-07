Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CollectableLevelIndicatorVO(e, t, i, n = null) {
    this._levelClassName = e;
    this._level = t;
    this._scale = i;
    this._pos = n;
  }
  Object.defineProperty(CollectableLevelIndicatorVO.prototype, "levelClassName", {
    get: function () {
      return this._levelClassName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableLevelIndicatorVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableLevelIndicatorVO.prototype, "scale", {
    get: function () {
      return this._scale;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableLevelIndicatorVO.prototype, "pos", {
    get: function () {
      return this._pos;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableLevelIndicatorVO;
}();
exports.CollectableLevelIndicatorVO = n;