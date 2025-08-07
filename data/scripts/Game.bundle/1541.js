Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./16.js");
var l = require("./33.js");
var c = function (e) {
  function WatchtowerBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(WatchtowerBuildingVO, e);
  WatchtowerBuildingVO.prototype.createInfoPanelItems = function (e) {
    for (var t = 0, i = this.allShowableBuildingEffects; t < i.length; t++) {
      var n = i[t];
      if (n.effect.effectType.id == l.EffectTypeEnum.EFFECT_TYPE_SIGHT_RADIUS_BONUS.id) {
        e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_google, "viewRadiusExpansion", new s.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE_ADD, [n.strength]), r.ClientConstColor.FONT_DEFAULT_COLOR, true);
      }
    }
  };
  return WatchtowerBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.WatchtowerBuildingVO = c;
a.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");