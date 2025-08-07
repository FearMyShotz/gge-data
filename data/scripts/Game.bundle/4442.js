Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./28.js");
var r = require("./30.js");
var l = require("./79.js");
var c = function (e) {
  function FortuneTellerEventVO() {
    var t = this;
    t.tryCount = 0;
    t.dailyResetTimestamp = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(FortuneTellerEventVO, e);
  FortuneTellerEventVO.prototype.parseParamObject = function (t) {
    e.prototype.parseParamObject.call(this, t);
    this.tryCount = a.int(t.FTDC);
    this.dailyResetTimestamp = r.CachedTimer.getCachedTimer() + t.STR * s.ClientConstTime.SEC_2_MILLISEC;
  };
  FortuneTellerEventVO.prototype.secondsTillDailyReset = function () {
    return (this.dailyResetTimestamp - r.CachedTimer.getCachedTimer()) * s.ClientConstTime.MILLISEC_2_SEC;
  };
  Object.defineProperty(FortuneTellerEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FortuneTellerEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FortuneTellerEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_FortuneTeller";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FortuneTellerEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, u.FortuneTellerEventDialog);
  };
  FortuneTellerEventVO.EVENT_BUILDING_WOD = 1921;
  return FortuneTellerEventVO;
}(l.ASpecialEventVO);
exports.FortuneTellerEventVO = c;
o.classImplementsInterfaces(c, "IEventOverviewable");
var u = require("./1907.js");