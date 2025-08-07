Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js").getLogger("AssetsPool");
var a = function () {
  function AssetsPool() {
    this.pool = new Map();
  }
  AssetsPool.prototype.allocate = function (e) {
    var t = e.__fname || e.name;
    var n = new e();
    if (!this.pool.has(t)) {
      this.pool.set(t, []);
    }
    this.pool.get(t).push(n);
  };
  AssetsPool.prototype.recycle = function (e) {
    var t = e.constructor.__fname || e.constructor.name;
    if (this.pool.has(t)) {
      this.pool.get(t).push(e);
    } else {
      i.warn("trying to recycle an item that was not in the pool ", t);
    }
  };
  AssetsPool.prototype.obtain = function (e) {
    var t = e.__fname || e.name;
    if (!this.hasAvailable(t)) {
      this.allocate(e);
    }
    return this.pool.get(t).shift();
  };
  AssetsPool.prototype.hasAvailable = function (e) {
    return this.pool.has(e) && this.pool.get(e).length > 0;
  };
  AssetsPool.prototype.clearPool = function () {
    this.pool.clear();
  };
  AssetsPool.prototype.getNestedSize = function () {
    var e = Array.from(this.pool.values()).reduce(function (e, t) {
      return e += t.length;
    }, 0);
    i.debug("Pool has currently " + this.pool.size + " Classes with a total of " + e + " instances");
    return e;
  };
  return AssetsPool;
}();
exports.assetsPool = new a();