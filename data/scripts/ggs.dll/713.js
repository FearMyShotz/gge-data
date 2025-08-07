var i = require("./274.js").Buffer;
var a = require("./717.js").Transform;
function HashBase(e) {
  a.call(this);
  this._block = i.allocUnsafe(e);
  this._blockSize = e;
  this._blockOffset = 0;
  this._length = [0, 0, 0, 0];
  this._finalized = false;
}
require("./273.js")(HashBase, a);
HashBase.prototype._transform = function (e, t, n) {
  var i = null;
  try {
    this.update(e, t);
  } catch (e) {
    i = e;
  }
  n(i);
};
HashBase.prototype._flush = function (e) {
  var t = null;
  try {
    this.push(this.digest());
  } catch (e) {
    t = e;
  }
  e(t);
};
HashBase.prototype.update = function (e, t) {
  (function throwIfNotStringOrBuffer(e, t) {
    if (!i.isBuffer(e) && typeof e != "string") {
      throw new TypeError(t + " must be a string or a buffer");
    }
  })(e, "Data");
  if (this._finalized) {
    throw new Error("Digest already called");
  }
  if (!i.isBuffer(e)) {
    e = i.from(e, t);
  }
  var n = this._block;
  for (var a = 0; this._blockOffset + e.length - a >= this._blockSize;) {
    for (var s = this._blockOffset; s < this._blockSize;) {
      n[s++] = e[a++];
    }
    this._update();
    this._blockOffset = 0;
  }
  while (a < e.length) {
    n[this._blockOffset++] = e[a++];
  }
  for (var r = 0, o = e.length * 8; o > 0; ++r) {
    this._length[r] += o;
    if ((o = this._length[r] / 4294967296 | 0) > 0) {
      this._length[r] -= o * 4294967296;
    }
  }
  return this;
};
HashBase.prototype._update = function () {
  throw new Error("_update is not implemented");
};
HashBase.prototype.digest = function (e) {
  if (this._finalized) {
    throw new Error("Digest already called");
  }
  this._finalized = true;
  var t = this._digest();
  if (e !== undefined) {
    t = t.toString(e);
  }
  this._block.fill(0);
  this._blockOffset = 0;
  for (var n = 0; n < 4; ++n) {
    this._length[n] = 0;
  }
  return t;
};
HashBase.prototype._digest = function () {
  throw new Error("_digest is not implemented");
};
module.exports = HashBase;