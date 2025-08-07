Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function TimeUtils() {}
  TimeUtils.getTimezoneOffset = function () {
    var e = new Date(0, 0, 1);
    var t = new Date(0, 6, 1);
    return -Math.max(e.getTimezoneOffset(), t.getTimezoneOffset()) * 60000;
  };
  TimeUtils.getDST = function (e) {
    var t = TimeUtils.getTimezoneOffset();
    return e.getTimezoneOffset() * 60000 - t;
  };
  TimeUtils.unixToHumanTime = function (e) {
    var t = new Date(e * 1000);
    return t.getHours() + ":" + t.getMinutes() + "-" + t.getDate() + "/" + (t.getMonth() + 1);
  };
  return TimeUtils;
}();
exports.TimeUtils = i;