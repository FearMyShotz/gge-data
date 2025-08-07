Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4442.js");
var r = require("./79.js");
var l = function (e) {
  function FameboosterEventVO() {
    var t = this;
    t._bonusPercentage = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._bonusPercentage = 0;
    return t;
  }
  n.__extends(FameboosterEventVO, e);
  FameboosterEventVO.prototype.parseParamObject = function (e) {
    this._bonusPercentage = a.int(e.GBP);
  };
  Object.defineProperty(FameboosterEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return FameboosterEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FameboosterEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_fameBoost";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FameboosterEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, c.CastleFameBoosterEventDialog, new s.CastleFameBoosterEventDialogProperties(this));
  };
  Object.defineProperty(FameboosterEventVO.prototype, "bonusPercentage", {
    get: function () {
      return this._bonusPercentage;
    },
    enumerable: true,
    configurable: true
  });
  FameboosterEventVO.__initialize_static_members = function () {
    FameboosterEventVO.EVENT_BUILDING_WOD = 61;
  };
  return FameboosterEventVO;
}(r.ASpecialEventVO);
exports.FameboosterEventVO = l;
var c = require("./1843.js");
o.classImplementsInterfaces(l, "IEventOverviewable");
l.__initialize_static_members();