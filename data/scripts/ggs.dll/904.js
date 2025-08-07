Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function PathfindingGoalConditionTargetPoint(e, t) {
    this._targetX = e;
    this._targetY = t;
  }
  PathfindingGoalConditionTargetPoint.prototype.isSatisfied = function (e, t) {
    return e == this._targetX && t == this._targetY;
  };
  PathfindingGoalConditionTargetPoint.prototype.isUnreachable = function (e) {
    return !e.hasNodeAtPosition(this._targetX, this._targetY);
  };
  return PathfindingGoalConditionTargetPoint;
}();
exports.PathfindingGoalConditionTargetPoint = i;