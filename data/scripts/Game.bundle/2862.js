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
  function HoneyGardensBuildingVO() {
    var t = this;
    t.honeyBoost = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(HoneyGardensBuildingVO, e);
  HoneyGardensBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this.honeyBoost = s.int(r.CastleXMLUtils.getIntAttribute("Honeyboost", t));
  };
  HoneyGardensBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_HoneyBoost, "honeybooster", new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.honeyBoost]));
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrder", new l.CastleLocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  HoneyGardensBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_HoneyBoost, "honeybooster", new u.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.honeyBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrder", new l.CastleLocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  return HoneyGardensBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.HoneyGardensBuildingVO = d;
a.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");