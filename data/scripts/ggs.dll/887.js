Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = createjs.BitmapData;
var s = createjs.Container;
var r = require("./2.js").getLogger("TiledBitmap");
var o = function (e) {
  function TiledBitmap(t, n, i, a = true, s = 16777215) {
    var o = e.call(this) || this;
    o.rectCount = 0;
    r.warn("TiledBitmap has major createjs incompatibilities");
    o._width = Math.floor(t);
    o._height = Math.floor(n);
    o._smoothing = i;
    o._transparent = a;
    o._color = s;
    o._bitmaps = new Array();
    o.makeRects();
    return o;
  }
  i.__extends(TiledBitmap, e);
  Object.defineProperty(TiledBitmap.prototype, "matrix", {
    set: function (e) {
      this._matrix = e;
    },
    enumerable: true,
    configurable: true
  });
  TiledBitmap.prototype.makeRects = function () {
    this._rectBitmapDict = new Map();
    for (var e = Math.floor(this._height), t = 0; e > 0;) {
      var n = undefined;
      var i = 0;
      var a = this._width;
      if (e >= 0 && e < TiledBitmap.MAX_ARCHIVE_HEIGHT) {
        for (var s = a, r = 0; s > 0;) {
          n = new Rectangle(r, t, Math.min(TiledBitmap.MAX_WIDTH, s), e);
          this._rectBitmapDict.set(n, null);
          s -= n.width;
          r += n.width;
        }
        e = 0;
      } else {
        while (a > 0) {
          if (a >= TiledBitmap.MAX_ARCHIVE_WIDTH) {
            (n = new Rectangle(0, 0, Math.min(TiledBitmap.MAX_ARCHIVE_WIDTH, a), Math.min(TiledBitmap.MAX_ARCHIVE_HEIGHT, e))).x = i;
            n.y = t;
            this._rectBitmapDict.set(n, null);
            a -= n.width;
            i += n.width;
          } else {
            if (t == 0) {
              for (var o = e > TiledBitmap.MAX_ARCHIVE_HEIGHT ? e - e % TiledBitmap.MAX_ARCHIVE_HEIGHT : e, l = 0; o > 0;) {
                n = new Rectangle(i, l, Math.min(TiledBitmap.MAX_ARCHIVE_WIDTH, a), Math.min(TiledBitmap.MAX_ARCHIVE_HEIGHT, e));
                this._rectBitmapDict.set(n, null);
                o -= n.height;
                l += n.height;
              }
            }
            a = 0;
          }
        }
        t += TiledBitmap.MAX_ARCHIVE_HEIGHT;
        e -= TiledBitmap.MAX_ARCHIVE_HEIGHT;
      }
    }
    this.rectCount = this._rectBitmapDict.size;
  };
  TiledBitmap.prototype.addBitmap = function (e, t, n) {
    if (e.width == TiledBitmap.MAX_ARCHIVE_WIDTH && e.height == TiledBitmap.MAX_ARCHIVE_HEIGHT && TiledBitmap.bitmapArchive.indexOf(e) == -1) {
      TiledBitmap.bitmapArchive.push(e);
    }
    e.x = t;
    e.y = n;
    this.addChild(e);
    this._bitmaps.push(e);
  };
  Object.defineProperty(TiledBitmap.prototype, "bitmapWidth", {
    get: function () {
      return this._width;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TiledBitmap.prototype, "bitmapHeight", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  TiledBitmap.MAX_ARCHIVE_WIDTH = 1024;
  TiledBitmap.MAX_ARCHIVE_HEIGHT = 512;
  TiledBitmap.CLEAR_ARCHIVE_BITMAP = new a(TiledBitmap.MAX_ARCHIVE_WIDTH, TiledBitmap.MAX_ARCHIVE_HEIGHT, true, 0);
  TiledBitmap.MAX_WIDTH = 2048;
  TiledBitmap.MAX_HEIGHT = 2048;
  TiledBitmap.bitmapArchive = new Array();
  return TiledBitmap;
}(s);
exports.TiledBitmap = o;