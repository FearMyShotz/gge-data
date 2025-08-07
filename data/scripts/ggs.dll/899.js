Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function Base64() {
    throw new Error("Base64 class is static container only");
  }
  Base64.encode = function (e) {
    var t = {};
    t.writeUTFBytes(e);
    return Base64.encodeByteArray(t);
  };
  Base64.encodeByteArray = function (e) {
    var t;
    var n = "";
    var i = new Array(4);
    for (e.position = 0; e.bytesAvailable > 0;) {
      t = new Array();
      for (var a = 0; a < 3 && e.bytesAvailable > 0; a++) {
        t[a] = e.readUnsignedByte();
      }
      i[0] = (t[0] & 252) >> 2;
      i[1] = (t[0] & 3) << 4 | t[1] >> 4;
      i[2] = (t[1] & 15) << 2 | t[2] >> 6;
      i[3] = t[2] & 63;
      for (var s = t.length; s < 3; s++) {
        i[s + 1] = 64;
      }
      for (var r = 0; r < i.length; r++) {
        n += Base64.BASE64_CHARS.charAt(i[r]);
      }
    }
    return n;
  };
  Base64.decode = function (e) {
    var t = Base64.decodeToByteArray(e);
    return t.readUTFBytes(t.length);
  };
  Base64.decodeToByteArray = function (e) {
    var t = {};
    var n = new Array(4);
    var i = new Array(3);
    for (var a = 0; a < e.length; a += 4) {
      for (var s = 0; s < 4 && a + s < e.length; s++) {
        n[s] = Base64.BASE64_CHARS.indexOf(e.charAt(a + s));
      }
      i[0] = (n[0] << 2) + ((n[1] & 48) >> 4);
      i[1] = ((n[1] & 15) << 4) + ((n[2] & 60) >> 2);
      i[2] = ((n[2] & 3) << 6) + n[3];
      for (var r = 0; r < i.length && n[r + 1] != 64; r++) {
        t.writeByte(i[r]);
      }
    }
    t.position = 0;
    return t;
  };
  Base64.BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  Base64.version = "1.1.0";
  return Base64;
}();
exports.Base64 = i;