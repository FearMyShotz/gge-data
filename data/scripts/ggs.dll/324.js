Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./80.js");
var a = function () {
  function DurationFormatUtils() {}
  DurationFormatUtils.placeholderReplacementsFrom = function (e) {
    for (var t, n = {}, i = /\{(.*?)\}/g; (t = i.exec(e)) !== null;) {
      n[t[1]] = t[0];
    }
    return n;
  };
  Object.defineProperty(DurationFormatUtils, "placeholderRegex", {
    get: function () {
      return DurationFormatUtils.REGEXP_PLACEHOLDER;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DurationFormatUtils, "timeTypeNames", {
    get: function () {
      return DurationFormatUtils.TIMETYPE_NAMES;
    },
    enumerable: true,
    configurable: true
  });
  DurationFormatUtils.forAllPlaceholders = function (e, t) {
    for (var n, i = {}; n = DurationFormatUtils.placeholderRegex.exec(e);) {
      var a = n[1];
      var s = n[2] || "";
      i[n[0]] = t(a, s, n, e);
    }
    return i;
  };
  DurationFormatUtils.replacePlaceholders = function (e, t) {
    var n = DurationFormatUtils.forAllPlaceholders(e, t);
    var i = e;
    for (var a in n) {
      i = i.replace(a, n[a]);
    }
    return i;
  };
  DurationFormatUtils.TIMETYPE_NAMES = i.TimeType.values.map(function (e) {
    return e.name;
  });
  DurationFormatUtils.REGEXP_PLACEHOLDER = /{(\w+)(?::(.*?))?}/g;
  return DurationFormatUtils;
}();
exports.DurationFormatUtils = a;