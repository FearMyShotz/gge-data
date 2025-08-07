Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function PathfindingGoalConditionTargetRectAdjacent(e, t = false) {
    this._target = e.clone();
    this._useCorners = t;
  }
  PathfindingGoalConditionTargetRectAdjacent.prototype.isSatisfied = function (e, t) {
    if (this._useCorners) {
      return (e == this._target.left - 1 || e == this._target.right) && t >= this._target.top - 1 && t <= this._target.bottom || (t == this._target.top - 1 || t == this._target.bottom) && e >= this._target.left && e < this._target.right;
    } else {
      return (e == this._target.left - 1 || e == this._target.right) && t >= this._target.top && t < this._target.bottom || (t == this._target.top - 1 || t == this._target.bottom) && e >= this._target.left && e < this._target.right;
    }
  };
  PathfindingGoalConditionTargetRectAdjacent.prototype.isUnreachable = function (e) {
    var t = this._target.left - 1;
    var n = 0;
    for (n = this._target.top; n < this._target.bottom; n++) {
      if (e.hasNodeAtPosition(t, n)) {
        return false;
      }
    }
    t = this._target.right;
    n = this._target.top;
    for (; n < this._target.bottom; n++) {
      if (e.hasNodeAtPosition(t, n)) {
        return false;
      }
    }
    n = this._target.top - 1;
    t = this._target.left;
    for (; t < this._target.right; t++) {
      if (e.hasNodeAtPosition(t, n)) {
        return false;
      }
    }
    n = this._target.bottom;
    t = this._target.left;
    for (; t < this._target.right; t++) {
      if (e.hasNodeAtPosition(t, n)) {
        return false;
      }
    }
    return !this._useCorners || !e.hasNodeAtPosition(this._target.left - 1, this._target.top - 1) && !e.hasNodeAtPosition(this._target.right, this._target.top - 1) && !e.hasNodeAtPosition(this._target.left - 1, this._target.bottom) && !e.hasNodeAtPosition(this._target.right, this._target.bottom);
  };
  return PathfindingGoalConditionTargetRectAdjacent;
}();
exports.PathfindingGoalConditionTargetRectAdjacent = i;