Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function BuffVO(e, t = -1) {
    this._buffLevel = 0;
    this._endTime = 0;
    this._buffLevel = e;
    this._endTime = t;
  }
  Object.defineProperty(BuffVO.prototype, "level", {
    get: function () {
      if (this.isTemporary && this.remainingDuration <= 0) {
        return 0;
      } else {
        return this._buffLevel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuffVO.prototype, "remainingDuration", {
    get: function () {
      if (this.isTemporary) {
        return Math.max(0, this._endTime - o.CachedTimer.getCachedTimer() / 1000);
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuffVO.prototype, "isTemporary", {
    get: function () {
      return this._endTime != -1;
    },
    enumerable: true,
    configurable: true
  });
  return BuffVO;
}();
exports.BuffVO = n;
var o = require("./30.js");