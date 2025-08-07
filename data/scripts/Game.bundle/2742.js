Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./451.js");
var s = require("./631.js");
var r = createjs.Point;
var l = function (e) {
  function IsoGeneratorDefenceWall() {
    var t = this;
    t._collisionList = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoGeneratorDefenceWall, e);
  IsoGeneratorDefenceWall.prototype.execute = function () {
    this.initCollisionList();
    for (var e = 0, t = this.parentGenerator.grounds; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        for (var n = o.int(i.x); n <= i.x2; ++n) {
          this.addPossiblePositionToList(new r(n, i.y));
          this.addPossiblePositionToList(new r(n, i.y2));
        }
        for (var a = o.int(i.y); a <= i.y2; ++a) {
          this.addPossiblePositionToList(new r(i.x, a));
          this.addPossiblePositionToList(new r(i.x2, a));
        }
      }
    }
  };
  IsoGeneratorDefenceWall.prototype.cleanup = function () {
    this._collisionList.length = 0;
  };
  IsoGeneratorDefenceWall.prototype.initCollisionList = function () {
    this._collisionList = this.parentGenerator.result.necessaryTowers.concat(this.parentGenerator.result.emptyTowers);
    this._collisionList.push(this.parentGenerator.result.gate);
  };
  IsoGeneratorDefenceWall.prototype.addPossiblePositionToList = function (e) {
    var t = this.getWallPositions(e);
    if (t && t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (!this.isCollidingWithAnyOtherPosition(this._collisionList, o)) {
            this._collisionList.push(o);
            this.parentGenerator.result.walls.push(o);
          }
        }
      }
    }
  };
  IsoGeneratorDefenceWall.prototype.getWallPositions = function (e) {
    var t;
    var i;
    if (!!this.map[e.y][e.x].hasGround && !this.map[e.y][e.x - 1].hasGround && !this.map[e.y][e.x - 2].hasGround) {
      i = new r(e.x - 1, e.y);
      t = this.addPosToListOrCreateOne(t, new a.IsoDefencePosition(i, 3, new r(2, 1), new r(i.x - 2, i.y)));
    }
    if (!!this.map[e.y][e.x].hasGround && !this.map[e.y + 1][e.x].hasGround && !this.map[e.y + 2][e.x].hasGround) {
      i = new r(e.x, e.y + 1);
      t = this.addPosToListOrCreateOne(t, new a.IsoDefencePosition(i, 1, new r(1, 2)));
    }
    if (!!this.map[e.y][e.x].hasGround && !this.map[e.y - 1][e.x].hasGround && !this.map[e.y - 2][e.x].hasGround) {
      i = new r(e.x, e.y - 1);
      t = this.addPosToListOrCreateOne(t, new a.IsoDefencePosition(i, 2, new r(1, 3), new r(i.x, i.y - 1)));
    }
    if (!!this.map[e.y][e.x].hasGround && !this.map[e.y][e.x + 1].hasGround && !this.map[e.y][e.x + 2].hasGround) {
      i = new r(e.x + 1, e.y);
      t = this.addPosToListOrCreateOne(t, new a.IsoDefencePosition(i, 0, new r(3, 1)));
    }
    return t;
  };
  return IsoGeneratorDefenceWall;
}(s.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceWall = l;