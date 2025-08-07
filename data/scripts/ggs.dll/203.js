module.exports = Reader;
var i;
var a = require("./53.js");
var s = a.LongBits;
var r = a.utf8;
function indexOutOfRange(e, t) {
  return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
}
function Reader(e) {
  this.buf = e;
  this.pos = 0;
  this.len = e.length;
}
var o = typeof Uint8Array != "undefined" ? function create_typed_array(e) {
  if (e instanceof Uint8Array || Array.isArray(e)) {
    return new Reader(e);
  }
  throw Error("illegal buffer");
} : function create_array(e) {
  if (Array.isArray(e)) {
    return new Reader(e);
  }
  throw Error("illegal buffer");
};
function readLongVarint() {
  var e = new s(0, 0);
  var t = 0;
  if (!(this.len - this.pos > 4)) {
    for (; t < 3; ++t) {
      if (this.pos >= this.len) {
        throw indexOutOfRange(this);
      }
      e.lo = (e.lo | (this.buf[this.pos] & 127) << t * 7) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return e;
      }
    }
    e.lo = (e.lo | (this.buf[this.pos++] & 127) << t * 7) >>> 0;
    return e;
  }
  for (; t < 4; ++t) {
    e.lo = (e.lo | (this.buf[this.pos] & 127) << t * 7) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return e;
    }
  }
  e.lo = (e.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
  e.hi = (e.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
  if (this.buf[this.pos++] < 128) {
    return e;
  }
  t = 0;
  if (this.len - this.pos > 4) {
    for (; t < 5; ++t) {
      e.hi = (e.hi | (this.buf[this.pos] & 127) << t * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return e;
      }
    }
  } else {
    for (; t < 5; ++t) {
      if (this.pos >= this.len) {
        throw indexOutOfRange(this);
      }
      e.hi = (e.hi | (this.buf[this.pos] & 127) << t * 7 + 3) >>> 0;
      if (this.buf[this.pos++] < 128) {
        return e;
      }
    }
  }
  throw Error("invalid varint encoding");
}
function readFixed32_end(e, t) {
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
}
function readFixed64() {
  if (this.pos + 8 > this.len) {
    throw indexOutOfRange(this, 8);
  }
  return new s(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}
Reader.create = a.Buffer ? function create_buffer_setup(e) {
  return (Reader.create = function create_buffer(e) {
    if (a.Buffer.isBuffer(e)) {
      return new i(e);
    } else {
      return o(e);
    }
  })(e);
} : o;
Reader.prototype._slice = a.Array.prototype.subarray || a.Array.prototype.slice;
Reader.prototype.uint32 = function read_uint32_setup() {
  var e = 4294967295;
  return function read_uint32() {
    e = (this.buf[this.pos] & 127) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return e;
    }
    e = (e | (this.buf[this.pos] & 127) << 7) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return e;
    }
    e = (e | (this.buf[this.pos] & 127) << 14) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return e;
    }
    e = (e | (this.buf[this.pos] & 127) << 21) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return e;
    }
    e = (e | (this.buf[this.pos] & 15) << 28) >>> 0;
    if (this.buf[this.pos++] < 128) {
      return e;
    }
    if ((this.pos += 5) > this.len) {
      this.pos = this.len;
      throw indexOutOfRange(this, 10);
    }
    return e;
  };
}();
Reader.prototype.int32 = function read_int32() {
  return this.uint32() | 0;
};
Reader.prototype.sint32 = function read_sint32() {
  var e = this.uint32();
  return e >>> 1 ^ -(e & 1) | 0;
};
Reader.prototype.bool = function read_bool() {
  return this.uint32() !== 0;
};
Reader.prototype.fixed32 = function read_fixed32() {
  if (this.pos + 4 > this.len) {
    throw indexOutOfRange(this, 4);
  }
  return readFixed32_end(this.buf, this.pos += 4);
};
Reader.prototype.sfixed32 = function read_sfixed32() {
  if (this.pos + 4 > this.len) {
    throw indexOutOfRange(this, 4);
  }
  return readFixed32_end(this.buf, this.pos += 4) | 0;
};
Reader.prototype.float = function read_float() {
  if (this.pos + 4 > this.len) {
    throw indexOutOfRange(this, 4);
  }
  var e = a.float.readFloatLE(this.buf, this.pos);
  this.pos += 4;
  return e;
};
Reader.prototype.double = function read_double() {
  if (this.pos + 8 > this.len) {
    throw indexOutOfRange(this, 4);
  }
  var e = a.float.readDoubleLE(this.buf, this.pos);
  this.pos += 8;
  return e;
};
Reader.prototype.bytes = function read_bytes() {
  var e = this.uint32();
  var t = this.pos;
  var n = this.pos + e;
  if (n > this.len) {
    throw indexOutOfRange(this, e);
  }
  this.pos += e;
  if (Array.isArray(this.buf)) {
    return this.buf.slice(t, n);
  } else if (t === n) {
    return new this.buf.constructor(0);
  } else {
    return this._slice.call(this.buf, t, n);
  }
};
Reader.prototype.string = function read_string() {
  var e = this.bytes();
  return r.read(e, 0, e.length);
};
Reader.prototype.skip = function skip(e) {
  if (typeof e == "number") {
    if (this.pos + e > this.len) {
      throw indexOutOfRange(this, e);
    }
    this.pos += e;
  } else {
    do {
      if (this.pos >= this.len) {
        throw indexOutOfRange(this);
      }
    } while (this.buf[this.pos++] & 128);
  }
  return this;
};
Reader.prototype.skipType = function (e) {
  switch (e) {
    case 0:
      this.skip();
      break;
    case 1:
      this.skip(8);
      break;
    case 2:
      this.skip(this.uint32());
      break;
    case 3:
      while ((e = this.uint32() & 7) != 4) {
        this.skipType(e);
      }
      break;
    case 5:
      this.skip(4);
      break;
    default:
      throw Error("invalid wire type " + e + " at offset " + this.pos);
  }
  return this;
};
Reader._configure = function (e) {
  i = e;
  var t = a.Long ? "toLong" : "toNumber";
  a.merge(Reader.prototype, {
    int64: function read_int64() {
      return readLongVarint.call(this)[t](false);
    },
    uint64: function read_uint64() {
      return readLongVarint.call(this)[t](true);
    },
    sint64: function read_sint64() {
      return readLongVarint.call(this).zzDecode()[t](false);
    },
    fixed64: function read_fixed64() {
      return readFixed64.call(this)[t](true);
    },
    sfixed64: function read_sfixed64() {
      return readFixed64.call(this)[t](false);
    }
  });
};