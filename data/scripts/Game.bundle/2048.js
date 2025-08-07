Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./6.js");
var l = require("./55.js");
var c = require("./30.js");
var u = require("./690.js");
var d = require("./865.js");
var p = require("./2049.js");
var h = createjs.Point;
var g = function (e) {
  function IsoMovementActionWalk(t, i, n, o) {
    var a = this;
    a._spawnPos = new h();
    a._targetPos = new h();
    a._defaultWalkSpeed = 0;
    a._currentWalkBoost = 0;
    a._currentNodeIndex = 0;
    a._currentPath = [];
    a._lastRenderCallUpdate = 0;
    a._useWorker = true;
    CONSTRUCTOR_HACK;
    (a = e.call(this, n, o) || this)._spawnPos.x = t.x;
    a._spawnPos.y = t.y;
    a._targetPos.x = i.x;
    a._targetPos.y = i.y;
    a._defaultWalkSpeed = a.getRandomWalkSpeed();
    return a;
  }
  n.__extends(IsoMovementActionWalk, e);
  IsoMovementActionWalk.prototype.start = function () {
    var e = this;
    this._lastRenderCallUpdate = c.CachedTimer.getCachedTimer();
    this.createPathFinder(this.spawnPos, this.targetPos).then(function (t) {
      if (t.solved) {
        e.movementVO.changePos(e.spawnPos.x, e.spawnPos.y);
        e._currentNodeIndex = 0;
        e._currentPath = t.path;
        e.onReachingNode();
        if (e.willFadeIn) {
          e.fadeIn();
        }
      } else {
        e.onActionDone();
      }
    }).catch(function (t) {
      return e.onActionDone();
    });
  };
  IsoMovementActionWalk.prototype.update = function (t) {
    e.prototype.update.call(this, t);
    if (this.currentWalkBoost > 0) {
      this.currentWalkBoost -= C.IsoConst.MOVEMENTS_WALK_BOOST_DECREASE;
      if (this.currentWalkBoost < 0) {
        this.currentWalkBoost = 0;
      }
    }
    if (this.currentWalkTargetNode) {
      var i = (t - this._lastRenderCallUpdate) / 30;
      var n = this.currentWalkSpeed * i;
      var o = this.movementVO.precisePos.x;
      var a = this.movementVO.precisePos.y;
      switch (this.movementVO.rotation) {
        case 0:
          o += n;
          break;
        case 1:
          a += n;
          break;
        case 2:
          a -= n;
          break;
        case 3:
          o -= n;
      }
      var s = r.int(o);
      var l = r.int(a);
      this.movementVO.changePos(o, a, this.movementVO.x != s || this.movementVO.y != l);
      if (this.hasReachedNode()) {
        this.onReachingNode();
      }
      this._lastRenderCallUpdate = t;
    }
  };
  IsoMovementActionWalk.prototype.setPathNodeProgress = function (e) {
    if (this.currentPath) {
      var t = r.int(Math.min(Math.max(e, 0), this.currentPath.length - 1));
      this._currentNodeIndex = t;
      this.onReachingNode();
    }
  };
  IsoMovementActionWalk.prototype.giveSpeedBoost = function () {
    this._currentWalkBoost = C.IsoConst.MOVEMENTS_WALK_BOOST;
  };
  IsoMovementActionWalk.prototype.hasReachedNode = function () {
    if (!this.currentWalkTargetNode) {
      return true;
    }
    switch (this.movementVO.rotation) {
      case 0:
        if (this.movementVO.precisePos.x >= this.currentWalkTargetNode.x) {
          return true;
        }
        break;
      case 1:
        if (this.movementVO.precisePos.y >= this.currentWalkTargetNode.y) {
          return true;
        }
        break;
      case 2:
        if (this.movementVO.precisePos.y < this.currentWalkTargetNode.y) {
          return true;
        }
        break;
      case 3:
        if (this.movementVO.precisePos.x < this.currentWalkTargetNode.x) {
          return true;
        }
    }
    return false;
  };
  IsoMovementActionWalk.prototype.onReachingNode = function () {
    if (this.currentWalkTargetNode) {
      this.movementVO.changePos(this.currentWalkTargetNode.x, this.currentWalkTargetNode.y);
    }
    this._currentNodeIndex++;
    if (this.currentNodeIndex >= this.currentPath.length - 1 && this.willFadeOut) {
      this.fadeOut();
    }
    if (this.currentNodeIndex >= this.currentPath.length) {
      this.onActionDone();
    } else {
      var e = new h(this.currentWalkTargetNode.x - this.movementVO.precisePos.x, this.currentWalkTargetNode.y - this.movementVO.precisePos.y);
      if (e.x > 0) {
        this.movementVO.rotation = 0;
      } else if (e.x < 0) {
        this.movementVO.rotation = 3;
      } else if (e.y > 0) {
        this.movementVO.rotation = 1;
      } else if (e.y < 0) {
        this.movementVO.rotation = 2;
      }
    }
  };
  IsoMovementActionWalk.prototype.createPathFinder = function (e, t) {
    var i = this;
    return new Promise(function (n, r) {
      var l = i.grid.getPathfindingGraph();
      if (window.Worker && i._useWorker) {
        var c = {
          fromPos: e,
          toPos: t
        };
        if (!i.grid.workerPathfinderGraphNotified) {
          c.graph = l;
          i.grid.workerPathfinderGraphNotified = true;
        }
        p.worker.postMessage(c);
        p.worker.onmessage = function (e) {
          var t = e.data;
          n(t);
        };
      } else {
        var u = l.getNodeIndexByPosition(t.x, t.y);
        var d = new a.PathfindingGoalConditionTargetPoint(e.x, e.y);
        var h = new s.PathfindingHeuristicManhattan(e.x, e.y);
        var g = new o.Pathfinder(l, u, d, h);
        g.solve();
        n({
          solved: g.solved,
          path: g.getPath()
        });
      }
    });
  };
  Object.defineProperty(IsoMovementActionWalk.prototype, "actionType", {
    get: function () {
      return u.IsoMovementActionEnum.WALK;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AIsoMovementAction.prototype, "actionType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  IsoMovementActionWalk.prototype.getRandomWalkSpeed = function () {
    return C.IsoConst.MOVEMENTS_SPEED_MIN + (C.IsoConst.MOVEMENTS_SPEED_MAX - C.IsoConst.MOVEMENTS_SPEED_MIN) * l.ClientConstUtils.getRandomInt(1, 100) / 100;
  };
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentWalkTargetNode", {
    get: function () {
      if (this.currentNodeIndex < this.currentPath.length) {
        return this.currentPath[this.currentNodeIndex];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentWalkSpeed", {
    get: function () {
      return this._defaultWalkSpeed + this._currentWalkBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentWalkBoost", {
    get: function () {
      return this._currentWalkBoost;
    },
    set: function (e) {
      this._currentWalkBoost = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "defaultWalkSpeed", {
    set: function (e) {
      this._defaultWalkSpeed = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentPath", {
    get: function () {
      return this._currentPath;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "currentNodeIndex", {
    get: function () {
      return this._currentNodeIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "spawnPos", {
    get: function () {
      return this._spawnPos;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMovementActionWalk.prototype, "targetPos", {
    get: function () {
      return this._targetPos;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMovementActionWalk;
}(d.AIsoMovementAction);
exports.IsoMovementActionWalk = g;
var C = require("./144.js");