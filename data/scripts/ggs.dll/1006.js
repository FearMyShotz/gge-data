var i = exports;
var a = i.isAbsolute = function isAbsolute(e) {
  return /^(?:\/|\w+:)/.test(e);
};
var s = i.normalize = function normalize(e) {
  var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/");
  var n = a(e);
  var i = "";
  if (n) {
    i = t.shift() + "/";
  }
  for (var s = 0; s < t.length;) {
    if (t[s] === "..") {
      if (s > 0 && t[s - 1] !== "..") {
        t.splice(--s, 2);
      } else if (n) {
        t.splice(s, 1);
      } else {
        ++s;
      }
    } else if (t[s] === ".") {
      t.splice(s, 1);
    } else {
      ++s;
    }
  }
  return i + t.join("/");
};
i.resolve = function resolve(e, t, n) {
  if (!n) {
    t = s(t);
  }
  if (a(t)) {
    return t;
  } else {
    if (!n) {
      e = s(e);
    }
    if ((e = e.replace(/(?:\/|^)[^/]+$/, "")).length) {
      return s(e + "/" + t);
    } else {
      return t;
    }
  }
};