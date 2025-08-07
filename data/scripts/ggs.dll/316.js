Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./317.js");
var a = require("./318.js");
var s = {
  get: function (e, t) {
    var n = typeof e[t];
    if (t === "_data" || n === "function" || n === "object" || n === "number") {
      return e[t];
    }
    if (typeof t == "string") {
      if (t.indexOf("@") === 0) {
        return e.attribute(t.substr(1));
      }
      if (e._data[t] !== undefined) {
        var i = e.child(t);
        if (function isPrimitiveType(e) {
          return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
        }(i._data)) {
          var a = i._data;
          if (a !== null) {
            return a;
          } else {
            return "";
          }
        }
        return i;
      }
      if (e._data["@" + t] !== undefined) {
        return e.attribute(t);
      } else {
        return undefined;
      }
    }
    return e[t];
  }
};
function createNodeProxy(e, t = null) {
  return new Proxy(new a.XMLNode(e, t), s);
}
exports.createNodeProxy = createNodeProxy;
exports.XML = function XML(e) {
  var t = i.fromXML(e);
  var n = t;
  for (var a in t) {
    if (a.match(/[A-Za-z\-]+/)) {
      n = t[a];
      break;
    }
  }
  return createNodeProxy(n);
};