Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function IsoMovementSpawnProbability(e, t) {
    this._from = 0;
    this._to = 1;
    this._from = e;
    this._to = t;
  }
  IsoMovementSpawnProbability.prototype.isInInterval = function (e) {
    return e >= this.from && e <= this.to;
  };
  Object.defineProperty(IsoMovementSpawnProbability.prototype, "from", {
    get: function () {
      return this._from;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementSpawnProbability.prototype, "to", {
    get: function () {
      return this._to;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementSpawnProbability;
}();
exports.IsoMovementSpawnProbability = n;