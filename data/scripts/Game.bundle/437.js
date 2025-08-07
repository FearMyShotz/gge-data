Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function AMovementFilterStrategy() {}
  AMovementFilterStrategy.prototype.getFilteredList = function () {
    var e = [];
    var t = s.CastleModel.armyData.mapMovementsAsVector.filter(this.bindFunction(this.filterFunction));
    t.sort(this.bindFunction(this.compareFunction));
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          e.push(new r.CastleMovementItemVO(o));
        }
      }
    }
    return e;
  };
  AMovementFilterStrategy.prototype.compareFunction = function (e, t) {
    var i = e.getTimeUntilWaitOverInSeconds() - e.getTimeUntilWaitOverInSeconds();
    return i || o.int(e.getTimeUntiMovmentReachTargetInMilliSeconds() - t.getTimeUntiMovmentReachTargetInMilliSeconds());
  };
  AMovementFilterStrategy.prototype.filterFunction = function (e, t, i) {
    throw new a.AbstractMethodError();
  };
  Object.defineProperty(AMovementFilterStrategy.prototype, "name", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  return AMovementFilterStrategy;
}();
exports.AMovementFilterStrategy = n;
var o = require("./6.js");
var a = require("./69.js");
var s = require("./4.js");
var r = require("./2345.js");