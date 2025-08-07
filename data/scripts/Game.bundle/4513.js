Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4514.js");
var s = require("./79.js");
var r = function (e) {
  function ResearchExpertEventVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(ResearchExpertEventVO, e);
  Object.defineProperty(ResearchExpertEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ResearchExpertEventVO.EVENT_BUILDING_WOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchExpertEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_ResearchExpert";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  ResearchExpertEventVO.prototype.openDialog = function (e = true) {
    this.executeOpenDialog(e, l.CastleResearchExpertEventDialog, new a.CastleResearchExpertEventDialogProperties(this));
  };
  ResearchExpertEventVO.__initialize_static_members = function () {
    ResearchExpertEventVO.EVENT_BUILDING_WOD = 299;
  };
  return ResearchExpertEventVO;
}(s.ASpecialEventVO);
exports.ResearchExpertEventVO = r;
var l = require("./4515.js");
o.classImplementsInterfaces(r, "IEventOverviewable");
r.__initialize_static_members();