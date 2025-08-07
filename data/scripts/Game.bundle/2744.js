Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./55.js");
var a = require("./451.js");
var s = require("./632.js");
var r = createjs.Point;
var l = function (e) {
  function IsoGeneratorDefenceCommon() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(IsoGeneratorDefenceCommon, e);
  IsoGeneratorDefenceCommon.prototype.execute = function () {
    var e;
    var t;
    var i = [];
    var n = [];
    for (var o = 0, a = this.parentGenerator.grounds; o < a.length; o++) {
      if ((e = a[o]).rotatedWidth == 20 && e.rotatedHeight == 20) {
        i.push(new r(e.x, e.y + 10 - 1));
        i.push(new r(e.x2, e.y + 10 - 1));
        i.push(new r(e.x + 10 - 1, e.y));
        i.push(new r(e.x + 10 - 1, e.y2));
        i.push(new r(e.x, e.y + 10));
        i.push(new r(e.x2, e.y + 10));
        i.push(new r(e.x + 10, e.y));
        i.push(new r(e.x + 10, e.y2));
      }
      i.push(new r(e.x, e.y));
      i.push(new r(e.x, e.y2));
      i.push(new r(e.x2, e.y));
      i.push(new r(e.x2, e.y2));
      n.push(new r(e.x, e.y));
      n.push(new r(e.x, e.y2));
      n.push(new r(e.x2, e.y));
      n.push(new r(e.x2, e.y2));
    }
    for (var s = 0, l = this.parentGenerator.grounds; s < l.length; s++) {
      if ((e = l[s]).rotatedWidth != 20 || e.rotatedHeight != 20) {
        if (e.rotatedWidth > e.rotatedHeight) {
          i.push(new r(e.x + 10, e.y));
          i.push(new r(e.x + 10, e.y2));
        } else {
          i.push(new r(e.x, e.y + 10));
          i.push(new r(e.x2, e.y + 10));
        }
      }
    }
    i.sort(IsoGeneratorDefenceCommon.sortByViewDistanceFunc);
    n.sort(IsoGeneratorDefenceCommon.sortByViewDistanceFunc);
    for (var c = 0, u = i; c < u.length; c++) {
      t = u[c];
      this.addPossiblePositionToList(this.parentGenerator.result.outerCorners, this.bindFunction(this.getPossibleOuterCornerPosition), t);
    }
    for (var d = 0, p = i; d < p.length; d++) {
      t = p[d];
      this.addPossiblePositionToList(this.parentGenerator.result.innerCorners, this.bindFunction(this.getPossibleInnerCornerPosition), t);
    }
    for (var h = 0, g = i; h < g.length; h++) {
      t = g[h];
      this.addPossiblePositionToList(this.parentGenerator.result.sides, this.bindFunction(this.getPossibleSidePosition), t);
    }
    for (var C = 0, _ = n; C < _.length; C++) {
      t = _[C];
      this.addPossiblePositionToList(this.parentGenerator.result.groundCornerSides, this.bindFunction(this.getPossibleSidePosition), t);
    }
  };
  IsoGeneratorDefenceCommon.sortByViewDistanceFunc = function (e, t) {
    return o.ClientConstUtils.distanceSquared(c.IsoConst.Z_SORT_LOOK_POINT, e) - o.ClientConstUtils.distanceSquared(c.IsoConst.Z_SORT_LOOK_POINT, t);
  };
  IsoGeneratorDefenceCommon.prototype.addPossiblePositionToList = function (e, t, i) {
    var n = t(i);
    if (n) {
      e.push(n);
    }
  };
  IsoGeneratorDefenceCommon.prototype.getPossibleOuterCornerPosition = function (e) {
    var t = -1;
    if (this.map[e.y][e.x].hasGround) {
      if (this.map[e.y + 1][e.x].hasGround || this.map[e.y + 1][e.x - 1].hasGround || this.map[e.y][e.x - 1].hasGround) {
        if (this.map[e.y - 1][e.x].hasGround || this.map[e.y - 1][e.x - 1].hasGround || this.map[e.y][e.x - 1].hasGround) {
          if (this.map[e.y - 1][e.x].hasGround || this.map[e.y - 1][e.x + 1].hasGround || this.map[e.y][e.x + 1].hasGround) {
            if (!this.map[e.y + 1][e.x].hasGround && !this.map[e.y + 1][e.x + 1].hasGround && !this.map[e.y][e.x + 1].hasGround) {
              t = 0;
            }
          } else {
            t = 2;
          }
        } else {
          t = 3;
        }
      } else {
        t = 1;
      }
    }
    if (t >= 0) {
      return new a.IsoDefencePosition(e, t);
    } else {
      return null;
    }
  };
  IsoGeneratorDefenceCommon.prototype.getPossibleInnerCornerPosition = function (e) {
    var t = -1;
    var i = e;
    if (this.map[e.y][e.x].hasGround) {
      if (this.map[e.y - 1][e.x].hasGround && this.map[e.y][e.x + 1].hasGround && !this.map[e.y - 1][e.x + 1].hasGround) {
        t = 2;
      } else if (this.map[e.y + 1][e.x].hasGround && this.map[e.y][e.x + 1].hasGround && !this.map[e.y + 1][e.x + 1].hasGround) {
        t = 0;
      } else if (this.map[e.y][e.x - 1].hasGround && this.map[e.y + 1][e.x - 1].hasGround && !this.map[e.y + 1][e.x].hasGround) {
        i = new r(e.x - 1, e.y);
        t = 0;
      } else if (this.map[e.y + 1][e.x].hasGround && this.map[e.y][e.x - 1].hasGround && !this.map[e.y + 1][e.x - 1].hasGround) {
        t = 1;
      } else if (this.map[e.y - 1][e.x].hasGround && this.map[e.y][e.x - 1].hasGround && !this.map[e.y - 1][e.x - 1].hasGround) {
        t = 3;
      }
    }
    if (t >= 0) {
      return new a.IsoDefencePosition(i, t);
    } else {
      return null;
    }
  };
  IsoGeneratorDefenceCommon.prototype.getPossibleSidePosition = function (e) {
    var t = -1;
    if (this.map[e.y][e.x].hasGround && this.map[e.y][e.x - 1].hasGround && this.map[e.y][e.x + 1].hasGround && this.map[e.y - 1][e.x].hasGround && this.map[e.y - 1][e.x - 1].hasGround && this.map[e.y - 1][e.x + 1].hasGround && !this.map[e.y + 1][e.x].hasGround && !this.map[e.y + 1][e.x - 1].hasGround && !this.map[e.y + 1][e.x + 1].hasGround) {
      t = 1;
    }
    if (this.map[e.y][e.x].hasGround && this.map[e.y + 1][e.x].hasGround && this.map[e.y - 1][e.x].hasGround && this.map[e.y][e.x - 1].hasGround && this.map[e.y - 1][e.x - 1].hasGround && this.map[e.y + 1][e.x - 1].hasGround && !this.map[e.y][e.x + 1].hasGround && !this.map[e.y + 1][e.x + 1].hasGround && !this.map[e.y - 1][e.x + 1].hasGround) {
      t = 0;
    }
    if (this.map[e.y][e.x].hasGround && this.map[e.y][e.x - 1].hasGround && this.map[e.y][e.x + 1].hasGround && this.map[e.y + 1][e.x].hasGround && this.map[e.y + 1][e.x - 1].hasGround && this.map[e.y + 1][e.x + 1].hasGround && !this.map[e.y - 1][e.x].hasGround && !this.map[e.y - 1][e.x - 1].hasGround && !this.map[e.y - 1][e.x + 1].hasGround) {
      t = 3;
    }
    if (this.map[e.y][e.x].hasGround && this.map[e.y + 1][e.x].hasGround && this.map[e.y - 1][e.x].hasGround && this.map[e.y][e.x + 1].hasGround && this.map[e.y - 1][e.x + 1].hasGround && this.map[e.y + 1][e.x + 1].hasGround && !this.map[e.y][e.x - 1].hasGround && !this.map[e.y + 1][e.x - 1].hasGround && !this.map[e.y - 1][e.x - 1].hasGround) {
      t = 2;
    }
    if (t >= 0) {
      return new a.IsoDefencePosition(e, t);
    } else {
      return null;
    }
  };
  return IsoGeneratorDefenceCommon;
}(s.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceCommon = l;
var c = require("./144.js");