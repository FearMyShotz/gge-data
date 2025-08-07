Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Point;
var o = createjs.Rectangle;
var a = function () {
  function IsoDataGridOrigins(e) {
    this._originDic = new Map();
    this._groundStartPos = new n();
    this._groundEndPos = new n();
    this._groundDimension = new n();
    this._grid = e;
  }
  IsoDataGridOrigins.prototype.update = function () {
    this.updateGroundInfos();
    this.updateOriginPositions();
  };
  IsoDataGridOrigins.prototype.updateGroundInfos = function () {
    this._groundStartPos.x = this._groundStartPos.y = Number.MAX_VALUE;
    this._groundEndPos.x = this._groundEndPos.y = -Number.MAX_VALUE;
    for (var e = 0, t = this.grid.isoData.objects.groundObjects.list; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        if (i.x < this._groundStartPos.x) {
          this._groundStartPos.x = i.x;
        }
        if (i.y < this._groundStartPos.y) {
          this._groundStartPos.y = i.y;
        }
        if (i.x2 > this._groundEndPos.x) {
          this._groundEndPos.x = i.x2;
        }
        if (i.y2 > this._groundEndPos.y) {
          this._groundEndPos.y = i.y2;
        }
      }
    }
    this._groundDimension.x = this._groundEndPos.x - this._groundStartPos.x + 1;
    this._groundDimension.y = this._groundEndPos.y - this._groundStartPos.y + 1;
  };
  IsoDataGridOrigins.prototype.updateOriginPositions = function () {
    this._originDic = new Map();
    this._originDic.set(s.IsoGridOriginEnum.NORMAL, new n());
    this._originDic.set(s.IsoGridOriginEnum.TOP_CORNER, new n(this._groundStartPos.x, this._groundStartPos.y));
    this._originDic.set(s.IsoGridOriginEnum.BOTTOM_CORNER, new n(this._groundEndPos.x, this._groundEndPos.y));
    this._originDic.set(s.IsoGridOriginEnum.LEFT_CORNER, new n(this._groundStartPos.x, this._groundEndPos.y));
    this._originDic.set(s.IsoGridOriginEnum.RIGHT_CORNER, new n(this._groundEndPos.x, this._groundStartPos.y));
  };
  IsoDataGridOrigins.prototype.getOriginPos = function (e) {
    return this.originDic.get(e);
  };
  IsoDataGridOrigins.prototype.getOriginRect = function () {
    return new o(this._groundStartPos.x, this._groundStartPos.y, this._groundDimension.x - 1, this._groundDimension.y - 1);
  };
  Object.defineProperty(IsoDataGridOrigins.prototype, "grid", {
    get: function () {
      return this._grid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridOrigins.prototype, "originDic", {
    get: function () {
      return this._originDic;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoDataGridOrigins.prototype, "groundDimension", {
    get: function () {
      return this._groundDimension;
    },
    enumerable: true,
    configurable: true
  });
  return IsoDataGridOrigins;
}();
exports.IsoDataGridOrigins = a;
var s = require("./105.js");