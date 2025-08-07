module.exports = OneOf;
var i = require("./86.js");
((OneOf.prototype = Object.create(i.prototype)).constructor = OneOf).className = "OneOf";
var a = require("./69.js");
var s = require("./27.js");
function OneOf(e, t, n, a) {
  if (!Array.isArray(t)) {
    n = t;
    t = undefined;
  }
  i.call(this, e, n);
  if (t !== undefined && !Array.isArray(t)) {
    throw TypeError("fieldNames must be an Array");
  }
  this.oneof = t || [];
  this.fieldsArray = [];
  this.comment = a;
}
function addFieldsToParent(e) {
  if (e.parent) {
    for (var t = 0; t < e.fieldsArray.length; ++t) {
      if (!e.fieldsArray[t].parent) {
        e.parent.add(e.fieldsArray[t]);
      }
    }
  }
}
OneOf.fromJSON = function fromJSON(e, t) {
  return new OneOf(e, t.oneof, t.options, t.comment);
};
OneOf.prototype.toJSON = function toJSON(e) {
  var t = !!e && Boolean(e.keepComments);
  return s.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : undefined]);
};
OneOf.prototype.add = function add(e) {
  if (!(e instanceof a)) {
    throw TypeError("field must be a Field");
  }
  if (e.parent && e.parent !== this.parent) {
    e.parent.remove(e);
  }
  this.oneof.push(e.name);
  this.fieldsArray.push(e);
  e.partOf = this;
  addFieldsToParent(this);
  return this;
};
OneOf.prototype.remove = function remove(e) {
  if (!(e instanceof a)) {
    throw TypeError("field must be a Field");
  }
  var t = this.fieldsArray.indexOf(e);
  if (t < 0) {
    throw Error(e + " is not a member of " + this);
  }
  this.fieldsArray.splice(t, 1);
  if ((t = this.oneof.indexOf(e.name)) > -1) {
    this.oneof.splice(t, 1);
  }
  e.partOf = null;
  return this;
};
OneOf.prototype.onAdd = function onAdd(e) {
  i.prototype.onAdd.call(this, e);
  for (var t = 0; t < this.oneof.length; ++t) {
    var n = e.get(this.oneof[t]);
    if (n && !n.partOf) {
      n.partOf = this;
      this.fieldsArray.push(n);
    }
  }
  addFieldsToParent(this);
};
OneOf.prototype.onRemove = function onRemove(e) {
  var t;
  for (var n = 0; n < this.fieldsArray.length; ++n) {
    if ((t = this.fieldsArray[n]).parent) {
      t.parent.remove(t);
    }
  }
  i.prototype.onRemove.call(this, e);
};
OneOf.d = function decorateOneOf() {
  var e = new Array(arguments.length);
  for (var t = 0; t < arguments.length;) {
    e[t] = arguments[t++];
  }
  return function oneOfDecorator(t, n) {
    s.decorateType(t.constructor).add(new OneOf(n, e));
    Object.defineProperty(t, n, {
      get: s.oneOfGetter(e),
      set: s.oneOfSetter(e)
    });
  };
};