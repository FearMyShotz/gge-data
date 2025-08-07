Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  return function ArrowStyle(e = null) {
    this.headWidth = -1;
    this.headLength = 10;
    this.shaftThickness = 2;
    this.shaftPosition = 0;
    this.shaftControlPosition = 0.5;
    this.shaftControlSize = 0.5;
    this.edgeControlPosition = 0.5;
    this.edgeControlSize = 0.5;
    if (e != null) {
      for (var t in e) {
        this[t] = e[t];
      }
    }
  };
}();
exports.ArrowStyle = i;