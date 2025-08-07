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
  function GloryMemorialBuildingVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(GloryMemorialBuildingVO, e);
  GloryMemorialBuildingVO.prototype.getVisualClassName = function () {
    return "GloryMemorial_Building_Level1";
  };
  GloryMemorialBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    for (var t = 0, i = this.allShowableBuildingEffects; t < i.length; t++) {
      var n = i[t];
      if (n.effect.effectType.id == c.EffectTypeEnum.EFFECT_TYPE_FAME_BOOST.id) {
        e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GloryBooster, "gloryMemorial_info_glory", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [n.strength]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
      }
    }
  };
  return GloryMemorialBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.GloryMemorialBuildingVO = u;
a.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");