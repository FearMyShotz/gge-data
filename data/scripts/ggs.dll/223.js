Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function StringUtils() {}
  StringUtils.isEmpty = function (e) {
    return e == null || e.length == 0;
  };
  StringUtils.safeRemove = function (e, t) {
    if (StringUtils.isEmpty(e)) {
      return e;
    } else {
      return e.replace(t, "");
    }
  };
  StringUtils.remove = function (e, t) {
    return StringUtils.safeRemove(e, new RegExp(t, "g"));
  };
  StringUtils.removeEnd = function (e, t) {
    if (!StringUtils.isEmpty(e)) {
      t = t.replace(/([\^\$\(\[\]\)\.\?])/g, "\\$1");
    }
    return StringUtils.safeRemove(e, new RegExp(t + "$", ""));
  };
  return StringUtils;
}();
exports.StringUtils = i;