exports.read = function (e, t, n, i, a) {
  var s;
  var r;
  var o = a * 8 - i - 1;
  var l = (1 << o) - 1;
  var u = l >> 1;
  var c = -7;
  var _ = n ? a - 1 : 0;
  var d = n ? -1 : 1;
  var m = e[t + _];
  _ += d;
  s = m & (1 << -c) - 1;
  m >>= -c;
  c += o;
  for (; c > 0; c -= 8) {
    s = s * 256 + e[t + _];
    _ += d;
  }
  r = s & (1 << -c) - 1;
  s >>= -c;
  c += i;
  for (; c > 0; c -= 8) {
    r = r * 256 + e[t + _];
    _ += d;
  }
  if (s === 0) {
    s = 1 - u;
  } else {
    if (s === l) {
      if (r) {
        return NaN;
      } else {
        return (m ? -1 : 1) * Infinity;
      }
    }
    r += Math.pow(2, i);
    s -= u;
  }
  return (m ? -1 : 1) * r * Math.pow(2, s - i);
};
exports.write = function (e, t, n, i, a, s) {
  var r;
  var o;
  var l;
  var u = s * 8 - a - 1;
  var c = (1 << u) - 1;
  var _ = c >> 1;
  var d = a === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var m = i ? 0 : s - 1;
  var h = i ? 1 : -1;
  var p = t < 0 || t === 0 && 1 / t < 0 ? 1 : 0;
  t = Math.abs(t);
  if (isNaN(t) || t === Infinity) {
    o = isNaN(t) ? 1 : 0;
    r = c;
  } else {
    r = Math.floor(Math.log(t) / Math.LN2);
    if (t * (l = Math.pow(2, -r)) < 1) {
      r--;
      l *= 2;
    }
    if ((t += r + _ >= 1 ? d / l : d * Math.pow(2, 1 - _)) * l >= 2) {
      r++;
      l /= 2;
    }
    if (r + _ >= c) {
      o = 0;
      r = c;
    } else if (r + _ >= 1) {
      o = (t * l - 1) * Math.pow(2, a);
      r += _;
    } else {
      o = t * Math.pow(2, _ - 1) * Math.pow(2, a);
      r = 0;
    }
  }
  for (; a >= 8; a -= 8) {
    e[n + m] = o & 255;
    m += h;
    o /= 256;
  }
  r = r << a | o;
  u += a;
  for (; u > 0; u -= 8) {
    e[n + m] = r & 255;
    m += h;
    r /= 256;
  }
  e[n + m - h] |= p * 128;
};