Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./118.js").getLogger("mapObjectsPool");
var o = function () {
  function PoolManager() {
    this.pool = new Map();
  }
  PoolManager.prototype.obtain = function (e, t) {
    if (!this.pool.has(e)) {
      this.pool.set(e, []);
    }
    if (this.pool.get(e).length > 0) {
      return this.pool.get(e).pop();
    } else {
      return t(e);
    }
  };
  PoolManager.prototype.recycle = function (e) {
    var t = e.worldmapObjectVO.graphicClassName;
    if (!this.pool.has(t)) {
      n.warn("trying to recycle an item that was not in the pool", t);
      e.remove();
      return;
    }
    if (e.objectContainer) {
      e.objectContainer.asDisplayObject().scaleX = 1;
      e.objectContainer.asDisplayObject().scaleY = 1;
      this.pool.get(t).push(e.objectContainer);
      e.removeForPool();
      e.objectContainer = null;
    }
  };
  PoolManager.prototype.clearPool = function () {
    this.pool.clear();
  };
  PoolManager.prototype.getNestedSize = function () {
    var e = Array.from(this.pool.values()).reduce(function (e, t) {
      return e += t.length;
    }, 0);
    n.debug("Pool has currently " + this.pool.size + " Classes with a total of " + e + " instances");
    return e;
  };
  return PoolManager;
}();
exports.PoolManager = o;
exports.mapObjectsPool = new o();
exports.isPoolable = function isPoolable(e) {
  return e instanceof a.DungeonMapobject || e instanceof s.MonumentMapobject;
};
var a = require("./886.js");
var s = require("./1412.js");