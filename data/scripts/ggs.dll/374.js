Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./36.js");
var s = require("./4.js");
var r = function (e) {
  function BasicInitZoneCapacityCommand() {
    return e !== null && e.apply(this, arguments) || this;
  }
  i.__extends(BasicInitZoneCapacityCommand, e);
  BasicInitZoneCapacityCommand.prototype.execute = function (e = null) {
    var t = e.zoneCapacity;
    var n = s.BasicModel.instanceProxy.instanceMap;
    for (var i = n.length, a = 0; a < i; a++) {
      var r = n[a];
      r.remainingRegistrationCapacity = this._getCapacityForZone(r.zoneId, t.zones);
    }
  };
  BasicInitZoneCapacityCommand.prototype._getCapacityForZone = function (e, t) {
    var n = -1;
    for (var i = t.length, a = 0; a < i; a++) {
      var s = t[a];
      if (s.zoneId == e) {
        n = s.remainingRegistrationCapacity;
        break;
      }
    }
    return n;
  };
  return BasicInitZoneCapacityCommand;
}(a.BasicClientCommand);
exports.BasicInitZoneCapacityCommand = r;