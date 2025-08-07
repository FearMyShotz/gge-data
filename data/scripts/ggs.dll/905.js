Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./128.js");
var a = function () {
  function PathfindingGoalConditionTargetRect(e) {
    this._target = e;
  }
  PathfindingGoalConditionTargetRect.prototype.isSatisfied = function (e, t) {
    return this._target.containsPoint(new i.IntPoint(e, t));
  };
  PathfindingGoalConditionTargetRect.prototype.isUnreachable = function (e) {
    for (var t = this._target.x; t < this._target.right; t++) {
      for (var n = this._target.y; n < this._target.bottom; n++) {
        if (e.hasNodeAtPosition(t, n)) {
          return false;
        }
      }
    }
    return true;
  };
  return PathfindingGoalConditionTargetRect;
}();
exports.PathfindingGoalConditionTargetRect = a;