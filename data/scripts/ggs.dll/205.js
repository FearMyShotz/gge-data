module.exports = MapField;
var i = require("./69.js");
((MapField.prototype = Object.create(i.prototype)).constructor = MapField).className = "MapField";
var a = require("./87.js");
var s = require("./27.js");
function MapField(e, t, n, a, r, o) {
  i.call(this, e, t, a, undefined, undefined, r, o);
  if (!s.isString(n)) {
    throw TypeError("keyType must be a string");
  }
  this.keyType = n;
  this.resolvedKeyType = null;
  this.map = true;
}
MapField.fromJSON = function fromJSON(e, t) {
  return new MapField(e, t.id, t.keyType, t.type, t.options, t.comment);
};
MapField.prototype.toJSON = function toJSON(e) {
  var t = !!e && Boolean(e.keepComments);
  return s.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : undefined]);
};
MapField.prototype.resolve = function resolve() {
  if (this.resolved) {
    return this;
  }
  if (a.mapKey[this.keyType] === undefined) {
    throw Error("invalid key type: " + this.keyType);
  }
  return i.prototype.resolve.call(this);
};
MapField.d = function decorateMapField(e, t, n) {
  if (typeof n == "function") {
    n = s.decorateType(n).name;
  } else if (n && typeof n == "object") {
    n = s.decorateEnum(n).name;
  }
  return function mapFieldDecorator(i, a) {
    s.decorateType(i.constructor).add(new MapField(a, e, t, n));
  };
};