Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ResearchPathfinderSearchableMap() {
    this._width = 0;
    this._height = 0;
    this._walkableMap = new Map();
  }
  ResearchPathfinderSearchableMap.prototype.getHeight = function () {
    return this._height;
  };
  ResearchPathfinderSearchableMap.prototype.getWidth = function () {
    return this._width;
  };
  ResearchPathfinderSearchableMap.prototype.isWalkable = function (e, t) {
    if (e == 0 || t == 0) {
      return false;
    }
    var i = this.getPosStr(e, t);
    return !this._walkableMap.has(i) || this._walkableMap.get(i);
  };
  ResearchPathfinderSearchableMap.prototype.setWalkable = function (e, t, i) {
    var n = this.getPosStr(e, t);
    this._walkableMap.set(n, i);
    this._width = Math.max(this._width, e + 1);
    this._height = Math.max(this._height, t + 1);
  };
  ResearchPathfinderSearchableMap.prototype.getPosStr = function (e, t) {
    return e + "," + t;
  };
  return ResearchPathfinderSearchableMap;
}();
exports.ResearchPathfinderSearchableMap = n;