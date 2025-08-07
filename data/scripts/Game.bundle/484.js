Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./71.js");
var r = function (e) {
  function IsoCommandAreaDataUpdated(t, i = true) {
    var n = this;
    n._triggerCallback = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._triggerCallback = i;
    return n;
  }
  n.__extends(IsoCommandAreaDataUpdated, e);
  IsoCommandAreaDataUpdated.prototype.execute = function () {
    a.CastleModel.militaryData.updateMilitaryData();
    if (this.areaData.areaInfo && this.areaData.areaInfo.isOwnMapobject) {
      a.CastleModel.researchData.setResearchBuildingData(this.isoData.objects.provider.getObjectByClass(d.ResearchBuildingVO, c.IsoObjectGroupEnum.INNER_BUILDINGS));
      a.CastleModel.researchData.setResearchBoostBuildingData(this.isoData.objects.provider.getObjectByClass(p.UniversityBuildingVO, c.IsoObjectGroupEnum.INNER_BUILDINGS));
      a.CastleModel.hunterData.setHunterBuildingData(this.isoData.objects.provider.getObjectByClass(u.AHunterBuildingVO, c.IsoObjectGroupEnum.INNER_BUILDINGS));
      a.CastleModel.breweryData.setBreweryBuildingData(this.isoData.objects.provider.getObjectByClass(g.RelicBreweryBuildingVO, c.IsoObjectGroupEnum.INNER_BUILDINGS));
      a.CastleModel.equipData.setRelicEnchanterBuildingData(this.isoData.objects.provider.getObjectByClass(h.RelicEnchanterBuildingVO, c.IsoObjectGroupEnum.INNER_BUILDINGS));
    }
    this.isoData.objects.movements.updateInfos();
    if (this.areaData.commonInfo) {
      this.areaData.commonInfo.updateInfos();
    }
    if (this.triggerCallback) {
      l.CastleComponent.controller.dispatchEvent(new s.AreaDataEvent(s.AreaDataEvent.ON_INFO_VALUES_CHANGED));
    }
  };
  Object.defineProperty(IsoCommandAreaDataUpdated.prototype, "triggerCallback", {
    get: function () {
      return this._triggerCallback;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandAreaDataUpdated;
}(require("./310.js").AIsoCommandModel);
exports.IsoCommandAreaDataUpdated = r;
o.classImplementsInterfaces(r, "ICollectableRendererList");
var l = require("./14.js");
var c = require("./143.js");
var u = require("./412.js");
var d = require("./863.js");
var p = require("./1182.js");
var h = require("./1183.js");
var g = require("./1172.js");