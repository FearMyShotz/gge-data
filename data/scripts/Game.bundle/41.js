Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.BitmapData;
var o = createjs.DisplayObject;
var a = createjs.Container;
var s = createjs.MovieClip;
var r = createjs.Shape;
var l = createjs.Point;
var c = createjs.Rectangle;
var u = function () {
  function CastleMovieClipHelper() {}
  CastleMovieClipHelper.disableChildrenExceptList = function (e, t) {
    if (e) {
      for (var i = 0; i < e.numChildren; i++) {
        var n = e.getChildAt(i);
        if (n && t.indexOf(n) == -1) {
          if (n instanceof o) {
            n.mouseEnabled = false;
          }
          if (n instanceof a) {
            n.mouseChildren = false;
          }
        }
      }
    }
  };
  CastleMovieClipHelper.iterateThroughMc = function (e, t) {
    var i;
    var n;
    for (var o = t.split("."), s = e, r = 0; r < o.length && s; ++r) {
      if (!((i = s) instanceof a)) {
        s = null;
        break;
      }
      s = (n = o[r]) == "parent" ? i.parent : i.getChildByName(n);
    }
    return s;
  };
  CastleMovieClipHelper.getVisibleBounds = function (e) {
    var t = e.getBounds(null);
    var i = new h.Matrix();
    i.translate(-t.x, -t.y);
    var o = new n(Math.min(t.width, 2500), Math.min(t.height, 2500), true, 0);
    e.doCache();
    o.draw(e, i, null, null, new c(0, 0, t.width, t.height));
    var a = o.getColorBoundsRect(4294967295, 0, false);
    o.dispose();
    CastleMovieClipHelper.uncacheSafe(e);
    a.x += t.x;
    a.y += t.y;
    return a;
  };
  CastleMovieClipHelper.stopAllMovies = function (e, t = null, i = false) {
    if (e) {
      var n = e;
      if (n instanceof s && n.totalFrames > 1) {
        if (i) {
          n.gotoAndStop(n.totalFrames);
        } else if (t) {
          n.gotoAndStop(t);
        } else {
          n.stop();
        }
      } else {
        var o = e;
        if (o instanceof d.AbstractGoodgameClip && o.numFrames > 1) {
          if (i) {
            o.gotoAndStop(n.totalFrames);
          } else if (t) {
            o.gotoAndStop(t);
          } else {
            o.stop();
          }
        }
      }
      for (var r = 0; r < e.numChildren; r++) {
        if (e.getChildAt(r) instanceof a) {
          CastleMovieClipHelper.stopAllMovies(e.getChildAt(r), t, i);
        }
      }
    }
  };
  CastleMovieClipHelper.getChildrenByName = function (e, t) {
    var i = [];
    if (e == null) {
      return i;
    }
    if (e.name == t) {
      i.push(e);
    }
    var n = e;
    if (n == null) {
      return i;
    }
    for (var o = 0; o < n.numChildren; ++o) {
      var a = CastleMovieClipHelper.getChildrenByName(n.getChildAt(o), t);
      if (a != null) {
        for (var s = 0, r = a; s < r.length; s++) {
          var l = r[s];
          if (l !== undefined) {
            i.push(l);
          }
        }
      }
    }
    return i;
  };
  CastleMovieClipHelper.getChildrenByAnyName = function (e, t) {
    var i = [];
    if (t != null) {
      for (var n = 0, o = t; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = CastleMovieClipHelper.getChildrenByName(e, a);
          if (s != null) {
            for (var r = 0, l = s; r < l.length; r++) {
              var c = l[r];
              if (c !== undefined) {
                i.push(c);
              }
            }
          }
        }
      }
    }
    return i;
  };
  CastleMovieClipHelper.applyMask = function (e) {
    if (!e.mask) {
      var t = e.visible;
      CastleMovieClipHelper.applyMaskFromMovieClip(e, e, e);
      e.visible = t;
      return e.mask;
    }
    return e.mask;
  };
  CastleMovieClipHelper.applyMaskFromMovieClip = function (e, t, i = null) {
    if (e.mask && e.mask.parent) {
      e.mask.parent.removeChild(e.mask);
    }
    t.visible = false;
    var n = new createjs.Shape();
    n.x = t.x;
    n.y = t.y;
    var o = t.getBounds();
    n.graphics.beginFill("#FF0000").drawRect(o.x * t.scaleX, o.y * t.scaleY, o.width * t.scaleX, o.height * t.scaleY);
    n.setBounds(o.x * t.scaleX, o.y * t.scaleY, o.width * t.scaleX, o.height * t.scaleY);
    e.mask = n;
    if (i) {
      i.addChild(n);
    } else if (e.mask && e.mask.parent) {
      t.parent.addChild(n);
    }
    return n;
  };
  CastleMovieClipHelper.getFirstMovieClipParent = function (e) {
    for (var t = e; t;) {
      if (t instanceof a) {
        return t;
      }
      t = t.parent;
    }
    return null;
  };
  CastleMovieClipHelper.createHitArea = function (e) {
    var t = e.getBounds();
    var i = new r();
    i.x = t.x;
    i.y = t.y;
    i.graphics.beginFill("#ff0000").drawRect(0, 0, t.width, t.height);
    e.hitArea = i;
  };
  CastleMovieClipHelper.updateParentCache = function (e) {
    for (var t = e; t && !t.cacheCanvas;) {
      t = t.parent;
    }
    if (t) {
      t.updateCacheIfCached(t._cacheScale || 1);
    }
  };
  CastleMovieClipHelper.getScaleAndCacheWithAntiAliasingOnLoaded = function (e, t, i = -1, n = true) {
    return function (o) {
      o.clipSizeComponent = null;
      CastleMovieClipHelper.scaleWithAntiAliasing(o, e, t, i, n);
    };
  };
  CastleMovieClipHelper.scaleWithAntiAliasing = function (e, t, i, n = -1, o = true) {
    if (e) {
      e.scaleX = e.scaleY = 1;
      CastleMovieClipHelper.uncacheSafe(e);
      var a = e.getBounds();
      var s = t / a.width;
      if (a.height * s > i) {
        s = i / a.height;
      }
      if (n > -1) {
        s = Math.min(s, n);
      }
      var r = o ? -(a.width * s / 2 + a.left * s) : e.x;
      var l = o ? -(a.height * s / 2 + a.top * s) : e.y;
      CastleMovieClipHelper.scaleAndCacheWithAntiAliasing(e, s);
      e.x = r;
      e.y = l;
    }
  };
  CastleMovieClipHelper.scaleAndCacheWithAntiAliasing = function (e, t) {
    var i;
    CastleMovieClipHelper.uncacheSafe(e);
    for (var n = 0.5, o = t * CastleMovieClipHelper.getScreenScaleY(e); o < n * 0.75 && (i = e.getBounds()).width && i.height;) {
      e.cache(Math.floor(i.x), Math.floor(i.y), Math.ceil(i.width), Math.ceil(i.height), n);
      n *= 0.5;
    }
    e.scaleX = e.scaleY = t;
    if (!e.cacheCanvas) {
      e.doCache();
    }
    e.dispatchEvent(new createjs.Event(createjs.Event.ADDED, true, true));
  };
  CastleMovieClipHelper.getScreenScaleY = function (e) {
    var t = e.scaleY;
    for (var i = e.parent; i;) {
      t *= i.scaleY;
      i = i.parent;
    }
    return t;
  };
  CastleMovieClipHelper.snapToScreenPixels = function (e) {
    if (e.parent) {
      e.snapToPixel = false;
      var t = e.parent.localToGlobal(new l(e.x, e.y));
      t.x = Math.trunc(t.x);
      t.y = Math.trunc(t.y);
      var i = e.parent.globalToLocal(t);
      e.x = i.x;
      e.y = i.y;
    }
  };
  CastleMovieClipHelper.isDOPartOfDO = function (e, t) {
    return !!e && (!!t.contains(e) || !!e.parent && !!(e.parent instanceof a) && this.isDOPartOfDO(e.parent, t));
  };
  CastleMovieClipHelper.uncacheSafe = function (e) {
    if (e && e.cacheCanvas) {
      if (p.currentBrowserInfo.isSafari) {
        e.cacheCanvas.width = e.cacheCanvas.height = 1;
        var t = e.cacheCanvas.getContext("2d");
        if (t) {
          t.clearRect(0, 0, 1, 1);
        }
      }
      e.uncache();
    }
  };
  CastleMovieClipHelper.goAndPlayAllMovies = function (e, t, i, n) {
    if (e) {
      var o = e;
      if (p.instanceOfClass(e, "CastleGoodgameExternalClip")) {
        e.gotoAndPlay(t, i, n);
      } else if (o && o.totalFrames > 1) {
        o.gotoAndPlay(t);
      }
      for (var a = 0; a < e.numChildren; a++) {
        if (e.getChildAt(a)) {
          CastleMovieClipHelper.goAndPlayAllMovies(e.getChildAt(a), t, i, n);
        }
      }
    }
  };
  return CastleMovieClipHelper;
}();
exports.CastleMovieClipHelper = u;
var d = require("./2.js");
var p = require("./1.js");
var h = require("./1.js");