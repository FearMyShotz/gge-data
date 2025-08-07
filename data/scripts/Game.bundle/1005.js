Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./55.js");
var r = require("./105.js");
var l = require("./1498.js");
var c = createjs.Point;
var u = function (e) {
  function FoodResourceFieldVO() {
    var t = e.call(this) || this;
    t._width = 20;
    t._height = 10;
    t._resourceType = d.CollectableEnum.FOOD;
    t._name = s.ClientConstUtils.capitalizeFirstLetter(t._resourceType.name);
    return t;
  }
  n.__extends(FoodResourceFieldVO, e);
  FoodResourceFieldVO.prototype.updatePosition = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      this._posOrigin = r.IsoGridOriginEnum.TOP_CORNER;
      this._posOffset = new c(-2, -16);
    } else {
      this._posOrigin = r.IsoGridOriginEnum.LEFT_CORNER;
      this._posOffset = new c(-2, 8);
    }
    e.prototype.updatePosition.call(this);
  };
  FoodResourceFieldVO.prototype.updateDimension = function () {
    this._totalWidth = this.width * this.fieldAmount;
    this._totalHeight = this.height;
  };
  FoodResourceFieldVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints.length = 0;
    for (var e = 0; e < this.fieldAmount; ++e) {
      this._spawnPoints.push(new c(9 + this.width * e, 3));
    }
  };
  FoodResourceFieldVO.prototype.updateWalkmap = function () {
    e.prototype.updateWalkmap.call(this);
    for (var t = 0; t < this.fieldAmount; ++t) {
      var i = 0;
      var n = a.int(this.width - 1 + this.width * t);
      for (i = 0; i < this.height; ++i) {
        this.walkmap[i][n] = true;
      }
      var o = a.int(9 + this.width * t);
      for (i = 0; i < 4; ++i) {
        this.walkmap[i][o] = true;
      }
    }
  };
  FoodResourceFieldVO.prototype.getFieldAmount = function () {
    return a.int(this.isoData.grid.origins.groundDimension.x / this.width);
  };
  FoodResourceFieldVO.prototype.getLastPartStartOffset = function () {
    return new c(this.posOffset.x + this.fieldAmount * this.width, this.posOffset.y + this.height);
  };
  FoodResourceFieldVO.prototype.getWorkPointsByIndex = function (e) {
    var t = a.int(this.width * e);
    return [new c(5 + t, 5), new c(13 + t, 5)];
  };
  return FoodResourceFieldVO;
}(l.AExpandingResourceFieldVO);
exports.FoodResourceFieldVO = u;
var d = require("./12.js");
o.classImplementsInterfaces(u, "IRelativeGridBuildingVO");