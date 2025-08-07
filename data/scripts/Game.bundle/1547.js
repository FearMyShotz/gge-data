Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./4.js");
var u = require("./33.js");
var d = function (e) {
  function OakOfWisdomBuildingVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(OakOfWisdomBuildingVO, e);
  OakOfWisdomBuildingVO.prototype.getVisualClassName = function () {
    return "OakOfWisdom_Building";
  };
  OakOfWisdomBuildingVO.prototype.getUpgradeInfoString = function () {
    return "xpBoosterBuilding_upgrade_info";
  };
  OakOfWisdomBuildingVO.prototype.getNameString = function () {
    return "xpBoosterBuilding_name";
  };
  OakOfWisdomBuildingVO.prototype.getShortInfoString = function () {
    return "xpBoosterBuilding_short_info";
  };
  Object.defineProperty(OakOfWisdomBuildingVO, "xpBoosterIconClass", {
    get: function () {
      if (c.CastleModel.userData.isLegend) {
        return Library.CastleInterfaceElements_Icons.Icon_OakOfWisdom_Legend;
      } else {
        return Library.CastleInterfaceElements_Icons.Icon_OakOfWisdom;
      }
    },
    enumerable: true,
    configurable: true
  });
  OakOfWisdomBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    for (var t = 0, i = this.allShowableBuildingEffects; t < i.length; t++) {
      var n = i[t];
      if (n.effect.effectType.id == u.EffectTypeEnum.EFFECT_TYPE_XP_BONUS.id) {
        e.addInfoItem(OakOfWisdomBuildingVO.xpBoosterIconClass, "xpBoosterBuilding_info_xp", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [n.strength]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
      }
    }
  };
  return OakOfWisdomBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.OakOfWisdomBuildingVO = d;
a.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");