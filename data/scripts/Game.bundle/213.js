Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleMathHelper() {}
  CastleMathHelper.getRandomInt = function (e, t) {
    return Math.floor(e + Math.random() * (t - e + 1));
  };
  CastleMathHelper.clamp = function (e, t, i) {
    return Math.max(t, Math.min(e, i));
  };
  CastleMathHelper.getIndicesOfMaxToMinSorting = function (e) {
    var t = e;
    var i = [];
    var n = t[CastleMathHelper.getIndexOfHighestValue(t)];
    for (var a = 0, s = 0; a < e.length;) {
      s = o.int(CastleMathHelper.getIndexOfHighestValue(t, n));
      i.push(s);
      t[s] = Number.MIN_VALUE;
      a++;
    }
    return i;
  };
  CastleMathHelper.getIndexOfHighestValue = function (e, t = Number.MAX_VALUE) {
    var i = 0;
    var n = -1;
    var o = 0;
    if (t == 0) {
      t = Number.MAX_VALUE;
    }
    if (e != null) {
      for (var a = 0, s = e; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          if (r > i && r <= t) {
            i = r;
            n = o;
          }
          o++;
        }
      }
    }
    return n;
  };
  CastleMathHelper.bubbleSort = function (e, t = true, i = false) {
    for (var n = 0, o = false; e.length - 1 > 0;) {
      if (t) {
        if (e[0] < e[1]) {
          n = e[0];
          e[0] = e[1];
          e[1] = n;
          o = true;
        }
      } else if (e[0] > e[1]) {
        n = e[0];
        e[0] = e[1];
        e[1] = n;
        o = true;
      }
    }
    if (o && i) {
      e = CastleMathHelper.bubbleSort(e, t, i);
    }
    return e;
  };
  CastleMathHelper.numberArrayToVector = function (e) {
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleMathHelper.limit = function (e, t = 1, i = 0) {
    if (t < i) {
      var n = t;
      t = i;
      i = n;
    }
    return Math.max(Math.min(e, t), i);
  };
  return CastleMathHelper;
}();
exports.CastleMathHelper = n;
var o = require("./6.js");