Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./437.js");
var s = function (e) {
  function FilterOwn() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FilterOwn, e);
  FilterOwn.prototype.filterFunction = function (e, t, i) {
    return !!e.isMyMovement && (o.instanceOfClass(e, "ArmyAttackMapmovementVO") || o.instanceOfClass(e, "ArmyTravelMapMovementVO") || o.instanceOfClass(e, "SiegeMapmovementVO") || o.instanceOfClass(e, "TreasureHuntMovementVO"));
  };
  Object.defineProperty(FilterOwn.prototype, "name", {
    get: function () {
      return FilterOwn.NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AMovementFilterStrategy.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FilterOwn.__initialize_static_members = function () {
    FilterOwn.NAME = "FilterOwn";
  };
  return FilterOwn;
}(a.AMovementFilterStrategy);
exports.FilterOwn = s;
s.__initialize_static_members();