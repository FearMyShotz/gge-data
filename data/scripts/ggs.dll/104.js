module.exports = Namespace;
var i = require("./86.js");
((Namespace.prototype = Object.create(i.prototype)).constructor = Namespace).className = "Namespace";
var a;
var s;
var r;
var o = require("./69.js");
var l = require("./27.js");
function arrayToJSON(e, t) {
  if (e && e.length) {
    var n = {};
    for (var i = 0; i < e.length; ++i) {
      n[e[i].name] = e[i].toJSON(t);
    }
    return n;
  }
}
function Namespace(e, t) {
  i.call(this, e, t);
  this.nested = undefined;
  this._nestedArray = null;
}
function clearCache(e) {
  e._nestedArray = null;
  return e;
}
Namespace.fromJSON = function fromJSON(e, t) {
  return new Namespace(e, t.options).addJSON(t.nested);
};
Namespace.arrayToJSON = arrayToJSON;
Namespace.isReservedId = function isReservedId(e, t) {
  if (e) {
    for (var n = 0; n < e.length; ++n) {
      if (typeof e[n] != "string" && e[n][0] <= t && e[n][1] >= t) {
        return true;
      }
    }
  }
  return false;
};
Namespace.isReservedName = function isReservedName(e, t) {
  if (e) {
    for (var n = 0; n < e.length; ++n) {
      if (e[n] === t) {
        return true;
      }
    }
  }
  return false;
};
Object.defineProperty(Namespace.prototype, "nestedArray", {
  get: function () {
    return this._nestedArray ||= l.toArray(this.nested);
  }
});
Namespace.prototype.toJSON = function toJSON(e) {
  return l.toObject(["options", this.options, "nested", arrayToJSON(this.nestedArray, e)]);
};
Namespace.prototype.addJSON = function addJSON(e) {
  if (e) {
    var t;
    for (var n = Object.keys(e), i = 0; i < n.length; ++i) {
      t = e[n[i]];
      this.add((t.fields !== undefined ? a.fromJSON : t.values !== undefined ? r.fromJSON : t.methods !== undefined ? s.fromJSON : t.id !== undefined ? o.fromJSON : Namespace.fromJSON)(n[i], t));
    }
  }
  return this;
};
Namespace.prototype.get = function get(e) {
  return this.nested && this.nested[e] || null;
};
Namespace.prototype.getEnum = function getEnum(e) {
  if (this.nested && this.nested[e] instanceof r) {
    return this.nested[e].values;
  }
  throw Error("no such enum: " + e);
};
Namespace.prototype.add = function add(e) {
  if ((!(e instanceof o) || e.extend === undefined) && !(e instanceof a) && !(e instanceof r) && !(e instanceof s) && !(e instanceof Namespace)) {
    throw TypeError("object must be a valid nested object");
  }
  if (this.nested) {
    var t = this.get(e.name);
    if (t) {
      if (!(t instanceof Namespace) || !(e instanceof Namespace) || t instanceof a || t instanceof s) {
        throw Error("duplicate name '" + e.name + "' in " + this);
      }
      for (var n = t.nestedArray, i = 0; i < n.length; ++i) {
        e.add(n[i]);
      }
      this.remove(t);
      this.nested ||= {};
      e.setOptions(t.options, true);
    }
  } else {
    this.nested = {};
  }
  this.nested[e.name] = e;
  e.onAdd(this);
  return clearCache(this);
};
Namespace.prototype.remove = function remove(e) {
  if (!(e instanceof i)) {
    throw TypeError("object must be a ReflectionObject");
  }
  if (e.parent !== this) {
    throw Error(e + " is not a member of " + this);
  }
  delete this.nested[e.name];
  if (!Object.keys(this.nested).length) {
    this.nested = undefined;
  }
  e.onRemove(this);
  return clearCache(this);
};
Namespace.prototype.define = function define(e, t) {
  if (l.isString(e)) {
    e = e.split(".");
  } else if (!Array.isArray(e)) {
    throw TypeError("illegal path");
  }
  if (e && e.length && e[0] === "") {
    throw Error("path must be relative");
  }
  var n = this;
  for (; e.length > 0;) {
    var i = e.shift();
    if (n.nested && n.nested[i]) {
      if (!((n = n.nested[i]) instanceof Namespace)) {
        throw Error("path conflicts with non-namespace objects");
      }
    } else {
      n.add(n = new Namespace(i));
    }
  }
  if (t) {
    n.addJSON(t);
  }
  return n;
};
Namespace.prototype.resolveAll = function resolveAll() {
  for (var e = this.nestedArray, t = 0; t < e.length;) {
    if (e[t] instanceof Namespace) {
      e[t++].resolveAll();
    } else {
      e[t++].resolve();
    }
  }
  return this.resolve();
};
Namespace.prototype.lookup = function lookup(e, t, n) {
  if (typeof t == "boolean") {
    n = t;
    t = undefined;
  } else if (t && !Array.isArray(t)) {
    t = [t];
  }
  if (l.isString(e) && e.length) {
    if (e === ".") {
      return this.root;
    }
    e = e.split(".");
  } else if (!e.length) {
    return this;
  }
  if (e[0] === "") {
    return this.root.lookup(e.slice(1), t);
  }
  var i = this.get(e[0]);
  if (i) {
    if (e.length === 1) {
      if (!t || t.indexOf(i.constructor) > -1) {
        return i;
      }
    } else if (i instanceof Namespace && (i = i.lookup(e.slice(1), t, true))) {
      return i;
    }
  } else {
    for (var a = 0; a < this.nestedArray.length; ++a) {
      if (this._nestedArray[a] instanceof Namespace && (i = this._nestedArray[a].lookup(e, t, true))) {
        return i;
      }
    }
  }
  if (this.parent === null || n) {
    return null;
  } else {
    return this.parent.lookup(e, t);
  }
};
Namespace.prototype.lookupType = function lookupType(e) {
  var t = this.lookup(e, [a]);
  if (!t) {
    throw Error("no such type: " + e);
  }
  return t;
};
Namespace.prototype.lookupEnum = function lookupEnum(e) {
  var t = this.lookup(e, [r]);
  if (!t) {
    throw Error("no such Enum '" + e + "' in " + this);
  }
  return t;
};
Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(e) {
  var t = this.lookup(e, [a, r]);
  if (!t) {
    throw Error("no such Type or Enum '" + e + "' in " + this);
  }
  return t;
};
Namespace.prototype.lookupService = function lookupService(e) {
  var t = this.lookup(e, [s]);
  if (!t) {
    throw Error("no such Service '" + e + "' in " + this);
  }
  return t;
};
Namespace._configure = function (e, t, n) {
  a = e;
  s = t;
  r = n;
};