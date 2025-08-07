Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function PathfindingHeuristicManhattan(e, t) {
    this._targetX = e;
    this._targetY = t;
  }
  PathfindingHeuristicManhattan.prototype.calculate = function (e, t, n) {
    return (Math.abs(t - this._targetX) + Math.abs(n - this._targetY)) * e.traverseCostStandard;
  };
  return PathfindingHeuristicManhattan;
}();
exports.PathfindingHeuristicManhattan = i;