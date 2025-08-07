module.exports = ReflectionObject;
ReflectionObject.className = "ReflectionObject";
var i;
var a = require("./27.js");
function ReflectionObject(e, t) {
  if (!a.isString(e)) {
    throw TypeError("name must be a string");
  }
  if (t && !a.isObject(t)) {
    throw TypeError("options must be an object");
  }
  this.options = t;
  this.name = e;
  this.parent = null;
  this.resolved = false;
  this.comment = null;
  this.filename = null;
}
Object.defineProperties(ReflectionObject.prototype, {
  root: {
    get: function () {
      for (var e = this; e.parent !== null;) {
        e = e.parent;
      }
      return e;
    }
  },
  fullName: {
    get: function () {
      var e = [this.name];
      for (var t = this.parent; t;) {
        e.unshift(t.name);
        t = t.parent;
      }
      return e.join(".");
    }
  }
});
ReflectionObject.prototype.toJSON = function toJSON() {
  throw Error();
};
ReflectionObject.prototype.onAdd = function onAdd(e) {
  if (this.parent && this.parent !== e) {
    this.parent.remove(this);
  }
  this.parent = e;
  this.resolved = false;
  var t = e.root;
  if (t instanceof i) {
    t._handleAdd(this);
  }
};
ReflectionObject.prototype.onRemove = function onRemove(e) {
  var t = e.root;
  if (t instanceof i) {
    t._handleRemove(this);
  }
  this.parent = null;
  this.resolved = false;
};
ReflectionObject.prototype.resolve = function resolve() {
  if (this.resolved) {
    return this;
  } else {
    if (this.root instanceof i) {
      this.resolved = true;
    }
    return this;
  }
};
ReflectionObject.prototype.getOption = function getOption(e) {
  if (this.options) {
    return this.options[e];
  }
};
ReflectionObject.prototype.setOption = function setOption(e, t, n) {
  if (!n || !this.options || this.options[e] === undefined) {
    (this.options ||= {})[e] = t;
  }
  return this;
};
ReflectionObject.prototype.setOptions = function setOptions(e, t) {
  if (e) {
    for (var n = Object.keys(e), i = 0; i < n.length; ++i) {
      this.setOption(n[i], e[n[i]], t);
    }
  }
  return this;
};
ReflectionObject.prototype.toString = function toString() {
  var e = this.constructor.className;
  var t = this.fullName;
  if (t.length) {
    return e + " " + t;
  } else {
    return e;
  }
};
ReflectionObject._configure = function (e) {
  i = e;
};