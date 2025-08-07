Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function ClipCacheController() {
    this.bitmapCache = new Map();
    this.globalCache = new Map();
    this.maxCacheItems = 5;
  }
  ClipCacheController.prototype.getCache = function (e, t = null) {
    var n = this.globalCache.get(e);
    if (!n || n && n.length < 1) {
      return null;
    } else if (t) {
      return this.getClipSourceByColorID(n, this.getColorIDByColorVector(t));
    } else {
      return n[0];
    }
  };
  ClipCacheController.prototype.getColorIDByColorVector = function (e = null) {
    if (e && e.length > 0) {
      var t = "";
      for (var n = 0; n < e.length; n++) {
        t += e[n].colorID;
      }
      return t;
    }
    return null;
  };
  ClipCacheController.prototype.addToCache = function (e, t) {
    var n = this.globalCache.get(e);
    if (!n) {
      this.globalCache.set(e, n = []);
    }
    if (this.getClipSourceByColorID(n, t.colorID) == null) {
      if (n.length >= this.maxCacheItems) {
        n.shift();
      }
      n.push(t);
    }
  };
  ClipCacheController.prototype.removeFromCache = function (e) {
    if (this.globalCache.get(e)) {
      this.globalCache.get(e);
      this.globalCache.delete(e);
    }
  };
  ClipCacheController.prototype.getClipSourceByColorID = function (e, t) {
    for (var n = 0, i = e; n < i.length; n++) {
      var a = i[n];
      if (a.colorID == t) {
        return a;
      }
    }
    return null;
  };
  ClipCacheController.prototype.dispose = function () {
    for (var e = 0, t = Array.from(this.globalCache.keys()); e < t.length; e++) {
      var n = t[e];
      for (var i = 0, a = this.globalCache.get(n); i < a.length; i++) {
        var s = a[i];
        if (s) {
          s.destroy();
        }
      }
    }
    this.globalCache = new Map();
  };
  return ClipCacheController;
}();
exports.ClipCacheController = i;