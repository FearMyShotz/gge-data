Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = createjs.Point;
var a = function () {
  function GeomUtil() {}
  GeomUtil.getLineSegmentIntersection = function (e, t, n, i) {
    var a = GeomUtil.getLineIntersection(e, t, n, i);
    if (a == null) {
      return null;
    } else if (GeomUtil.inRange(a, e, t) && GeomUtil.inRange(a, n, i)) {
      return a;
    } else {
      return null;
    }
  };
  GeomUtil.getLineIntersection = function (e, t, n, a) {
    var s = (t.y - e.y) / (t.x - e.x);
    var r = (a.y - n.y) / (a.x - n.x);
    if (s == r) {
      return null;
    }
    var o = NaN;
    var l = NaN;
    var u = NaN;
    if (isFinite(s)) {
      if (isFinite(r)) {
        l = s * (o = ((u = e.y - s * e.x) - (n.y - r * n.x)) / (r - s)) + u;
      } else {
        u = e.y - s * e.x;
        l = s * (o = n.x) + u;
      }
    } else {
      l = r * (o = e.x) + (n.y - r * n.x);
    }
    return new i(o, l);
  };
  GeomUtil.inRange = function (e, t, n) {
    if (t.x != n.x) {
      return e.x <= t.x != e.x < n.x;
    } else {
      return e.y <= t.y != e.y < n.y;
    }
  };
  return GeomUtil;
}();
exports.GeomUtil = a;