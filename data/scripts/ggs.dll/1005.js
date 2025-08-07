module.exports = fetch;
var i = require("./507.js");
var a = require("./508.js")("fs");
function fetch(e, t, n) {
  if (typeof t == "function") {
    n = t;
    t = {};
  } else {
    t ||= {};
  }
  if (n) {
    if (!t.xhr && a && a.readFile) {
      return a.readFile(e, function fetchReadFileCallback(i, a) {
        if (i && typeof XMLHttpRequest != "undefined") {
          return fetch.xhr(e, t, n);
        } else if (i) {
          return n(i);
        } else {
          return n(null, t.binary ? a : a.toString("utf8"));
        }
      });
    } else {
      return fetch.xhr(e, t, n);
    }
  } else {
    return i(fetch, this, e, t);
  }
}
fetch.xhr = function fetch_xhr(e, t, n) {
  var i = new XMLHttpRequest();
  i.onreadystatechange = function fetchOnReadyStateChange() {
    if (i.readyState === 4) {
      if (i.status !== 0 && i.status !== 200) {
        return n(Error("status " + i.status));
      }
      if (t.binary) {
        var e = i.response;
        if (!e) {
          e = [];
          for (var a = 0; a < i.responseText.length; ++a) {
            e.push(i.responseText.charCodeAt(a) & 255);
          }
        }
        return n(null, typeof Uint8Array != "undefined" ? new Uint8Array(e) : e);
      }
      return n(null, i.responseText);
    }
  };
  if (t.binary) {
    if ("overrideMimeType" in i) {
      i.overrideMimeType("text/plain; charset=x-user-defined");
    }
    i.responseType = "arraybuffer";
  }
  i.open("GET", e);
  i.send();
};