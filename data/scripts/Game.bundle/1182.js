Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./16.js");
var u = require("./22.js");
var d = function (e) {
  function UniversityBuildingVO() {
    var t = this;
    t._researchBoost = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(UniversityBuildingVO, e);
  UniversityBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._researchBoost = l.int(u.CastleXMLUtils.getIntAttribute("researchBoost", t));
  };
  UniversityBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ResearchTimeBoost, "researchbooster", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.researchBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  UniversityBuildingVO.prototype.createInfoDialogItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_ResearchTimeBoost, "researchbooster", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.researchBoost]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(UniversityBuildingVO.prototype, "researchBoost", {
    get: function () {
      return this._researchBoost;
    },
    enumerable: true,
    configurable: true
  });
  return UniversityBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.UniversityBuildingVO = d;
a.classImplementsInterfaces(d, "IShopVO", "ICostVO", "IInventoryVO");