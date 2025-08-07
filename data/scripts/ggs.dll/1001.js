module.exports = BufferWriter;
var i = require("./202.js");
(BufferWriter.prototype = Object.create(i.prototype)).constructor = BufferWriter;
var a = require("./53.js");
var s = a.Buffer;
function BufferWriter() {
  i.call(this);
}
BufferWriter.alloc = function alloc_buffer(e) {
  return (BufferWriter.alloc = a._Buffer_allocUnsafe)(e);
};
var r = s && s.prototype instanceof Uint8Array && s.prototype.set.name === "set" ? function writeBytesBuffer_set(e, t, n) {
  t.set(e, n);
} : function writeBytesBuffer_copy(e, t, n) {
  if (e.copy) {
    e.copy(t, n, 0, e.length);
  } else {
    for (var i = 0; i < e.length;) {
      t[n++] = e[i++];
    }
  }
};
function writeStringBuffer(e, t, n) {
  if (e.length < 40) {
    a.utf8.write(e, t, n);
  } else {
    t.utf8Write(e, n);
  }
}
BufferWriter.prototype.bytes = function write_bytes_buffer(e) {
  if (a.isString(e)) {
    e = a._Buffer_from(e, "base64");
  }
  var t = e.length >>> 0;
  this.uint32(t);
  if (t) {
    this._push(r, t, e);
  }
  return this;
};
BufferWriter.prototype.string = function write_string_buffer(e) {
  var t = s.byteLength(e);
  this.uint32(t);
  if (t) {
    this._push(writeStringBuffer, t, e);
  }
  return this;
};