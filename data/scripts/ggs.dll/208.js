module.exports = Message;
var i = require("./53.js");
function Message(e) {
  if (e) {
    for (var t = Object.keys(e), n = 0; n < t.length; ++n) {
      this[t[n]] = e[t[n]];
    }
  }
}
Message.create = function create(e) {
  return this.$type.create(e);
};
Message.encode = function encode(e, t) {
  return this.$type.encode(e, t);
};
Message.encodeDelimited = function encodeDelimited(e, t) {
  return this.$type.encodeDelimited(e, t);
};
Message.decode = function decode(e) {
  return this.$type.decode(e);
};
Message.decodeDelimited = function decodeDelimited(e) {
  return this.$type.decodeDelimited(e);
};
Message.verify = function verify(e) {
  return this.$type.verify(e);
};
Message.fromObject = function fromObject(e) {
  return this.$type.fromObject(e);
};
Message.toObject = function toObject(e, t) {
  return this.$type.toObject(e, t);
};
Message.prototype.toJSON = function toJSON() {
  return this.$type.toObject(this, i.toJSONOptions);
};