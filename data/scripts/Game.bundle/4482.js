Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./817.js");
var r = require("./4.js");
var l = require("./79.js");
var c = function (e) {
  function NomadInvasionVendorEventVO() {
    var t = this;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this).buyPackagesEventVO = new d.BuyPackagesEventVO();
    return t;
  }
  n.__extends(NomadInvasionVendorEventVO, e);
  NomadInvasionVendorEventVO.prototype.parseData = function (t, i, n) {
    e.prototype.parseData.call(this, t, i, n);
    this.buyPackagesEventVO.parseData(t, i, n);
  };
  Object.defineProperty(NomadInvasionVendorEventVO.prototype, "eventPackagesVO", {
    get: function () {
      return this.buyPackagesEventVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASpecialEventVO.prototype, "eventPackagesVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadInvasionVendorEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return NomadInvasionVendorEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadInvasionVendorEventVO.prototype, "isVisible", {
    get: function () {
      var e = r.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
      return !e || !e.isActive;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASpecialEventVO.prototype, "isVisible").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NomadInvasionVendorEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_NomadInvasion";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  NomadInvasionVendorEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, u.CastleAllianceNomadInvasionDialog, new s.CastleAllianceNomadInvasionEventDialogProperties(u.CastleAllianceNomadInvasionDialog.TAB_MERCHANT));
  };
  NomadInvasionVendorEventVO.__initialize_static_members = function () {
    NomadInvasionVendorEventVO.EVENT_BUILDING_WOD = 74;
  };
  return NomadInvasionVendorEventVO;
}(l.ASpecialEventVO);
exports.NomadInvasionVendorEventVO = c;
var u = require("./820.js");
var d = require("./184.js");
o.classImplementsInterfaces(c, "IEventOverviewable");
c.__initialize_static_members();