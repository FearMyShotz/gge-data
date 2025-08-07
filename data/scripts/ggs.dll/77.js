Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function TimezoneUtil() {}
  TimezoneUtil.getTrackingTimezone = function () {
    return Math.round(TimezoneUtil.getFlashTimezoneWithoutDST() * -1 / 60) + 13;
  };
  TimezoneUtil.getTrackingTimezoneInUTC = function () {
    return TimezoneUtil.convertFlashTimezoneToUTCTimezone(TimezoneUtil.getFlashTimezoneWithoutDST()) * 10;
  };
  TimezoneUtil.getUTCTimezoneWithoutDST = function () {
    return TimezoneUtil.convertFlashTimezoneToUTCTimezone(TimezoneUtil.getFlashTimezoneWithoutDST());
  };
  TimezoneUtil.getUTCTimezoneWithDST = function () {
    return TimezoneUtil.convertFlashTimezoneToUTCTimezone(TimezoneUtil.getFlashTimezoneWithDST());
  };
  TimezoneUtil.getFlashTimezoneWithoutDST = function () {
    var e = new Date().getFullYear();
    var t = new Date(e, 0, 1);
    var n = new Date(e, 6, 1);
    return Math.max(t.getTimezoneOffset(), n.getTimezoneOffset());
  };
  TimezoneUtil.getFlashTimezoneWithDST = function () {
    return new Date().getTimezoneOffset();
  };
  TimezoneUtil.getDST = function () {
    var e = TimezoneUtil.getFlashTimezoneWithoutDST();
    var t = new Date().getTimezoneOffset() - e;
    return TimezoneUtil.convertFlashTimezoneToUTCTimezone(t);
  };
  TimezoneUtil.hasDST = function () {
    var e = new Date().getFullYear();
    var t = new Date(e, 0, 1);
    var n = new Date(e, 6, 1);
    return t.getTimezoneOffset() !== n.getTimezoneOffset();
  };
  TimezoneUtil.isDSTActive = function () {
    var e = TimezoneUtil.getFlashTimezoneWithoutDST();
    return new Date().getTimezoneOffset() - e !== 0;
  };
  TimezoneUtil.convertFlashTimezoneToUTCTimezone = function (e) {
    return e / 60 * -1;
  };
  TimezoneUtil.convertUTCTimezoneToFlashTimezone = function (e) {
    return e * 60 * -1;
  };
  return TimezoneUtil;
}();
exports.TimezoneUtil = i;