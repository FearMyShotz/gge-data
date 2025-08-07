Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./1891.js");
var l = function (e) {
  function AllianceAlienInvasionEventVO(t = 0) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._eventId = s.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE;
    return i;
  }
  n.__extends(AllianceAlienInvasionEventVO, e);
  Object.defineProperty(AllianceAlienInvasionEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_alienInvasion";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AAlienInvasionEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceAlienInvasionEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AllianceAlienInvasionEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AAlienInvasionEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceAlienInvasionEventVO.prototype.isOwnWmoVO = function (e) {
    return a.instanceOfClass(e, "AlienInvasionMapobjectVO");
  };
  Object.defineProperty(AllianceAlienInvasionEventVO.prototype, "eventDialogProperiesClass", {
    get: function () {
      return c.CastleAllianceAlienInvasionEventDialogProperties;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.AAlienInvasionEventVO.prototype, "eventDialogProperiesClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AllianceAlienInvasionEventVO.__initialize_static_members = function () {
    AllianceAlienInvasionEventVO.EVENT_BUILDING_WOD = 68;
  };
  return AllianceAlienInvasionEventVO;
}(r.AAlienInvasionEventVO);
exports.AllianceAlienInvasionEventVO = l;
var c = require("./4361.js");
o.classImplementsInterfaces(l, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
l.__initialize_static_members();