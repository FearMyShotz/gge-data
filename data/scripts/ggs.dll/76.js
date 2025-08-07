var t = require("./47.js");
var i = Object.keys || function (e) {
  var t = [];
  for (var n in e) {
    t.push(n);
  }
  return t;
};
module.exports = Duplex;
var a = require("./275.js");
var s = require("./280.js");
require("./94.js")(Duplex, a);
for (var r = i(s.prototype), o = 0; o < r.length; o++) {
  var l = r[o];
  Duplex.prototype[l] ||= s.prototype[l];
}
function Duplex(e) {
  if (!(this instanceof Duplex)) {
    return new Duplex(e);
  }
  a.call(this, e);
  s.call(this, e);
  this.allowHalfOpen = true;
  if (e) {
    if (e.readable === false) {
      this.readable = false;
    }
    if (e.writable === false) {
      this.writable = false;
    }
    if (e.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once("end", onend);
    }
  }
}
function onend() {
  if (!this._writableState.ended) {
    t.nextTick(onEndNT, this);
  }
}
function onEndNT(e) {
  e.end();
}
Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, "writableBuffer", {
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, "writableLength", {
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});
Object.defineProperty(Duplex.prototype, "destroyed", {
  enumerable: false,
  get: function get() {
    return this._readableState !== undefined && this._writableState !== undefined && this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(e) {
    if (this._readableState !== undefined && this._writableState !== undefined) {
      this._readableState.destroyed = e;
      this._writableState.destroyed = e;
    }
  }
});