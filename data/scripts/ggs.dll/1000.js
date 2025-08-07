module.exports = LongBits;
var i = require("./53.js");
function LongBits(e, t) {
  this.lo = e >>> 0;
  this.hi = t >>> 0;
}
var a = LongBits.zero = new LongBits(0, 0);
a.toNumber = function () {
  return 0;
};
a.zzEncode = a.zzDecode = function () {
  return this;
};
a.length = function () {
  return 1;
};
var s = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
LongBits.fromNumber = function fromNumber(e) {
  if (e === 0) {
    return a;
  }
  var t = e < 0;
  if (t) {
    e = -e;
  }
  var n = e >>> 0;
  var i = (e - n) / 4294967296 >>> 0;
  if (t) {
    i = ~i >>> 0;
    n = ~n >>> 0;
    if (++n > 4294967295) {
      n = 0;
      if (++i > 4294967295) {
        i = 0;
      }
    }
  }
  return new LongBits(n, i);
};
LongBits.from = function from(e) {
  if (typeof e == "number") {
    return LongBits.fromNumber(e);
  }
  if (i.isString(e)) {
    if (!i.Long) {
      return LongBits.fromNumber(parseInt(e, 10));
    }
    e = i.Long.fromString(e);
  }
  if (e.low || e.high) {
    return new LongBits(e.low >>> 0, e.high >>> 0);
  } else {
    return a;
  }
};
LongBits.prototype.toNumber = function toNumber(e) {
  if (!e && this.hi >>> 31) {
    var t = 1 + ~this.lo >>> 0;
    var n = ~this.hi >>> 0;
    if (!t) {
      n = n + 1 >>> 0;
    }
    return -(t + n * 4294967296);
  }
  return this.lo + this.hi * 4294967296;
};
LongBits.prototype.toLong = function toLong(e) {
  if (i.Long) {
    return new i.Long(this.lo | 0, this.hi | 0, Boolean(e));
  } else {
    return {
      low: this.lo | 0,
      high: this.hi | 0,
      unsigned: Boolean(e)
    };
  }
};
var r = String.prototype.charCodeAt;
LongBits.fromHash = function fromHash(e) {
  if (e === s) {
    return a;
  } else {
    return new LongBits((r.call(e, 0) | r.call(e, 1) << 8 | r.call(e, 2) << 16 | r.call(e, 3) << 24) >>> 0, (r.call(e, 4) | r.call(e, 5) << 8 | r.call(e, 6) << 16 | r.call(e, 7) << 24) >>> 0);
  }
};
LongBits.prototype.toHash = function toHash() {
  return String.fromCharCode(this.lo & 255, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, this.hi & 255, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
};
LongBits.prototype.zzEncode = function zzEncode() {
  var e = this.hi >> 31;
  this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0;
  this.lo = (this.lo << 1 ^ e) >>> 0;
  return this;
};
LongBits.prototype.zzDecode = function zzDecode() {
  var e = -(this.lo & 1);
  this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0;
  this.hi = (this.hi >>> 1 ^ e) >>> 0;
  return this;
};
LongBits.prototype.length = function length() {
  var e = this.lo;
  var t = (this.lo >>> 28 | this.hi << 4) >>> 0;
  var n = this.hi >>> 24;
  if (n === 0) {
    if (t === 0) {
      if (e < 16384) {
        if (e < 128) {
          return 1;
        } else {
          return 2;
        }
      } else if (e < 2097152) {
        return 3;
      } else {
        return 4;
      }
    } else if (t < 16384) {
      if (t < 128) {
        return 5;
      } else {
        return 6;
      }
    } else if (t < 2097152) {
      return 7;
    } else {
      return 8;
    }
  } else if (n < 128) {
    return 9;
  } else {
    return 10;
  }
};