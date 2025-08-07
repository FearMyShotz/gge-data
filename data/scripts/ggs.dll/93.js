var e = require("./24.js");
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var i = require("./714.js");
var a = require("./715.js");
var s = require("./716.js");
function kMaxLength() {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    return 2147483647;
  } else {
    return 1073741823;
  }
}
function createBuffer(e, t) {
  if (kMaxLength() < t) {
    throw new RangeError("Invalid typed array length");
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    (e = new Uint8Array(t)).__proto__ = Buffer.prototype;
  } else {
    if (e === null) {
      e = new Buffer(t);
    }
    e.length = t;
  }
  return e;
}
function Buffer(e, t, n) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(e, t, n);
  }
  if (typeof e == "number") {
    if (typeof t == "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return allocUnsafe(this, e);
  }
  return from(this, e, t, n);
}
function from(e, t, n, i) {
  if (typeof t == "number") {
    throw new TypeError("\"value\" argument must not be a number");
  }
  if (typeof ArrayBuffer != "undefined" && t instanceof ArrayBuffer) {
    return function fromArrayBuffer(e, t, n, i) {
      t.byteLength;
      if (n < 0 || t.byteLength < n) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (t.byteLength < n + (i || 0)) {
        throw new RangeError("'length' is out of bounds");
      }
      t = n === undefined && i === undefined ? new Uint8Array(t) : i === undefined ? new Uint8Array(t, n) : new Uint8Array(t, n, i);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        (e = t).__proto__ = Buffer.prototype;
      } else {
        e = fromArrayLike(e, t);
      }
      return e;
    }(e, t, n, i);
  } else if (typeof t == "string") {
    return function fromString(e, t, n) {
      if (typeof n != "string" || n === "") {
        n = "utf8";
      }
      if (!Buffer.isEncoding(n)) {
        throw new TypeError("\"encoding\" must be a valid string encoding");
      }
      var i = byteLength(t, n) | 0;
      var a = (e = createBuffer(e, i)).write(t, n);
      if (a !== i) {
        e = e.slice(0, a);
      }
      return e;
    }(e, t, n);
  } else {
    return function fromObject(e, t) {
      if (Buffer.isBuffer(t)) {
        var n = checked(t.length) | 0;
        if ((e = createBuffer(e, n)).length === 0) {
          return e;
        } else {
          t.copy(e, 0, 0, n);
          return e;
        }
      }
      if (t) {
        if (typeof ArrayBuffer != "undefined" && t.buffer instanceof ArrayBuffer || "length" in t) {
          if (typeof t.length != "number" || function isnan(e) {
            return e != e;
          }(t.length)) {
            return createBuffer(e, 0);
          } else {
            return fromArrayLike(e, t);
          }
        }
        if (t.type === "Buffer" && s(t.data)) {
          return fromArrayLike(e, t.data);
        }
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(e, t);
  }
}
function assertSize(e) {
  if (typeof e != "number") {
    throw new TypeError("\"size\" argument must be a number");
  }
  if (e < 0) {
    throw new RangeError("\"size\" argument must not be negative");
  }
}
function allocUnsafe(e, t) {
  assertSize(t);
  e = createBuffer(e, t < 0 ? 0 : checked(t) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var n = 0; n < t; ++n) {
      e[n] = 0;
    }
  }
  return e;
}
function fromArrayLike(e, t) {
  var n = t.length < 0 ? 0 : checked(t.length) | 0;
  e = createBuffer(e, n);
  for (var i = 0; i < n; i += 1) {
    e[i] = t[i] & 255;
  }
  return e;
}
function checked(e) {
  if (e >= kMaxLength()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + kMaxLength().toString(16) + " bytes");
  }
  return e | 0;
}
function byteLength(e, t) {
  if (Buffer.isBuffer(e)) {
    return e.length;
  }
  if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) {
    return e.byteLength;
  }
  if (typeof e != "string") {
    e = "" + e;
  }
  var n = e.length;
  if (n === 0) {
    return 0;
  }
  var i = false;
  for (;;) {
    switch (t) {
      case "ascii":
      case "latin1":
      case "binary":
        return n;
      case "utf8":
      case "utf-8":
      case undefined:
        return utf8ToBytes(e).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return n * 2;
      case "hex":
        return n >>> 1;
      case "base64":
        return base64ToBytes(e).length;
      default:
        if (i) {
          return utf8ToBytes(e).length;
        }
        t = ("" + t).toLowerCase();
        i = true;
    }
  }
}
function swap(e, t, n) {
  var i = e[t];
  e[t] = e[n];
  e[n] = i;
}
function bidirectionalIndexOf(e, t, n, i, a) {
  if (e.length === 0) {
    return -1;
  }
  if (typeof n == "string") {
    i = n;
    n = 0;
  } else if (n > 2147483647) {
    n = 2147483647;
  } else if (n < -2147483648) {
    n = -2147483648;
  }
  n = +n;
  if (isNaN(n)) {
    n = a ? 0 : e.length - 1;
  }
  if (n < 0) {
    n = e.length + n;
  }
  if (n >= e.length) {
    if (a) {
      return -1;
    }
    n = e.length - 1;
  } else if (n < 0) {
    if (!a) {
      return -1;
    }
    n = 0;
  }
  if (typeof t == "string") {
    t = Buffer.from(t, i);
  }
  if (Buffer.isBuffer(t)) {
    if (t.length === 0) {
      return -1;
    } else {
      return arrayIndexOf(e, t, n, i, a);
    }
  }
  if (typeof t == "number") {
    t &= 255;
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") {
      if (a) {
        return Uint8Array.prototype.indexOf.call(e, t, n);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(e, t, n);
      }
    } else {
      return arrayIndexOf(e, [t], n, i, a);
    }
  }
  throw new TypeError("val must be string, number or Buffer");
}
function arrayIndexOf(e, t, n, i, a) {
  var s;
  var r = 1;
  var o = e.length;
  var l = t.length;
  if (i !== undefined && ((i = String(i).toLowerCase()) === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
    if (e.length < 2 || t.length < 2) {
      return -1;
    }
    r = 2;
    o /= 2;
    l /= 2;
    n /= 2;
  }
  function read(e, t) {
    if (r === 1) {
      return e[t];
    } else {
      return e.readUInt16BE(t * r);
    }
  }
  if (a) {
    var u = -1;
    for (s = n; s < o; s++) {
      if (read(e, s) === read(t, u === -1 ? 0 : s - u)) {
        if (u === -1) {
          u = s;
        }
        if (s - u + 1 === l) {
          return u * r;
        }
      } else {
        if (u !== -1) {
          s -= s - u;
        }
        u = -1;
      }
    }
  } else {
    if (n + l > o) {
      n = o - l;
    }
    s = n;
    for (; s >= 0; s--) {
      var c = true;
      for (var _ = 0; _ < l; _++) {
        if (read(e, s + _) !== read(t, _)) {
          c = false;
          break;
        }
      }
      if (c) {
        return s;
      }
    }
  }
  return -1;
}
function hexWrite(e, t, n, i) {
  n = Number(n) || 0;
  var a = e.length - n;
  if (i) {
    if ((i = Number(i)) > a) {
      i = a;
    }
  } else {
    i = a;
  }
  var s = t.length;
  if (s % 2 != 0) {
    throw new TypeError("Invalid hex string");
  }
  if (i > s / 2) {
    i = s / 2;
  }
  for (var r = 0; r < i; ++r) {
    var o = parseInt(t.substr(r * 2, 2), 16);
    if (isNaN(o)) {
      return r;
    }
    e[n + r] = o;
  }
  return r;
}
function utf8Write(e, t, n, i) {
  return blitBuffer(utf8ToBytes(t, e.length - n), e, n, i);
}
function asciiWrite(e, t, n, i) {
  return blitBuffer(function asciiToBytes(e) {
    var t = [];
    for (var n = 0; n < e.length; ++n) {
      t.push(e.charCodeAt(n) & 255);
    }
    return t;
  }(t), e, n, i);
}
function latin1Write(e, t, n, i) {
  return asciiWrite(e, t, n, i);
}
function base64Write(e, t, n, i) {
  return blitBuffer(base64ToBytes(t), e, n, i);
}
function ucs2Write(e, t, n, i) {
  return blitBuffer(function utf16leToBytes(e, t) {
    var n;
    var i;
    var a;
    var s = [];
    for (var r = 0; r < e.length && !((t -= 2) < 0); ++r) {
      n = e.charCodeAt(r);
      i = n >> 8;
      a = n % 256;
      s.push(a);
      s.push(i);
    }
    return s;
  }(t, e.length - n), e, n, i);
}
function base64Slice(e, t, n) {
  if (t === 0 && n === e.length) {
    return i.fromByteArray(e);
  } else {
    return i.fromByteArray(e.slice(t, n));
  }
}
function utf8Slice(e, t, n) {
  n = Math.min(e.length, n);
  var i = [];
  for (var a = t; a < n;) {
    var s;
    var o;
    var l;
    var u;
    var c = e[a];
    var _ = null;
    var d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
    if (a + d <= n) {
      switch (d) {
        case 1:
          if (c < 128) {
            _ = c;
          }
          break;
        case 2:
          if (((s = e[a + 1]) & 192) == 128 && (u = (c & 31) << 6 | s & 63) > 127) {
            _ = u;
          }
          break;
        case 3:
          s = e[a + 1];
          o = e[a + 2];
          if ((s & 192) == 128 && (o & 192) == 128 && (u = (c & 15) << 12 | (s & 63) << 6 | o & 63) > 2047 && (u < 55296 || u > 57343)) {
            _ = u;
          }
          break;
        case 4:
          s = e[a + 1];
          o = e[a + 2];
          l = e[a + 3];
          if ((s & 192) == 128 && (o & 192) == 128 && (l & 192) == 128 && (u = (c & 15) << 18 | (s & 63) << 12 | (o & 63) << 6 | l & 63) > 65535 && u < 1114112) {
            _ = u;
          }
      }
    }
    if (_ === null) {
      _ = 65533;
      d = 1;
    } else if (_ > 65535) {
      _ -= 65536;
      i.push(_ >>> 10 & 1023 | 55296);
      _ = _ & 1023 | 56320;
    }
    i.push(_);
    a += d;
  }
  return function decodeCodePointsArray(e) {
    var t = e.length;
    if (t <= r) {
      return String.fromCharCode.apply(String, e);
    }
    var n = "";
    var i = 0;
    while (i < t) {
      n += String.fromCharCode.apply(String, e.slice(i, i += r));
    }
    return n;
  }(i);
}
exports.Buffer = Buffer;
exports.SlowBuffer = function SlowBuffer(e) {
  if (+e != e) {
    e = 0;
  }
  return Buffer.alloc(+e);
};
exports.INSPECT_MAX_BYTES = 50;
Buffer.TYPED_ARRAY_SUPPORT = e.TYPED_ARRAY_SUPPORT !== undefined ? e.TYPED_ARRAY_SUPPORT : function typedArraySupport() {
  try {
    var e = new Uint8Array(1);
    e.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return e.foo() === 42 && typeof e.subarray == "function" && e.subarray(1, 1).byteLength === 0;
  } catch (e) {
    return false;
  }
}();
exports.kMaxLength = kMaxLength();
Buffer.poolSize = 8192;
Buffer._augment = function (e) {
  e.__proto__ = Buffer.prototype;
  return e;
};
Buffer.from = function (e, t, n) {
  return from(null, e, t, n);
};
if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol != "undefined" && Symbol.species && Buffer[Symbol.species] === Buffer) {
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}
Buffer.alloc = function (e, t, n) {
  return function alloc(e, t, n, i) {
    assertSize(t);
    if (t <= 0) {
      return createBuffer(e, t);
    } else if (n !== undefined) {
      if (typeof i == "string") {
        return createBuffer(e, t).fill(n, i);
      } else {
        return createBuffer(e, t).fill(n);
      }
    } else {
      return createBuffer(e, t);
    }
  }(null, e, t, n);
};
Buffer.allocUnsafe = function (e) {
  return allocUnsafe(null, e);
};
Buffer.allocUnsafeSlow = function (e) {
  return allocUnsafe(null, e);
};
Buffer.isBuffer = function isBuffer(e) {
  return e != null && !!e._isBuffer;
};
Buffer.compare = function compare(e, t) {
  if (!Buffer.isBuffer(e) || !Buffer.isBuffer(t)) {
    throw new TypeError("Arguments must be Buffers");
  }
  if (e === t) {
    return 0;
  }
  var n = e.length;
  var i = t.length;
  for (var a = 0, s = Math.min(n, i); a < s; ++a) {
    if (e[a] !== t[a]) {
      n = e[a];
      i = t[a];
      break;
    }
  }
  if (n < i) {
    return -1;
  } else if (i < n) {
    return 1;
  } else {
    return 0;
  }
};
Buffer.isEncoding = function isEncoding(e) {
  switch (String(e).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
Buffer.concat = function concat(e, t) {
  if (!s(e)) {
    throw new TypeError("\"list\" argument must be an Array of Buffers");
  }
  if (e.length === 0) {
    return Buffer.alloc(0);
  }
  var n;
  if (t === undefined) {
    t = 0;
    n = 0;
    for (; n < e.length; ++n) {
      t += e[n].length;
    }
  }
  var i = Buffer.allocUnsafe(t);
  var a = 0;
  for (n = 0; n < e.length; ++n) {
    var r = e[n];
    if (!Buffer.isBuffer(r)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    r.copy(i, a);
    a += r.length;
  }
  return i;
};
Buffer.byteLength = byteLength;
Buffer.prototype._isBuffer = true;
Buffer.prototype.swap16 = function swap16() {
  var e = this.length;
  if (e % 2 != 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (var t = 0; t < e; t += 2) {
    swap(this, t, t + 1);
  }
  return this;
};
Buffer.prototype.swap32 = function swap32() {
  var e = this.length;
  if (e % 4 != 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var t = 0; t < e; t += 4) {
    swap(this, t, t + 3);
    swap(this, t + 1, t + 2);
  }
  return this;
};
Buffer.prototype.swap64 = function swap64() {
  var e = this.length;
  if (e % 8 != 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var t = 0; t < e; t += 8) {
    swap(this, t, t + 7);
    swap(this, t + 1, t + 6);
    swap(this, t + 2, t + 5);
    swap(this, t + 3, t + 4);
  }
  return this;
};
Buffer.prototype.toString = function toString() {
  var e = this.length | 0;
  if (e === 0) {
    return "";
  } else if (arguments.length === 0) {
    return utf8Slice(this, 0, e);
  } else {
    return function slowToString(e, t, n) {
      var i = false;
      if (t === undefined || t < 0) {
        t = 0;
      }
      if (t > this.length) {
        return "";
      }
      if (n === undefined || n > this.length) {
        n = this.length;
      }
      if (n <= 0) {
        return "";
      }
      if ((n >>>= 0) <= (t >>>= 0)) {
        return "";
      }
      for (e ||= "utf8";;) {
        switch (e) {
          case "hex":
            return hexSlice(this, t, n);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, t, n);
          case "ascii":
            return asciiSlice(this, t, n);
          case "latin1":
          case "binary":
            return latin1Slice(this, t, n);
          case "base64":
            return base64Slice(this, t, n);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, t, n);
          default:
            if (i) {
              throw new TypeError("Unknown encoding: " + e);
            }
            e = (e + "").toLowerCase();
            i = true;
        }
      }
    }.apply(this, arguments);
  }
};
Buffer.prototype.equals = function equals(e) {
  if (!Buffer.isBuffer(e)) {
    throw new TypeError("Argument must be a Buffer");
  }
  return this === e || Buffer.compare(this, e) === 0;
};
Buffer.prototype.inspect = function inspect() {
  var e = "";
  var n = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    e = this.toString("hex", 0, n).match(/.{2}/g).join(" ");
    if (this.length > n) {
      e += " ... ";
    }
  }
  return "<Buffer " + e + ">";
};
Buffer.prototype.compare = function compare(e, t, n, i, a) {
  if (!Buffer.isBuffer(e)) {
    throw new TypeError("Argument must be a Buffer");
  }
  if (t === undefined) {
    t = 0;
  }
  if (n === undefined) {
    n = e ? e.length : 0;
  }
  if (i === undefined) {
    i = 0;
  }
  if (a === undefined) {
    a = this.length;
  }
  if (t < 0 || n > e.length || i < 0 || a > this.length) {
    throw new RangeError("out of range index");
  }
  if (i >= a && t >= n) {
    return 0;
  }
  if (i >= a) {
    return -1;
  }
  if (t >= n) {
    return 1;
  }
  t >>>= 0;
  n >>>= 0;
  i >>>= 0;
  a >>>= 0;
  if (this === e) {
    return 0;
  }
  var s = a - i;
  var r = n - t;
  for (var o = Math.min(s, r), l = this.slice(i, a), u = e.slice(t, n), c = 0; c < o; ++c) {
    if (l[c] !== u[c]) {
      s = l[c];
      r = u[c];
      break;
    }
  }
  if (s < r) {
    return -1;
  } else if (r < s) {
    return 1;
  } else {
    return 0;
  }
};
Buffer.prototype.includes = function includes(e, t, n) {
  return this.indexOf(e, t, n) !== -1;
};
Buffer.prototype.indexOf = function indexOf(e, t, n) {
  return bidirectionalIndexOf(this, e, t, n, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(e, t, n) {
  return bidirectionalIndexOf(this, e, t, n, false);
};
Buffer.prototype.write = function write(e, t, n, i) {
  if (t === undefined) {
    i = "utf8";
    n = this.length;
    t = 0;
  } else if (n === undefined && typeof t == "string") {
    i = t;
    n = this.length;
    t = 0;
  } else {
    if (!isFinite(t)) {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    t |= 0;
    if (isFinite(n)) {
      n |= 0;
      if (i === undefined) {
        i = "utf8";
      }
    } else {
      i = n;
      n = undefined;
    }
  }
  var a = this.length - t;
  if (n === undefined || n > a) {
    n = a;
  }
  if (e.length > 0 && (n < 0 || t < 0) || t > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  i ||= "utf8";
  var s = false;
  for (;;) {
    switch (i) {
      case "hex":
        return hexWrite(this, e, t, n);
      case "utf8":
      case "utf-8":
        return utf8Write(this, e, t, n);
      case "ascii":
        return asciiWrite(this, e, t, n);
      case "latin1":
      case "binary":
        return latin1Write(this, e, t, n);
      case "base64":
        return base64Write(this, e, t, n);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return ucs2Write(this, e, t, n);
      default:
        if (s) {
          throw new TypeError("Unknown encoding: " + i);
        }
        i = ("" + i).toLowerCase();
        s = true;
    }
  }
};
Buffer.prototype.toJSON = function toJSON() {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
var r = 4096;
function asciiSlice(e, t, n) {
  var i = "";
  n = Math.min(e.length, n);
  for (var a = t; a < n; ++a) {
    i += String.fromCharCode(e[a] & 127);
  }
  return i;
}
function latin1Slice(e, t, n) {
  var i = "";
  n = Math.min(e.length, n);
  for (var a = t; a < n; ++a) {
    i += String.fromCharCode(e[a]);
  }
  return i;
}
function hexSlice(e, t, n) {
  var i = e.length;
  if (!t || t < 0) {
    t = 0;
  }
  if (!n || n < 0 || n > i) {
    n = i;
  }
  var a = "";
  for (var s = t; s < n; ++s) {
    a += toHex(e[s]);
  }
  return a;
}
function utf16leSlice(e, t, n) {
  for (var i = e.slice(t, n), a = "", s = 0; s < i.length; s += 2) {
    a += String.fromCharCode(i[s] + i[s + 1] * 256);
  }
  return a;
}
function checkOffset(e, t, n) {
  if (e % 1 != 0 || e < 0) {
    throw new RangeError("offset is not uint");
  }
  if (e + t > n) {
    throw new RangeError("Trying to access beyond buffer length");
  }
}
function checkInt(e, t, n, i, a, s) {
  if (!Buffer.isBuffer(e)) {
    throw new TypeError("\"buffer\" argument must be a Buffer instance");
  }
  if (t > a || t < s) {
    throw new RangeError("\"value\" argument is out of bounds");
  }
  if (n + i > e.length) {
    throw new RangeError("Index out of range");
  }
}
function objectWriteUInt16(e, t, n, i) {
  if (t < 0) {
    t = 65535 + t + 1;
  }
  for (var a = 0, s = Math.min(e.length - n, 2); a < s; ++a) {
    e[n + a] = (t & 255 << (i ? a : 1 - a) * 8) >>> (i ? a : 1 - a) * 8;
  }
}
function objectWriteUInt32(e, t, n, i) {
  if (t < 0) {
    t = 4294967295 + t + 1;
  }
  for (var a = 0, s = Math.min(e.length - n, 4); a < s; ++a) {
    e[n + a] = t >>> (i ? a : 3 - a) * 8 & 255;
  }
}
function checkIEEE754(e, t, n, i, a, s) {
  if (n + i > e.length) {
    throw new RangeError("Index out of range");
  }
  if (n < 0) {
    throw new RangeError("Index out of range");
  }
}
function writeFloat(e, t, n, i, s) {
  if (!s) {
    checkIEEE754(e, 0, n, 4);
  }
  a.write(e, t, n, i, 23, 4);
  return n + 4;
}
function writeDouble(e, t, n, i, s) {
  if (!s) {
    checkIEEE754(e, 0, n, 8);
  }
  a.write(e, t, n, i, 52, 8);
  return n + 8;
}
Buffer.prototype.slice = function slice(e, t) {
  var n;
  var i = this.length;
  e = ~~e;
  t = t === undefined ? i : ~~t;
  if (e < 0) {
    if ((e += i) < 0) {
      e = 0;
    }
  } else if (e > i) {
    e = i;
  }
  if (t < 0) {
    if ((t += i) < 0) {
      t = 0;
    }
  } else if (t > i) {
    t = i;
  }
  if (t < e) {
    t = e;
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    (n = this.subarray(e, t)).__proto__ = Buffer.prototype;
  } else {
    var a = t - e;
    n = new Buffer(a, undefined);
    for (var s = 0; s < a; ++s) {
      n[s] = this[s + e];
    }
  }
  return n;
};
Buffer.prototype.readUIntLE = function readUIntLE(e, t, n) {
  e |= 0;
  t |= 0;
  if (!n) {
    checkOffset(e, t, this.length);
  }
  var i = this[e];
  for (var a = 1, s = 0; ++s < t && (a *= 256);) {
    i += this[e + s] * a;
  }
  return i;
};
Buffer.prototype.readUIntBE = function readUIntBE(e, t, n) {
  e |= 0;
  t |= 0;
  if (!n) {
    checkOffset(e, t, this.length);
  }
  var i = this[e + --t];
  for (var a = 1; t > 0 && (a *= 256);) {
    i += this[e + --t] * a;
  }
  return i;
};
Buffer.prototype.readUInt8 = function readUInt8(e, t) {
  if (!t) {
    checkOffset(e, 1, this.length);
  }
  return this[e];
};
Buffer.prototype.readUInt16LE = function readUInt16LE(e, t) {
  if (!t) {
    checkOffset(e, 2, this.length);
  }
  return this[e] | this[e + 1] << 8;
};
Buffer.prototype.readUInt16BE = function readUInt16BE(e, t) {
  if (!t) {
    checkOffset(e, 2, this.length);
  }
  return this[e] << 8 | this[e + 1];
};
Buffer.prototype.readUInt32LE = function readUInt32LE(e, t) {
  if (!t) {
    checkOffset(e, 4, this.length);
  }
  return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
};
Buffer.prototype.readUInt32BE = function readUInt32BE(e, t) {
  if (!t) {
    checkOffset(e, 4, this.length);
  }
  return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(e, t, n) {
  e |= 0;
  t |= 0;
  if (!n) {
    checkOffset(e, t, this.length);
  }
  var i = this[e];
  for (var a = 1, s = 0; ++s < t && (a *= 256);) {
    i += this[e + s] * a;
  }
  if (i >= (a *= 128)) {
    i -= Math.pow(2, t * 8);
  }
  return i;
};
Buffer.prototype.readIntBE = function readIntBE(e, t, n) {
  e |= 0;
  t |= 0;
  if (!n) {
    checkOffset(e, t, this.length);
  }
  for (var i = t, a = 1, s = this[e + --i]; i > 0 && (a *= 256);) {
    s += this[e + --i] * a;
  }
  if (s >= (a *= 128)) {
    s -= Math.pow(2, t * 8);
  }
  return s;
};
Buffer.prototype.readInt8 = function readInt8(e, t) {
  if (!t) {
    checkOffset(e, 1, this.length);
  }
  if (this[e] & 128) {
    return (255 - this[e] + 1) * -1;
  } else {
    return this[e];
  }
};
Buffer.prototype.readInt16LE = function readInt16LE(e, t) {
  if (!t) {
    checkOffset(e, 2, this.length);
  }
  var n = this[e] | this[e + 1] << 8;
  if (n & 32768) {
    return n | 4294901760;
  } else {
    return n;
  }
};
Buffer.prototype.readInt16BE = function readInt16BE(e, t) {
  if (!t) {
    checkOffset(e, 2, this.length);
  }
  var n = this[e + 1] | this[e] << 8;
  if (n & 32768) {
    return n | 4294901760;
  } else {
    return n;
  }
};
Buffer.prototype.readInt32LE = function readInt32LE(e, t) {
  if (!t) {
    checkOffset(e, 4, this.length);
  }
  return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(e, t) {
  if (!t) {
    checkOffset(e, 4, this.length);
  }
  return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(e, t) {
  if (!t) {
    checkOffset(e, 4, this.length);
  }
  return a.read(this, e, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(e, t) {
  if (!t) {
    checkOffset(e, 4, this.length);
  }
  return a.read(this, e, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(e, t) {
  if (!t) {
    checkOffset(e, 8, this.length);
  }
  return a.read(this, e, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(e, t) {
  if (!t) {
    checkOffset(e, 8, this.length);
  }
  return a.read(this, e, false, 52, 8);
};
Buffer.prototype.writeUIntLE = function writeUIntLE(e, t, n, i) {
  if (!(e = +e, t |= 0, n |= 0, i)) {
    checkInt(this, e, t, n, Math.pow(2, n * 8) - 1, 0);
  }
  var a = 1;
  var s = 0;
  for (this[t] = e & 255; ++s < n && (a *= 256);) {
    this[t + s] = e / a & 255;
  }
  return t + n;
};
Buffer.prototype.writeUIntBE = function writeUIntBE(e, t, n, i) {
  if (!(e = +e, t |= 0, n |= 0, i)) {
    checkInt(this, e, t, n, Math.pow(2, n * 8) - 1, 0);
  }
  var a = n - 1;
  var s = 1;
  for (this[t + a] = e & 255; --a >= 0 && (s *= 256);) {
    this[t + a] = e / s & 255;
  }
  return t + n;
};
Buffer.prototype.writeUInt8 = function writeUInt8(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 1, 255, 0);
  }
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    e = Math.floor(e);
  }
  this[t] = e & 255;
  return t + 1;
};
Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 2, 65535, 0);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[t] = e & 255;
    this[t + 1] = e >>> 8;
  } else {
    objectWriteUInt16(this, e, t, true);
  }
  return t + 2;
};
Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 2, 65535, 0);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[t] = e >>> 8;
    this[t + 1] = e & 255;
  } else {
    objectWriteUInt16(this, e, t, false);
  }
  return t + 2;
};
Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 4, 4294967295, 0);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[t + 3] = e >>> 24;
    this[t + 2] = e >>> 16;
    this[t + 1] = e >>> 8;
    this[t] = e & 255;
  } else {
    objectWriteUInt32(this, e, t, true);
  }
  return t + 4;
};
Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 4, 4294967295, 0);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[t] = e >>> 24;
    this[t + 1] = e >>> 16;
    this[t + 2] = e >>> 8;
    this[t + 3] = e & 255;
  } else {
    objectWriteUInt32(this, e, t, false);
  }
  return t + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(e, t, n, i) {
  e = +e;
  t |= 0;
  if (!i) {
    var a = Math.pow(2, n * 8 - 1);
    checkInt(this, e, t, n, a - 1, -a);
  }
  var s = 0;
  var r = 1;
  var o = 0;
  for (this[t] = e & 255; ++s < n && (r *= 256);) {
    if (e < 0 && o === 0 && this[t + s - 1] !== 0) {
      o = 1;
    }
    this[t + s] = (e / r >> 0) - o & 255;
  }
  return t + n;
};
Buffer.prototype.writeIntBE = function writeIntBE(e, t, n, i) {
  e = +e;
  t |= 0;
  if (!i) {
    var a = Math.pow(2, n * 8 - 1);
    checkInt(this, e, t, n, a - 1, -a);
  }
  var s = n - 1;
  var r = 1;
  var o = 0;
  for (this[t + s] = e & 255; --s >= 0 && (r *= 256);) {
    if (e < 0 && o === 0 && this[t + s + 1] !== 0) {
      o = 1;
    }
    this[t + s] = (e / r >> 0) - o & 255;
  }
  return t + n;
};
Buffer.prototype.writeInt8 = function writeInt8(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 1, 127, -128);
  }
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    e = Math.floor(e);
  }
  if (e < 0) {
    e = 255 + e + 1;
  }
  this[t] = e & 255;
  return t + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 2, 32767, -32768);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[t] = e & 255;
    this[t + 1] = e >>> 8;
  } else {
    objectWriteUInt16(this, e, t, true);
  }
  return t + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 2, 32767, -32768);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[t] = e >>> 8;
    this[t + 1] = e & 255;
  } else {
    objectWriteUInt16(this, e, t, false);
  }
  return t + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 4, 2147483647, -2147483648);
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[t] = e & 255;
    this[t + 1] = e >>> 8;
    this[t + 2] = e >>> 16;
    this[t + 3] = e >>> 24;
  } else {
    objectWriteUInt32(this, e, t, true);
  }
  return t + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(e, t, n) {
  e = +e;
  t |= 0;
  if (!n) {
    checkInt(this, e, t, 4, 2147483647, -2147483648);
  }
  if (e < 0) {
    e = 4294967295 + e + 1;
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[t] = e >>> 24;
    this[t + 1] = e >>> 16;
    this[t + 2] = e >>> 8;
    this[t + 3] = e & 255;
  } else {
    objectWriteUInt32(this, e, t, false);
  }
  return t + 4;
};
Buffer.prototype.writeFloatLE = function writeFloatLE(e, t, n) {
  return writeFloat(this, e, t, true, n);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(e, t, n) {
  return writeFloat(this, e, t, false, n);
};
Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, t, n) {
  return writeDouble(this, e, t, true, n);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, t, n) {
  return writeDouble(this, e, t, false, n);
};
Buffer.prototype.copy = function copy(e, t, n, i) {
  n ||= 0;
  if (!i && i !== 0) {
    i = this.length;
  }
  if (t >= e.length) {
    t = e.length;
  }
  t ||= 0;
  if (i > 0 && i < n) {
    i = n;
  }
  if (i === n) {
    return 0;
  }
  if (e.length === 0 || this.length === 0) {
    return 0;
  }
  if (t < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (n < 0 || n >= this.length) {
    throw new RangeError("sourceStart out of bounds");
  }
  if (i < 0) {
    throw new RangeError("sourceEnd out of bounds");
  }
  if (i > this.length) {
    i = this.length;
  }
  if (e.length - t < i - n) {
    i = e.length - t + n;
  }
  var a;
  var s = i - n;
  if (this === e && n < t && t < i) {
    for (a = s - 1; a >= 0; --a) {
      e[a + t] = this[a + n];
    }
  } else if (s < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    for (a = 0; a < s; ++a) {
      e[a + t] = this[a + n];
    }
  } else {
    Uint8Array.prototype.set.call(e, this.subarray(n, n + s), t);
  }
  return s;
};
Buffer.prototype.fill = function fill(e, t, n, i) {
  if (typeof e == "string") {
    if (typeof t == "string") {
      i = t;
      t = 0;
      n = this.length;
    } else if (typeof n == "string") {
      i = n;
      n = this.length;
    }
    if (e.length === 1) {
      var a = e.charCodeAt(0);
      if (a < 256) {
        e = a;
      }
    }
    if (i !== undefined && typeof i != "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof i == "string" && !Buffer.isEncoding(i)) {
      throw new TypeError("Unknown encoding: " + i);
    }
  } else if (typeof e == "number") {
    e &= 255;
  }
  if (t < 0 || this.length < t || this.length < n) {
    throw new RangeError("Out of range index");
  }
  if (n <= t) {
    return this;
  }
  var s;
  t >>>= 0;
  n = n === undefined ? this.length : n >>> 0;
  e ||= 0;
  if (typeof e == "number") {
    for (s = t; s < n; ++s) {
      this[s] = e;
    }
  } else {
    var r = Buffer.isBuffer(e) ? e : utf8ToBytes(new Buffer(e, i).toString());
    var o = r.length;
    for (s = 0; s < n - t; ++s) {
      this[s + t] = r[s % o];
    }
  }
  return this;
};
var o = /[^+\/0-9A-Za-z-_]/g;
function toHex(e) {
  if (e < 16) {
    return "0" + e.toString(16);
  } else {
    return e.toString(16);
  }
}
function utf8ToBytes(e, t) {
  var n;
  t = t || Infinity;
  for (var i = e.length, a = null, s = [], r = 0; r < i; ++r) {
    if ((n = e.charCodeAt(r)) > 55295 && n < 57344) {
      if (!a) {
        if (n > 56319) {
          if ((t -= 3) > -1) {
            s.push(239, 191, 189);
          }
          continue;
        }
        if (r + 1 === i) {
          if ((t -= 3) > -1) {
            s.push(239, 191, 189);
          }
          continue;
        }
        a = n;
        continue;
      }
      if (n < 56320) {
        if ((t -= 3) > -1) {
          s.push(239, 191, 189);
        }
        a = n;
        continue;
      }
      n = 65536 + (a - 55296 << 10 | n - 56320);
    } else if (a && (t -= 3) > -1) {
      s.push(239, 191, 189);
    }
    a = null;
    if (n < 128) {
      if ((t -= 1) < 0) {
        break;
      }
      s.push(n);
    } else if (n < 2048) {
      if ((t -= 2) < 0) {
        break;
      }
      s.push(n >> 6 | 192, n & 63 | 128);
    } else if (n < 65536) {
      if ((t -= 3) < 0) {
        break;
      }
      s.push(n >> 12 | 224, n >> 6 & 63 | 128, n & 63 | 128);
    } else {
      if (!(n < 1114112)) {
        throw new Error("Invalid code point");
      }
      if ((t -= 4) < 0) {
        break;
      }
      s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, n & 63 | 128);
    }
  }
  return s;
}
function base64ToBytes(e) {
  return i.toByteArray(function base64clean(e) {
    if ((e = function stringtrim(e) {
      if (e.trim) {
        return e.trim();
      } else {
        return e.replace(/^\s+|\s+$/g, "");
      }
    }(e).replace(o, "")).length < 2) {
      return "";
    }
    while (e.length % 4 != 0) {
      e += "=";
    }
    return e;
  }(e));
}
function blitBuffer(e, t, n, i) {
  for (var a = 0; a < i && !(a + n >= t.length) && !(a >= e.length); ++a) {
    t[a + n] = e[a];
  }
  return a;
}