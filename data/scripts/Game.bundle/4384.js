Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./79.js");
var r = function (e) {
  function AwardrewardEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(AwardrewardEventVO, e);
  Object.defineProperty(AwardrewardEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return AwardrewardEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AwardrewardEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "building_EGAevent_camp";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AwardrewardEventVO.prototype, "isActive", {
    get: function () {
      return Object.getOwnPropertyDescriptor(s.ASpecialEventVO.prototype, "isActive").get.call(this) && !o.EnvGlobalsHandler.globals.loginIsKeyBased;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASpecialEventVO.prototype, "isActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AwardrewardEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, l.CastleAwardVotingEventDialog);
  };
  AwardrewardEventVO.__initialize_static_members = function () {
    AwardrewardEventVO.EVENT_BUILDING_WOD = 222;
  };
  return AwardrewardEventVO;
}(s.ASpecialEventVO);
exports.AwardrewardEventVO = r;
var l = require("./4385.js");
a.classImplementsInterfaces(r, "IEventOverviewable");
r.__initialize_static_members();