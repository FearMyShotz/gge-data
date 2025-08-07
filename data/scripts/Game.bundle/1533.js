Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./16.js");
var d = require("./153.js");
var p = require("./285.js");
var h = function (e) {
  function CoalmineBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CoalmineBuildingVO, e);
  Object.defineProperty(CoalmineBuildingVO.prototype, "isInfluencedByLaboratoryInKingdom", {
    get: function () {
      return d.KingdomEnum.ICE;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.AResourceProductionBuildingVO.prototype, "isInfluencedByLaboratoryInKingdom").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CoalmineBuildingVO.prototype, "resourceType", {
    get: function () {
      return g.CollectableEnum.COAL;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(p.AResourceProductionBuildingVO.prototype, "resourceType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CoalmineBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourCoal, "basicProduktion", new l.LocalizedNumberVO(a.MathBase.round(this.getBaseProductionValue(), 1)));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Coal, "utilization", new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourCoal, {
      t: "xPerHour",
      p: [r.Localize.text("coal")]
    }, new l.LocalizedNumberVO(a.MathBase.round(this.getFinalProductionValue(), 1)));
  };
  CoalmineBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourCoal, "coalproduction", new l.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)), u.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return CoalmineBuildingVO;
}(p.AResourceProductionBuildingVO);
exports.CoalmineBuildingVO = h;
var g = require("./12.js");
s.classImplementsInterfaces(h, "IShopVO", "ICostVO", "IInventoryVO");