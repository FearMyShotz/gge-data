Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./72.js");
var a = require("./5769.js");
var s = require("./22.js");
var r = function (e) {
  function DynamicTopXxmlData(t) {
    var i = e.call(this) || this;
    i._zoneIdsToTopX = new Map();
    i.parseXml(t);
    return i;
  }
  n.__extends(DynamicTopXxmlData, e);
  DynamicTopXxmlData.prototype.parseXml = function (e) {
    var t = e.leaguetypeTopXSizes;
    if (t != null) {
      var i = undefined;
      for (var n = 0, o = t; n < o.length; n++) {
        var r = o[n];
        if (r !== undefined) {
          var l = parseInt(r.zoneID || "");
          var c = parseInt(r.eventID || "");
          var u = parseInt(r.leaguetypeID || "");
          var d = s.CastleXMLUtils.getIntArrayFromString(r.topXValue || [], ",");
          i = new a.DynamicTopXVO(c, u, d);
          if (!this._zoneIdsToTopX.has(l)) {
            this._zoneIdsToTopX.set(l, []);
          }
          this._zoneIdsToTopX.get(l).push(i);
        }
      }
    }
  };
  DynamicTopXxmlData.prototype.getTopX = function (e, t, i) {
    if (!this._zoneIdsToTopX.has(e)) {
      return [];
    }
    var n = this._zoneIdsToTopX.get(e);
    if (n) {
      var o = undefined;
      for (var a = 0; a < n.length; a++) {
        if ((o = n[a]).leagueTypeID == i && o.eventId == t) {
          return o.topX;
        }
      }
    }
    return [];
  };
  return DynamicTopXxmlData;
}(o.CastleEventDispatcher);
exports.DynamicTopXxmlData = r;