function serializer(e, t) {
  var n = [];
  var i = [];
  if (t == null) {
    t = function (e, t) {
      if (n[0] === t) {
        return "[Circular ~]";
      } else {
        return "[Circular ~." + i.slice(0, n.indexOf(t)).join(".") + "]";
      }
    };
  }
  return function (a, s) {
    if (n.length > 0) {
      var r = n.indexOf(this);
      if (~r) {
        n.splice(r + 1);
      } else {
        n.push(this);
      }
      if (~r) {
        i.splice(r, Infinity, a);
      } else {
        i.push(a);
      }
      if (~n.indexOf(s)) {
        s = t.call(this, a, s);
      }
    } else {
      n.push(s);
    }
    if (e == null) {
      return s;
    } else {
      return e.call(this, a, s);
    }
  };
}
(module.exports = function stringify(e, t, n, i) {
  return JSON.stringify(e, serializer(t, i), n);
}).getSerialize = serializer;