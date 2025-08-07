var n = require("./257.js");
module.exports = n.isStandardBrowserEnv() ? function standardBrowserEnv() {
  return {
    write: function write(e, t, i, o, a, s) {
      var r = [];
      r.push(e + "=" + encodeURIComponent(t));
      if (n.isNumber(i)) {
        r.push("expires=" + new Date(i).toGMTString());
      }
      if (n.isString(o)) {
        r.push("path=" + o);
      }
      if (n.isString(a)) {
        r.push("domain=" + a);
      }
      if (s === true) {
        r.push("secure");
      }
      document.cookie = r.join("; ");
    },
    read: function read(e) {
      var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      if (t) {
        return decodeURIComponent(t[3]);
      } else {
        return null;
      }
    },
    remove: function remove(e) {
      this.write(e, "", Date.now() - 86400000);
    }
  };
}() : {
  write: function write() {},
  read: function read() {
    return null;
  },
  remove: function remove() {}
};