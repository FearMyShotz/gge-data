Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./16.js");
var c = require("./22.js");
var u = function (e) {
  function RelicEnchanterBuildingVO() {
    var t = this;
    t._relicFragmentBoost = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(RelicEnchanterBuildingVO, e);
  RelicEnchanterBuildingVO.prototype.parseXmlNode = function (t) {
    e.prototype.parseXmlNode.call(this, t);
    this._relicFragmentBoost = r.int(c.CastleXMLUtils.getIntAttribute("relicFragmentBoost", t));
  };
  RelicEnchanterBuildingVO.prototype.createInfoPanelItems = function (t) {
    e.prototype.createInfoPanelItems.call(this, t);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_RelicFragment, "relicFragmentBoost_short_info", new s.LocalizedTextVO("value_percentage", [this.relicFragmentBoost]), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
    t.addInfoItem(Library.CastleInterfaceElements_Icons.Icon_LawAndOrder_neutral, "publicOrderNeutral", new a.LocalizedNumberVO(this.decoPoints), l.ClientConstColor.FONT_DEFAULT_COLOR, true);
  };
  Object.defineProperty(RelicEnchanterBuildingVO.prototype, "relicFragmentBoost", {
    get: function () {
      return this._relicFragmentBoost;
    },
    enumerable: true,
    configurable: true
  });
  return RelicEnchanterBuildingVO;
}(require("./65.js").AEffectBuildingVO);
exports.RelicEnchanterBuildingVO = u;
o.classImplementsInterfaces(u, "IShopVO", "ICostVO", "IInventoryVO");