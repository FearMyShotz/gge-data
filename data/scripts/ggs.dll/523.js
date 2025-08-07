Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.int = function int(e) {
  if (typeof e == "string" && function isHex(e) {
    return /^#[0-9A-F]{6}$/i.test(e);
  }(e)) {
    return parseInt(e.substring(1), 16);
  }
  var t = Number(e);
  if (isNaN(t)) {
    return 0;
  } else {
    return Math.trunc(t);
  }
};