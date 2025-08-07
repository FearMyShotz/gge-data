Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./193.js");
var a = require("./486.js");
var s = function () {
  function SpriteSheetVO(e, t, n = 0, i = 0) {
    this._isFilled = false;
    this._width = 0;
    this._height = 0;
    this._x = 0;
    this._y = 0;
    this._sheetName = e;
    this.pngURL = t;
    this.offsetX = n;
    this.offsetY = i;
  }
  Object.defineProperty(SpriteSheetVO.prototype, "frames", {
    get: function () {
      return this._frames;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "sheetName", {
    get: function () {
      return this._sheetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "layerInfos", {
    get: function () {
      return this._layerInfos;
    },
    enumerable: true,
    configurable: true
  });
  SpriteSheetVO.prototype.initJSON = function (e) {
    this._frames = [];
    var t = JSON.parse(e);
    if (t.frames[0]) {
      var n = t.frames[0];
      if (n) {
        this._width = n.spriteSourceSize.w;
        this._height = n.spriteSourceSize.h;
        this._x = n.spriteSourceSize.x;
        this._y = n.spriteSourceSize.y;
      }
    }
    for (var s = 0, r = t.frames; s < r.length; s++) {
      var o = r[s];
      var l = new a.FrameVO(this.offsetX, this.offsetY);
      l.loadFromParamObject(o);
      this._frames.push(l);
    }
    this._layerInfos = [];
    for (var u = 0, c = t.fx; u < c.length; u++) {
      var _ = c[u];
      var d = new i.LayerInfo(_.x, _.y, _.scale, _.index, _.name, _.rotation);
      this._layerInfos.push(d);
    }
    this._isFilled = true;
  };
  Object.defineProperty(SpriteSheetVO.prototype, "isFilled", {
    get: function () {
      return this._isFilled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "width", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "x", {
    get: function () {
      return this._x - this.offsetX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SpriteSheetVO.prototype, "y", {
    get: function () {
      return this._y - this.offsetY;
    },
    enumerable: true,
    configurable: true
  });
  return SpriteSheetVO;
}();
exports.SpriteSheetVO = s;