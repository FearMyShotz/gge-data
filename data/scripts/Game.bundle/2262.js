var n = require("./257.js");
var o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
module.exports = function parseHeaders(e) {
  var t;
  var i;
  var a;
  var s = {};
  if (e) {
    n.forEach(e.split("\n"), function parser(e) {
      a = e.indexOf(":");
      t = n.trim(e.substr(0, a)).toLowerCase();
      i = n.trim(e.substr(a + 1));
      if (t) {
        if (s[t] && o.indexOf(t) >= 0) {
          return;
        }
        s[t] = t === "set-cookie" ? (s[t] ? s[t] : []).concat([i]) : s[t] ? s[t] + ", " + i : i;
      }
    });
    return s;
  } else {
    return s;
  }
};