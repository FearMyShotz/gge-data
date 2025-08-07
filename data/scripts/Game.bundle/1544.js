Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./33.js");
var u = function (e) {
  function HouseoffireBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(HouseoffireBuildingVO, e);
  HouseoffireBuildingVO.prototype.createInfoPanelItems = function (e) {
    for (var t = 0, i = this.allShowableBuildingEffects; t < i.length; t++) {
      var n = i[t];
      if (n.effect.effectType.id == c.EffectTypeEnum.EFFECT_TYPE_FIRE_BRIGADE_BOOST.id) {
        e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_FireProtection, "fireBrigadeBoost", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [n.strength]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
      }
    }
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return HouseoffireBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.HouseoffireBuildingVO = u;
a.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");