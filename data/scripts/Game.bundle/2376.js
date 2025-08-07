Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./437.js");
var r = function (e) {
  function FilterAttack() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(FilterAttack, e);
  FilterAttack.prototype.filterFunction = function (e, t, i) {
    var n = !!e.targetOwnerInfo && e.targetOwnerInfo.playerID == a.CastleModel.userData.playerID;
    return e.isAttackingMovement || o.instanceOfClass(e, "SiegeMapmovementVO") && n;
  };
  Object.defineProperty(FilterAttack.prototype, "name", {
    get: function () {
      return FilterAttack.NAME;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMovementFilterStrategy.prototype, "name").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FilterAttack.__initialize_static_members = function () {
    FilterAttack.NAME = "FilterAttack";
  };
  return FilterAttack;
}(s.AMovementFilterStrategy);
exports.FilterAttack = r;
r.__initialize_static_members();