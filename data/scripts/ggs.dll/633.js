Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function GeoIPUtils() {}
  GeoIPUtils.hexStringToBytes = function (e) {
    var t = [];
    for (; e.length >= 2;) {
      t.push(Number("0x" + e.substr(0, 2)));
      e = e.substr(2, e.length - 2);
    }
    return t;
  };
  GeoIPUtils.bytesToAsciiString = function (e) {
    var t = [];
    for (var n = 0; n < e.length; n++) {
      t.push(String.fromCharCode(e[n]));
    }
    return t.join("");
  };
  return GeoIPUtils;
}();
exports.GeoIPUtils = i;