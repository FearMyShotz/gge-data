Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./55.js");
var s = require("./105.js");
var r = require("./1499.js");
var l = createjs.Point;
var c = function (e) {
  function WoodResourceFieldVO() {
    var t = e.call(this) || this;
    t._resourceType = u.CollectableEnum.WOOD;
    t._name = a.ClientConstUtils.capitalizeFirstLetter(t._resourceType.name);
    t._posOrigin = s.IsoGridOriginEnum.TOP_CORNER;
    t._width = 40;
    t._height = 40;
    return t;
  }
  n.__extends(WoodResourceFieldVO, e);
  WoodResourceFieldVO.prototype.updatePosition = function () {
    if (this.isoData.areaData.isMyHomeCastle) {
      this._posOffset = new l(-20, -20);
    } else {
      this._posOffset = new l(-12, -12);
    }
    if (this.isoData.areaData.isMyHomeCastle) {
      this._width = 40;
      this._height = 40;
    } else {
      this._width = 1;
      this._height = 1;
    }
    e.prototype.updatePosition.call(this);
  };
  WoodResourceFieldVO.prototype.updateSpawnPoints = function () {
    this._spawnPoints = [new l(0, -2), new l(-1, 46), new l(16, -2), new l(-9, 14)];
  };
  WoodResourceFieldVO.prototype.updateWalkmap = function () {
    this._walkmapOffset.x = -20;
    this._walkmapOffset.y = -20;
    if (this.isoData.areaData.isMyHomeCastle) {
      this._walkmap = new Array(this.rotatedHeight);
      for (var e = 0; e < this._walkmap.length; ++e) {
        this._walkmap[e] = Array(this.rotatedHeight).fill(0);
        for (var t = 0; t < this._walkmap[e].length; ++t) {
          this._walkmap[e][t] = true;
        }
      }
      var i = new l(this.width + this._walkmapOffset.x, this.height + this._walkmapOffset.y);
      if (this._walkmap.length > 0) {
        for (e = 0; e < 19; ++e) {
          this._walkmap[i.y - e][i.x + 5] = false;
        }
      }
    } else {
      this._walkmap = d.IsoHelper.walkmap.createWalkmapFullBlocked(new l(1, 1));
    }
  };
  return WoodResourceFieldVO;
}(r.AResourceFieldVO);
exports.WoodResourceFieldVO = c;
var u = require("./12.js");
var d = require("./46.js");
o.classImplementsInterfaces(c, "IRelativeGridBuildingVO");