Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./1891.js");
var l = function (e) {
  function RedAllianceAlienInvasionEventVO(t = 0) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._eventId = s.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE;
    return i;
  }
  n.__extends(RedAllianceAlienInvasionEventVO, e);
  Object.defineProperty(RedAllianceAlienInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_redAlienInvasion";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AAlienInvasionEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RedAllianceAlienInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return RedAllianceAlienInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AAlienInvasionEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RedAllianceAlienInvasionEventVO.prototype.isOwnWmoVO = function (e) {
    return a.instanceOfClass(e, "RedAlienInvasionMapobjectVO");
  };
  Object.defineProperty(RedAllianceAlienInvasionEventVO.prototype, "eventDialogProperiesClass", {
    get: function () {
      return c.CastleRedAllianceAlienInvasionEventDialogProperties;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AAlienInvasionEventVO.prototype, "eventDialogProperiesClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RedAllianceAlienInvasionEventVO.__initialize_static_members = function () {
    RedAllianceAlienInvasionEventVO.EVENT_BUILDING_WOD = 1506;
  };
  return RedAllianceAlienInvasionEventVO;
}(r.AAlienInvasionEventVO);
exports.RedAllianceAlienInvasionEventVO = l;
var c = require("./4507.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
l.__initialize_static_members();