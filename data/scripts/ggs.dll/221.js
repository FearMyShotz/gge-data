var t = require("./24.js");
var n = "Expected a function";
var i = "__lodash_hash_undefined__";
var a = "[object Function]";
var s = "[object GeneratorFunction]";
var r = /^\[object .+?Constructor\]$/;
var o = typeof t == "object" && t && t.Object === Object && t;
var l = typeof self == "object" && self && self.Object === Object && self;
var u = o || l || Function("return this")();
var c;
var _ = Array.prototype;
var d = Function.prototype;
var m = Object.prototype;
var h = u["__core-js_shared__"];
var p = (c = /[^.]+$/.exec(h && h.keys && h.keys.IE_PROTO || "")) ? "Symbol(src)_1." + c : "";
var g = d.toString;
var E = m.hasOwnProperty;
var C = m.toString;
var f = RegExp("^" + g.call(E).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var T = _.splice;
var S = getNative(u, "Map");
var y = getNative(Object, "create");
function Hash(e) {
  var t = -1;
  var n = e ? e.length : 0;
  for (this.clear(); ++t < n;) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
function ListCache(e) {
  var t = -1;
  var n = e ? e.length : 0;
  for (this.clear(); ++t < n;) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
function MapCache(e) {
  var t = -1;
  var n = e ? e.length : 0;
  for (this.clear(); ++t < n;) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
function assocIndexOf(e, t) {
  var n;
  var i;
  for (var a = e.length; a--;) {
    if ((n = e[a][0]) === (i = t) || n != n && i != i) {
      return a;
    }
  }
  return -1;
}
function baseIsNative(e) {
  return !!isObject(e) && !function isMasked(e) {
    return !!p && p in e;
  }(e) && (function isFunction(e) {
    var t = isObject(e) ? C.call(e) : "";
    return t == a || t == s;
  }(e) || function isHostObject(e) {
    var t = false;
    if (e != null && typeof e.toString != "function") {
      try {
        t = !!(e + "");
      } catch (e) {}
    }
    return t;
  }(e) ? f : r).test(function toSource(e) {
    if (e != null) {
      try {
        return g.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  }(e));
}
function getMapData(e, t) {
  var n = e.__data__;
  if (function isKeyable(e) {
    var t = typeof e;
    if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
      return e !== "__proto__";
    } else {
      return e === null;
    }
  }(t)) {
    return n[typeof t == "string" ? "string" : "hash"];
  } else {
    return n.map;
  }
}
function getNative(e, t) {
  var n = function getValue(e, t) {
    if (e == null) {
      return undefined;
    } else {
      return e[t];
    }
  }(e, t);
  if (baseIsNative(n)) {
    return n;
  } else {
    return undefined;
  }
}
function memoize(e, t) {
  if (typeof e != "function" || t && typeof t != "function") {
    throw new TypeError(n);
  }
  function i() {
    var n = arguments;
    var a = t ? t.apply(this, n) : n[0];
    var s = i.cache;
    if (s.has(a)) {
      return s.get(a);
    }
    var r = e.apply(this, n);
    i.cache = s.set(a, r);
    return r;
  }
  i.cache = new (memoize.Cache || MapCache)();
  return i;
}
function isObject(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
Hash.prototype.clear = function hashClear() {
  this.__data__ = y ? y(null) : {};
};
Hash.prototype.delete = function hashDelete(e) {
  return this.has(e) && delete this.__data__[e];
};
Hash.prototype.get = function hashGet(e) {
  var t = this.__data__;
  if (y) {
    var n = t[e];
    if (n === i) {
      return undefined;
    } else {
      return n;
    }
  }
  if (E.call(t, e)) {
    return t[e];
  } else {
    return undefined;
  }
};
Hash.prototype.has = function hashHas(e) {
  var t = this.__data__;
  if (y) {
    return t[e] !== undefined;
  } else {
    return E.call(t, e);
  }
};
Hash.prototype.set = function hashSet(e, t) {
  this.__data__[e] = y && t === undefined ? i : t;
  return this;
};
ListCache.prototype.clear = function listCacheClear() {
  this.__data__ = [];
};
ListCache.prototype.delete = function listCacheDelete(e) {
  var t = this.__data__;
  var n = assocIndexOf(t, e);
  return !(n < 0) && !(n == t.length - 1 ? t.pop() : T.call(t, n, 1), 0);
};
ListCache.prototype.get = function listCacheGet(e) {
  var t = this.__data__;
  var n = assocIndexOf(t, e);
  if (n < 0) {
    return undefined;
  } else {
    return t[n][1];
  }
};
ListCache.prototype.has = function listCacheHas(e) {
  return assocIndexOf(this.__data__, e) > -1;
};
ListCache.prototype.set = function listCacheSet(e, t) {
  var n = this.__data__;
  var i = assocIndexOf(n, e);
  if (i < 0) {
    n.push([e, t]);
  } else {
    n[i][1] = t;
  }
  return this;
};
MapCache.prototype.clear = function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (S || ListCache)(),
    string: new Hash()
  };
};
MapCache.prototype.delete = function mapCacheDelete(e) {
  return getMapData(this, e).delete(e);
};
MapCache.prototype.get = function mapCacheGet(e) {
  return getMapData(this, e).get(e);
};
MapCache.prototype.has = function mapCacheHas(e) {
  return getMapData(this, e).has(e);
};
MapCache.prototype.set = function mapCacheSet(e, t) {
  getMapData(this, e).set(e, t);
  return this;
};
memoize.Cache = MapCache;
module.exports = memoize;