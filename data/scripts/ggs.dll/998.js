var i = exports;
i.length = function utf8_length(e) {
  var t = 0;
  var n = 0;
  for (var i = 0; i < e.length; ++i) {
    if ((n = e.charCodeAt(i)) < 128) {
      t += 1;
    } else if (n < 2048) {
      t += 2;
    } else if ((n & 64512) == 55296 && (e.charCodeAt(i + 1) & 64512) == 56320) {
      ++i;
      t += 4;
    } else {
      t += 3;
    }
  }
  return t;
};
i.read = function utf8_read(e, t, n) {
  if (n - t < 1) {
    return "";
  }
  for (var i, a = null, s = [], r = 0; t < n;) {
    if ((i = e[t++]) < 128) {
      s[r++] = i;
    } else if (i > 191 && i < 224) {
      s[r++] = (i & 31) << 6 | e[t++] & 63;
    } else if (i > 239 && i < 365) {
      i = ((i & 7) << 18 | (e[t++] & 63) << 12 | (e[t++] & 63) << 6 | e[t++] & 63) - 65536;
      s[r++] = 55296 + (i >> 10);
      s[r++] = 56320 + (i & 1023);
    } else {
      s[r++] = (i & 15) << 12 | (e[t++] & 63) << 6 | e[t++] & 63;
    }
    if (r > 8191) {
      (a ||= []).push(String.fromCharCode.apply(String, s));
      r = 0;
    }
  }
  if (a) {
    if (r) {
      a.push(String.fromCharCode.apply(String, s.slice(0, r)));
    }
    return a.join("");
  } else {
    return String.fromCharCode.apply(String, s.slice(0, r));
  }
};
i.write = function utf8_write(e, t, n) {
  var i;
  var a;
  var s = n;
  for (var r = 0; r < e.length; ++r) {
    if ((i = e.charCodeAt(r)) < 128) {
      t[n++] = i;
    } else if (i < 2048) {
      t[n++] = i >> 6 | 192;
      t[n++] = i & 63 | 128;
    } else if ((i & 64512) == 55296 && ((a = e.charCodeAt(r + 1)) & 64512) == 56320) {
      i = 65536 + ((i & 1023) << 10) + (a & 1023);
      ++r;
      t[n++] = i >> 18 | 240;
      t[n++] = i >> 12 & 63 | 128;
      t[n++] = i >> 6 & 63 | 128;
      t[n++] = i & 63 | 128;
    } else {
      t[n++] = i >> 12 | 224;
      t[n++] = i >> 6 & 63 | 128;
      t[n++] = i & 63 | 128;
    }
  }
  return n - s;
};