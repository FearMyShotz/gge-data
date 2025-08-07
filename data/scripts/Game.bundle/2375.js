Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./437.js");
var r = function (e) {
  function FilterAllianceOutgoing() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FilterAllianceOutgoing, e);
  FilterAllianceOutgoing.prototype.filterFunction = function (e, t, i) {
    return !!a.CastleModel.userData.isInAlliance && !!e.sourceOwnerInfo && e.sourceOwnerInfo.allianceID == a.CastleModel.userData.allianceID && !e.isMyMovement && (o.instanceOfClass(e, "SupportDefenceMapmovementVO") && e.targetOwnerID != a.CastleModel.userData.playerID || o.instanceOfClass(e, "SiegeMapmovementVO") || o.instanceOfClass(e, "ArmyAttackMapmovementVO") && !e.isAttackingMovement);
  };
  Object.defineProperty(FilterAllianceOutgoing.prototype, "name", {
    get: function () {
      return FilterAllianceOutgoing.NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMovementFilterStrategy.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FilterAllianceOutgoing.__initialize_static_members = function () {
    FilterAllianceOutgoing.NAME = "FilterAllianceOutgoing";
  };
  return FilterAllianceOutgoing;
}(s.AMovementFilterStrategy);
exports.FilterAllianceOutgoing = r;
r.__initialize_static_members();