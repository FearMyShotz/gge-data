Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./626.js");
var a = function () {
  function ZoneCapacityJSONParser() {}
  ZoneCapacityJSONParser.parse = function (e) {
    var t;
    var n = [];
    var i = JSON.parse(e);
    if ("zones" in i) {
      for (var a = 0; a < i.zones.length; a++) {
        t = this.parseZone(i.zones[a]);
        n.push(t);
      }
    }
    return n;
  };
  ZoneCapacityJSONParser.parseZone = function (e) {
    var t = new i.ZoneCapacity();
    t.zoneId = "zoneId" in e ? e.zoneId : -1;
    t.remainingRegistrationCapacity = "remainingRegistrationCapacity" in e ? e.remainingRegistrationCapacity : 100;
    return t;
  };
  return ZoneCapacityJSONParser;
}();
exports.ZoneCapacityJSONParser = a;