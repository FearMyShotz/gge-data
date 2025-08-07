module.exports = BufferReader;
var i = require("./203.js");
(BufferReader.prototype = Object.create(i.prototype)).constructor = BufferReader;
var a = require("./53.js");
function BufferReader(e) {
  i.call(this, e);
}
if (a.Buffer) {
  BufferReader.prototype._slice = a.Buffer.prototype.slice;
}
BufferReader.prototype.string = function read_string_buffer() {
  var e = this.uint32();
  return this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len));
};