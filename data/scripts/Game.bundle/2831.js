Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = function (e) {
  function ButcherShopBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ButcherShopBuildingVO, e);
  Object.defineProperty(ButcherShopBuildingVO.prototype, "resourceType", {
    get: function () {
      return u.CollectableEnum.BEEF;
    },
    enumerable: true,
    configurable: true
  });
  ButcherShopBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    if (this.decoPoints > 0) {
      t.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.mightValue > 0) {
      t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new s.LocalizedNumberVO(this.mightValue), l.ClientConstColor.FONT_DEFAULT_COLOR, false);
    }
    this.allShowableBuildingEffects.forEach(function (e) {
      var i = e.effect.effectType.type.simpleEffectIconClass;
      var n = {
        t: "effect_name_" + e.effect.getEnhancedName(e.effectValue),
        p: e.effectValue.textReplacements
      };
      var o = new r.LocalizedTextVO(e.effect.effectType.type.simpleValueTextID, e.effectValue.textReplacements);
      t.addInfoItem(i, n, o, l.ClientConstColor.FONT_DEFAULT_COLOR, true, false, false);
    });
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_BeefBoost, "beefbooster", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.resourceBoosts.getAmountOrDefaultByType(u.CollectableEnum.BEEF)]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  ButcherShopBuildingVO.prototype.createInfoDialogItems = function (t) {
    e.prototype.createInfoDialogItems.call(this, t);
  };
  return ButcherShopBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.ButcherShopBuildingVO = c;
var u = require("./12.js");
a.classImplementsInterfaces(c, "IShopVO", "ICostVO", "IInventoryVO");