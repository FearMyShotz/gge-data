module.exports = Method;
var i = require("./86.js");
((Method.prototype = Object.create(i.prototype)).constructor = Method).className = "Method";
var a = require("./27.js");
function Method(e, t, n, s, r, o, l, u) {
  if (a.isObject(r)) {
    l = r;
    r = o = undefined;
  } else if (a.isObject(o)) {
    l = o;
    o = undefined;
  }
  if (t !== undefined && !a.isString(t)) {
    throw TypeError("type must be a string");
  }
  if (!a.isString(n)) {
    throw TypeError("requestType must be a string");
  }
  if (!a.isString(s)) {
    throw TypeError("responseType must be a string");
  }
  i.call(this, e, l);
  this.type = t || "rpc";
  this.requestType = n;
  this.requestStream = !!r || undefined;
  this.responseType = s;
  this.responseStream = !!o || undefined;
  this.resolvedRequestType = null;
  this.resolvedResponseType = null;
  this.comment = u;
}
Method.fromJSON = function fromJSON(e, t) {
  return new Method(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment);
};
Method.prototype.toJSON = function toJSON(e) {
  var t = !!e && Boolean(e.keepComments);
  return a.toObject(["type", this.type !== "rpc" && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : undefined]);
};
Method.prototype.resolve = function resolve() {
  if (this.resolved) {
    return this;
  } else {
    this.resolvedRequestType = this.parent.lookupType(this.requestType);
    this.resolvedResponseType = this.parent.lookupType(this.responseType);
    return i.prototype.resolve.call(this);
  }
};