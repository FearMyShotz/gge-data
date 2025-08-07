Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./196.js");
var s = require("./59.js");
var r = require("./127.js");
var o = createjs.Bitmap;
var l = createjs.Event;
var u = createjs.Point;
var c = createjs.Rectangle;
var _ = require("./3.js");
var d = require("./191.js");
var m = require("./67.js");
var h = function (e) {
  function ExternalTexturePackerClipSource() {
    return e.call(this) || this;
  }
  i.__extends(ExternalTexturePackerClipSource, e);
  ExternalTexturePackerClipSource.prototype.initExternalClipSource = function (e, t, n, i, a, r) {
    var o = this;
    if (n === undefined) {
      n = null;
    }
    if (i === undefined) {
      i = 0;
    }
    if (a === undefined) {
      a = false;
    }
    if (r === undefined) {
      r = 1;
    }
    this._sourcePath = t;
    this.sourceClassName = e;
    this._colorData = n;
    this.debugColor = i;
    this.hasSubLayer = a;
    this._isLoaded = false;
    var u = s.GoodgameBitmapEngine.bulkLoader.add(this._sourcePath + ".json", {
      id: e,
      type: createjs.AbstractLoader.SPRITESHEET,
      priority: r
    });
    if (u) {
      if (u.loaded) {
        var c = setTimeout(function () {
          clearTimeout(c);
          o.onLoaded(u);
        }, u.getResult()._frames.length * 100);
      } else {
        u.addEventListener(l.COMPLETE, this.bindFunction(this.onLoaded));
      }
    }
  };
  ExternalTexturePackerClipSource.prototype.onLoaded = function (e) {
    var t;
    var n;
    if (e === undefined) {
      e = null;
    }
    if (e instanceof l) {
      e.target.removeEventListener(l.COMPLETE, this.bindFunction(this.onLoaded));
      m.BulkLoader.loadedList.set(e.currentTarget.getItem().src, e.currentTarget);
      t = e.result;
      n = JSON.parse(e.rawResult);
      e.currentTarget._rawResult = n;
    } else {
      t = e.getResult();
      if (typeof (n = e.getResult(true)) == "string") {
        n = JSON.parse(n);
        e._rawResult = n;
      }
    }
    this.animData = [];
    this.populateFrameArray(this.animData, t._frames, n.sourceSize, n.animations);
    this._isLoaded = true;
    var i = t._images[0];
    var a = this.animData.length > 1 && (i.width > ExternalTexturePackerClipSource.SPRTITESHEET_MAX_SIZE || i.height > ExternalTexturePackerClipSource.SPRTITESHEET_MAX_SIZE);
    if (this.scaleFactor !== 1 || a) {
      var s = undefined;
      if (this.animData.length > 1) {
        (s = new createjs.BitmapData(n.size.w, n.size.h, true)).draw(t._images[0]);
      } else {
        var r = t.getFrame(t.getAnimation(t.animations[0]).frames[0]);
        (s = new createjs.BitmapData(r.rect.width, r.rect.height, true)).draw(r.image);
      }
      this._framesStrip = this.convertTexturePackerContainer(s);
    } else {
      for (var u = 0; u < this.animData.length; u++) {
        var c = this.animData[u];
        var _ = new o(i);
        _.sourceRect = c.rect;
        _.x = c.offX;
        _.y = c.offY;
        this._framesStrip.addFrame(_);
      }
    }
    this._clipLoadedAndConverted.dispatch(this);
    this._clipLoadedAndConverted.removeAll();
  };
  ExternalTexturePackerClipSource.prototype.populateFrameArray = function (e, t, n, i) {
    var a;
    var s;
    var r;
    for (r in t) {
      if ((a = t[r]).rect) {
        if (n) {
          this._sourceSizeW = n.w;
          this._sourceSizeH = n.h;
        }
        s = a;
        var o = this.getAnimationNameByFrame(parseInt(r), i);
        var l = o.match(/\d+/g);
        if (l && l.length > 0) {
          s.sortID = parseInt(l.join(""));
        } else {
          s.sortID = 0;
        }
        s.animName = o;
        s.offX = 0;
        s.offY = 0;
        s.offX = Math.abs(a.regX);
        s.offY = Math.abs(a.regY);
        e.push(s);
      }
    }
    e.sort(this.sortOnSortID);
  };
  ExternalTexturePackerClipSource.prototype.getAnimationNameByFrame = function (e, t) {
    for (var n in t) {
      if (t[n].frames[0] == e) {
        return n;
      }
    }
    return "-";
  };
  ExternalTexturePackerClipSource.prototype.sortOnSortID = function (e, t) {
    if (e.sortID > t.sortID) {
      return 1;
    } else if (e.sortID < t.sortID) {
      return -1;
    } else if (e.animName > t.animName) {
      return 1;
    } else if (e.animName > t.animName) {
      return -1;
    } else {
      return 0;
    }
  };
  ExternalTexturePackerClipSource.prototype.convertClass = function (e, t = null, n = 0, i = false) {
    this._colorData = t;
    this.debugColor = n;
    this.hasSubLayer = i;
    this._cacheId = _.getQualifiedClassName(this.sourceClass);
    var a = new this.sourceClass();
    this._framesStrip = this.convertTexturePackerContainer(a);
  };
  ExternalTexturePackerClipSource.prototype.convertTexturePackerContainer = function (e) {
    var t = this;
    var n = e.width * this.scaleFactor;
    var i = Math.max(this.animData.length, Math.ceil(n / ExternalTexturePackerClipSource.SPRTITESHEET_MAX_SIZE));
    var a = [];
    for (var s = 0; s < this.animData.length; s++) {
      var r = this.animData[s];
      a.push(this.renderSingleTile(e, r));
    }
    d.ClipSourceOptimizer.flattenedImagesToBitmaps(a, i).forEach(function (e) {
      t._framesStrip.addFrame(e);
    });
    return this._framesStrip;
  };
  ExternalTexturePackerClipSource.prototype.renderSingleTile = function (e, t) {
    var n;
    var i;
    (n = new c()).x = t.rect.x;
    n.y = t.rect.y;
    n.width = t.rect.width;
    n.height = t.rect.height;
    (i = new u()).x = t.offX;
    i.y = t.offY;
    var a;
    var s = new c();
    s.width = Math.max(s.width, n.width + i.x);
    s.height = Math.max(s.height, n.height + i.y);
    this.addToClipBounds(s);
    (a = new r.FlattenedImage(n.width * this.scaleFactor, n.height * this.scaleFactor, 0 - Math.floor(i.x * this.scaleFactor), 0 - Math.floor(i.y * this.scaleFactor), this.debugColor)).copyPixels(e, n, new u());
    delete t.sortID;
    return a;
  };
  Object.defineProperty(ExternalTexturePackerClipSource.prototype, "sourceSizeW", {
    get: function () {
      return this._sourceSizeW;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ExternalTexturePackerClipSource.prototype, "sourceSizeH", {
    get: function () {
      return this._sourceSizeH;
    },
    enumerable: true,
    configurable: true
  });
  ExternalTexturePackerClipSource.SPRTITESHEET_MAX_SIZE = Number.MAX_VALUE;
  return ExternalTexturePackerClipSource;
}(a.ExternalDisplayObjectClipSource);
exports.ExternalTexturePackerClipSource = h;