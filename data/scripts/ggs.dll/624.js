Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./62.js");
var a = require("./90.js");
var s = require("./39.js");
var r = require("./252.js");
var o = require("./625.js");
var l = require("./72.js");
var u = require("./91.js");
var c = require("./71.js");
var _ = require("./70.js");
var d = function () {
  function ZoneCapacitiesController() {
    var e = this;
    this.onZoneCapacityLoadingComplete = function (t) {
      e.manager.zoneCapacities = o.ZoneCapacityJSONParser.parse(t);
    };
  }
  ZoneCapacitiesController.prototype.initialize = function () {
    this.service = new a.Service(s.Context.instance.globals.zoneCapacityUrl);
    this.manager = s.Context.instance.get(r.ZoneCapacityManager);
  };
  ZoneCapacitiesController.prototype.dispose = function () {
    if (this.service) {
      this.service.dispose();
      this.service = null;
    }
  };
  ZoneCapacitiesController.prototype.loadZoneCapacityConfig = function (e) {
    return i.__awaiter(this, undefined, undefined, function () {
      var t = this;
      return i.__generator(this, function (n) {
        if (e) {
          e(u.WorldAssignmentTrackingConstants.ZONE_XML_START);
        }
        return [2, this.service.load().then(function (n) {
          if (e) {
            e(u.WorldAssignmentTrackingConstants.ZONE_XML_END);
          }
          t.onZoneCapacityLoadingComplete(n);
        }).catch(function () {
          throw new _.WorldAssignmentError(c.WorldAssignmentErrorCodes.ZONE_CAPACITIES_FAILED_TO_LOAD, "Failed to load zone_capacities.json from " + s.Context.instance.globals.zoneCapacityUrl);
        })];
      });
    });
  };
  ZoneCapacitiesController.prototype.initZoneCapacity = function () {
    return i.__awaiter(this, undefined, undefined, function () {
      var e;
      var t;
      var n;
      var a;
      return i.__generator(this, function (i) {
        e = s.Context.instance.get(l.NetworkInstancesManager);
        t = 0;
        for (; t < e.networkInstances.length; t++) {
          n = e.networkInstances[t];
          a = this.manager.getCapacityForZone(n.zoneId);
          n.remainingRegistrationCapacity = a;
        }
        return [2];
      });
    });
  };
  return ZoneCapacitiesController;
}();
exports.ZoneCapacitiesController = d;