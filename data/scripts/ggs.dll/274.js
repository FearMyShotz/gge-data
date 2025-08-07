/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var i = require("./93.js");
var a = i.Buffer;
function copyProps(e, t) {
  for (var n in e) {
    t[n] = e[n];
  }
}
function SafeBuffer(e, t, n) {
  return a(e, t, n);
}
if (a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow) {
  module.exports = i;
} else {
  copyProps(i, exports);
  exports.Buffer = SafeBuffer;
}
SafeBuffer.prototype = Object.create(a.prototype);
copyProps(a, SafeBuffer);
SafeBuffer.from = function (e, t, n) {
  if (typeof e == "number") {
    throw new TypeError("Argument must not be a number");
  }
  return a(e, t, n);
};
SafeBuffer.alloc = function (e, t, n) {
  if (typeof e != "number") {
    throw new TypeError("Argument must be a number");
  }
  var i = a(e);
  if (t !== undefined) {
    if (typeof n == "string") {
      i.fill(t, n);
    } else {
      i.fill(t);
    }
  } else {
    i.fill(0);
  }
  return i;
};
SafeBuffer.allocUnsafe = function (e) {
  if (typeof e != "number") {
    throw new TypeError("Argument must be a number");
  }
  return a(e);
};
SafeBuffer.allocUnsafeSlow = function (e) {
  if (typeof e != "number") {
    throw new TypeError("Argument must be a number");
  }
  return i.SlowBuffer(e);
};