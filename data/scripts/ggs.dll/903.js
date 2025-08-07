Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./128.js");
var a = require("./490.js");
var s = function () {
  function Pathfinder(e, t, n, i) {
    this._nodeStart = 0;
    this._nodeGoal = 0;
    this._state = Pathfinder.STATE_UNSOLVED;
    this._graph = e;
    this._nodeStart = t;
    this._goalcondition = n;
    this._heuristic = i;
  }
  Pathfinder.prototype.solve = function () {
    var e = false;
    if (this._nodeStart >= 0 && this._nodeStart < this._graph.nodeCount && !this._goalcondition.isUnreachable(this._graph)) {
      var t = Array(this._graph.nodeCount).fill(0);
      this._node_parent = Array(this._graph.nodeCount).fill(0);
      var n = Array(this._graph.nodeCount).fill(0);
      var i = Array(this._graph.nodeCount).fill(0);
      var s = Array(this._graph.nodeCount).fill(0);
      var r = new a.IndexedPriorityQueue(s);
      var o = this._nodeStart;
      t[o] = Pathfinder.NODE_OPEN;
      r.sortInto(o);
      while (!e && r.length() > 0) {
        o = r.pop();
        if (this._goalcondition.isSatisfied(this._graph.getNodeX(o), this._graph.getNodeY(o))) {
          this._nodeGoal = o;
          e = true;
        } else {
          for (var l = this._graph.getNodeNeighbors(o), u = this._graph.getConnectionCosts(o), c = 0, _ = 0, d = 0; d < l.length; d++) {
            if (t[c = l[d]] != Pathfinder.NODE_CLOSED) {
              _ = u != null ? n[o] + u[d] : n[o] + this._graph.traverseCostStandard;
              if (t[c] == Pathfinder.NODE_NEW) {
                n[c] = _;
                i[c] = this._heuristic.calculate(this._graph, this._graph.getNodeX(c), this._graph.getNodeY(c));
                s[c] = n[c] + i[c];
                this._node_parent[c] = o;
                r.sortInto(c);
                t[c] = Pathfinder.NODE_OPEN;
              } else if (_ < n[c]) {
                n[c] = _;
                s[c] = _ + i[c];
                this._node_parent[c] = o;
              }
            }
          }
          t[o] = Pathfinder.NODE_CLOSED;
        }
      }
    }
    this._state = e ? Pathfinder.STATE_SOLUTION_FOUND : Pathfinder.STATE_NO_SOLUTION_FOUND;
    return e;
  };
  Pathfinder.prototype.getPath = function () {
    var e = null;
    if (this._state == Pathfinder.STATE_SOLUTION_FOUND) {
      e = [];
      for (var t = this._nodeGoal; t != this._nodeStart;) {
        e.push(new i.IntPoint(this._graph.getNodeX(t), this._graph.getNodeY(t)));
        t = this._node_parent[t];
      }
      e.push(new i.IntPoint(this._graph.getNodeX(t), this._graph.getNodeY(t)));
    }
    return e;
  };
  Object.defineProperty(Pathfinder.prototype, "solved", {
    get: function () {
      return this._state == Pathfinder.STATE_SOLUTION_FOUND;
    },
    enumerable: true,
    configurable: true
  });
  Pathfinder.STATE_UNSOLVED = 0;
  Pathfinder.STATE_SOLUTION_FOUND = 1;
  Pathfinder.STATE_NO_SOLUTION_FOUND = 2;
  Pathfinder.NODE_NEW = 0;
  Pathfinder.NODE_OPEN = 1;
  Pathfinder.NODE_CLOSED = 2;
  return Pathfinder;
}();
exports.Pathfinder = s;