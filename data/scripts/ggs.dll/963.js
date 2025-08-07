Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function ArrayHelper() {}
  ArrayHelper.cloneArray = function (e) {
    return e.concat();
  };
  ArrayHelper.shuffleArray = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = Math.floor(Math.random() * e.length);
      var i = e[t];
      e[t] = e[n];
      e[n] = i;
    }
  };
  ArrayHelper.getRange = function (e, t = 0, n = -1) {
    var i = [];
    if (n == -1) {
      n = e.length;
    }
    for (var a = 0; a <= Math.min(e.length - 1, n); a++) {
      if (a >= t) {
        i.push(e[a]);
      }
    }
    return i;
  };
  ArrayHelper.mirrorArray = function (e) {
    for (var t = e[0].length, n = e.length, i = new Array(t), a = 0; a < t; a++) {
      i[a] = new Array(n);
      for (var s = 0; s < n; s++) {
        i[a][s] = e[s][a];
      }
    }
    return i;
  };
  ArrayHelper.createUniqueCopy = function (e) {
    var t;
    var n = new Array();
    for (var i = e.length, a = 0; a < i; ++a) {
      t = e[a];
      if (!(n.indexOf(t) >= 0)) {
        n.push(t);
      }
    }
    return n;
  };
  return ArrayHelper;
}();
exports.ArrayHelper = i;