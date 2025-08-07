Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./16.js");
var r = function (e) {
  function DragonBreathForgeBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DragonBreathForgeBuildingVO, e);
  DragonBreathForgeBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    if (this.decoPoints > 0) {
      t.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), s.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    if (this.mightValue > 0) {
      t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new a.LocalizedNumberVO(this.mightValue), s.ClientConstColor.FONT_DEFAULT_COLOR, false);
    }
    this.allShowableBuildingEffects.forEach(function (e) {
      var i = e.effect.effectType.type.simpleEffectIconClass;
      var n = {
        t: "effect_name_" + e.effect.getEnhancedName(e.effectValue),
        p: e.effectValue.textReplacements
      };
      var o = new a.LocalizedTextVO(e.effect.effectType.type.simpleValueTextID, e.effectValue.textReplacements);
      t.addInfoItem(i, n, o, s.ClientConstColor.FONT_DEFAULT_COLOR, true, false, false);
    });
  };
  DragonBreathForgeBuildingVO.prototype.createInfoDialogItems = function (t) {
    e.prototype.createInfoDialogItems.call(this, t);
  };
  DragonBreathForgeBuildingVO.prototype.parseAreaSpecificEffects = function () {
    e.prototype.parseAreaSpecificEffects.call(this);
  };
  return DragonBreathForgeBuildingVO;
}(require("./783.js").ACraftingBuildingVO);
exports.DragonBreathForgeBuildingVO = r;
o.classImplementsInterfaces(r, "IShopVO", "ICostVO", "IInventoryVO");