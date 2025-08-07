Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function VectorHelper() {}
  VectorHelper.toArray = function (e) {
    if (e) {
      if (e instanceof Array) {
        var t = new Array(e.length);
        for (var n = 0; n < e.length; n++) {
          t[n] = e[n];
        }
        return t;
      }
      if (e instanceof Array) {
        return Array.from(e);
      } else {
        return [];
      }
    }
    return [];
  };
  return VectorHelper;
}();
exports.VectorHelper = i;