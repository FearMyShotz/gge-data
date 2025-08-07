Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = function () {
  function ZoneCapacityManager() {}
  ZoneCapacityManager.prototype.getCapacityForZone = function (e) {
    var t = -1;
    for (var n = this.zoneCapacities.length, i = 0; i < n; i++) {
      var a = this.zoneCapacities[i];
      if (a.zoneId === e) {
        t = a.remainingRegistrationCapacity;
        break;
      }
    }
    return t;
  };
  return ZoneCapacityManager;
}();
exports.ZoneCapacityManager = i;