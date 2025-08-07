Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./18.js");
var r = require("./4412.js");
var l = require("./4.js");
var c = require("./79.js");
var u = function (e) {
  function ConstructionExpertEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(ConstructionExpertEventVO, e);
  Object.defineProperty(ConstructionExpertEventVO.prototype, "buildingList", {
    get: function () {
      var e = [];
      for (var t = 0, i = Array.from(l.CastleModel.wodData.voSubList(p.CastleWodData.TYPE_BUILDING).values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && (n.group == s.ClientConstCastle.GROUP_BUILDING || n.group == s.ClientConstCastle.GROUP_DEFENCE || n.group == s.ClientConstCastle.GROUP_MOAT) && a.instanceOfClass(n, "AEffectBuildingVO")) {
          var o = n;
          var r = l.CastleModel.userData.userLevel >= o.requiredLevel;
          var c = l.CastleModel.userData.userLegendLevel >= o.requiredLegendLevel;
          if (o.needConstructionExpert && r && c) {
            e.push(l.CastleModel.wodData.createVObyWOD(n.wodId, p.CastleWodData.TYPE_BUILDING));
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionExpertEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ConstructionExpertEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionExpertEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_EventArchitekt";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ConstructionExpertEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, d.CastleConstructionExpertEventDialog, new r.CastleConstructionExpertEventDialogProperties(this));
  };
  ConstructionExpertEventVO.__initialize_static_members = function () {
    ConstructionExpertEventVO.EVENT_BUILDING_WOD = 288;
  };
  return ConstructionExpertEventVO;
}(c.ASpecialEventVO);
exports.ConstructionExpertEventVO = u;
var d = require("./4413.js");
var p = require("./56.js");
o.classImplementsInterfaces(u, "IEventOverviewable");
u.__initialize_static_members();