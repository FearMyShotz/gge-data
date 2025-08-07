Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function VectorSortHelper() {}
  VectorSortHelper.sort = function (e, t) {
    for (var n = 1; n < e.length; n++) {
      for (var i = e[n], a = n - 1; a >= 0 && t(e[a], i) == 1;) {
        e[a + 1] = e[a];
        a--;
      }
      e[a + 1] = i;
    }
    return e;
  };
  return VectorSortHelper;
}();
exports.VectorSortHelper = i;