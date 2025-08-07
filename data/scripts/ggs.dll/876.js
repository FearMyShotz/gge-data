Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./485.js");
var a = require("./484.js");
var s = createjs.Point;
var r = function () {
  function GraphicsUtil() {}
  GraphicsUtil.drawArrow = function (e, t, n, r = null) {
    if (!t.equals(n)) {
      var o;
      o = r == null ? new i.ArrowStyle() : r instanceof i.ArrowStyle ? r : new i.ArrowStyle(r);
      var l = n.subtract(t);
      var u = o.headWidth != -1 ? o.headWidth / 2 : o.headLength / 2;
      var c = new s(l.y, -l.x);
      c.normalize(o.shaftThickness / 2);
      var _ = t.add(c);
      var d = t.subtract(c);
      var m = n.add(c);
      var h = n.subtract(c);
      var p = l.clone();
      p.normalize(p.length - o.headLength);
      p = p.add(t);
      var g = c.clone();
      g.normalize(u);
      var E = p.add(g);
      var C = p.subtract(g);
      var f = s.interpolate(n, p, o.shaftPosition);
      var T = a.GeomUtil.getLineIntersection(_, m, f, E);
      var S = a.GeomUtil.getLineIntersection(d, h, f, C);
      var y = s.interpolate(n, p, o.edgeControlPosition);
      var I = c.clone();
      I.normalize(u * o.edgeControlSize);
      var v = y.add(I);
      var A = y.subtract(I);
      e.moveTo(_.x, _.y);
      e.lineTo(T.x, T.y);
      e.lineTo(E.x, E.y);
      e.curveTo(v.x, v.y, n.x, n.y);
      e.curveTo(A.x, A.y, C.x, C.y);
      e.lineTo(S.x, S.y);
      e.lineTo(d.x, d.y);
      e.lineTo(_.x, _.y);
    }
  };
  GraphicsUtil.drawArrowBezier = function (e, t, n, r = null) {
    if (!t.equals(n)) {
      var o;
      o = r == null ? new i.ArrowStyle() : r instanceof i.ArrowStyle ? r : new i.ArrowStyle(r);
      var l = n.subtract(t);
      var u = o.headWidth != -1 ? o.headWidth / 2 : o.headLength / 2;
      var c = new s(l.y, -l.x);
      c.normalize(o.shaftThickness / 2);
      var _ = t.add(c);
      var d = t.subtract(c);
      var m = n.add(c);
      var h = n.subtract(c);
      var p = l.clone();
      p.normalize(p.length - o.headLength);
      p = p.add(t);
      var g = c.clone();
      g.normalize(u);
      var E = p.add(g);
      var C = p.subtract(g);
      var f = s.interpolate(n, p, o.shaftPosition);
      var T = a.GeomUtil.getLineIntersection(_, m, f, E);
      var S = a.GeomUtil.getLineIntersection(d, h, f, C);
      var y = GraphicsUtil.getCurveControlPoint(_, T);
      var I = GraphicsUtil.getCurveControlPoint(d, S);
      var v = s.interpolate(n, p, o.edgeControlPosition);
      var A = c.clone();
      A.normalize(u * o.edgeControlSize);
      var O = v.add(A);
      var L = v.subtract(A);
      e.moveTo(_.x, _.y);
      e.curveTo(y.x, y.y, T.x, T.y);
      e.lineTo(E.x, E.y);
      e.curveTo(O.x, O.y, n.x, n.y);
      e.curveTo(L.x, L.y, C.x, C.y);
      e.lineTo(S.x, S.y);
      e.curveTo(I.x, I.y, d.x, d.y);
      e.lineTo(_.x, _.y);
      var D = [_, T, E, n,, C, S, d];
      return GraphicsUtil.getBoundsByPoints(D);
    }
  };
  GraphicsUtil.getCurveControlPoint = function (e, t) {
    var n = s.distance(e, t);
    var i = t.subtract(e);
    var a = new s(i.y, -i.x);
    a.normalize(n * GraphicsUtil.BEZIER_LENGTH_TO_CURVE);
    var r = s.interpolate(e, t, 0.5);
    return r = i.x >= 0 ? r.add(a) : r.subtract(a);
  };
  GraphicsUtil.drawArrowHead = function (e, t, n, a) {
    var r;
    if (a === undefined) {
      a = null;
    }
    r = a == null ? new i.ArrowStyle() : a instanceof i.ArrowStyle ? a : new i.ArrowStyle(a);
    var o = n.subtract(t);
    var l = r.headWidth != -1 ? r.headWidth / 2 : o.length / 2;
    var u = o.clone();
    u.normalize(o.length * r.shaftPosition);
    u = t.add(u);
    var c = (o = new s(o.y, -o.x)).clone();
    c.normalize(r.shaftControlSize * l);
    var _ = s.interpolate(t, u, r.shaftControlPosition);
    var d = _.add(c);
    var m = _.subtract(c);
    o.normalize(l);
    var h = t.add(o);
    var p = t.subtract(o);
    var g = s.interpolate(t, n, r.edgeControlPosition);
    o.normalize(l * r.edgeControlSize);
    var E = g.add(o);
    var C = g.subtract(o);
    e.moveTo(h.x, h.y);
    e.curveTo(d.x, d.y, u.x, u.y);
    e.curveTo(m.x, m.y, p.x, p.y);
    e.curveTo(C.x, C.y, n.x, n.y);
    e.curveTo(E.x, E.y, h.x, h.y);
  };
  GraphicsUtil.BEZIER_LENGTH_TO_CURVE = 0.1;
  GraphicsUtil.rotatePoint = function (e, t) {
    return new s(e.x * Math.cos(t) - e.y * Math.sin(t), e.y * Math.cos(t) + e.x * Math.sin(t));
  };
  GraphicsUtil.getBoundsByPoints = function (e) {
    var t = Number.MAX_VALUE;
    var n = Number.MIN_VALUE;
    var i = Number.MAX_VALUE;
    var a = Number.MIN_VALUE;
    e.forEach(function (e) {
      t = t > e.x ? e.x : t;
      n = n < e.x ? e.x : n;
      i = i > e.y ? e.y : i;
      a = a < e.y ? e.y : a;
    });
    return new createjs.Rectangle(t, i, n - t, a - i);
  };
  return GraphicsUtil;
}();
exports.GraphicsUtil = r;