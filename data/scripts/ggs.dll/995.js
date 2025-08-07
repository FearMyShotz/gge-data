var i = exports;
i.length = function length(e) {
  var t = e.length;
  if (!t) {
    return 0;
  }
  var n = 0;
  for (; --t % 4 > 1 && e.charAt(t) === "=";) {
    ++n;
  }
  return Math.ceil(e.length * 3) / 4 - n;
};
var a = new Array(64);
var s = new Array(123);
for (var r = 0; r < 64;) {
  s[a[r] = r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r - 59 | 43] = r++;
}
i.encode = function encode(e, t, n) {
  var i;
  var s = null;
  var r = [];
  for (var o = 0, l = 0; t < n;) {
    var u = e[t++];
    switch (l) {
      case 0:
        r[o++] = a[u >> 2];
        i = (u & 3) << 4;
        l = 1;
        break;
      case 1:
        r[o++] = a[i | u >> 4];
        i = (u & 15) << 2;
        l = 2;
        break;
      case 2:
        r[o++] = a[i | u >> 6];
        r[o++] = a[u & 63];
        l = 0;
    }
    if (o > 8191) {
      (s ||= []).push(String.fromCharCode.apply(String, r));
      o = 0;
    }
  }
  if (l) {
    r[o++] = a[i];
    r[o++] = 61;
    if (l === 1) {
      r[o++] = 61;
    }
  }
  if (s) {
    if (o) {
      s.push(String.fromCharCode.apply(String, r.slice(0, o)));
    }
    return s.join("");
  } else {
    return String.fromCharCode.apply(String, r.slice(0, o));
  }
};
i.decode = function decode(e, t, n) {
  var i;
  var a = n;
  var r = 0;
  for (var o = 0; o < e.length;) {
    var l = e.charCodeAt(o++);
    if (l === 61 && r > 1) {
      break;
    }
    if ((l = s[l]) === undefined) {
      throw Error("invalid encoding");
    }
    switch (r) {
      case 0:
        i = l;
        r = 1;
        break;
      case 1:
        t[n++] = i << 2 | (l & 48) >> 4;
        i = l;
        r = 2;
        break;
      case 2:
        t[n++] = (i & 15) << 4 | (l & 60) >> 2;
        i = l;
        r = 3;
        break;
      case 3:
        t[n++] = (i & 3) << 6 | l;
        r = 0;
    }
  }
  if (r === 1) {
    throw Error("invalid encoding");
  }
  return n - a;
};
i.test = function test(e) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
};