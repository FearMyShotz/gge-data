Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = createjs.Point;
var a = function () {
  function ResearchConnectionFinder() {
    this.pathfinderHeuristic = new n.PathfindingHeuristicNone();
  }
  ResearchConnectionFinder.prototype.getPathByVO = function (e, t, i) {
    return this.getPathByPos(new o(e.x, e.y), new o(t.x, t.y), i);
  };
  ResearchConnectionFinder.prototype.getPathByPos = function (e, t, i) {
    i.setWalkable(e.x, e.y, true);
    i.setWalkable(t.x, t.y, true);
    var o = n.PathfindingGraph.generateFromMap(i);
    var a = o.getNodeIndexByPosition(e.x, e.y);
    var s = new n.PathfindingGoalConditionTargetPoint(t.x, t.y);
    var r = new n.Pathfinder(o, a, s, this.pathfinderHeuristic);
    r.solve();
    i.setWalkable(e.x, e.y, false);
    i.setWalkable(t.x, t.y, false);
    return r.getPath();
  };
  return ResearchConnectionFinder;
}();
exports.ResearchConnectionFinder = a;