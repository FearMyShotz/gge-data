var i = require("./75.js").codes.ERR_INVALID_OPT_VALUE;
module.exports = {
  getHighWaterMark: function getHighWaterMark(e, t, n, a) {
    var s = function highWaterMarkFrom(e, t, n) {
      return e.highWaterMark ?? (t ? e[n] : null);
    }(t, a, n);
    if (s != null) {
      if (!isFinite(s) || Math.floor(s) !== s || s < 0) {
        throw new i(a ? n : "highWaterMark", s);
      }
      return Math.floor(s);
    }
    if (e.objectMode) {
      return 16;
    } else {
      return 16384;
    }
  }
};