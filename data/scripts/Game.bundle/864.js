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
var d = require("./97.js");
var p = function (e) {
  function ResearchBuildingVO() {
    var t = this;
    t._researchBoost = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ResearchBuildingVO, e);
  ResearchBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._researchBoost = l.int(u.CastleXMLUtils.getIntAttribute("researchBoost", t));
  };
  ResearchBuildingVO.prototype.createInfoPanelItems = function (e) {
    e.addInfoItem(Library.CastleInterfaceElements.Icon_Research, "researchSpeed", new r.LocalizedTextVO(o.GenericTextIds.VALUE_PERCENTAGE, [this.researchBoost + 100]), c.ClientConstColor.FONT_DEFAULT_COLOR, true);
    if (this.decoPoints > 0) {
      e.addInfoItem(Library.CastleInterfaceElements.Icon_LawAndOrder_neutral_Big, "publicOrderNeutral", new s.LocalizedNumberVO(this.decoPoints), this.getInfoItemTextColor(d.CastleEffectEnum.DECOPOINTS));
    }
  };
  Object.defineProperty(ResearchBuildingVO.prototype, "researchBoost", {
    get: function () {
      return this._researchBoost;
    },
    enumerable: true,
    configurable: true
  });
  return ResearchBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.ResearchBuildingVO = p;
a.classImplementsInterfaces(p, "IShopVO", "ICostVO", "IInventoryVO");