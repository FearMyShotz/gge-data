Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./198.js");
var s = require("./494.js");
var r = require("./127.js");
var o = require("./496.js");
var l = require("./191.js");
var u = createjs.Bitmap;
var c = createjs.BitmapData;
var _ = createjs.Container;
var d = createjs.MovieClip;
var m = createjs.Rectangle;
var h = function (e) {
  function DisplayObjectClipSource() {
    var t = e !== null && e.apply(this, arguments) || this;
    t.hasSubLayer = false;
    t._scaleFactor = 1;
    return t;
  }
  i.__extends(DisplayObjectClipSource, e);
  Object.defineProperty(DisplayObjectClipSource.prototype, "scaleFactor", {
    get: function () {
      return this._scaleFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DisplayObjectClipSource.prototype, "layerInfo", {
    get: function () {
      return this._layerInfo;
    },
    enumerable: true,
    configurable: true
  });
  DisplayObjectClipSource.prototype.convertClass = function (e, t = null, n = 0, i = false) {
    this.sourceClass = e;
    this._colorData = t;
    this.debugColor = n;
    this.hasSubLayer = i;
    this._cacheId = "";
    this._framesStrip = this.convertDisplayObjectContainer(new this.sourceClass());
  };
  DisplayObjectClipSource.prototype.convertDisplayObjectContainer = function (e) {
    if (e instanceof o.DisplayObjectClipContainer) {
      this._layerInfo = new a.ClipLayerInfo(e);
    }
    if (e instanceof d) {
      return this.convertMovieClip(e);
    }
    if (e instanceof _) {
      return this.convertSprite(e);
    }
    if (e instanceof c) {
      var t = new u(e.canvas);
      var n = new _();
      n.addChild(t);
      return this.convertSprite(n);
    }
    return null;
  };
  DisplayObjectClipSource.prototype.renderSingleFrame = function (e) {
    DisplayObjectClipSource.containerRegPointFinder.addChild(e);
    DisplayObjectClipSource.regPointFinder = DisplayObjectClipSource.containerRegPointFinder.getBounds();
    DisplayObjectClipSource.containerRegPointFinder.removeChild(e);
    this.addToClipBounds(DisplayObjectClipSource.regPointFinder);
    var t = Math.ceil(e.width * this._scaleFactor);
    var n = Math.ceil(e.height * this._scaleFactor);
    var i = e.children.length > 0 && e.children[0].scaleX < 1 ? t / 2 : 0;
    var a = e.children.length > 0 && e.children[0].scaleY < 1 ? n / 2 : 0;
    var s = -Math.floor(DisplayObjectClipSource.regPointFinder.x * this._scaleFactor) + i;
    t += Math.ceil(Math.abs(s + DisplayObjectClipSource.regPointFinder.x));
    var o = -Math.floor(DisplayObjectClipSource.regPointFinder.y * this._scaleFactor) + a;
    n += Math.ceil(Math.abs(o + DisplayObjectClipSource.regPointFinder.y));
    var l = new r.FlattenedImage(t, n, s, o, undefined, true);
    if (this._colorData) {
      this._colorData.forEach(function (t) {
        t.colorClip(e);
      });
    }
    e.cache(-s, -o, t, n);
    l.draw(e);
    return l;
  };
  DisplayObjectClipSource.prototype.convertMovieClip = function (e) {
    var t = this;
    if (this._colorData && e.children.length) {
      for (var n = 0, i = this._colorData; n < i.length; n++) {
        i[n].colorClip(e);
      }
    }
    l.ClipSourceOptimizer.ClipMCToBitmaps(e, this, this.renderSingleFrame).forEach(function (e) {
      t._framesStrip.addFrame(e);
    });
    return this._framesStrip;
  };
  DisplayObjectClipSource.prototype.convertSprite = function (e) {
    if (e.children.length === 1 && e.children[0] instanceof u) {
      this._framesStrip.addFrame(e.children[0].clone());
    } else {
      var t = this.renderSingleFrame(e);
      this._framesStrip.addFrame(l.ClipSourceOptimizer.flattenedImagesToBitmaps([t])[0]);
    }
    return this._framesStrip;
  };
  DisplayObjectClipSource.containerRegPointFinder = new _();
  DisplayObjectClipSource.regPointFinder = new m();
  return DisplayObjectClipSource;
}(s.AbstractClipSource);
exports.DisplayObjectClipSource = h;