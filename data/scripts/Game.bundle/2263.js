var n = require("./257.js");
module.exports = n.isStandardBrowserEnv() ? function standardBrowserEnv() {
  var e;
  var t = /(msie|trident)/i.test(navigator.userAgent);
  var i = document.createElement("a");
  function resolveURL(e) {
    var n = e;
    if (t) {
      i.setAttribute("href", n);
      n = i.href;
    }
    i.setAttribute("href", n);
    return {
      href: i.href,
      protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
      host: i.host,
      search: i.search ? i.search.replace(/^\?/, "") : "",
      hash: i.hash ? i.hash.replace(/^#/, "") : "",
      hostname: i.hostname,
      port: i.port,
      pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
    };
  }
  e = resolveURL(window.location.href);
  return function isURLSameOrigin(t) {
    var i = n.isString(t) ? resolveURL(t) : t;
    return i.protocol === e.protocol && i.host === e.host;
  };
}() : function isURLSameOrigin() {
  return true;
};