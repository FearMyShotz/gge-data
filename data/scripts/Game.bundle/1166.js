Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleStringHelper() {}
  CastleStringHelper.parseToStringOrEmpty = function (e) {
    var t = "";
    if (e != null) {
      t = e.toString();
    }
    return t;
  };
  CastleStringHelper.isNullOrEmpty = function (e) {
    return e == null || e == "";
  };
  return CastleStringHelper;
}();
exports.CastleStringHelper = n;