Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./55.js");
var l = require("./105.js");
var c = require("./1498.js");
var u = createjs.Point;
var d = function (e) {
  function StoneResourceFieldVO() {
    var t = e.call(this) || this;
    t._width = 10;
    t._height = 20;
    t._resourceType = p.CollectableEnum.STONE;
    t._name = r.ClientConstUtils.capitalizeFirstLetter(t._resourceType.name);
    return t;
  }
  n.__extends(StoneResourceFieldVO, e);
  StoneResourceFieldVO.prototype.updatePosition = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      this._posOrigin = l.IsoGridOriginEnum.TOP_CORNER;
      this._posOffset = new u(-16, 0);
    } else {
      this._posOrigin = l.IsoGridOriginEnum.RIGHT_CORNER;
      this._posOffset = new u(8, -2);
    }
    e.prototype.updatePosition.call(this);
  };
  StoneResourceFieldVO.prototype.updateDimension = function () {
    this._totalWidth = this.width;
    this._totalHeight = this.height * this.fieldAmount;
  };
  StoneResourceFieldVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints.length = 0;
    for (var e = 0; e < this.fieldAmount; ++e) {
      this._spawnPoints.push(new u(0, 9 + this.height * e));
    }
  };
  StoneResourceFieldVO.prototype.updateWalkmap = function () {
    e.prototype.updateWalkmap.call(this);
    for (var t = 0; t < this.fieldAmount; ++t) {
      var i = 0;
      var n = s.int(this.height - 1 + this.height * t);
      for (i = 0; i < this.width; ++i) {
        this.walkmap[n][i] = true;
      }
      var o = s.int(9 + this.height * t);
      for (i = 0; i < 1; ++i) {
        this.walkmap[o][i] = true;
      }
    }
  };
  StoneResourceFieldVO.prototype.getFieldAmount = function () {
    return s.int(this.isoData.grid.origins.groundDimension.y / this.height);
  };
  StoneResourceFieldVO.prototype.getLastPartStartOffset = function () {
    return new u(this.posOffset.x + this.width, this.posOffset.y + this.fieldAmount * this.height);
  };
  StoneResourceFieldVO.prototype.getWorkPointsByIndex = function (e) {
    var t = [];
    if (this.isoData.areaData.areaInfo.kingdomID == a.WorldClassic.KINGDOM_ID) {
      var i = s.int(this.getGfxLevel());
      if (i == 1) {
        t.push(new u(1, 5));
        t.push(new u(5, 17));
      } else if (i == 2) {
        t.push(new u(4, 7));
        t.push(new u(7, 16));
      } else if (i == 3) {
        t.push(new u(3, 8));
        t.push(new u(4, 19));
      }
    } else if (this.isoData.areaData.isKingdomCastle) {
      t.push(new u(3, 17));
      t.push(new u(5, 3));
    }
    var n = s.int(this.height * e);
    for (var o = 0; o < t.length; ++o) {
      t[o].y += n;
    }
    return t;
  };
  return StoneResourceFieldVO;
}(c.AExpandingResourceFieldVO);
exports.StoneResourceFieldVO = d;
var p = require("./12.js");
o.classImplementsInterfaces(d, "IRelativeGridBuildingVO");