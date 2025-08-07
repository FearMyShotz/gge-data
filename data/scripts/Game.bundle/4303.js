Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastlePrimeDayData(e) {
    this.parseFromXML(e);
  }
  CastlePrimeDayData.prototype.parseFromXML = function (e) {
    var t;
    var i;
    this._primeDayXMLNodes = new Map();
    this._primeDayRewardXMLNodes = new Map();
    for (var n = 0, s = e.primeDays; n < s.length; n++) {
      var r = s[n];
      if (r !== undefined) {
        (t = new a.CastlePrimeDayXMLNode()).parseXML(r);
        this._primeDayXMLNodes.set(t.primeDayID, t);
      }
    }
    for (var l = 0, c = e.paymentrewards; l < c.length; l++) {
      var u = c[l];
      if (u !== undefined) {
        (i = new o.CastlePrimeDayRewardXMLNode()).parseXML(u);
        this._primeDayRewardXMLNodes.set(i.paymentrewardID, i);
      }
    }
  };
  CastlePrimeDayData.prototype.getPrimeDayXMLNodeByID = function (e) {
    return this._primeDayXMLNodes.get(e);
  };
  CastlePrimeDayData.prototype.getPrimeDayRewardXMLNodeByID = function (e) {
    return this._primeDayRewardXMLNodes.get(e);
  };
  return CastlePrimeDayData;
}();
exports.CastlePrimeDayData = n;
var o = require("./4304.js");
var a = require("./4305.js");