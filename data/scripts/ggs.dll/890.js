Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function ArrayShuffle() {}
  ArrayShuffle.shuffle = function (e) {
    for (var t = e.length, n = new Array(t), i = 0; i < t; i++) {
      n[i] = e.splice(Number(Math.random() * (t - i)), 1)[0];
    }
    return n;
  };
  return ArrayShuffle;
}();
exports.ArrayShuffle = i;