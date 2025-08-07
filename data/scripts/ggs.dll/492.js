Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./59.js");
var a = require("./194.js");
var s = require("./493.js");
var r = require("./197.js");
var o = require("./196.js");
var l = require("./195.js");
var u = function () {
  function ClipSourceFactory(e = false, t = null) {
    this._debugMode = false;
    this._cacheController = new a.ClipCacheController();
    this._debugMode = e;
    if (t) {
      this.cacheController = t;
    }
  }
  Object.defineProperty(ClipSourceFactory.prototype, "cacheController", {
    get: function () {
      return this._cacheController;
    },
    set: function (e) {
      if (this._cacheController) {
        this._cacheController.dispose();
      }
      this._cacheController = e;
    },
    enumerable: true,
    configurable: true
  });
  ClipSourceFactory.prototype.getClipSource = function (e, t = null, n = null, a = false) {
    var s = e.toString();
    var o = i.GoodgameBitmapEngine.cacheController.getCache(s, n);
    if (!o) {
      (o = t ? new t() : new r.DisplayObjectClipSource()).convertClass(e, n, this.getNextRandomDebugColor(), a);
      i.GoodgameBitmapEngine.cacheController.addToCache(s, o);
    }
    return o;
  };
  ClipSourceFactory.prototype.getExternalClipSource = function (e, t, n = null, a = null, s = null, r = false, l = 1) {
    var u = e;
    var c = i.GoodgameBitmapEngine.cacheController.getCache(u, n);
    if (!c) {
      if (a) {
        (c = s ? new a(s) : new a()).initExternalClipSource(e, t, n, this.getNextRandomDebugColor(), r, l);
      } else {
        (c = new o.ExternalDisplayObjectClipSource()).initExternalClipSource(e, t, n, this.getNextRandomDebugColor(), r, l);
      }
      i.GoodgameBitmapEngine.cacheController.addToCache(u, c);
    }
    return c;
  };
  ClipSourceFactory.prototype.getExternalTexturePackerClipSource = function (e, t, n = 1) {
    var a = e;
    var s = i.GoodgameBitmapEngine.cacheController.getCache("externaltp_" + a, []);
    if (!s) {
      var r = new l.ExternalTexturePackerClipSource();
      r.initExternalClipSource(e, t, null, 0, false, n);
      s = r;
      i.GoodgameBitmapEngine.cacheController.addToCache("externaltp_" + a, s);
    }
    return s;
  };
  ClipSourceFactory.prototype.getContinuesLoadedTexturePackerClipSource = function (e, t, n = 1) {
    var a = e;
    var r = i.GoodgameBitmapEngine.cacheController.getCache("externaltp_" + a, []);
    if (!r) {
      var o = new s.ContinueLoadingTexturePackerClipSource();
      o.initExternalClipSource(e, t, null, 0, false, n);
      r = o;
      i.GoodgameBitmapEngine.cacheController.addToCache("externaltp_" + a, r);
    }
    return r;
  };
  ClipSourceFactory.prototype.getNextRandomDebugColor = function () {
    if (this._debugMode) {
      return Number.MAX_VALUE * Math.random() + 1;
    } else {
      return 0;
    }
  };
  return ClipSourceFactory;
}();
exports.ClipSourceFactory = u;