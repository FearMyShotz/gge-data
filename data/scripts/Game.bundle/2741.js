Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./451.js");
var s = require("./632.js");
var r = createjs.Point;
var l = function (e) {
  function IsoGeneratorDefenceMoat() {
    var t = this;
    t._collisionList = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoGeneratorDefenceMoat, e);
  IsoGeneratorDefenceMoat.prototype.execute = function () {
    var e;
    this._collisionList.length = 0;
    for (var t = 0, i = this.parentGenerator.result.outerCorners; t < i.length; t++) {
      e = i[t];
      this.addPossiblePositionToList(this.parentGenerator.result.moat.outerCorners, this.getOuterCornerPosition(e), false);
    }
    for (var n = 0, s = this.parentGenerator.result.innerCorners; n < s.length; n++) {
      e = s[n];
      this.addPossiblePositionToList(this.parentGenerator.result.moat.innerCorners, this.getInnerCornerPosition(e), false);
    }
    this.parentGenerator.result.moat.gate = new a.IsoDefencePosition(new r(this.parentGenerator.result.gate.pos.x, this.parentGenerator.result.gate.pos.y), this.parentGenerator.result.gate.rot, new r(5, 4));
    this._collisionList.push(this.parentGenerator.result.moat.gate);
    for (var l = 0, c = this.parentGenerator.grounds; l < c.length; l++) {
      var u = c[l];
      if (u !== undefined) {
        for (var d = o.int(u.x); d <= u.x2; ++d) {
          this.addPossiblePositionsToList(this.parentGenerator.result.moat.walls, this.getWallPositions(new r(d, u.y)));
          this.addPossiblePositionsToList(this.parentGenerator.result.moat.walls, this.getWallPositions(new r(d, u.y2)));
        }
        for (var p = o.int(u.y); p <= u.y2; ++p) {
          this.addPossiblePositionsToList(this.parentGenerator.result.moat.walls, this.getWallPositions(new r(u.x, p)));
          this.addPossiblePositionsToList(this.parentGenerator.result.moat.walls, this.getWallPositions(new r(u.x2, p)));
        }
      }
    }
  };
  IsoGeneratorDefenceMoat.prototype.cleanup = function () {
    this._collisionList.length = 0;
  };
  IsoGeneratorDefenceMoat.prototype.addPossiblePositionsToList = function (e, t) {
    if (t && t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          this.addPossiblePositionToList(e, o, t.length < 2, t.length < 2);
        }
      }
    }
  };
  IsoGeneratorDefenceMoat.prototype.addPossiblePositionToList = function (e, t, i = true, n = true) {
    if (t) {
      if (!i || !this.isCollidingWithAnyOtherPosition(this._collisionList, t)) {
        if (n) {
          this._collisionList.push(t);
        }
        e.push(t);
      }
    }
  };
  IsoGeneratorDefenceMoat.prototype.getOuterCornerPosition = function (e) {
    var t;
    var i;
    switch (e.rot) {
      case 0:
        i = new r(e.pos.x + 1, e.pos.y + 1);
        t = new a.IsoDefencePosition(i, e.rot, new r(6, 6));
        break;
      case 1:
        i = new r(e.pos.x - 2, e.pos.y + 1);
        t = new a.IsoDefencePosition(i, e.rot, new r(5, 5), new r(i.x - 3, i.y + 1));
        break;
      case 2:
        i = new r(e.pos.x + 1, e.pos.y - 2);
        t = new a.IsoDefencePosition(i, e.rot, new r(5, 6), new r(i.x + 2, i.y - 3));
        break;
      case 3:
        i = new r(e.pos.x - 2, e.pos.y - 2);
        t = new a.IsoDefencePosition(i, e.rot, new r(5, 5), new r(i.x - 3, i.y - 3));
    }
    return t;
  };
  IsoGeneratorDefenceMoat.prototype.getInnerCornerPosition = function (e) {
    var t;
    var i;
    if (e.rot == 0) {
      i = new r(e.pos.x + 1, e.pos.y + 1);
      t = new a.IsoDefencePosition(i, e.rot, new r(6, 6), new r(i.x - 1, i.y - 1));
    }
    if (this.parentGenerator.isoData.areaData.isSeasonCamp) {
      switch (e.rot) {
        case 1:
          i = new r(e.pos.x - 2, e.pos.y + 1);
          t = new a.IsoDefencePosition(i, e.rot, new r(9, 8), new r(i.x - 5, i.y - 1));
          break;
        case 2:
          i = new r(e.pos.x + 1, e.pos.y - 2);
          t = new a.IsoDefencePosition(i, e.rot, new r(8, 9), new r(i.x - 1, i.y - 5));
          break;
        case 3:
          i = new r(e.pos.x - 2, e.pos.y - 2);
          t = new a.IsoDefencePosition(i, e.rot, new r(7, 7), new r(i.x - 4, i.y - 4));
      }
    }
    return t;
  };
  IsoGeneratorDefenceMoat.prototype.getWallPositions = function (e) {
    var t;
    if (this.map[e.y][e.x].hasGround) {
      if (!this.map[e.y][e.x - 1].hasGround) {
        t = this.addPosToListOrCreateOne(t, new a.IsoDefencePosition(e, 3, new r(3, 1), new r(e.x - 3, e.y)));
      }
      if (!this.map[e.y][e.x + 1].hasGround && !this.map[e.y + 2][e.x + 1].hasGround) {
        t = this.addPosToListOrCreateOne(t, new a.IsoDefencePosition(e, 0, new r(3, 1), new r(e.x, e.y)));
      }
      if (!this.map[e.y + 1][e.x].hasGround && !this.map[e.y + 1][e.x + 2].hasGround) {
        t = this.addPosToListOrCreateOne(t, new a.IsoDefencePosition(e, 1, new r(1, 3), new r(e.x, e.y)));
      }
      if (!this.map[e.y - 1][e.x].hasGround) {
        t = this.addPosToListOrCreateOne(t, new a.IsoDefencePosition(e, 2, new r(1, 3), new r(e.x, e.y - 3)));
      }
    }
    return t;
  };
  return IsoGeneratorDefenceMoat;
}(s.AIsoGeneratorDefenceComponent);
exports.IsoGeneratorDefenceMoat = l;