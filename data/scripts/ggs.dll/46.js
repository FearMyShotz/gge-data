module.exports = Enum;
var i = require("./86.js");
((Enum.prototype = Object.create(i.prototype)).constructor = Enum).className = "Enum";
var a = require("./104.js");
var s = require("./27.js");
function Enum(e, t, n, a, s) {
  i.call(this, e, n);
  if (t && typeof t != "object") {
    throw TypeError("values must be an object");
  }
  this.valuesById = {};
  this.values = Object.create(this.valuesById);
  this.comment = a;
  this.comments = s || {};
  this.reserved = undefined;
  if (t) {
    for (var r = Object.keys(t), o = 0; o < r.length; ++o) {
      if (typeof t[r[o]] == "number") {
        this.valuesById[this.values[r[o]] = t[r[o]]] = r[o];
      }
    }
  }
}
Enum.fromJSON = function fromJSON(e, t) {
  var n = new Enum(e, t.values, t.options, t.comment, t.comments);
  n.reserved = t.reserved;
  return n;
};
Enum.prototype.toJSON = function toJSON(e) {
  var t = !!e && Boolean(e.keepComments);
  return s.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", t ? this.comment : undefined, "comments", t ? this.comments : undefined]);
};
Enum.prototype.add = function add(e, t, n) {
  if (!s.isString(e)) {
    throw TypeError("name must be a string");
  }
  if (!s.isInteger(t)) {
    throw TypeError("id must be an integer");
  }
  if (this.values[e] !== undefined) {
    throw Error("duplicate name '" + e + "' in " + this);
  }
  if (this.isReservedId(t)) {
    throw Error("id " + t + " is reserved in " + this);
  }
  if (this.isReservedName(e)) {
    throw Error("name '" + e + "' is reserved in " + this);
  }
  if (this.valuesById[t] !== undefined) {
    if (!this.options || !this.options.allow_alias) {
      throw Error("duplicate id " + t + " in " + this);
    }
    this.values[e] = t;
  } else {
    this.valuesById[this.values[e] = t] = e;
  }
  this.comments[e] = n || null;
  return this;
};
Enum.prototype.remove = function remove(e) {
  if (!s.isString(e)) {
    throw TypeError("name must be a string");
  }
  var t = this.values[e];
  if (t == null) {
    throw Error("name '" + e + "' does not exist in " + this);
  }
  delete this.valuesById[t];
  delete this.values[e];
  delete this.comments[e];
  return this;
};
Enum.prototype.isReservedId = function isReservedId(e) {
  return a.isReservedId(this.reserved, e);
};
Enum.prototype.isReservedName = function isReservedName(e) {
  return a.isReservedName(this.reserved, e);
};