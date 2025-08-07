module.exports = Service;
var i = require("./104.js");
((Service.prototype = Object.create(i.prototype)).constructor = Service).className = "Service";
var a = require("./207.js");
var s = require("./27.js");
var r = require("./509.js");
function Service(e, t) {
  i.call(this, e, t);
  this.methods = {};
  this._methodsArray = null;
}
function clearCache(e) {
  e._methodsArray = null;
  return e;
}
Service.fromJSON = function fromJSON(e, t) {
  var n = new Service(e, t.options);
  if (t.methods) {
    for (var i = Object.keys(t.methods), s = 0; s < i.length; ++s) {
      n.add(a.fromJSON(i[s], t.methods[i[s]]));
    }
  }
  if (t.nested) {
    n.addJSON(t.nested);
  }
  n.comment = t.comment;
  return n;
};
Service.prototype.toJSON = function toJSON(e) {
  var t = i.prototype.toJSON.call(this, e);
  var n = !!e && Boolean(e.keepComments);
  return s.toObject(["options", t && t.options || undefined, "methods", i.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || undefined, "comment", n ? this.comment : undefined]);
};
Object.defineProperty(Service.prototype, "methodsArray", {
  get: function () {
    return this._methodsArray ||= s.toArray(this.methods);
  }
});
Service.prototype.get = function get(e) {
  return this.methods[e] || i.prototype.get.call(this, e);
};
Service.prototype.resolveAll = function resolveAll() {
  for (var e = this.methodsArray, t = 0; t < e.length; ++t) {
    e[t].resolve();
  }
  return i.prototype.resolve.call(this);
};
Service.prototype.add = function add(e) {
  if (this.get(e.name)) {
    throw Error("duplicate name '" + e.name + "' in " + this);
  }
  if (e instanceof a) {
    this.methods[e.name] = e;
    e.parent = this;
    return clearCache(this);
  } else {
    return i.prototype.add.call(this, e);
  }
};
Service.prototype.remove = function remove(e) {
  if (e instanceof a) {
    if (this.methods[e.name] !== e) {
      throw Error(e + " is not a member of " + this);
    }
    delete this.methods[e.name];
    e.parent = null;
    return clearCache(this);
  }
  return i.prototype.remove.call(this, e);
};
Service.prototype.create = function create(e, t, n) {
  var i;
  var a = new r.Service(e, t, n);
  for (var o = 0; o < this.methodsArray.length; ++o) {
    var l = s.lcFirst((i = this._methodsArray[o]).resolve().name).replace(/[^$\w_]/g, "");
    a[l] = s.codegen(["r", "c"], s.isReserved(l) ? l + "_" : l)("return this.rpcCall(m,q,s,r,c)")({
      m: i,
      q: i.resolvedRequestType.ctor,
      s: i.resolvedResponseType.ctor
    });
  }
  return a;
};