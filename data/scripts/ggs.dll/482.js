Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function StringUtils() {}
  StringUtils.encrypt = function (e) {
    return StringUtils.invertString(e);
  };
  StringUtils.decrypt = function (e) {
    return StringUtils.invertString(e);
  };
  StringUtils.invertString = function (e) {
    var t = [];
    for (var n = 0; n < e.length; n++) {
      t.push(String.fromCharCode(e.charCodeAt(n) ^ 255));
    }
    return t.join("");
  };
  return StringUtils;
}();
exports.StringUtils = i;