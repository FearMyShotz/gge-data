Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./437.js");
var r = function (e) {
  function FilterAllianceIncoming() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FilterAllianceIncoming, e);
  FilterAllianceIncoming.prototype.filterFunction = function (e, t, i) {
    return !!a.CastleModel.userData.isInAlliance && !!e.targetOwnerInfo && e.targetOwnerInfo.allianceID == a.CastleModel.userData.allianceID && !e.isMyMovement && (o.instanceOfClass(e, "SiegeMapmovementVO") && e.targetOwnerInfo.playerID != a.CastleModel.userData.playerID || o.instanceOfClass(e, "ArmyAttackMapmovementVO") && !e.isAttackingMovement);
  };
  Object.defineProperty(FilterAllianceIncoming.prototype, "name", {
    get: function () {
      return FilterAllianceIncoming.NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMovementFilterStrategy.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FilterAllianceIncoming.__initialize_static_members = function () {
    FilterAllianceIncoming.NAME = "FilterAllianceIncoming";
  };
  return FilterAllianceIncoming;
}(s.AMovementFilterStrategy);
exports.FilterAllianceIncoming = r;
r.__initialize_static_members();