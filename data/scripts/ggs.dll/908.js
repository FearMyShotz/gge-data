Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function PathfindingHeuristicEuclidian(e, t) {
    this._targetX = 0;
    this._targetY = 0;
    this._targetX = e;
    this._targetY = t;
  }
  PathfindingHeuristicEuclidian.prototype.calculate = function (e, t, n) {
    return Math.sqrt((this._targetX - t) * (this._targetX - t) + (this._targetY - n) * (this._targetY - n)) * e.traverseCostStandard;
  };
  return PathfindingHeuristicEuclidian;
}();
exports.PathfindingHeuristicEuclidian = i;