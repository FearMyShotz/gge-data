var i;
var a;
var s;
/*!
 * CLDR JavaScript Library v0.5.4 2020-10-22T15:56Z MIT license © Rafael Xavier
 * http://git.io/h4lmVg
 */
a = [require("./42.js")];
if ((s = typeof (i = function (e) {
  var t = e._alwaysArray;
  var n = e.prototype.init;
  e.prototype.init = function () {
    var e;
    var i;
    var a;
    n.apply(this, arguments);
    this.supplemental = (e = this, (a = (i = function (n) {
      return function (i) {
        i = t(i);
        return e.get([n].concat(i));
      };
    })("supplemental")).weekData = i("supplemental/weekData"), a.weekData.firstDay = function () {
      return e.get("supplemental/weekData/firstDay/{territory}") || e.get("supplemental/weekData/firstDay/001");
    }, a.weekData.minDays = function () {
      var t = e.get("supplemental/weekData/minDays/{territory}") || e.get("supplemental/weekData/minDays/001");
      return parseInt(t, 10);
    }, a.timeData = i("supplemental/timeData"), a.timeData.allowed = function () {
      return e.get("supplemental/timeData/{territory}/_allowed") || e.get("supplemental/timeData/001/_allowed");
    }, a.timeData.preferred = function () {
      return e.get("supplemental/timeData/{territory}/_preferred") || e.get("supplemental/timeData/001/_preferred");
    }, a);
  };
  return e;
}) == "function" ? i.apply(exports, a) : i) !== undefined) {
  module.exports = s;
}