module.exports = Writer;
var i;
var a = require("./53.js");
var s = a.LongBits;
var r = a.base64;
var o = a.utf8;
function Op(e, t, n) {
  this.fn = e;
  this.len = t;
  this.next = undefined;
  this.val = n;
}
function noop() {}
function Writer() {
  this.len = 0;
  this.head = new Op(noop, 0, 0);
  this.tail = this.head;
  this.states = null;
}
function writeByte(e, t, n) {
  t[n] = e & 255;
}
function VarintOp(e, t) {
  this.len = e;
  this.next = undefined;
  this.val = t;
}
function writeVarint64(e, t, n) {
  while (e.hi) {
    t[n++] = e.lo & 127 | 128;
    e.lo = (e.lo >>> 7 | e.hi << 25) >>> 0;
    e.hi >>>= 7;
  }
  while (e.lo > 127) {
    t[n++] = e.lo & 127 | 128;
    e.lo = e.lo >>> 7;
  }
  t[n++] = e.lo;
}
function writeFixed32(e, t, n) {
  t[n] = e & 255;
  t[n + 1] = e >>> 8 & 255;
  t[n + 2] = e >>> 16 & 255;
  t[n + 3] = e >>> 24;
}
Writer.create = a.Buffer ? function create_buffer_setup() {
  return (Writer.create = function create_buffer() {
    return new i();
  })();
} : function create_array() {
  return new Writer();
};
Writer.alloc = function alloc(e) {
  return new a.Array(e);
};
if (a.Array !== Array) {
  Writer.alloc = a.pool(Writer.alloc, a.Array.prototype.subarray);
}
Writer.prototype._push = function push(e, t, n) {
  this.tail = this.tail.next = new Op(e, t, n);
  this.len += t;
  return this;
};
VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = function writeVarint32(e, t, n) {
  while (e > 127) {
    t[n++] = e & 127 | 128;
    e >>>= 7;
  }
  t[n] = e;
};
Writer.prototype.uint32 = function write_uint32(e) {
  this.len += (this.tail = this.tail.next = new VarintOp((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len;
  return this;
};
Writer.prototype.int32 = function write_int32(e) {
  if (e < 0) {
    return this._push(writeVarint64, 10, s.fromNumber(e));
  } else {
    return this.uint32(e);
  }
};
Writer.prototype.sint32 = function write_sint32(e) {
  return this.uint32((e << 1 ^ e >> 31) >>> 0);
};
Writer.prototype.uint64 = function write_uint64(e) {
  var t = s.from(e);
  return this._push(writeVarint64, t.length(), t);
};
Writer.prototype.int64 = Writer.prototype.uint64;
Writer.prototype.sint64 = function write_sint64(e) {
  var t = s.from(e).zzEncode();
  return this._push(writeVarint64, t.length(), t);
};
Writer.prototype.bool = function write_bool(e) {
  return this._push(writeByte, 1, e ? 1 : 0);
};
Writer.prototype.fixed32 = function write_fixed32(e) {
  return this._push(writeFixed32, 4, e >>> 0);
};
Writer.prototype.sfixed32 = Writer.prototype.fixed32;
Writer.prototype.fixed64 = function write_fixed64(e) {
  var t = s.from(e);
  return this._push(writeFixed32, 4, t.lo)._push(writeFixed32, 4, t.hi);
};
Writer.prototype.sfixed64 = Writer.prototype.fixed64;
Writer.prototype.float = function write_float(e) {
  return this._push(a.float.writeFloatLE, 4, e);
};
Writer.prototype.double = function write_double(e) {
  return this._push(a.float.writeDoubleLE, 8, e);
};
var l = a.Array.prototype.set ? function writeBytes_set(e, t, n) {
  t.set(e, n);
} : function writeBytes_for(e, t, n) {
  for (var i = 0; i < e.length; ++i) {
    t[n + i] = e[i];
  }
};
Writer.prototype.bytes = function write_bytes(e) {
  var t = e.length >>> 0;
  if (!t) {
    return this._push(writeByte, 1, 0);
  }
  if (a.isString(e)) {
    var n = Writer.alloc(t = r.length(e));
    r.decode(e, n, 0);
    e = n;
  }
  return this.uint32(t)._push(l, t, e);
};
Writer.prototype.string = function write_string(e) {
  var t = o.length(e);
  if (t) {
    return this.uint32(t)._push(o.write, t, e);
  } else {
    return this._push(writeByte, 1, 0);
  }
};
Writer.prototype.fork = function fork() {
  this.states = new function State(e) {
    this.head = e.head;
    this.tail = e.tail;
    this.len = e.len;
    this.next = e.states;
  }(this);
  this.head = this.tail = new Op(noop, 0, 0);
  this.len = 0;
  return this;
};
Writer.prototype.reset = function reset() {
  if (this.states) {
    this.head = this.states.head;
    this.tail = this.states.tail;
    this.len = this.states.len;
    this.states = this.states.next;
  } else {
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
  }
  return this;
};
Writer.prototype.ldelim = function ldelim() {
  var e = this.head;
  var t = this.tail;
  var n = this.len;
  this.reset().uint32(n);
  if (n) {
    this.tail.next = e.next;
    this.tail = t;
    this.len += n;
  }
  return this;
};
Writer.prototype.finish = function finish() {
  for (var e = this.head.next, t = this.constructor.alloc(this.len), n = 0; e;) {
    e.fn(e.val, t, n);
    n += e.len;
    e = e.next;
  }
  return t;
};
Writer._configure = function (e) {
  i = e;
};