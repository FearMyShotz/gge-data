Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./22.js");
var l = require("./85.js");
var c = require("./16.js");
var u = require("./3.js");
var d = function (e) {
  function BarrelWorkshopBuildingVO() {
    var t = this;
    t.meadBoost = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BarrelWorkshopBuildingVO, e);
  BarrelWorkshopBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this.meadBoost = s.int(r.CastleXMLUtils.getIntAttribute("Meadboost", t));
  };
  BarrelWorkshopBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MeadBoost, "meadbooster", new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.meadBoost]));
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrder", new l.CastleLocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  BarrelWorkshopBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_MeadBoost, "meadbooster", new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.meadBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrder", new l.CastleLocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return BarrelWorkshopBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.BarrelWorkshopBuildingVO = d;
a.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");