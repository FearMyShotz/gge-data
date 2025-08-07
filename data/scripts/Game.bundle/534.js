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
var d = require("./4.js");
var p = require("./97.js");
var h = require("./33.js");
var g = require("./285.js");
var C = function (e) {
  function WoodcutterBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(WoodcutterBuildingVO, e);
  Object.defineProperty(WoodcutterBuildingVO.prototype, "isBoostableBuilding", {
    get: function () {
      return true;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AResourceProductionBuildingVO.prototype, "isBoostableBuilding").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WoodcutterBuildingVO.prototype, "resourceType", {
    get: function () {
      return _.CollectableEnum.WOOD;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(g.AResourceProductionBuildingVO.prototype, "resourceType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  WoodcutterBuildingVO.prototype.createInfoPanelItems = function (e) {
    var t = d.CastleModel.subscriptionData.isEffectTypeActive(h.EffectTypeEnum.EFFECT_TYPE_WOOD_PRODUCTION_BOOST);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, "basicProduktion", new l.LocalizedNumberVO(a.MathBase.round(this.getBaseProductionValue(), 1)), this.getInfoItemTextColor(p.CastleEffectEnum.WOODPRODUCTION));
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Forest, "utilization", new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.efficiency]));
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Productivity, "productivity", new c.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [Math.round(this.getBaseProductivityFactor() * 100)]), u.ClientConstColor.FONT_DEFAULT_COLOR, false, t);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, {
      t: "xPerHour",
      p: [r.Localize.text("wood")]
    }, new l.LocalizedNumberVO(a.MathBase.round(this.getFinalProductionValue(), 1)), this.getInfoItemTextColor(p.CastleEffectEnum.UNBOOSTEDWOODPRODUCTION), false, t);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new l.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(p.CastleEffectEnum.DECOPOINTS), true);
    }
  };
  WoodcutterBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BoostPerHourWood, "woodproduction", new l.LocalizedNumberVO(this.resourceProductions.getAmountOrDefaultByType(this.resourceType)), u.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return WoodcutterBuildingVO;
}(g.AResourceProductionBuildingVO);
exports.WoodcutterBuildingVO = C;
var _ = require("./12.js");
s.classImplementsInterfaces(C, "IShopVO", "ICostVO", "IInventoryVO");