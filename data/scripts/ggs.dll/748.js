Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function LeastRecentUsedCache(e = 300) {
    this.maxEntries = e;
    this.values = new Map();
  }
  LeastRecentUsedCache.prototype.get = function (e) {
    var t;
    if (this.values.has(e)) {
      t = this.values.get(e);
      this.values.delete(e);
      this.values.set(e, t);
      return t;
    }
  };
  LeastRecentUsedCache.prototype.put = function (e, t) {
    if (this.values.size >= this.maxEntries) {
      var n = this.values.keys().next().value;
      this.values.delete(n);
    }
    if (this.values.get(e) === undefined) {
      this.values.set(e, t);
    }
  };
  LeastRecentUsedCache.prototype.clear = function () {
    this.values.clear();
  };
  return LeastRecentUsedCache;
}();
exports.LeastRecentUsedCache = i;