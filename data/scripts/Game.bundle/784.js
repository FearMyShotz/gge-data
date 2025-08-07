Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./16.js");
var c = require("./97.js");
var u = function (e) {
  function DwellingBuildingVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(DwellingBuildingVO, e);
  DwellingBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Population, "population", new s.LocalizedNumberVO(this.population));
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints));
    if (this.getConstructionItemEffectValue(c.CastleEffectEnum.SURVIVEBOOST)) {
      e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_SurviveBoost, "hospital_info_defSurvivors", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.getConstructionItemEffectValue(c.CastleEffectEnum.SURVIVEBOOST)]), this.getInfoItemTextColor(c.CastleEffectEnum.SURVIVEBOOST));
    }
  };
  DwellingBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Population, "population", new s.LocalizedNumberVO(this.population), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return DwellingBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.DwellingBuildingVO = u;
a.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");