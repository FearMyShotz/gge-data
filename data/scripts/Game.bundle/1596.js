Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./531.js");
var s = require("./4.js");
var r = function (e) {
  function ResearchBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ResearchBuildingVE, e);
  ResearchBuildingVE.prototype.addEventListener = function () {
    s.CastleModel.researchData.addEventListener(a.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchDataUpdate));
    e.prototype.addEventListener.call(this);
  };
  ResearchBuildingVE.prototype.removeEventListener = function () {
    s.CastleModel.researchData.removeEventListener(a.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchDataUpdate));
    e.prototype.removeEventListener.call(this);
  };
  ResearchBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (this.buildingVO.buildingState.isFunctionally && !this.statusIcons.isUpgradeIconActive) {
      this.statusIcons.addIcon(s.CastleModel.researchData.isSomeResearchActive ? c.IsoStatusIconEnum.PRODUCTIVE : c.IsoStatusIconEnum.UNPRODUCTIVE);
    }
  };
  ResearchBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new l.RingMenuButtonResearch());
    return t;
  };
  ResearchBuildingVE.prototype.onResearchDataUpdate = function (e) {
    this.updateStatusIcon();
  };
  return ResearchBuildingVE;
}(require("./62.js").ABasicBuildingVE);
exports.ResearchBuildingVE = r;
var l = require("./3104.js");
var c = require("./177.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");