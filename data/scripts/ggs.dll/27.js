var i;
var a;
var s = module.exports = require("./53.js");
var r = require("./510.js");
s.codegen = require("./1004.js");
s.fetch = require("./1005.js");
s.path = require("./1006.js");
s.fs = s.inquire("fs");
s.toArray = function toArray(e) {
  if (e) {
    for (var t = Object.keys(e), n = new Array(t.length), i = 0; i < t.length;) {
      n[i] = e[t[i++]];
    }
    return n;
  }
  return [];
};
s.toObject = function toObject(e) {
  var t = {};
  for (var n = 0; n < e.length;) {
    var i = e[n++];
    var a = e[n++];
    if (a !== undefined) {
      t[i] = a;
    }
  }
  return t;
};
var o = /\\/g;
var l = /"/g;
s.isReserved = function isReserved(e) {
  return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(e);
};
s.safeProp = function safeProp(e) {
  if (!/^[$\w_]+$/.test(e) || s.isReserved(e)) {
    return "[\"" + e.replace(o, "\\\\").replace(l, "\\\"") + "\"]";
  } else {
    return "." + e;
  }
};
s.ucFirst = function ucFirst(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
};
var u = /_([a-z])/g;
s.camelCase = function camelCase(e) {
  return e.substring(0, 1) + e.substring(1).replace(u, function (e, t) {
    return t.toUpperCase();
  });
};
s.compareFieldsById = function compareFieldsById(e, t) {
  return e.id - t.id;
};
s.decorateType = function decorateType(e, t) {
  if (e.$type) {
    if (t && e.$type.name !== t) {
      s.decorateRoot.remove(e.$type);
      e.$type.name = t;
      s.decorateRoot.add(e.$type);
    }
    return e.$type;
  }
  i ||= require("./204.js");
  var a = new i(t || e.name);
  s.decorateRoot.add(a);
  a.ctor = e;
  Object.defineProperty(e, "$type", {
    value: a,
    enumerable: false
  });
  Object.defineProperty(e.prototype, "$type", {
    value: a,
    enumerable: false
  });
  return a;
};
var c = 0;
s.decorateEnum = function decorateEnum(e) {
  if (e.$type) {
    return e.$type;
  }
  a ||= require("./46.js");
  var t = new a("Enum" + c++, e);
  s.decorateRoot.add(t);
  Object.defineProperty(e, "$type", {
    value: t,
    enumerable: false
  });
  return t;
};
Object.defineProperty(s, "decorateRoot", {
  get: function () {
    return r.decorated ||= new (require("./209.js"))();
  }
});