Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./1917.js");
var r = function (e) {
  function PointEventEventVO(t = 0) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this)._eventId = a.EventConst.EVENTTYPE_POINT_EVENT;
    return i;
  }
  n.__extends(PointEventEventVO, e);
  Object.defineProperty(PointEventEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_PointEvent";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.APointEventTypeScoreEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PointEventEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return PointEventEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.APointEventTypeScoreEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  PointEventEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, l.CastlePointEventDialog);
  };
  PointEventEventVO.__initialize_static_members = function () {
    PointEventEventVO.EVENT_BUILDING_WOD = 397;
  };
  return PointEventEventVO;
}(s.APointEventTypeScoreEventVO);
exports.PointEventEventVO = r;
var l = require("./4491.js");
o.classImplementsInterfaces(r, "IEventOverviewable", "IScoreBarVO", "IScoreUpdatable");
r.__initialize_static_members();