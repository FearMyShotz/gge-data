Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function Range() {
    throw new Error("Range is a static class and cannot be instantiated.");
  }
  Range.isInRange = function (e, t, n, i = null) {
    i ||= new Array();
    if (i.length > 0) {
      for (var a in i) {
        if (e == i[a]) {
          return false;
        }
      }
    }
    return e >= t && e <= n;
  };
  Range.randRangeSet = function (e, t, n, i) {
    var a = new Array();
    if (i && n <= t - e + 1) {
      var s = new Array();
      for (var r = e; r <= t; r++) {
        s.push(r);
      }
      for (var o = 1; o <= n; o++) {
        var l = Math.floor(Math.random() * s.length);
        a.push(s[l]);
        s.splice(l, 1);
      }
    } else {
      for (var u = 1; u <= n; u++) {
        a.push(Range.randRangeInt(e, t));
      }
    }
    return a;
  };
  Range.randRangeFloat = function (e, t) {
    return Math.random() * (t - e) + e;
  };
  Range.randRangeInt = function (e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e);
  };
  Range.resolve = function (e, t, n) {
    return Math.max(Math.min(e, n), t);
  };
  Range.center = function (e, t, n) {
    if (e > t && e > n) {
      if (t > n) {
        return t;
      } else {
        return n;
      }
    } else if (t > e && t > n) {
      if (e > n) {
        return e;
      } else {
        return n;
      }
    } else if (e > t) {
      return e;
    } else {
      return t;
    }
  };
  return Range;
}();
exports.Range = i;