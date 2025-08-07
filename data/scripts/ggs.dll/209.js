module.exports = Root;
var i = require("./104.js");
((Root.prototype = Object.create(i.prototype)).constructor = Root).className = "Root";
var a;
var s;
var r;
var o = require("./69.js");
var l = require("./46.js");
var u = require("./130.js");
var c = require("./27.js");
function Root(e) {
  i.call(this, "", e);
  this.deferred = [];
  this.files = [];
}
function SYNC() {}
Root.fromJSON = function fromJSON(e, t) {
  t ||= new Root();
  if (e.options) {
    t.setOptions(e.options);
  }
  return t.addJSON(e.nested);
};
Root.prototype.resolvePath = c.path.resolve;
Root.prototype.load = function load(e, t, n) {
  if (typeof t == "function") {
    n = t;
    t = undefined;
  }
  var i = this;
  if (!n) {
    return c.asPromise(load, i, e, t);
  }
  var a = n === SYNC;
  function finish(e, t) {
    if (n) {
      var i = n;
      n = null;
      if (a) {
        throw e;
      }
      i(e, t);
    }
  }
  function process(e, n) {
    try {
      if (c.isString(n) && n.charAt(0) === "{") {
        n = JSON.parse(n);
      }
      if (c.isString(n)) {
        s.filename = e;
        var r;
        var l = s(n, i, t);
        var u = 0;
        if (l.imports) {
          for (; u < l.imports.length; ++u) {
            if (r = i.resolvePath(e, l.imports[u])) {
              fetch(r);
            }
          }
        }
        if (l.weakImports) {
          for (u = 0; u < l.weakImports.length; ++u) {
            if (r = i.resolvePath(e, l.weakImports[u])) {
              fetch(r, true);
            }
          }
        }
      } else {
        i.setOptions(n.options).addJSON(n.nested);
      }
    } catch (e) {
      finish(e);
    }
    if (!a && !o) {
      finish(null, i);
    }
  }
  function fetch(e, t) {
    var s = e.lastIndexOf("google/protobuf/");
    if (s > -1) {
      var l = e.substring(s);
      if (l in r) {
        e = l;
      }
    }
    if (!(i.files.indexOf(e) > -1)) {
      i.files.push(e);
      if (e in r) {
        if (a) {
          process(e, r[e]);
        } else {
          ++o;
          setTimeout(function () {
            --o;
            process(e, r[e]);
          });
        }
      } else if (a) {
        var u;
        try {
          u = c.fs.readFileSync(e).toString("utf8");
        } catch (e) {
          if (!t) {
            finish(e);
          }
          return;
        }
        process(e, u);
      } else {
        ++o;
        c.fetch(e, function (a, s) {
          --o;
          if (n) {
            if (a) {
              if (t) {
                if (!o) {
                  finish(null, i);
                }
              } else {
                finish(a);
              }
            } else {
              process(e, s);
            }
          }
        });
      }
    }
  }
  var o = 0;
  if (c.isString(e)) {
    e = [e];
  }
  var l;
  for (var u = 0; u < e.length; ++u) {
    if (l = i.resolvePath("", e[u])) {
      fetch(l);
    }
  }
  if (a) {
    return i;
  }
  if (!o) {
    finish(null, i);
  }
};
Root.prototype.loadSync = function loadSync(e, t) {
  if (!c.isNode) {
    throw Error("not supported");
  }
  return this.load(e, t, SYNC);
};
Root.prototype.resolveAll = function resolveAll() {
  if (this.deferred.length) {
    throw Error("unresolvable extensions: " + this.deferred.map(function (e) {
      return "'extend " + e.extend + "' in " + e.parent.fullName;
    }).join(", "));
  }
  return i.prototype.resolveAll.call(this);
};
var _ = /^[A-Z]/;
function tryHandleExtension(e, t) {
  var n = t.parent.lookup(t.extend);
  if (n) {
    var i = new o(t.fullName, t.id, t.type, t.rule, undefined, t.options);
    i.declaringField = t;
    t.extensionField = i;
    n.add(i);
    return true;
  }
  return false;
}
Root.prototype._handleAdd = function _handleAdd(e) {
  if (e instanceof o) {
    if (e.extend !== undefined && !e.extensionField && !tryHandleExtension(0, e)) {
      this.deferred.push(e);
    }
  } else if (e instanceof l) {
    if (_.test(e.name)) {
      e.parent[e.name] = e.values;
    }
  } else if (!(e instanceof u)) {
    if (e instanceof a) {
      for (var t = 0; t < this.deferred.length;) {
        if (tryHandleExtension(0, this.deferred[t])) {
          this.deferred.splice(t, 1);
        } else {
          ++t;
        }
      }
    }
    for (var n = 0; n < e.nestedArray.length; ++n) {
      this._handleAdd(e._nestedArray[n]);
    }
    if (_.test(e.name)) {
      e.parent[e.name] = e;
    }
  }
};
Root.prototype._handleRemove = function _handleRemove(e) {
  if (e instanceof o) {
    if (e.extend !== undefined) {
      if (e.extensionField) {
        e.extensionField.parent.remove(e.extensionField);
        e.extensionField = null;
      } else {
        var t = this.deferred.indexOf(e);
        if (t > -1) {
          this.deferred.splice(t, 1);
        }
      }
    }
  } else if (e instanceof l) {
    if (_.test(e.name)) {
      delete e.parent[e.name];
    }
  } else if (e instanceof i) {
    for (var n = 0; n < e.nestedArray.length; ++n) {
      this._handleRemove(e._nestedArray[n]);
    }
    if (_.test(e.name)) {
      delete e.parent[e.name];
    }
  }
};
Root._configure = function (e, t, n) {
  a = e;
  s = t;
  r = n;
};