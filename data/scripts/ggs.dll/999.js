module.exports = function pool(e, t, n) {
  var i = n || 8192;
  var a = i >>> 1;
  var s = null;
  var r = i;
  return function pool_alloc(n) {
    if (n < 1 || n > a) {
      return e(n);
    }
    if (r + n > i) {
      s = e(i);
      r = 0;
    }
    var o = t.call(s, r, r += n);
    if (r & 7) {
      r = 1 + (r | 7);
    }
    return o;
  };
};