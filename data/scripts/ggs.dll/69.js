module.exports = Field;
var i = require("./86.js");
((Field.prototype = Object.create(i.prototype)).constructor = Field).className = "Field";
var a;
var s = require("./46.js");
var r = require("./87.js");
var o = require("./27.js");
var l = /^required|optional|repeated$/;
function Field(e, t, n, a, s, u, c) {
  if (o.isObject(a)) {
    c = s;
    u = a;
    a = s = undefined;
  } else if (o.isObject(s)) {
    c = u;
    u = s;
    s = undefined;
  }
  i.call(this, e, u);
  if (!o.isInteger(t) || t < 0) {
    throw TypeError("id must be a non-negative integer");
  }
  if (!o.isString(n)) {
    throw TypeError("type must be a string");
  }
  if (a !== undefined && !l.test(a = a.toString().toLowerCase())) {
    throw TypeError("rule must be a string rule");
  }
  if (s !== undefined && !o.isString(s)) {
    throw TypeError("extend must be a string");
  }
  this.rule = a && a !== "optional" ? a : undefined;
  this.type = n;
  this.id = t;
  this.extend = s || undefined;
  this.required = a === "required";
  this.optional = !this.required;
  this.repeated = a === "repeated";
  this.map = false;
  this.message = null;
  this.partOf = null;
  this.typeDefault = null;
  this.defaultValue = null;
  this.long = !!o.Long && r.long[n] !== undefined;
  this.bytes = n === "bytes";
  this.resolvedType = null;
  this.extensionField = null;
  this.declaringField = null;
  this._packed = null;
  this.comment = c;
}
Field.fromJSON = function fromJSON(e, t) {
  return new Field(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
};
Object.defineProperty(Field.prototype, "packed", {
  get: function () {
    if (this._packed === null) {
      this._packed = this.getOption("packed") !== false;
    }
    return this._packed;
  }
});
Field.prototype.setOption = function setOption(e, t, n) {
  if (e === "packed") {
    this._packed = null;
  }
  return i.prototype.setOption.call(this, e, t, n);
};
Field.prototype.toJSON = function toJSON(e) {
  var t = !!e && Boolean(e.keepComments);
  return o.toObject(["rule", this.rule !== "optional" && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
};
Field.prototype.resolve = function resolve() {
  if (this.resolved) {
    return this;
  }
  if ((this.typeDefault = r.defaults[this.type]) === undefined) {
    this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
    if (this.resolvedType instanceof a) {
      this.typeDefault = null;
    } else {
      this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
    }
  }
  if (this.options && this.options.default != null) {
    this.typeDefault = this.options.default;
    if (this.resolvedType instanceof s && typeof this.typeDefault == "string") {
      this.typeDefault = this.resolvedType.values[this.typeDefault];
    }
  }
  if (this.options) {
    if (this.options.packed === true || this.options.packed !== undefined && !!this.resolvedType && !(this.resolvedType instanceof s)) {
      delete this.options.packed;
    }
    if (!Object.keys(this.options).length) {
      this.options = undefined;
    }
  }
  if (this.long) {
    this.typeDefault = o.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
    if (Object.freeze) {
      Object.freeze(this.typeDefault);
    }
  } else if (this.bytes && typeof this.typeDefault == "string") {
    var e;
    if (o.base64.test(this.typeDefault)) {
      o.base64.decode(this.typeDefault, e = o.newBuffer(o.base64.length(this.typeDefault)), 0);
    } else {
      o.utf8.write(this.typeDefault, e = o.newBuffer(o.utf8.length(this.typeDefault)), 0);
    }
    this.typeDefault = e;
  }
  if (this.map) {
    this.defaultValue = o.emptyObject;
  } else if (this.repeated) {
    this.defaultValue = o.emptyArray;
  } else {
    this.defaultValue = this.typeDefault;
  }
  if (this.parent instanceof a) {
    this.parent.ctor.prototype[this.name] = this.defaultValue;
  }
  return i.prototype.resolve.call(this);
};
Field.d = function decorateField(e, t, n, i) {
  if (typeof t == "function") {
    t = o.decorateType(t).name;
  } else if (t && typeof t == "object") {
    t = o.decorateEnum(t).name;
  }
  return function fieldDecorator(a, s) {
    o.decorateType(a.constructor).add(new Field(s, e, t, n, {
      default: i
    }));
  };
};
Field._configure = function configure(e) {
  a = e;
};