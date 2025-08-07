Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function PlayerPerformanceVO() {
    this.performanceData = {};
  }
  PlayerPerformanceVO.prototype.parseData = function (e) {
    if (e.PST) {
      this.performanceData = e.PST;
    }
    this._points = e.AMT;
  };
  PlayerPerformanceVO.prototype.getPerformanceData = function (e) {
    for (var t = 0, i = this.performanceData; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && n.PSI == e) {
        return n.AMT;
      }
    }
    return 0;
  };
  Object.defineProperty(PlayerPerformanceVO.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  return PlayerPerformanceVO;
}();
exports.PlayerPerformanceVO = n;