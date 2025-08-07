Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./16.js");
var c = require("./22.js");
var u = function (e) {
  function ReinforcedVaultBuildingVO() {
    var t = e !== null && e.apply(this, arguments) || this;
    t._addEquipmentStorageCapacity = 0;
    t._addGemStorageCapacity = 0;
    return t;
  }
  n.__extends(ReinforcedVaultBuildingVO, e);
  ReinforcedVaultBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._addEquipmentStorageCapacity = r.int(c.CastleXMLUtils.getIntAttribute("addEquipmentStorageCapacity", t));
    this._addGemStorageCapacity = r.int(c.CastleXMLUtils.getIntAttribute("addGemStorageCapacity", t));
  };
  ReinforcedVaultBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    if (this.decoPoints > 0) {
      t.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    }
    this.allShowableBuildingEffects.forEach(function (e) {
      var i = e.effect.effectType.type.simpleEffectIconClass;
      var n = {
        t: "effect_name_" + e.effect.getEnhancedName(e.effectValue),
        p: e.effectValue.textReplacements
      };
      var o = new s.LocalizedTextVO(e.effect.effectType.type.simpleValueTextID, e.effectValue.textReplacements);
      t.addInfoItem(i, n, o, l.ClientConstColor.FONT_DEFAULT_COLOR, true, false, false);
    });
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Equipment, "equipmentStorage_capacityBonus_tt", new s.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [this._addEquipmentStorageCapacity]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_GemStorage, "gemStorage_capacityBonus_tt", new s.LocalizedTextVO(o.GenericTextIds.VALUE_NOMINAL_ADD, [this._addGemStorageCapacity]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  ReinforcedVaultBuildingVO.prototype.createInfoDialogItems = function (t) {
    e.prototype.createInfoDialogItems.call(this, t);
    if (this.mightValue > 0) {
      t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_Might, "playerMight", new s.LocalizedNumberVO(this.mightValue), l.ClientConstColor.FONT_DEFAULT_COLOR, false);
    }
  };
  ReinforcedVaultBuildingVO.prototype.parseAreaSpecificEffects = function () {
    e.prototype.parseAreaSpecificEffects.call(this);
  };
  return ReinforcedVaultBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.ReinforcedVaultBuildingVO = u;
a.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");