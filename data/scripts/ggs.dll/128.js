Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function IntPoint(e = 0, t = 0) {
    this.x = e;
    this.y = t;
  }
  IntPoint.prototype.add = function (e) {
    this.x += e.x;
    this.y += e.y;
  };
  IntPoint.prototype.addNew = function (e) {
    return new IntPoint(this.x + e.x, this.y + e.y);
  };
  IntPoint.prototype.equals = function (e) {
    return this.x == e.x && this.y == e.y;
  };
  IntPoint.prototype.toString = function () {
    return "IntPoint(" + this.x + ", " + this.y + ")";
  };
  return IntPoint;
}();
exports.IntPoint = i;