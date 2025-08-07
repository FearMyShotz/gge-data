exports.byteLength = function byteLength(e) {
  var t = getLens(e);
  var n = t[0];
  var i = t[1];
  return (n + i) * 3 / 4 - i;
};
exports.toByteArray = function toByteArray(e) {
  var t;
  var n = getLens(e);
  var i = n[0];
  var r = n[1];
  var o = new s(function _byteLength(e, t, n) {
    return (t + n) * 3 / 4 - n;
  }(0, i, r));
  var l = 0;
  for (var u = r > 0 ? i - 4 : i, c = 0; c < u; c += 4) {
    t = a[e.charCodeAt(c)] << 18 | a[e.charCodeAt(c + 1)] << 12 | a[e.charCodeAt(c + 2)] << 6 | a[e.charCodeAt(c + 3)];
    o[l++] = t >> 16 & 255;
    o[l++] = t >> 8 & 255;
    o[l++] = t & 255;
  }
  if (r === 2) {
    t = a[e.charCodeAt(c)] << 2 | a[e.charCodeAt(c + 1)] >> 4;
    o[l++] = t & 255;
  }
  if (r === 1) {
    t = a[e.charCodeAt(c)] << 10 | a[e.charCodeAt(c + 1)] << 4 | a[e.charCodeAt(c + 2)] >> 2;
    o[l++] = t >> 8 & 255;
    o[l++] = t & 255;
  }
  return o;
};
exports.fromByteArray = function fromByteArray(e) {
  var t;
  var n = e.length;
  var a = n % 3;
  var s = [];
  for (var r = 0, o = n - a; r < o; r += 16383) {
    s.push(encodeChunk(e, r, r + 16383 > o ? o : r + 16383));
  }
  if (a === 1) {
    t = e[n - 1];
    s.push(i[t >> 2] + i[t << 4 & 63] + "==");
  } else if (a === 2) {
    t = (e[n - 2] << 8) + e[n - 1];
    s.push(i[t >> 10] + i[t >> 4 & 63] + i[t << 2 & 63] + "=");
  }
  return s.join("");
};
var i = [];
var a = [];
var s = typeof Uint8Array != "undefined" ? Uint8Array : Array;
var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var o = 0, l = r.length; o < l; ++o) {
  i[o] = r[o];
  a[r.charCodeAt(o)] = o;
}
function getLens(e) {
  var t = e.length;
  if (t % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var n = e.indexOf("=");
  if (n === -1) {
    n = t;
  }
  return [n, n === t ? 0 : 4 - n % 4];
}
function encodeChunk(e, t, n) {
  var a;
  var s;
  var r = [];
  for (var o = t; o < n; o += 3) {
    a = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (e[o + 2] & 255);
    r.push(i[(s = a) >> 18 & 63] + i[s >> 12 & 63] + i[s >> 6 & 63] + i[s & 63]);
  }
  return r.join("");
}
a["-".charCodeAt(0)] = 62;
a["_".charCodeAt(0)] = 63;